# Production release and traffic guardrails

This checklist protects existing Marvel Rivals organic traffic while publishing the independent decision-guide experience. It is a release procedure, not permission to deploy.

## 1. Freeze the baseline before release

Record the prior 28 days in GSC by page and query:

| Scope | Required check |
| --- | --- |
| `/guides/rivals-tracker` | Clicks, impressions, CTR, average position; `marvel rivals tracker`, `rivals tracker`, `marvel rivals stats`, `marvel rivals live match tracker` queries. |
| `/` | Brand-query clicks, impressions, CTR and average position. |
| `/download` | `marvel rivals download`, PC, launcher and console-query clicks, impressions and CTR. |
| `/heroes/`, `/hero-team` | Existing discovery clicks and query set. |

Keep the exported report with `GSC_BASELINE_2026-07-04.md`; do not use a sitewide total as the only safety metric.

## 2. Release candidate checks

Before publishing, confirm each route returns 200 on the production domain, not only locally:

- `/guides/rivals-tracker`
- `/season/`
- `/team-composer`
- `/guides/ranked-team-comps`
- `/guides/marvel-rivals-map-guide`
- `/guides/thebes-map-guide`
- `/patches/20260723-patch-notes`

For every route, check canonical URL, robots state, title, one visible H1, source links, mobile navigation and analytics event loading.

## 3. Tracker-specific safety gate

The production Tracker page must not:

- Offer a ZIP, APK, launcher or other game/tracker download.
- Claim this site operates live tracking, live Meta, account lookup, win-rate data or rank history.
- Show an undated hero ranking or a screenshot that appears to be current data without an explicit historical label.

It must retain its existing URL, canonical and `<h1>Marvel Rivals Tracker</h1>`.

## 4. Deploy verification

After release, compare production HTML with the release candidate. Confirm that new pages are not 404, that `sitemap.xml` contains the new routes, and that the production page title/content no longer comes from an older build.

Submit or refresh the sitemap through the existing Search Console process only after these checks pass.

## 5. 7-day technical watch

Check Search Console coverage, 404s, canonical selection, mobile usability and rich-result warnings. Fix technical faults immediately; do not undo a source-correct content change because of one day of ranking movement.

## 6. 28-day traffic review

Compare page/query data with the frozen baseline.

- If Tracker impressions or clicks decline by more than 15%, split the change by query, CTR, position and SERP appearance before changing content.
- Check whether the new map, ranked-composition, beginner and patch pages have begun receiving impressions.
- Review `third_party_tracker_click`, `team_composer_submit`, `patch_source_click` and official-store click events in analytics.

## 7. 90-day outcome review

Evaluate whether non-Tracker organic clicks increased without losing Tracker intent, whether source-linked patch pages earned discovery, and which content clusters deserve further official-source research.
