/* Source registry for the independent Marvel Rivals season decision experience.
 * Do not add a hero-specific balance claim until an official patch source is recorded here. */
window.seasonDecisionRegistry = {
  reviewedAt: '2026-07-29',
  patchVersion: '20260723 — official patch record reviewed July 29, 2026',
  currentStatus: 'Version 20260723 is recorded from an official source. It documents Thebes, Esports features, a Team-Up VFX preference and fixes; it does not by itself establish a live hero tier, balance-value change or Team-Up pairing availability.',
  evidenceLevels: {
    official: { label: 'Official documented fact', use: 'May support a versioned factual statement when the exact source and date are displayed.' },
    editorial: { label: 'Editorial decision framework', use: 'May organise a player’s choices, but never claim a live win rate, Meta position, or counter result.' },
    contextual: { label: 'Context supplied by the player', use: 'May personalise a checklist in this browser; it is not collected as match or account data.' },
    external: { label: 'Third-party observation', use: 'May be cited only with provider, version, mode, platform, rank range, sample and collection period.' }
  },
  freshnessRules: {
    officialProfile: 'Review after any official roster, role, ability, mode or Team-Up update.',
    patchRecord: 'Review on publication day; keep unresolved impact claims marked Unconfirmed.',
    externalObservation: 'Do not show a figure without its collection period; expire the observation when its version is unknown.',
    editorialFramework: 'Review every 90 days and whenever an official rule change invalidates a checklist.'
  },
  decisionFactors: [
    { id: 'version', label: 'Version and patch state', evidence: 'official', question: 'Which confirmed version applies, and has the source been reviewed since it changed?' },
    { id: 'role', label: 'Role coverage', evidence: 'official + editorial', question: 'Does the lineup cover pressure, space, protection, objective presence, finishing and reset planning?' },
    { id: 'mode-map', label: 'Mode, objective and route', evidence: 'contextual', question: 'What must the team contest, how will it enter, and where can it regroup?' },
    { id: 'comfort', label: 'Player comfort and communication', evidence: 'contextual', question: 'Can each player execute the selected hero and communicate the entry, danger and reset calls?' },
    { id: 'team-up', label: 'Team-Up availability', evidence: 'official', question: 'Is the pairing active in the applicable version according to a dated official source?' },
    { id: 'performance', label: 'External performance signal', evidence: 'external', question: 'If a third-party figure is used, are its version, mode, platform, rank range, sample and collection period visible?' }
  ],
  sources: {
    officialRoster: {
      label: 'Official Marvel Rivals hero profiles',
      url: 'https://www.marvelrivals.com/',
      reviewedAt: '2026-07-28'
    },
    patch20260723: {
      label: 'Marvel Rivals Version 20260723 Patch Notes',
      url: 'https://www.marvelrivals.com/20260722/41525_1308589.html',
      publishedAt: '2026-07-22',
      effectiveAt: '2026-07-23T09:00:00Z',
      reviewedAt: '2026-07-29',
      scope: 'Thebes, Esports features, Team-Up VFX preference and documented fixes; no hero tier conclusion.'
    },
    teamUpArchive: {
      label: 'Existing Team-Up archive',
      dataFile: '/static/heros-team.js',
      status: 'Historical discovery only; current availability requires a dated official source.'
    },
    legacyAbilities: {
      label: 'Existing legacy ability archive',
      dataFile: '/static/heros-data.js',
      status: 'Do not use a numeric value for a current decision without version and official source review.'
    }
  },
  roleJobs: {
    DUELIST: { solves: ['create pressure', 'convert an opening', 'finish a focused target'], check: 'Confirm a safe angle, a timing call, and a reset route with the team.' },
    VANGUARD: { solves: ['shape frontline space', 'contest an objective', 'protect an entry or retreat'], check: 'Confirm who follows the entry and where the team resets if space is lost.' },
    STRATEGIST: { solves: ['sustain the team plan', 'protect vulnerable allies', 'preserve a reset window'], check: 'Confirm sightlines, resource timing, and the team’s danger call.' }
  }
};
