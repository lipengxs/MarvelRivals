(function () {
  window.marvelDecisionTrack = function (eventName, parameters) {
    if (typeof window.gtag === 'function') window.gtag('event', eventName, parameters || {});
  };
  var page = location.pathname.replace(/[/]+$/, '') || '/';
  if (page === '/season') window.marvelDecisionTrack('season_hub_view');
  document.addEventListener('click', function (event) {
    var link = event.target.closest('[data-analytics-event]');
    if (link) window.marvelDecisionTrack(link.getAttribute('data-analytics-event'));
  });
}());
