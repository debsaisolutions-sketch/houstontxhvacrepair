/**
 * Houston TX HVAC Repair pages — Love Air fulfillment.
 *
 * Verified Love Air facts (keep if current; do not invent the rest):
 * - 24/7 / 24-hour emergency service: advertised on loveair.net
 * - Address: 14420 West Sylvanfield Dr, Houston, TX 77014 (loveair.net)
 *   77001 + downtown 29.7604,-95.3698 on this site were placeholders — replace, do not keep
 * - Office hours: Mon–Sat 8:00am–8:00pm, Sun 9:00am–4:00pm (loveair.net)
 * - Phone on THIS site stays (346) 655-6999 (TradeDeskPro Houston line for Joe / Love Air)
 * - Services: heating, AC repair/replacement, ductwork, indoor air quality (loveair.net)
 * - Licensed heating & air contractor claim (loveair.net)
 *
 * Skip: copied Google reviews, BBB, NATE, financing/warranty copy not verified for this site.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const ROOT = path.dirname(fileURLToPath(import.meta.url))
const PHONE = '(346) 655-6999'
const TEL = '+13466556999'
const STREET = '14420 West Sylvanfield Dr'
const CITY = 'Houston'
const REGION = 'TX'
const ZIP = '77014'
const TODAY = '2026-09-15'

const ICON = '/img/love-air-favicon.png'
const BRAND_NAV = `<a class="brand" href="/" aria-label="Love Air Conditioning Company — Houston HVAC">
        <img class="brand-logo" src="/img/love-air-logo.png" alt="Love Air Conditioning Company" width="200" height="109" />
        <span class="brand-text">Love Air <span>Houston HVAC</span></span>
      </a>`

function nav(current) {
  const items = [
    ['/', 'Home'],
    ['/services/', 'Services'],
    ['/ac-repair-houston/', 'AC Repair'],
    ['/heating-repair-houston/', 'Heating'],
    ['/about/', 'About'],
    ['/blog/index.html', 'Blog'],
    ['/contact/', 'Contact'],
  ]
  const links = items
    .map(([href, label]) => {
      const on = current === href ? ' aria-current="page"' : ''
      return `        <li><a href="${href}"${on}>${label}</a></li>`
    })
    .join('\n')
  return `  <nav class="site-nav" aria-label="Main">
    <div class="container nav-inner">
      ${BRAND_NAV}
      <ul class="nav-links">
${links}
        <li><a class="nav-call" href="tel:${TEL}">Call ${PHONE}</a></li>
      </ul>
    </div>
  </nav>`
}

function sticky() {
  return `  <div class="sticky-call">
    Call Now: <a href="tel:${TEL}">${PHONE}</a> | 24/7 Emergency Service
  </div>
  <div class="loveair-band">
    Work is fulfilled by <strong>Love Air Conditioning Company</strong> — Houston HVAC from ${STREET}, ${CITY}, ${REGION} ${ZIP}.
    <a href="/about/">About Love Air</a>
  </div>`
}

function mobileBar() {
  return `  <div class="mobile-call-bar" aria-label="Call Love Air">
    <a href="tel:${TEL}">Call ${PHONE} · 24/7 emergency</a>
  </div>`
}

function pills(items) {
  if (!items?.length) return ''
  return `<ul class="related-pills">
${items.map(([href, label]) => `      <li><a href="${href}">${label}</a></li>`).join('\n')}
    </ul>`
}

function convertPanel(opts = {}) {
  const city = opts.city || 'Houston'
  const landing = opts.landing || ''
  return `    <section class="convert-panel" id="request-service">
      <h2>Request Houston HVAC service</h2>
      <p>Call, send the form, or use chat. Dispatch is Love Air — 24/7 emergency service, office hours Mon–Sat 8am–8pm and Sun 9am–4pm.</p>
      <div class="cta-row" style="margin-bottom:16px;">
        <a href="tel:${TEL}" class="cta-button">Call ${PHONE}</a>
        <a href="/contact/" class="cta-button secondary">Open contact form</a>
        <a href="/ac-health-check/" class="cta-button secondary">AC Health Check</a>
      </div>
      <form class="lead-form" method="POST">
        <label for="name">Name</label>
        <input id="name" type="text" name="name" required />
        <label for="email">Email</label>
        <input id="email" type="email" name="email" required />
        <label for="phone">Phone</label>
        <input id="phone" type="tel" name="phone" required />
        <label for="message">What's going on?</label>
        <textarea id="message" name="message" rows="4" required placeholder="AC not cooling, no heat, replacement quote…"></textarea>
        <input type="hidden" name="lead_city" value="${city}" />
        ${landing ? `<input type="hidden" name="landing_page" value="${landing}" />` : ''}
        <input type="hidden" name="lead_source" value="form" />
        <button type="submit">Request service</button>
      </form>
      <p id="form-success" class="form-success" role="status"></p>
    </section>`
}

function footer() {
  return `  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <h3>Love Air Conditioning Company</h3>
          <p>Fulfillment for Houston TX HVAC Repair. ${STREET}, ${CITY}, ${REGION} ${ZIP}.</p>
          <p style="margin-top:10px;">24/7 emergency service · Licensed contractor · Office Mon–Sat 8am–8pm, Sun 9am–4pm</p>
        </div>
        <div>
          <h3>Hire-intent pages</h3>
          <ul>
            <li><a href="/ac-repair-houston/">AC repair Houston</a></li>
            <li><a href="/emergency-ac-repair-houston/">Emergency AC repair</a></li>
            <li><a href="/heating-repair-houston/">Heating repair</a></li>
            <li><a href="/furnace-repair-houston/">Furnace repair</a></li>
            <li><a href="/hvac-repair-houston/">HVAC repair</a></li>
            <li><a href="/ac-replacement-houston/">AC replacement</a></li>
            <li><a href="/hvac-maintenance-houston/">HVAC maintenance</a></li>
            <li><a href="/about/">About Love Air</a></li>
          </ul>
        </div>
        <div>
          <h3>Areas we serve</h3>
          <ul>
            <li><a href="/klein-hvac-repair/">Klein</a></li>
            <li><a href="/jersey-village-hvac-repair/">Jersey Village</a></li>
            <li><a href="/spring-hvac-repair/">Spring</a></li>
            <li><a href="/tomball-hvac-repair/">Tomball</a></li>
            <li><a href="/cypress-hvac-repair/">Cypress</a></li>
            <li><a href="/the-woodlands-hvac-repair/">The Woodlands</a></li>
            <li><a href="/humble-hvac-repair/">Humble</a></li>
            <li><a href="/magnolia-hvac-repair/">Magnolia</a></li>
          </ul>
          <p style="margin-top:12px;"><a href="tel:${TEL}">${PHONE}</a></p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Love Air Conditioning Company · Houston TX HVAC Repair</p>
        <p><a href="tel:${TEL}">${PHONE}</a> · ${STREET}, ${CITY}, ${REGION} ${ZIP}</p>
      </div>
    </div>
  </footer>`
}

function localBusinessJsonLd(extra = {}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HVACBusiness'],
    name: 'Love Air Conditioning Company',
    alternateName: 'Houston TX HVAC Repair',
    description:
      extra.description ||
      '24/7 emergency AC and heating service for Greater Houston, fulfilled by Love Air Conditioning Company.',
    url: extra.url || 'https://houstontxhvacrepair.com',
    telephone: PHONE,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: STREET,
      addressLocality: CITY,
      addressRegion: REGION,
      postalCode: ZIP,
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: 'Houston' },
      { '@type': 'City', name: 'Klein' },
      { '@type': 'City', name: 'Jersey Village' },
      { '@type': 'City', name: 'Spring' },
      { '@type': 'City', name: 'Tomball' },
      { '@type': 'City', name: 'Cypress' },
      { '@type': 'City', name: 'The Woodlands' },
      { '@type': 'City', name: 'Humble' },
      { '@type': 'City', name: 'Magnolia' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '09:00',
        closes: '16:00',
      },
    ],
    ...extra.more,
  }
  return JSON.stringify(data, null, 2)
}

function wrap({ canonical, title, desc, current, h1, lede, schema, main, extraCtas, city, landing, related }) {
  const ctas =
    extraCtas ||
    `        <a href="tel:${TEL}" class="cta-button">Call ${PHONE}</a>
        <a href="#request-service" class="cta-button secondary">Request service</a>
        <a href="/contact/" class="cta-button secondary">Contact form</a>`
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${desc}" />
  <link rel="canonical" href="${canonical}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${desc}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:site_name" content="Houston TX HVAC Repair · Love Air" />
  <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Source+Sans+3:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
  <link rel="icon" type="image/png" href="${ICON}" />
  <link rel="apple-touch-icon" href="${ICON}" />
  <link rel="stylesheet" href="/css/styles.css" />
  <script type="application/ld+json">
  ${schema}
  </script>
  <script src="/js/retell-chat-widget.js" defer></script>
  <script src="/js/leads.js" defer></script>
</head>
<body>
${sticky()}
${nav(current)}
  <header class="page-hero">
    <div class="container">
      <p class="brand-mark">Love Air · Houston <span>TX HVAC</span> Repair</p>
      <h1>${h1}</h1>
      <p class="lede">${lede}</p>
      <p class="phone"><a href="tel:${TEL}" style="color:inherit;text-decoration:none;">${PHONE}</a></p>
      <div class="cta-row">
${ctas}
      </div>
    </div>
  </header>
  <main class="container">
${main}
    ${related ? `<section><h2>Related service pages</h2>${pills(related)}</section>` : ''}
${convertPanel({ city, landing })}
  </main>
${footer()}
${mobileBar()}
</body>
</html>
`
}

function serviceSchema(name, url, area, description) {
  return JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name,
      url,
      description,
      areaServed: { '@type': 'Place', name: area },
      provider: {
        '@type': 'HVACBusiness',
        name: 'Love Air Conditioning Company',
        url: 'https://houstontxhvacrepair.com',
        telephone: PHONE,
        address: {
          '@type': 'PostalAddress',
          streetAddress: STREET,
          addressLocality: CITY,
          addressRegion: REGION,
          postalCode: ZIP,
          addressCountry: 'US',
        },
      },
    },
    null,
    2
  )
}

function writePage(relDir, html) {
  const dir = path.join(ROOT, relDir)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), html)
  console.log('wrote', path.join(relDir, 'index.html').replace(/\\/g, '/'))
}

const cityRelated = [
  ['/ac-repair-houston/', 'AC repair'],
  ['/emergency-ac-repair-houston/', 'Emergency AC'],
  ['/heating-repair-houston/', 'Heating repair'],
  ['/furnace-repair-houston/', 'Furnace repair'],
  ['/hvac-repair-houston/', 'HVAC repair'],
  ['/ac-replacement-houston/', 'AC replacement'],
  ['/hvac-maintenance-houston/', 'Maintenance'],
  ['/new-system-sales-installation/', 'New systems'],
]

const pages = [
  {
    dir: 'ac-repair-houston',
    title: 'AC Repair in Houston | Love Air · 24/7 Cooling Service',
    desc: 'AC repair in Houston and north Houston for homes that are not cooling. Love Air technicians. Call (346) 655-6999 for 24/7 emergency service.',
    h1: 'AC Repair in Houston',
    lede: 'When a Greater Houston system is running but the house stays humid and warm, Love Air diagnoses the equipment — not a generic script. Call (346) 655-6999.',
    city: 'Houston',
    area: 'Houston, Texas',
    serviceName: 'AC Repair in Houston',
    related: cityRelated,
    main: `    <p class="breadcrumb"><a href="/">Home</a> / AC Repair Houston</p>
    <section>
      <h2>What this page is for</h2>
      <p>This is a hire page for homeowners who need air conditioning repair in Houston, Klein, Cypress, Spring, Tomball, Jersey Village, Humble, The Woodlands, and Magnolia. Work is fulfilled by Love Air Conditioning Company from ${STREET}, Houston, TX ${ZIP}.</p>
      <p>Houston’s long cooling season punishes dirty coils, weak capacitors, and condensate drains that clog after a Gulf rain week. We start with how the system is behaving in this climate — short-cycling in the afternoon, ice on the suction line, or a blower that moves air that never quite dries the house — then we repair what failed.</p>
      <h2>Problems we actually see on Houston calls</h2>
      <ul class="check-list">
        <li>System runs continuously and indoor humidity stays high</li>
        <li>Outdoor fan or compressor will not start after a heat spike</li>
        <li>Frozen evaporator coil after a dirty filter or low airflow</li>
        <li>Thermostat calls for cool and the air handler never answers</li>
      </ul>
      <p>Love Air advertises 24/7 emergency service. Office hours are Monday–Saturday 8am–8pm and Sunday 9am–4pm. Call <a href="tel:${TEL}">${PHONE}</a> to reach Love Air.</p>
      <p>Need a full changeout instead? See <a href="/ac-replacement-houston/">AC replacement in Houston</a>. After-hours no-cool? See <a href="/emergency-ac-repair-houston/">emergency AC repair</a>.</p>
    </section>`,
  },
  {
    dir: 'emergency-ac-repair-houston',
    title: 'Emergency AC Repair in Houston | 24/7 Love Air Service',
    desc: '24/7 emergency AC repair in Houston from Love Air. Call (346) 655-6999 when cooling fails at night, on a weekend, or in a heat advisory.',
    h1: '24/7 Emergency AC Repair in Houston',
    lede: 'Love Air currently advertises 24-hour emergency service. If the house is heating up after dark or on a Sunday, call (346) 655-6999.',
    city: 'Houston',
    area: 'Houston, Texas',
    serviceName: 'Emergency AC Repair in Houston',
    related: cityRelated,
    main: `    <p class="breadcrumb"><a href="/">Home</a> / Emergency AC Repair</p>
    <section>
      <h2>When to treat it as an emergency</h2>
      <p>Call now if indoor temperatures are climbing, you have medically vulnerable people in the home, or you smell burning at the air handler. Houston heat plus humidity is not a “wait until Monday” problem for a lot of households.</p>
      <p>Love Air’s published office hours are Mon–Sat 8:00am–8:00pm and Sun 9:00am–4:00pm, and the company separately advertises 24/7 emergency service. This site uses the Houston dispatch number <a href="tel:${TEL}">${PHONE}</a>.</p>
      <h2>What a night or weekend call usually includes</h2>
      <p>We confirm power, thermostat, breaker, and outdoor disconnect first so we do not bill a truck roll for a tripped GFCI. If the compressor, capacitor, contactor, or drain is the failure, we repair what is safe to restore cooling. If the system is at replacement age, we will say so — Love Air also sells and installs equipment rather than pushing endless band-aids.</p>
      <p>North Houston corridors (US 290, SH 249, I-45, FM 1960) are the core of this site’s live suburb pages. We do not pretend a Magnolia acreage house has the same arrival window as Jersey Village.</p>
    </section>`,
  },
  {
    dir: 'heating-repair-houston',
    title: 'Heating Repair in Houston | Furnace &amp; Heat Service | Love Air',
    desc: 'Heating repair in Houston for furnaces and heat pumps that fail on a cold front. Love Air. Call (346) 655-6999. 24/7 emergency service.',
    h1: 'Heating Repair in Houston',
    lede: 'Cold fronts still take Houston houses down to uncomfortable overnight lows. Love Air repairs heat that will not start, will not stay on, or blows unheated air.',
    city: 'Houston',
    area: 'Houston, Texas',
    serviceName: 'Heating Repair in Houston',
    related: cityRelated,
    main: `    <p class="breadcrumb"><a href="/">Home</a> / Heating Repair Houston</p>
    <section>
      <h2>Heat still matters on the Gulf Coast</h2>
      <p>Houston does not have a long winter, which is exactly why heating equipment sits unused, then fails the first norther. Ignitors, flame sensors, and heat-pump reversing valves do not get a gentle season-in here — they get a sudden demand after months of cooling-only runtime.</p>
      <p>Love Air lists heating among its core services on loveair.net. This page is for homeowners who want a technician, not a DIY checklist. Call <a href="tel:${TEL}">${PHONE}</a>.</p>
      <h2>What we check on a no-heat call</h2>
      <ul class="check-list">
        <li>Thermostat mode and batteries before anyone opens a panel</li>
        <li>Gas valve, ignitor, and flame sensor on furnaces</li>
        <li>Heat-pump defrost and reversing-valve operation</li>
        <li>Safety switches and dirty filters that starve the heat exchanger of airflow</li>
      </ul>
      <p>Furnace-specific work lives on <a href="/furnace-repair-houston/">furnace repair in Houston</a>. Cypress and Humble heating pages cover those corridors in more detail.</p>
    </section>`,
  },
  {
    dir: 'furnace-repair-houston',
    title: 'Furnace Repair in Houston | Love Air Heating Technicians',
    desc: 'Furnace repair in Houston when the unit will not ignite, short-cycles, or trips a limit switch. Love Air. Call (346) 655-6999.',
    h1: 'Furnace Repair in Houston',
    lede: 'If the furnace clicks, lights, then shuts off — or never lights at all — Love Air can diagnose it. Call (346) 655-6999.',
    city: 'Houston',
    area: 'Houston, Texas',
    serviceName: 'Furnace Repair in Houston',
    related: cityRelated,
    main: `    <p class="breadcrumb"><a href="/">Home</a> / Furnace Repair Houston</p>
    <section>
      <h2>Furnaces in a cooling-first city</h2>
      <p>Many Houston homes still have gas furnaces paired with outdoor AC. Those furnaces can sit idle from April through November. When a January front arrives, a dirty flame sensor or a cracked ignitor shows up immediately.</p>
      <p>We do not invent warranty terms on this site. We do repair and, when the heat exchanger or control board makes repair a poor bet, Love Air can quote a replacement from the same company that handles cooling.</p>
      <p>Need suburb-specific furnace help? See <a href="/cypress-furnace-repair/">Cypress furnace repair</a> and <a href="/magnolia-furnace-repair/">Magnolia furnace repair</a>.</p>
    </section>`,
  },
  {
    dir: 'hvac-repair-houston',
    title: 'HVAC Repair in Houston | AC &amp; Heating | Love Air',
    desc: 'HVAC repair in Houston covering air conditioning, heating, ducts, and indoor air quality. Fulfilled by Love Air. Call (346) 655-6999.',
    h1: 'HVAC Repair in Houston',
    lede: 'One company for cooling, heat, ducts, and indoor air — Love Air Conditioning Company, dispatched on (346) 655-6999.',
    city: 'Houston',
    area: 'Houston, Texas',
    serviceName: 'HVAC Repair in Houston',
    related: cityRelated,
    main: `    <p class="breadcrumb"><a href="/">Home</a> / HVAC Repair Houston</p>
    <section>
      <h2>Full-system repair, not a cooling-only shop</h2>
      <p>Love Air’s published service list includes heating, air conditioning, ductwork renovation/cleaning/sanitization, and indoor air quality products. This Houston site exists so north-Houston homeowners can hire that same fulfillment company without guessing who answers the phone.</p>
      <p>Use this page if you are not sure whether the failure is the outdoor unit, the furnace, the thermostat, or the ducts. A technician will isolate it. If you already know it is an AC no-cool, start at <a href="/ac-repair-houston/">AC repair</a>. If it is overnight heat, start at <a href="/heating-repair-houston/">heating repair</a>.</p>
      <p>Live suburb pages with local routing notes: <a href="/cypress-hvac-repair/">Cypress</a>, <a href="/klein-hvac-repair/">Klein</a>, <a href="/the-woodlands-hvac-repair/">The Woodlands</a>, <a href="/tomball-hvac-repair/">Tomball</a>, <a href="/spring-hvac-repair/">Spring</a>, <a href="/jersey-village-hvac-repair/">Jersey Village</a>, <a href="/humble-hvac-repair/">Humble</a>, <a href="/magnolia-hvac-repair/">Magnolia</a>.</p>
    </section>`,
  },
  {
    dir: 'ac-replacement-houston',
    title: 'AC Replacement in Houston | New Systems | Love Air',
    desc: 'AC replacement in Houston when repair no longer makes sense. Love Air sizes and installs. Call (346) 655-6999 for an estimate.',
    h1: 'AC Replacement in Houston',
    lede: 'When a Houston system is on borrowed time — repeat refrigerant loss, a failing compressor, or a coil that cannot keep up with humidity — Love Air can replace it.',
    city: 'Houston',
    area: 'Houston, Texas',
    serviceName: 'AC Replacement in Houston',
    related: cityRelated,
    main: `    <p class="breadcrumb"><a href="/">Home</a> / AC Replacement Houston</p>
    <section>
      <h2>Repair vs replace, stated plainly</h2>
      <p>Love Air sells and installs air conditioning, not only service calls. We will still repair a system that has remaining life. We will not pretend a third compressor swap is cheaper than a correctly sized replacement for a house that already struggles in August humidity.</p>
      <p>Replacement conversations on this site stay tied to Climate Zone 2A realities: long runtimes, wet coils, and attics that cook equipment. Load calculation and duct condition matter as much as the outdoor model number.</p>
      <p>See also <a href="/new-system-sales-installation/">new system sales &amp; installation</a> for the broader install process.</p>
    </section>`,
  },
  {
    dir: 'hvac-maintenance-houston',
    title: 'HVAC Maintenance in Houston | Seasonal Service | Love Air',
    desc: 'HVAC maintenance in Houston for humidity, filters, coils, and drains. Love Air. Call (346) 655-6999 to schedule.',
    h1: 'HVAC Maintenance in Houston',
    lede: 'A seasonal visit in Houston is about drains, coils, and filters that load up in humidity — not a generic “tune-up” slogan.',
    city: 'Houston',
    area: 'Houston, Texas',
    serviceName: 'HVAC Maintenance in Houston',
    related: cityRelated,
    main: `    <p class="breadcrumb"><a href="/">Home</a> / HVAC Maintenance Houston</p>
    <section>
      <h2>What a Houston maintenance visit is for</h2>
      <p>Equipment here runs most of the year. Maintenance is how you catch a drain that will overflow into the ceiling, a capacitor that is already out of spec, or a coil so dirty the system ices over in May.</p>
      <p>Love Air also offers duct cleaning, sanitization, and indoor air quality equipment on its main site. We will not invent a maintenance-plan price on this page. Call <a href="tel:${TEL}">${PHONE}</a> or use the form if you want a visit scheduled during published office hours — with 24/7 emergency coverage if the system fails first.</p>
    </section>`,
  },
  {
    dir: 'about',
    title: 'About Love Air | Houston TX HVAC Repair',
    desc: 'Houston TX HVAC Repair is fulfilled by Love Air Conditioning Company at 14420 West Sylvanfield Dr, Houston, TX 77014. 24/7 emergency service. Call (346) 655-6999.',
    h1: 'Love Air is the company behind this Houston site',
    lede: 'Calls, forms, and chat on this site go to Love Air Conditioning Company — Joe Cunningham’s Houston HVAC team.',
    city: 'Houston',
    area: 'Houston, Texas',
    serviceName: 'Love Air Conditioning Company',
    related: cityRelated,
    main: `    <p class="breadcrumb"><a href="/">Home</a> / About</p>
    <section>
      <h2>Who fulfills the work</h2>
      <p><strong>Love Air Conditioning Company</strong> is a Houston heating and air contractor. The company’s published shop address is 14420 West Sylvanfield Dr, Houston, TX 77014.</p>
      <p>Love Air currently advertises <strong>24-hour / 24/7 emergency service</strong> on loveair.net, alongside office hours Monday–Saturday 8:00am–8:00pm and Sunday 9:00am–4:00pm. We keep the 24/7 emergency claim because it is Love Air’s own current marketing, not a stock lead-gen slogan.</p>
      <p>The phone number on this site is <a href="tel:${TEL}">${PHONE}</a>. Love Air’s main website also lists (281) LOVE-AIR. This site keeps the Houston line so calls stay with this property.</p>
      <h2>Joe Cunningham</h2>
      <p>Joe Cunningham operates Love Air. He is also known as founder of Technical Arts Center (TAC), a Houston-area HVAC training organization covered in ACHR News in 2018.</p>
      <h2>Services Love Air publishes</h2>
      <ul class="check-list">
        <li>Heating repair and service</li>
        <li>Air conditioning repair and replacement</li>
        <li>Ductwork renovation, cleaning, and sanitization</li>
        <li>Indoor air quality equipment and installation</li>
      </ul>
      <p>Official company site: <a href="https://loveair.net/" rel="noopener">loveair.net</a>. This domain is the north-Houston hire-intent site that feeds the same company.</p>
    </section>`,
  },
  {
    dir: 'cypress-heating-repair',
    title: 'Cypress Heating Repair | Love Air | North Houston',
    desc: 'Heating repair in Cypress, TX near U.S. 290 and Cy-Fair. Love Air. Call (346) 655-6999. 24/7 emergency service.',
    h1: 'Cypress Heating Repair Near U.S. 290 &amp; Cy-Fair',
    lede: 'When a Cypress furnace or heat pump fails on a norther, Love Air runs the call. Same north-Houston corridor as our Cypress HVAC page.',
    city: 'Cypress',
    area: 'Cypress, Texas',
    serviceName: 'Cypress Heating Repair',
    related: [
      ['/cypress-hvac-repair/', 'Cypress HVAC'],
      ['/cypress-furnace-repair/', 'Cypress furnace'],
      ['/heating-repair-houston/', 'Houston heating'],
      ['/cypress-ac-repair/', 'Cypress AC'],
    ],
    main: `    <p class="breadcrumb"><a href="/">Home</a> / <a href="/cypress-hvac-repair/">Cypress HVAC</a> / Heating</p>
    <script>try{sessionStorage.setItem('hvac_lead_city',"Cypress");}catch(e){}</script>
    <section>
      <h2>Heat calls along the Cy-Fair corridor</h2>
      <p>Cypress houses along U.S. 290, Spring-Cypress, Fry, and Barker Cypress spend most of the year on cooling. When a January night drops into the 30s, attic furnaces that sat idle since March are the ones that refuse to light.</p>
      <p>This page is heating-specific. Neighborhood and routing detail stays on <a href="/cypress-hvac-repair/">Cypress HVAC repair</a> — Bridgeland, Towne Lake, Cy-Fair ISD traffic, forest vs prairie lots. We are not duplicating that essay; we are giving a clear hire path for no-heat tickets.</p>
      <p>Love Air dispatches from ${STREET} (${ZIP}). 24/7 emergency service is a current Love Air claim. Call <a href="tel:${TEL}">${PHONE}</a>.</p>
    </section>`,
  },
  {
    dir: 'cypress-furnace-repair',
    title: 'Cypress Furnace Repair | Love Air | 77429 &amp; Cy-Fair',
    desc: 'Furnace repair in Cypress, TX for ignitor, flame sensor, and no-heat failures. Love Air. Call (346) 655-6999.',
    h1: 'Cypress Furnace Repair',
    lede: 'Gas furnaces in Cypress attics fail the first cold week more often than they fail in July. Love Air handles the diagnosis.',
    city: 'Cypress',
    area: 'Cypress, Texas',
    serviceName: 'Cypress Furnace Repair',
    related: [
      ['/cypress-heating-repair/', 'Cypress heating'],
      ['/cypress-hvac-repair/', 'Cypress HVAC'],
      ['/furnace-repair-houston/', 'Houston furnace'],
    ],
    main: `    <p class="breadcrumb"><a href="/">Home</a> / <a href="/cypress-hvac-repair/">Cypress HVAC</a> / Furnace</p>
    <script>try{sessionStorage.setItem('hvac_lead_city',"Cypress");}catch(e){}</script>
    <section>
      <h2>Why Cypress furnaces need a specialist visit</h2>
      <p>ZIP 77429 and nearby Cy-Fair plans often put the furnace in a hot attic above a two-story brick home. That is a hard environment for rubber, boards, and sensors. A flame sensor that looked fine in November will not keep a burner lit in a 28°F dawn.</p>
      <p>We repair ignitors, sensors, inducer motors, and limit switches when that is the honest fix. If the heat exchanger is the problem, we will say so instead of guessing. Broader heating (including heat pumps) is on <a href="/cypress-heating-repair/">Cypress heating repair</a>.</p>
    </section>`,
  },
  {
    dir: 'cypress-ac-repair',
    title: 'Cypress AC Repair | Love Air | U.S. 290 Corridor',
    desc: 'AC repair in Cypress, TX for short-cycling, frozen coils, and no-cool calls near U.S. 290. Love Air. Call (346) 655-6999.',
    h1: 'Cypress AC Repair',
    lede: 'Cy-Fair humidity plus lake-adjacent subdivisions make condensate and coil problems more common than a dry-prairie suburb. Love Air runs Cypress cooling calls.',
    city: 'Cypress',
    area: 'Cypress, Texas',
    serviceName: 'Cypress AC Repair',
    related: [
      ['/cypress-hvac-repair/', 'Cypress HVAC'],
      ['/ac-repair-houston/', 'Houston AC repair'],
      ['/emergency-ac-repair-houston/', 'Emergency AC'],
    ],
    main: `    <p class="breadcrumb"><a href="/">Home</a> / <a href="/cypress-hvac-repair/">Cypress HVAC</a> / AC Repair</p>
    <script>try{sessionStorage.setItem('hvac_lead_city',"Cypress");}catch(e){}</script>
    <section>
      <h2>Cooling failures specific to Cypress</h2>
      <p>Northeast of U.S. 290, tree cover and creek humidity keep coils wet. Southwest, prairie sun loads west walls of two-story plans. Both patterns show up as “AC is on but the house will not dry out.” That is a hire-intent problem, not a filter-YouTube problem, once the coil is iced or the condenser will not start.</p>
      <p>Use <a href="/cypress-hvac-repair/">the Cypress HVAC page</a> for landmarks and routing. Use this page to request cooling repair. 24/7 emergency: <a href="tel:${TEL}">${PHONE}</a>.</p>
    </section>`,
  },
  {
    dir: 'magnolia-furnace-repair',
    title: 'Magnolia Furnace Repair | Love Air | FM 1488 &amp; FM 1774',
    desc: 'Furnace repair in Magnolia, TX for acreage and Magnolia ISD homes. Honest outer-radius timing. Love Air. Call (346) 655-6999.',
    h1: 'Furnace Repair in Magnolia, TX',
    lede: 'Magnolia sits northwest of The Woodlands. Love Air will take the furnace call — and we will not pretend it is a 20-minute Jersey Village hop.',
    city: 'Magnolia',
    area: 'Magnolia, Texas',
    serviceName: 'Magnolia Furnace Repair',
    related: [
      ['/magnolia-hvac-repair/', 'Magnolia HVAC'],
      ['/furnace-repair-houston/', 'Houston furnace'],
      ['/heating-repair-houston/', 'Houston heating'],
    ],
    main: `    <p class="breadcrumb"><a href="/">Home</a> / <a href="/magnolia-hvac-repair/">Magnolia HVAC</a> / Furnace</p>
    <script>try{sessionStorage.setItem('hvac_lead_city',"Magnolia");}catch(e){}</script>
    <section>
      <h2>Outer-radius heating, stated honestly</h2>
      <p>FM 1488 / FM 1774 acreage homes and Magnolia ISD neighborhoods are on Love Air’s north-northwest service map. Travel time is longer than inside Beltway 8. We keep that on the page so a no-heat ticket is scheduled with a real window, not a downtown-Houston fantasy.</p>
      <p>Furnaces on large lots often share a shop or bonus-room system that nobody has opened since the last cold snap. Ignitor and flame-sensor failures are the usual first visit. Local geography stays on <a href="/magnolia-hvac-repair/">Magnolia HVAC repair</a>.</p>
    </section>`,
  },
  {
    dir: 'the-woodlands-ac-repair',
    title: 'AC Repair in The Woodlands | Love Air | Montgomery County',
    desc: 'AC repair in The Woodlands near Market Street, the Waterway, and Hughes Landing. Love Air. Call (346) 655-6999.',
    h1: 'AC Repair in The Woodlands',
    lede: 'Humid Montgomery County homes around the Waterway do not fail like a west-Houston prairie house. Love Air handles The Woodlands cooling calls.',
    city: 'The Woodlands',
    area: 'The Woodlands, Texas',
    serviceName: 'The Woodlands AC Repair',
    related: [
      ['/the-woodlands-hvac-repair/', 'The Woodlands HVAC'],
      ['/ac-repair-houston/', 'Houston AC repair'],
      ['/emergency-ac-repair-houston/', 'Emergency AC'],
    ],
    main: `    <p class="breadcrumb"><a href="/">Home</a> / <a href="/the-woodlands-hvac-repair/">The Woodlands HVAC</a> / AC Repair</p>
    <script>try{sessionStorage.setItem('hvac_lead_city',"The Woodlands");}catch(e){}</script>
    <section>
      <h2>Cooling in a forested township</h2>
      <p>The Woodlands villages near Market Street, the Waterway, and Hughes Landing sit in tree cover with HOA and township constraints that a generic Houston landing page never mentions. Shade helps the west wall; trapped humidity does not help the coil.</p>
      <p>Hire this page when the AC will not cool a Woodlands home. Neighborhood essay and landmarks stay on <a href="/the-woodlands-hvac-repair/">The Woodlands HVAC repair</a>. 24/7 emergency: <a href="tel:${TEL}">${PHONE}</a>.</p>
    </section>`,
  },
  {
    dir: 'klein-ac-repair',
    title: 'Klein AC Repair | Love Air | FM 1960 &amp; Champions',
    desc: 'AC repair in Klein, TX near Klein ISD, FM 1960, and Champions. Love Air. Call (346) 655-6999.',
    h1: 'Klein AC Repair Near FM 1960',
    lede: 'Klein ISD, Cypress Creek, and the SH 249 / I-45 split are the map. Love Air takes Klein no-cool calls on (346) 655-6999.',
    city: 'Klein',
    area: 'Klein, Texas',
    serviceName: 'Klein AC Repair',
    related: [
      ['/klein-hvac-repair/', 'Klein HVAC'],
      ['/ac-repair-houston/', 'Houston AC repair'],
      ['/emergency-ac-repair-houston/', 'Emergency AC'],
    ],
    main: `    <p class="breadcrumb"><a href="/">Home</a> / <a href="/klein-hvac-repair/">Klein HVAC</a> / AC Repair</p>
    <script>try{sessionStorage.setItem('hvac_lead_city',"Klein");}catch(e){}</script>
    <section>
      <h2>Klein cooling, not a generic north-Houston blob</h2>
      <p>FM 1960 traffic, Klein ISD campuses, and Champions-area lots are why we keep a Klein page instead of folding everything into “Houston.” Afternoon no-cool tickets here compete with school and retail congestion the same way Cypress competes with Cy-Fair Friday nights.</p>
      <p>Local copy and landmarks stay on <a href="/klein-hvac-repair/">Klein HVAC repair</a>. This page is the AC hire path, including 24/7 emergency service as Love Air advertises it.</p>
    </section>`,
  },
  {
    dir: 'humble-heating-repair',
    title: 'Humble Heating Repair | Love Air | US 59 &amp; Lake Houston',
    desc: 'Heating repair in Humble, TX near downtown Humble, Deerbrook, and Lake Houston. Love Air. Call (346) 655-6999.',
    h1: 'Heating Repair in Humble, TX',
    lede: 'East-side humidity is famous in summer. Winter still kills ignitors on furnaces that sat through nine months of AC. Love Air takes Humble heat calls.',
    city: 'Humble',
    area: 'Humble, Texas',
    serviceName: 'Humble Heating Repair',
    related: [
      ['/humble-hvac-repair/', 'Humble HVAC'],
      ['/heating-repair-houston/', 'Houston heating'],
      ['/furnace-repair-houston/', 'Houston furnace'],
    ],
    main: `    <p class="breadcrumb"><a href="/">Home</a> / <a href="/humble-hvac-repair/">Humble HVAC</a> / Heating</p>
    <script>try{sessionStorage.setItem('hvac_lead_city',"Humble");}catch(e){}</script>
    <section>
      <h2>East-side heat calls</h2>
      <p>Humble, Deerbrook, and Lake Houston-adjacent homes live in a wetter summer than west-side prairie subdivisions. That does not cancel winter. When a front arrives, the same attic furnace that dehumidified all summer is asked to ignite on a damp, unused heat exchanger.</p>
      <p>Use <a href="/humble-hvac-repair/">Humble HVAC repair</a> for downtown Humble / US 59 geography. Use this page to request heating. Call <a href="tel:${TEL}">${PHONE}</a> — 24/7 emergency is a current Love Air claim.</p>
    </section>`,
  },
]

function schemaFor(p) {
  if (p.dir === 'about') {
    return localBusinessJsonLd({
      url: 'https://houstontxhvacrepair.com/about/',
      description:
        'Love Air Conditioning Company fulfills Houston TX HVAC Repair. 14420 West Sylvanfield Dr, Houston, TX 77014. 24/7 emergency service.',
    })
  }
  return serviceSchema(
    p.serviceName,
    `https://houstontxhvacrepair.com/${p.dir}/`,
    p.area,
    p.desc
  )
}

for (const p of pages) {
  writePage(
    p.dir,
    wrap({
      canonical: `https://houstontxhvacrepair.com/${p.dir}/`,
      title: p.title,
      desc: p.desc,
      current: `/${p.dir}/`,
      h1: p.h1,
      lede: p.lede,
      schema: schemaFor(p),
      main: p.main,
      city: p.city,
      landing: p.dir,
      related: p.related,
    })
  )
}

function upgradeExisting(fileRel, extras = {}) {
  const file = path.join(ROOT, fileRel)
  let html = fs.readFileSync(file, 'utf8')
  const current = extras.current || '/'

  html = html.replace(/<div class="sticky-call">[\s\S]*?<\/div>/, sticky().replace(/^\s+/, '').trim())
  if (!html.includes('loveair-band')) {
    html = html.replace(
      /(<div class="sticky-call">[\s\S]*?<\/div>)/,
      `$1\n  <div class="loveair-band">Work is fulfilled by <strong>Love Air Conditioning Company</strong> — ${STREET}, ${CITY}, ${REGION} ${ZIP}. <a href="/about/">About Love Air</a></div>`
    )
  }
  html = html.replace(/<nav class="site-nav"[\s\S]*?<\/nav>/, nav(current).trim())

  html = html.replace(
    /"name": "Houston TX HVAC Repair"/g,
    '"name": "Love Air Conditioning Company", "alternateName": "Houston TX HVAC Repair"'
  )
  html = html.replace(
    /"provider": \{ "@type": "HVACBusiness", "name": "Houston TX HVAC Repair"/g,
    '"provider": { "@type": "HVACBusiness", "name": "Love Air Conditioning Company", "alternateName": "Houston TX HVAC Repair"'
  )
  html = html.replace(/"postalCode": "77001"/g, `"postalCode": "${ZIP}"`)
  html = html.replace(
    /"address": \{\s*"@type": "PostalAddress",\s*"addressLocality": "Houston",\s*"addressRegion": "TX",\s*"postalCode": "77014",\s*"addressCountry": "US"\s*\}/,
    `"address": { "@type": "PostalAddress", "streetAddress": "${STREET}", "addressLocality": "${CITY}", "addressRegion": "${REGION}", "postalCode": "${ZIP}", "addressCountry": "US" }`
  )
  html = html.replace(/\s*"geo": \{\s*"@type": "GeoCoordinates",\s*"latitude": "29\.7604",\s*"longitude": "-95\.3698"\s*\},/g, '')
  html = html.replace(/<meta name="geo.position" content="29\.7604;-95\.3698" \/>\s*/g, '')
  html = html.replace(
    /"opens": "07:00",\s*"closes": "18:00"/,
    '"opens": "08:00",\n        "closes": "20:00"'
  )
  html = html.replace(
    /"dayOfWeek": \["Saturday"\],\s*"opens": "08:00",\s*"closes": "14:00"/,
    '"dayOfWeek": ["Sunday"],\n        "opens": "09:00",\n        "closes": "16:00"'
  )
  // If Saturday block was the only weekend hours, Monday-Friday should become Mon-Sat
  html = html.replace(
    '"dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]',
    '"dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]'
  )

  if (!html.includes('id="request-service"') && !html.includes('class="lead-form"')) {
    html = html.replace(/<footer class="site-footer">/, `${convertPanel(extras)}\n  <footer class="site-footer">`)
  } else if (!html.includes('id="request-service"') && extras.related) {
    const relatedBlock = `    <section><h2>Hire-intent service pages</h2>${pills(extras.related)}</section>\n`
    html = html.replace(/<footer class="site-footer">/, `${relatedBlock}  <footer class="site-footer">`)
  } else if (extras.related && !html.includes('related-pills')) {
    html = html.replace(
      /<footer class="site-footer">/,
      `    <section><h2>Hire-intent service pages</h2>${pills(extras.related)}</section>\n  <footer class="site-footer">`
    )
  }

  html = html.replace(
    /<h3>Houston TX HVAC Repair<\/h3>\s*<p>[^<]*<\/p>(?:\s*<p style="margin-top:10px;">[^<]*<\/p>)?/,
    `<h3>Love Air Conditioning Company</h3>\n          <p>Fulfillment for Houston TX HVAC Repair. ${STREET}, ${CITY}, ${REGION} ${ZIP}.</p>\n          <p style="margin-top:10px;">24/7 emergency service · Office Mon–Sat 8am–8pm, Sun 9am–4pm</p>`
  )

  if (!html.includes('mobile-call-bar')) {
    html = html.replace(/<\/body>/, `${mobileBar()}\n</body>`)
  }

  fs.writeFileSync(file, html)
  console.log('upgraded', fileRel.replace(/\\/g, '/'))
}

upgradeExisting('index.html', { current: '/', related: cityRelated, city: 'Houston', landing: 'homepage' })
upgradeExisting('contact/index.html', { current: '/contact/', city: 'Houston', landing: 'contact' })
upgradeExisting('services/index.html', { current: '/services/', related: cityRelated, city: 'Houston', landing: 'services' })
upgradeExisting('new-system-sales-installation/index.html', {
  current: '/new-system-sales-installation/',
  related: cityRelated,
  city: 'Houston',
  landing: 'new-system-sales-installation',
})
upgradeExisting('ac-health-check/index.html', { current: '/ac-health-check/', city: 'Houston', landing: 'ac-health-check' })

const suburbs = [
  ['cypress-hvac-repair/index.html', '/cypress-hvac-repair/', 'Cypress', [
    ['/cypress-ac-repair/', 'Cypress AC repair'],
    ['/cypress-heating-repair/', 'Cypress heating'],
    ['/cypress-furnace-repair/', 'Cypress furnace'],
    ['/ac-repair-houston/', 'Houston AC repair'],
  ]],
  ['klein-hvac-repair/index.html', '/klein-hvac-repair/', 'Klein', [
    ['/klein-ac-repair/', 'Klein AC repair'],
    ['/ac-repair-houston/', 'Houston AC repair'],
    ['/heating-repair-houston/', 'Heating repair'],
  ]],
  ['jersey-village-hvac-repair/index.html', '/jersey-village-hvac-repair/', 'Jersey Village', cityRelated],
  ['spring-hvac-repair/index.html', '/spring-hvac-repair/', 'Spring', cityRelated],
  ['tomball-hvac-repair/index.html', '/tomball-hvac-repair/', 'Tomball', cityRelated],
  ['the-woodlands-hvac-repair/index.html', '/the-woodlands-hvac-repair/', 'The Woodlands', [
    ['/the-woodlands-ac-repair/', 'Woodlands AC repair'],
    ['/ac-repair-houston/', 'Houston AC repair'],
    ['/emergency-ac-repair-houston/', 'Emergency AC'],
  ]],
  ['humble-hvac-repair/index.html', '/humble-hvac-repair/', 'Humble', [
    ['/humble-heating-repair/', 'Humble heating'],
    ['/heating-repair-houston/', 'Houston heating'],
    ['/hvac-repair-houston/', 'HVAC repair'],
  ]],
  ['magnolia-hvac-repair/index.html', '/magnolia-hvac-repair/', 'Magnolia', [
    ['/magnolia-furnace-repair/', 'Magnolia furnace'],
    ['/furnace-repair-houston/', 'Houston furnace'],
    ['/heating-repair-houston/', 'Heating repair'],
  ]],
]
for (const [file, current, city, related] of suburbs) {
  upgradeExisting(file, { current, city, landing: current.replace(/\//g, '').replace(/-hvac-repair/, '-hvac-repair'), related })
}

function rewriteHomepageIdentity() {
  const file = path.join(ROOT, 'index.html')
  let html = fs.readFileSync(file, 'utf8')
  html = html.replace(
    /<title>[\s\S]*?<\/title>/,
    '<title>Houston HVAC Repair | Love Air · 24/7 AC &amp; Heating</title>'
  )
  html = html.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="Houston HVAC repair fulfilled by Love Air Conditioning Company. 24/7 emergency AC and heating. ${STREET}, Houston, TX ${ZIP}. Call ${PHONE}." />`
  )
  html = html.replace(
    /<h1>[\s\S]*?<\/h1>/,
    '<h1>Houston HVAC Repair from Love Air — 24/7 AC &amp; Heating</h1>'
  )
  html = html.replace(
    /<p class="lede">[\s\S]*?<\/p>/,
    `<p class="lede">Love Air Conditioning Company is the fulfillment company: licensed Houston HVAC from ${STREET} (${ZIP}). This site is how north-Houston homeowners hire that team. Call ${PHONE}.</p>`
  )
  if (!html.includes('id="who-fulfills"')) {
    html = html.replace(
      /<main class="container">/,
      `<main class="container">
    <section id="who-fulfills">
      <h2>Who shows up when you call</h2>
      <p><strong>Love Air Conditioning Company</strong> fulfills every form, call, and chat on this site. Shop address: ${STREET}, ${CITY}, ${REGION} ${ZIP}. Office hours Mon–Sat 8am–8pm, Sun 9am–4pm. <strong>24/7 emergency service</strong> is Love Air’s current published claim — we keep it because it is theirs, not because lead-gen templates like the phrase.</p>
      <p>Joe Cunningham operates Love Air and this Houston TradeDeskPro inbox. He founded Technical Arts Center, covered by ACHR News in 2018. We do not invent extra credentials here. <a href="/about/">More about Love Air</a>.</p>
      <ul class="related-pills">
        <li><a href="/ac-repair-houston/">AC repair</a></li>
        <li><a href="/emergency-ac-repair-houston/">Emergency AC</a></li>
        <li><a href="/heating-repair-houston/">Heating repair</a></li>
        <li><a href="/furnace-repair-houston/">Furnace repair</a></li>
        <li><a href="/hvac-repair-houston/">HVAC repair</a></li>
        <li><a href="/ac-replacement-houston/">AC replacement</a></li>
        <li><a href="/hvac-maintenance-houston/">Maintenance</a></li>
        <li><a href="/about/">About</a></li>
      </ul>
    </section>`
    )
  }
  html = html.replace(
    /<h2>Why Choose Houston TX HVAC Repair\?<\/h2>/,
    '<h2>Why call this Houston line?</h2>'
  )
  fs.writeFileSync(file, html)
  console.log('homepage identity updated')
}
rewriteHomepageIdentity()

function patchBlogs() {
  const dir = path.join(ROOT, 'blog')
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.html'))
  for (const f of files) {
    const fp = path.join(dir, f)
    let html = fs.readFileSync(fp, 'utf8')
    html = html.replace(
      /<a href="\/">← houstontxhvacrepair\.com<\/a>/g,
      `<a href="/">← Love Air · Houston TX HVAC Repair</a>\n    <a class="phone" href="tel:${TEL}">${PHONE}</a>`
    )
    html = html.replace(
      /<p>Local HVAC help for homeowners — practical guides and when to call a pro\.<\/p>\s*<a class="button" href="\/">Visit home<\/a>/g,
      `<p>Love Air Conditioning Company handles 24/7 emergency AC and heating for Greater Houston from ${STREET}, ${ZIP}. Call, request service, or use chat on this page.</p>
      <a class="button" href="tel:${TEL}">Call ${PHONE}</a>
      <a class="button" href="/contact/" style="margin-left:8px;background:#1a3a52;">Request service</a>
      <p style="margin-top:12px;"><a href="/ac-repair-houston/">AC repair</a> · <a href="/heating-repair-houston/">Heating repair</a> · <a href="/emergency-ac-repair-houston/">Emergency AC</a> · <a href="/hvac-repair-houston/">HVAC repair</a></p>`
    )
    html = html.replace(
      /<p>© \d+ houstontxhvacrepair\.com<\/p>\s*<p><a href="\/">Home<\/a> · <a href="\/blog\/index.html">Blog<\/a><\/p>/,
      `<p>© 2026 Love Air Conditioning Company · Houston TX HVAC Repair</p>
    <p><a href="/">Home</a> · <a href="/blog/index.html">Blog</a> · <a href="tel:${TEL}">${PHONE}</a> · ${STREET}, ${ZIP}</p>`
    )
    if (!html.includes('retell-chat-widget.js')) {
      html = html.replace(
        /<\/head>/,
        `  <script src="/js/retell-chat-widget.js" defer></script>\n  <script src="/js/leads.js" defer></script>\n</head>`
      )
    }
    fs.writeFileSync(fp, html)
  }
  console.log('patched', files.length, 'blog files')
}
patchBlogs()

function writeSitemap() {
  const locs = [
    ['https://houstontxhvacrepair.com/', '1.0'],
    ['https://houstontxhvacrepair.com/about/', '0.9'],
    ['https://houstontxhvacrepair.com/services/', '0.9'],
    ['https://houstontxhvacrepair.com/ac-repair-houston/', '0.95'],
    ['https://houstontxhvacrepair.com/emergency-ac-repair-houston/', '0.95'],
    ['https://houstontxhvacrepair.com/heating-repair-houston/', '0.9'],
    ['https://houstontxhvacrepair.com/furnace-repair-houston/', '0.9'],
    ['https://houstontxhvacrepair.com/hvac-repair-houston/', '0.9'],
    ['https://houstontxhvacrepair.com/ac-replacement-houston/', '0.9'],
    ['https://houstontxhvacrepair.com/hvac-maintenance-houston/', '0.85'],
    ['https://houstontxhvacrepair.com/new-system-sales-installation/', '0.8'],
    ['https://houstontxhvacrepair.com/ac-health-check/', '0.8'],
    ['https://houstontxhvacrepair.com/contact/', '0.85'],
    ['https://houstontxhvacrepair.com/cypress-hvac-repair/', '0.75'],
    ['https://houstontxhvacrepair.com/cypress-ac-repair/', '0.75'],
    ['https://houstontxhvacrepair.com/cypress-heating-repair/', '0.75'],
    ['https://houstontxhvacrepair.com/cypress-furnace-repair/', '0.75'],
    ['https://houstontxhvacrepair.com/klein-hvac-repair/', '0.7'],
    ['https://houstontxhvacrepair.com/klein-ac-repair/', '0.75'],
    ['https://houstontxhvacrepair.com/jersey-village-hvac-repair/', '0.7'],
    ['https://houstontxhvacrepair.com/spring-hvac-repair/', '0.7'],
    ['https://houstontxhvacrepair.com/tomball-hvac-repair/', '0.7'],
    ['https://houstontxhvacrepair.com/the-woodlands-hvac-repair/', '0.7'],
    ['https://houstontxhvacrepair.com/the-woodlands-ac-repair/', '0.75'],
    ['https://houstontxhvacrepair.com/humble-hvac-repair/', '0.7'],
    ['https://houstontxhvacrepair.com/humble-heating-repair/', '0.75'],
    ['https://houstontxhvacrepair.com/magnolia-hvac-repair/', '0.7'],
    ['https://houstontxhvacrepair.com/magnolia-furnace-repair/', '0.75'],
    ['https://houstontxhvacrepair.com/blog/index.html', '0.6'],
  ]
  const blogDir = path.join(ROOT, 'blog')
  for (const f of fs.readdirSync(blogDir).filter((x) => x.endsWith('.html') && x !== 'index.html')) {
    locs.push([`https://houstontxhvacrepair.com/blog/${f}`, '0.5'])
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${locs
  .map(
    ([loc, pri]) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${pri}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`
  fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml)
  console.log('wrote sitemap.xml', locs.length, 'urls')
}
writeSitemap()
