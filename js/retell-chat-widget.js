/**
 * Retell Website Chat Widget — shared injector for all pages.
 * Pattern matches hillcountryhvacrepair.com (official retell-widget-v2 embed).
 * Docs: https://docs.retellai.com/deploy/chat-widget
 *
 * Public keys are domain-restricted in the Retell dashboard.
 * Ensure houstontxhvacrepair.com (and www) are on the allowlist for this public key.
 */
(function () {
  if (document.getElementById("retell-widget")) return;

  var s = document.createElement("script");
  s.id = "retell-widget";
  s.src = "https://dashboard.retellai.com/retell-widget-v2.js";
  s.type = "module";
  s.setAttribute("data-public-key", "public_key_63669e34a0a616e92b6f7");
  s.setAttribute("data-agent-id", "agent_e04488b904c425ae584e7c9eda");
  // Customer-facing Love Air chrome only. Do not change public key or agent id
  // (routing into Joe / Love Air's TDP account).
  s.setAttribute("data-bot-name", "Love Air Assistant");
  s.setAttribute("data-title", "Love Air");
  s.setAttribute("data-fab-text", "Chat with Love Air");
  s.setAttribute(
    "data-popup-message",
    "Hi, I'm the Love Air assistant. How can we help with your heating or air conditioning today?"
  );
  s.setAttribute("data-show-ai-popup", "true");
  s.setAttribute("data-show-ai-popup-time", "4");
  s.setAttribute("data-auto-open", "false");
  s.setAttribute("data-theme-color", "#00014d");
  s.setAttribute("data-component-color", "#f04999");
  s.setAttribute("data-logo-url", "https://houstontxhvacrepair.com/img/love-air-logo.png");
  document.head.appendChild(s);
})();
