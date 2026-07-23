/**
 * Shared lead intake for Houston TX HVAC Repair → TradeDeskPro /api/leads
 * Encodes landing_page, lead_city, lead_source, risk_level into message for inbox tagging.
 */
(function () {
  var API_URL = 'https://www.tradedeskpro.com/api/leads';
  var PROFILE_ID = '63e7470e-fe1e-4367-aae0-56d0d6392d78';
  var CITY_KEY = 'hvac_lead_city';

  function qs(name) {
    try {
      return new URLSearchParams(window.location.search).get(name) || '';
    } catch (e) {
      return '';
    }
  }

  function getLeadCity() {
    var fromQs = qs('lead_city') || qs('city');
    if (fromQs) {
      try {
        sessionStorage.setItem(CITY_KEY, fromQs);
      } catch (e) {}
      return fromQs;
    }
    try {
      return sessionStorage.getItem(CITY_KEY) || '';
    } catch (e) {
      return '';
    }
  }

  function setLeadCity(city) {
    if (!city) return;
    try {
      sessionStorage.setItem(CITY_KEY, city);
    } catch (e) {}
  }

  function buildMessage(parts) {
    var lines = [];
    if (parts.landing_page) lines.push('landing_page=' + parts.landing_page);
    if (parts.lead_city) lines.push('lead_city=' + parts.lead_city);
    if (parts.lead_source) lines.push('lead_source=' + parts.lead_source);
    if (parts.risk_level) lines.push('risk_level=' + parts.risk_level);
    if (parts.area) lines.push('Area: ' + parts.area);
    if (parts.message) lines.push(parts.message);
    return lines.join('\n');
  }

  async function submitLead(payload) {
    var leadCity = payload.lead_city || getLeadCity();
    var landingPage = payload.landing_page || qs('landing_page') || '';
    var leadSource = payload.lead_source || qs('lead_source') || '';
    var riskLevel = payload.risk_level || qs('risk_level') || '';
    var area = payload.area || '';

    var source = payload.source || 'HVAC Lead';
    if (leadSource === 'ac_health_check' || landingPage === 'ac-health-check') {
      source = 'AC Health Check';
    }

    var body = {
      name: payload.name,
      phone: payload.phone || '',
      email: payload.email || '',
      message: buildMessage({
        landing_page: landingPage || (source === 'AC Health Check' ? 'ac-health-check' : 'website'),
        lead_city: leadCity || area || 'Houston',
        lead_source: leadSource || (source === 'AC Health Check' ? 'ac_health_check' : 'contact_form'),
        risk_level: riskLevel,
        area: area,
        message: payload.message || '',
      }),
      source: source,
      profile_id: PROFILE_ID,
    };

    var res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      var errText = await res.text().catch(function () {
        return '';
      });
      throw new Error(errText || 'Lead submit failed');
    }
    return res.json();
  }

  function wireForm(form) {
    if (!form || form.dataset.leadsWired === '1') return;
    form.dataset.leadsWired = '1';
    form.removeAttribute('action');
    form.setAttribute('method', 'post');

    // Prefill hidden tracking fields from URL / session
    var leadCity = getLeadCity();
    var riskLevel = qs('risk_level');
    var leadSource = qs('lead_source');
    var landingPage = qs('landing_page');

    function ensureHidden(name, value) {
      if (!value) return;
      var el = form.querySelector('[name="' + name + '"]');
      if (!el) {
        el = document.createElement('input');
        el.type = 'hidden';
        el.name = name;
        form.appendChild(el);
      }
      el.value = value;
    }

    ensureHidden('lead_city', leadCity);
    ensureHidden('risk_level', riskLevel);
    ensureHidden('lead_source', leadSource);
    ensureHidden('landing_page', landingPage);

    // Prefill area select if present
    var areaSelect = form.querySelector('[name="area"], #area');
    if (areaSelect && leadCity) {
      var opts = Array.prototype.slice.call(areaSelect.options || []);
      var match = opts.find(function (o) {
        return o.value === leadCity || o.textContent.trim() === leadCity;
      });
      if (match) areaSelect.value = match.value || match.textContent.trim();
    }

    // Prefill message with risk context
    var msgEl = form.querySelector('[name="message"], #message');
    if (msgEl && riskLevel && !msgEl.value) {
      var quizExtra = '';
      try {
        var summary = JSON.parse(sessionStorage.getItem('ac_health_check_summary') || '');
        if (summary && summary.answers && summary.answers.length) {
          quizExtra =
            ' Quiz answers: ' +
            summary.answers
              .map(function (a) {
                return a.id + '=' + a.label;
              })
              .join('; ') +
            '. Score=' +
            summary.score +
            '.';
        }
      } catch (e) {}
      msgEl.value =
        'AC Health Check result: ' +
        riskLevel.toUpperCase() +
        ' risk. Requesting a free AC inspection.' +
        (leadCity ? ' Service area: ' + leadCity + '.' : '') +
        quizExtra;
    }

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"], button:not([type])');
      var original = btn ? btn.textContent : '';
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Sending...';
      }

      var nameEl = form.querySelector('[name="name"], #name');
      var emailEl = form.querySelector('[name="email"], #email');
      var phoneEl = form.querySelector('[name="phone"], #phone');
      var messageEl = form.querySelector('[name="message"], #message');
      var areaEl = form.querySelector('[name="area"], #area');

      try {
        await submitLead({
          name: nameEl ? nameEl.value.trim() : '',
          email: emailEl ? emailEl.value.trim() : '',
          phone: phoneEl ? phoneEl.value.trim() : '',
          message: messageEl ? messageEl.value.trim() : '',
          area: areaEl ? areaEl.value.trim() : '',
          lead_city:
            (form.querySelector('[name="lead_city"]') || {}).value ||
            (areaEl ? areaEl.value.trim() : '') ||
            getLeadCity(),
          landing_page: (form.querySelector('[name="landing_page"]') || {}).value || landingPage,
          lead_source: (form.querySelector('[name="lead_source"]') || {}).value || leadSource,
          risk_level: (form.querySelector('[name="risk_level"]') || {}).value || riskLevel,
        });

        var success = document.getElementById('form-success');
        if (!success) {
          success = document.createElement('p');
          success.id = 'form-success';
          success.className = 'form-success';
          form.parentNode.insertBefore(success, form.nextSibling);
        }
        success.textContent = "✓ Request received! We'll be in touch soon — same-day service often available.";
        success.style.display = 'block';
        form.reset();
        // Restore hidden tracking after reset
        ensureHidden('lead_city', leadCity);
        ensureHidden('risk_level', riskLevel);
        ensureHidden('lead_source', leadSource);
        ensureHidden('landing_page', landingPage);
      } catch (err) {
        var fail = document.getElementById('form-success');
        if (!fail) {
          fail = document.createElement('p');
          fail.id = 'form-success';
          fail.className = 'form-success';
          form.parentNode.insertBefore(fail, form.nextSibling);
        }
        fail.textContent =
          "Thanks — we couldn't confirm the send. Please call (346) 655-6999 and we'll help right away.";
        fail.style.display = 'block';
      }

      if (btn) {
        btn.disabled = false;
        btn.textContent = original;
      }
    });
  }

  function init() {
    document.querySelectorAll('form.lead-form').forEach(wireForm);
  }

  window.HoustonLeads = {
    submitLead: submitLead,
    getLeadCity: getLeadCity,
    setLeadCity: setLeadCity,
    wireForm: wireForm,
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
