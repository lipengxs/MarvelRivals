(function () {
  if (typeof window.gtag !== 'function') { window.dataLayer = window.dataLayer || []; window.gtag = function(){ window.dataLayer.push(arguments); }; window.gtag('js', new Date()); window.gtag('config', 'G-9H4TYXV5E9'); var analytics = document.createElement('script'); analytics.async = true; analytics.src = 'https://www.googletagmanager.com/gtag/js?id=G-9H4TYXV5E9'; document.head.appendChild(analytics); }
  if (typeof window.marvelDecisionTrack !== 'function') window.marvelDecisionTrack = function (eventName, parameters) { window.gtag('event', eventName, parameters || {}); };
  function slug(value) { return String(value || '').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''); }
  function safe(value) { var node = document.createElement('span'); node.textContent = value || ''; return node.innerHTML; }
  function hero() {
    var name = document.querySelector('h1');
    if (!name || !window.officialHeroesData) return null;
    var key = slug(name.textContent);
    return window.officialHeroesData.find(function (item) { return slug(item.name || item.nickname) === key; }) || null;
  }
  function mountCard() {
    var registry = window.seasonDecisionRegistry;
    var item = hero();
    if (!registry || !item || document.getElementById('season-decision-card')) return;
    var role = (item.careerIconName || (item.roleTags || [])[0] || '').toUpperCase();
    var job = registry.roleJobs[role];
    if (!job) return;
    var target = document.querySelector('.content-band');
    if (!target) return;
    var card = document.createElement('section');
    card.id = 'season-decision-card';
    card.className = 'season-decision-card';
    card.innerHTML = '<h2>Season decision card</h2>' +
      '<p class="decision-label">OFFICIAL PROFILE + EDITORIAL FRAMEWORK</p>' +
      '<div class="decision-grid"><div><b>Current role</b><span>' + safe(role) + '</span></div><div><b>Role source</b><a href="' + safe(item.sourceUrl || registry.sources.officialRoster.url) + '" target="_blank" rel="noopener noreferrer">Official profile</a></div><div><b>Source date</b><span>' + safe(item.sourceDate || registry.sources.officialRoster.reviewedAt) + '</span></div><div><b>Registry review</b><span>' + safe(item.reviewedAt || registry.reviewedAt) + '</span></div><div><b>Patch record</b><span>' + safe(item.patchVersion || registry.patchVersion) + '</span></div></div>' +
      '<h3>Team problem this role can help address</h3><p>' + job.solves.map(safe).join(' · ') + '</p>' +
      '<h3>Team-Up status</h3><p>No Team-Up association is displayed here until a dated official source is recorded. <a href="/hero-team">Browse the historical Team-Up archive</a>.</p>' +
      '<h3>Use-condition check</h3><p>' + safe(job.check) + ' Before applying it, confirm the mode, map route, team communication, and player comfort with this hero.</p>' +
      '<p class="decision-status"><b>Patch status:</b> ' + safe(registry.currentStatus) + ' <a href="/season/">Review the season hub</a> · <a href="/season/data-sources">How this evidence is evaluated</a>.</p>' +
      '<p class="decision-boundary"><b>Do not infer:</b> this card is not a tier ranking, win-rate claim, counter list, or live-stat feed. Ability values elsewhere on this legacy page need a version and official source review before being used for a current-season decision. Team-Up details require a separately verified official source.</p>';
    var style = document.createElement('style');
    style.textContent = '.season-decision-card{background:#101a2f;color:#fff;border-radius:10px;padding:24px;margin-bottom:28px}.season-decision-card h2{color:#fff;margin:0 0 8px}.season-decision-card h3{font-size:1rem;margin:22px 0 6px}.season-decision-card a{color:#9fd2ff;font-weight:700}.decision-label{font-size:.78rem;font-weight:700;letter-spacing:.08em;color:#9fd2ff}.decision-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}.decision-grid div{background:rgba(255,255,255,.08);border-radius:8px;padding:12px}.decision-grid b,.decision-grid span{display:block}.decision-grid b{font-size:.75rem;text-transform:uppercase;color:#c7d4ea;margin-bottom:4px}.decision-status{border-left:3px solid #67b7ff;padding-left:12px}.decision-boundary{color:#d7e1ef;font-size:.94rem}@media(max-width:680px){.decision-grid{grid-template-columns:1fr}}';
    target.parentNode.insertBefore(style, target);
    target.parentNode.insertBefore(card, target);
    document.querySelectorAll('.ability-group').forEach(function (group) {
      if (group.querySelector('.legacy-version-boundary')) return;
      var boundary = document.createElement('p');
      boundary.className = 'legacy-version-boundary';
      boundary.textContent = 'Historical ability snapshot: verify the current official profile and version before using these values for a season decision.';
      group.insertBefore(boundary, group.firstChild);
    });
    if (typeof window.marvelDecisionTrack === 'function') window.marvelDecisionTrack('hero_decision_open', { hero_name: item.name });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountCard); else mountCard();
}());
