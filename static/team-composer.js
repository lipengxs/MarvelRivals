(function () {
  if (typeof window.gtag !== 'function') { window.dataLayer = window.dataLayer || []; window.gtag = function(){ window.dataLayer.push(arguments); }; window.gtag('js', new Date()); window.gtag('config', 'G-9H4TYXV5E9'); var analytics = document.createElement('script'); analytics.async = true; analytics.src = 'https://www.googletagmanager.com/gtag/js?id=G-9H4TYXV5E9'; document.head.appendChild(analytics); }
  if (typeof window.marvelDecisionTrack !== 'function') window.marvelDecisionTrack = function (eventName, parameters) { window.gtag('event', eventName, parameters || {}); };
  var jobs = {
    DUELIST: ['pressure', 'finish'],
    VANGUARD: ['frontline space', 'objective'],
    STRATEGIST: ['protection', 'reset']
  };
  function safe(value) { var n = document.createElement('span'); n.textContent = value || ''; return n.innerHTML; }
  function byName(name) { return (window.officialHeroesData || []).find(function (hero) { return hero.name === name || hero.nickname === name; }); }
  function renderOptions() {
    var select = document.getElementById('hero-select');
    if (!select || !window.officialHeroesData) return;
    window.officialHeroesData.slice().sort(function(a,b){return a.name.localeCompare(b.name);}).forEach(function (hero) {
      var option = document.createElement('option'); option.value = hero.name; option.textContent = hero.name + ' — ' + hero.careerIconName; select.appendChild(option);
    });
  }
  function render() {
    var select = document.getElementById('hero-select');
    var output = document.getElementById('composer-output');
    var mode = document.getElementById('mode-select').value;
    var map = document.getElementById('map-context').value;
    var priority = document.getElementById('team-priority').value;
    var registry = window.seasonDecisionRegistry || {};
    var selected = Array.prototype.slice.call(select.selectedOptions).map(function (option) { return byName(option.value); }).filter(Boolean);
    if (!selected.length) { output.innerHTML = '<p>Select one to six heroes to review coverage.</p>'; return; }
    if (selected.length > 6) { output.innerHTML = '<p class="error">Choose no more than six heroes. Nothing has been calculated.</p>'; return; }
    var roles = selected.reduce(function (acc, hero) { var role = (hero.careerIconName || '').toUpperCase(); acc[role] = (acc[role] || 0) + 1; return acc; }, {});
    var covered = Object.keys(roles).reduce(function (acc, role) { return acc.concat(jobs[role] || []); }, []);
    var all = ['pressure', 'frontline space', 'protection', 'objective', 'finish', 'reset'];
    var missing = all.filter(function (job) { return covered.indexOf(job) === -1; });
    var repeated = Object.keys(roles).filter(function (role) { return roles[role] > 1; });
    var list = selected.map(function (hero) { return '<li><a href="/heroes/' + safe(String(hero.name).toLowerCase().replace(/[^a-z0-9]+/g, '-')) + '/">' + safe(hero.name) + '</a> — ' + safe(hero.careerIconName) + '</li>'; }).join('');
    var checks = [
      'Confirm the current official version before treating any historic ability value as current.',
      mode === 'Competitive' ? 'Agree a substitute pick and a reset call before queueing competitive play.' : 'Use the lineup to practise a clear entry, danger call and regroup rather than chase a predicted result.',
      map === 'Objective hold and contest space' ? 'Name who contests first and who protects the retreat route when the objective becomes unsafe.' : 'Name the first entry route and the regroup route before locking in.',
      priority === 'Practice a comfortable hero pool' ? 'Prioritise execution comfort over an unverified Meta claim.' : 'Check whether the stated team priority has an owner and a reset plan.',
      'Treat Team-Up as unavailable until a dated official source confirms it for the applicable version.'
    ];
    var patchStatus = registry.patchVersion || 'Unconfirmed — no verified patch-specific record is active';
    output.innerHTML = '<h2>Coverage review</h2><p class="label">EXPLAINABLE EDITORIAL FRAMEWORK — NOT A WIN-RATE PREDICTION</p><div class="result-grid"><div><b>Selected roles</b><p>' + safe(Object.keys(roles).map(function(r){return r + ' × ' + roles[r];}).join(' · ')) + '</p></div><div><b>Covered team jobs</b><p>' + safe(covered.join(' · ')) + '</p></div><div><b>Possible gaps</b><p>' + safe(missing.length ? missing.join(' · ') : 'No framework gap detected; verify fit in a real match.') + '</p></div><div><b>Repeated roles</b><p>' + safe(repeated.length ? repeated.join(' · ') : 'None') + '</p></div></div><h3>Selected context</h3><p><b>Mode:</b> ' + safe(mode) + ' · <b>Map consideration:</b> ' + safe(map) + ' · <b>Team priority:</b> ' + safe(priority) + '</p><h3>Decision-data status</h3><p><b>Patch record:</b> ' + safe(patchStatus) + '<br><b>Player context:</b> used only in this browser to tailor the checklist; no account, match, or performance data is collected.<br><b>External statistics:</b> not connected to this tool. Review their version, mode, platform, rank range, sample and collection period separately.</p><h3>Before you lock in</h3><ul>' + checks.map(function (check) { return '<li>' + safe(check) + '</li>'; }).join('') + '</ul><h3>Selected hero pages</h3><ul>' + list + '</ul><p><b>Boundary:</b> this tool does not calculate a win rate, tier, counter, synergy strength, or live statistic. <a href="/season/data-sources">Read the decision-data policy</a>.</p>';
  }
  function init() { renderOptions(); document.getElementById('composer-form').addEventListener('submit', function (event) { event.preventDefault(); render(); if (typeof window.marvelDecisionTrack === 'function') window.marvelDecisionTrack('team_composer_submit', { selected_hero_count: document.getElementById('hero-select').selectedOptions.length, mode: document.getElementById('mode-select').value }); }); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
}());
