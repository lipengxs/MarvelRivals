// Parsed from official Marvel Rivals hero profile pages on 2026-06-28.
var heroAbilitiesData = {
    "adam-warlock": {
        "nickname": "ADAM WARLOCK",
        "realName": "ADAM WARLOCK",
        "roles": [
            "STRATEGIST"
        ],
        "intro": "The genetically-engineered Adam Warlock wields mighty Quantum Magic, allowing him to connect and heal souls with a gentle touch. When the time comes for his allies to unite, Warlock emerges as the unwavering epicenter of cosmic justice!",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Quantum Magic",
                "description": "Launch quantum energy to deal damage",
                "key": "Left Click",
                "icon": "static/heroes/abilities/adam-warlock-1-quantum-magic.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast direct hit"
                    },
                    {
                        "label": "Damage",
                        "value": "60 damage per round"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 20m, decreasing to 60% at 40m"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "2 rounds per second"
                    },
                    {
                        "label": "Ammo",
                        "value": "15"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "Yes"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/996e6c76-b2b8-42c6-9e17-c74f25768123.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Karmic Revival",
                "description": "Take to the skies, entering a flying state and swiftly surge forward",
                "key": "F",
                "icon": "static/heroes/abilities/adam-warlock-2-karmic-revival.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "MOVEMENT BOOST",
                        "value": "4m/s"
                    },
                    {
                        "label": "MAXIMUM ENERGY",
                        "value": "120"
                    },
                    {
                        "label": "ENERGY COST",
                        "value": "30/s"
                    },
                    {
                        "label": "ENERGY RECOVERY SPEED",
                        "value": "8/s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260311/6c4e7eed-03e0-472a-a3a5-8f81cbd9cf4a.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Karmic Revival",
                "description": "Awaken the karma of allies to revive them. Allies revived have lower health but enjoy a brief period of Invincibility",
                "key": "Q",
                "icon": "static/heroes/abilities/adam-warlock-3-karmic-revival.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Persistent spell field that surrounds the caster"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Revive allies within range, centered on Adam. Continuously monitor for fallen allies within this range; if they enter the area, they can be revived at the casting location"
                    },
                    {
                        "label": "Health Upon Revival",
                        "value": "30% of the Max Health"
                    },
                    {
                        "label": "Range",
                        "value": "35m spherical radius"
                    },
                    {
                        "label": "Duration",
                        "value": "10s"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "4500"
                    },
                    {
                        "label": "Health Upon Revival",
                        "value": "Allies revived will be blessed with Bonus Health equal to 70% of their Maximum Health with a 5s duration. Bonus Health falloff begins at 5s, decreasing to 0 in 2s."
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/bedb33ea-a7d7-482f-a3ba-695afc84d7df.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Soul Bond",
                "description": "Forge a soul bond with allies, granting Healing Over Time and distributing damage taken across the bond",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/adam-warlock-4-soul-bond.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Casting",
                        "value": "Instant Cast"
                    },
                    {
                        "label": "Special Effect 1",
                        "value": "Adam Warlock will share a portion of the damage sustained by linked allies. If Adam Warlock sustains damage that would KO him due to the link, then the link will be broken, and he will retain 1 Health. The link will also break once enough damage is sustained, if Adam Warlock or the linked ally leave the link's range, or after a certain length of time has passed"
                    },
                    {
                        "label": "Special Effect 2",
                        "value": "Adam can hover and attack during the ability's duration"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "15/s"
                    },
                    {
                        "label": "Range",
                        "value": "15m"
                    },
                    {
                        "label": "Duration",
                        "value": "6s"
                    },
                    {
                        "label": "Maximum Damage Shared Per Target",
                        "value": "250"
                    },
                    {
                        "label": "Cooldown",
                        "value": "40s"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/6d9c5f2f-ad6d-4f5e-9a1d-bf039b2d6fdc.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Avatar Life Stream",
                "description": "Target an ally for a bouncing stream of healing energy, which also heals himself upon casting; self-targets if no ally is selected",
                "key": "E",
                "icon": "static/heroes/abilities/adam-warlock-5-avatar-life-stream.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Targeted"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Bouncing target does not include Adam Warlock"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "95"
                    },
                    {
                        "label": "Healing Amount (Self)",
                        "value": "35"
                    },
                    {
                        "label": "Number of Bounces",
                        "value": "2"
                    },
                    {
                        "label": "Range",
                        "value": "20m spherical radius"
                    },
                    {
                        "label": "Cooldown",
                        "value": "2 charges, with each charge taking 6s to recharge; when a critical hit lands on an enemy, reduce the cooldown time of Avatar Life Stream by 1s."
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/00ceedf0-0fab-45f5-bcb6-009797271b65.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Cosmic Cluster",
                "description": "Gather quantum energy into a cluster and then swiftly launch it at the enemy",
                "key": "Right Click",
                "icon": "static/heroes/abilities/adam-warlock-6-cosmic-cluster.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Charged release, with multiple delayed projectiles"
                    },
                    {
                        "label": "Damage",
                        "value": "38"
                    },
                    {
                        "label": "Maximum Projectile Count",
                        "value": "5"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "The firing interval for a single charged shot is 0.3s, while the interval for multiple shots is 0.07s"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "100 m/s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Cosmic Cluster shares ammo with Quantum Magic, each hit reduces the cooldown of Avatar Life Stream by 0.6s."
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/cac2ca73-29e2-4ea4-87f9-1f1c0c24f382.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Regenerative Cocoon",
                "description": "Once his body perishes, Adam Warlock can freely move as a soul and reforge his body at a chosen spot",
                "key": "Passive",
                "icon": "static/heroes/abilities/adam-warlock-7-regenerative-cocoon.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Cooldown",
                        "value": "105s"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/b85e229f-e718-4402-9c78-3ce82b3b5ee0.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "HEAVENLY HARMONY",
                "description": "Storm channels her elemental power into Adam Warlock. When Adam uses Soaring Surge, his movement speed is increased. While flying, Adam leaves behind a storm-charged trail that heals and speeds up allies within it",
                "key": "F",
                "icon": "static/heroes/abilities/adam-warlock-8-heavenly-harmony.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Movement Boost",
                        "value": "5m/s"
                    },
                    {
                        "label": "Maximum Energy",
                        "value": "120"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "30/s"
                    },
                    {
                        "label": "Energy Recovery Speed",
                        "value": "8/s"
                    },
                    {
                        "label": "Trail Width",
                        "value": "4m"
                    },
                    {
                        "label": "Trail Duration",
                        "value": "5s"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "35/s"
                    },
                    {
                        "label": "Movement Boost",
                        "value": "0.25"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260323/aba481e1-c898-43e5-be33-be8393bae864.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "250"
            },
            {
                "label": "Movement Speed",
                "value": "6 m/s"
            }
        ],
        "forms": [
            "ADAM WARLOCK"
        ]
    },
    "angela": {
        "nickname": "ANGELA",
        "realName": "ALDRIF ODINSDOTTIR",
        "roles": [
            "VANGUARD"
        ],
        "intro": "As the Hand of Heven, the warrior called Angela embodies unwavering courage and determination. Able to manipulate Ichors into various weapons and unfurl her wings to soar across the battlefield, she is ready to deliver divine judgment upon her foes!",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Spear of Ichors",
                "description": "Lunge forward with your spear, dealing damage that increases with Attack Charge. At full charge, Spear of Ichor can launch up enemies",
                "key": "Left Click",
                "icon": "static/heroes/abilities/angela-1-spear-of-ichors.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Melee"
                    },
                    {
                        "label": "Damage",
                        "value": "45"
                    },
                    {
                        "label": "Charge-Damage Conversion Ratio",
                        "value": "35%"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "7m"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "0.96s per hit"
                    },
                    {
                        "label": "Special Effect",
                        "value": "At full charge, Spear of Ichor can launch up enemies and cause 20 extra damage."
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20250911/5a3ec9ee-6a3b-44ac-b64c-ebb34f28c425.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Axes Of Ichors",
                "description": "Alternate powerful strikes forward with twin axes, dealing increased damage as Attack Charge grows. The fourth strike propels you forward in a swift dash",
                "key": "Left Click",
                "icon": "static/heroes/abilities/angela-2-axes-of-ichors.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Melee"
                    },
                    {
                        "label": "Damage",
                        "value": "First three strikes: 30; the forth strike: 50."
                    },
                    {
                        "label": "Charge-Damage Conversion Ratio",
                        "value": "45%"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "4m"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "First three strikes: 0.4s per hit; the forth strike: 0.6s per hit."
                    },
                    {
                        "label": "Special Effect",
                        "value": "The fourth strike propels you forward in a swift dash."
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20250911/6e3c4ad4-32a2-4140-83f3-03e236885da2.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "SHIELDED STANCE",
                "description": "Transform Ichors into a shield, gaining Attack Charge when absorbing damage",
                "key": "Right Click",
                "icon": "static/heroes/abilities/angela-3-shielded-stance.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Maximum Shield Value",
                        "value": "350"
                    },
                    {
                        "label": "Cooldown",
                        "value": "1s"
                    },
                    {
                        "label": "Cooldown After Destroyed",
                        "value": "4s"
                    },
                    {
                        "label": "Delayed Recovery After Release",
                        "value": "2s"
                    },
                    {
                        "label": "Recovery Speed",
                        "value": "60/s"
                    },
                    {
                        "label": "Damage Resisted-Charge Conversion Ratio",
                        "value": "35%"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250911/89c12b85-cd4c-4d3e-a6b8-b628c6de8eba.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Seraphic Soar",
                "description": "Glide freely through the air. Continuous flight builds Attack Charge",
                "key": "PASSIVE",
                "icon": "static/heroes/abilities/angela-4-seraphic-soar.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "PASSIVE"
                    },
                    {
                        "label": "Time Required to Enter Glide",
                        "value": "0.1s"
                    },
                    {
                        "label": "Glide Activation Condition",
                        "value": "Maintain the forward speed faster than 5m/s for 1s"
                    },
                    {
                        "label": "Glide Speed",
                        "value": "10m/s"
                    },
                    {
                        "label": "Passive Energy Gained During Glide",
                        "value": "22.2/s"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20250911/06ebb164-e0fe-494a-bfe9-58c81de0d369.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Divine Judgement",
                "description": "Dive downward, switch to twin axes and infuse the ground with Ichors to create a Divine Judgement Zone upon impact. Within the zone, gain enhanced Speed and attacks grant Bonus Health to self and nearby allies",
                "key": "E",
                "icon": "static/heroes/abilities/angela-5-divine-judgement.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Damage",
                        "value": "Hit damage: 30; damage over time: 12.5/s"
                    },
                    {
                        "label": "Damage Over Time Spell Field Range",
                        "value": "A cylindrical spell field with a radius of 8m and a height of 2m."
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    },
                    {
                        "label": "Movement Boost (Self)",
                        "value": "35%"
                    },
                    {
                        "label": "Spell Field Duration",
                        "value": "6s"
                    },
                    {
                        "label": "Bonus Health",
                        "value": "Within the Divine Judgement zone, Angela’s each Axes of Ichors hit grants 50 Bonus Health to herself and 25 Bonus Health to allies within the area."
                    },
                    {
                        "label": "Bonus Max Health",
                        "value": "200"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250911/4738a04f-deef-40f5-9e53-51c71b8dcaa7.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Wingblade Ascent",
                "description": "Take to the skies, switching back to Spear of Ichors",
                "key": "E",
                "icon": "static/heroes/abilities/angela-6-wingblade-ascent.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Ascent Height",
                        "value": "8m"
                    },
                    {
                        "label": "Ascent Duration",
                        "value": "0.35s"
                    },
                    {
                        "label": "Ascent Elevation Angle",
                        "value": "60°"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250911/32ac3b89-8941-4ee9-9b81-fd14fdfff36b.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Assassin's Charge",
                "description": "Enter an accelerated dash state, enemies struck head-on are carried through the air for a short distance",
                "key": "Shift",
                "icon": "static/heroes/abilities/angela-7-assassin-s-charge.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Shift"
                    },
                    {
                        "label": "Cooldown",
                        "value": "4s"
                    },
                    {
                        "label": "Maximum Energy",
                        "value": "100"
                    },
                    {
                        "label": "Energy Recovery Speed",
                        "value": "12.5/s"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "25/s; 75/s when piercing an enemy"
                    },
                    {
                        "label": "One-time Energy Cost",
                        "value": "20"
                    },
                    {
                        "label": "Energy Required to Activate the Ability",
                        "value": "30"
                    },
                    {
                        "label": "Recover Delay",
                        "value": "2"
                    },
                    {
                        "label": "Dash State Speed",
                        "value": "18 m/s"
                    },
                    {
                        "label": "Maximum Enemies Could Be Carried",
                        "value": "2"
                    },
                    {
                        "label": "Passive Energy Gained During the Dash",
                        "value": "25/s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Every enemy pierced grants Angela with a 50/s passive energy recovery."
                    },
                    {
                        "label": "Piercing Damage",
                        "value": "30"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250911/dc923ca4-e2a4-4448-92e0-cae6d029e5f1.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Heven's Retribution",
                "description": "Wrap your spear in ribbons and hurl it with force. Upon impact, the ribbons bind nearby enemies. Angela can leap to the spear's location, damaging surrounding enemies and creating a Divine Judgement Zone",
                "key": "Q",
                "icon": "static/heroes/abilities/angela-8-heven-s-retribution.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "3100"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "60 m/s"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "40"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "8m spherical radius"
                    },
                    {
                        "label": "Hit Ground Damage",
                        "value": "100"
                    },
                    {
                        "label": "HIt Ground Spell Field Range",
                        "value": "8m spherical radius"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Mobility abilities of enemies bound by the ribbons will be disabled. Enemies within a certain distance around the spear will be slowed."
                    },
                    {
                        "label": "Slow Rate",
                        "value": "80%"
                    },
                    {
                        "label": "Projectile Damage",
                        "value": "30"
                    },
                    {
                        "label": "SUMMONS' HEALTH",
                        "value": "650"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250911/0240ecc1-d434-46cc-82ba-abdae0c275ef.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Celestial Command",
                "description": "Angela shares fragments of her Ichors with Thor, empowering him to hurl a Thunder Spear that restores Thorforce for each enemy struck. Afterward, Thor can leap to the spear's explosion point, dealing a second wave of damage to all enemies within range",
                "key": "Passive",
                "icon": "static/heroes/abilities/angela-9-celestial-command.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "+100 Max Health"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250911/9761dd6e-a640-43f4-84d0-db6613e412ad.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "450"
            },
            {
                "label": "Movement Speed",
                "value": "6m/s"
            }
        ],
        "forms": [
            "ANGELA"
        ]
    },
    "black-cat": {
        "nickname": "BLACK CAT",
        "realName": "FELICIA HARDY",
        "roles": [
            "DUELIST"
        ],
        "intro": "One of the world's premiere thieves, Felicia Hardy glides across the battlefield with swift precision and a dancer's grace, ever ready to purloin an opponent's fortune. Those who meet the Black Cat's gaze should beware, as her omens never miss their mark!",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "FELINE FURY",
                "description": "Swipe forward with razor-sharp claws",
                "key": "Left Click",
                "icon": "static/heroes/abilities/black-cat-1-feline-fury.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Melee"
                    },
                    {
                        "label": "Damage",
                        "value": "35"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "3.5m"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20260416/b418cfa2-f3dd-4eae-b205-967e67831cf7.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "CALLING CARD",
                "description": "Issue a Calling Card to all enemies. Instantly dash to any enemy in sight and range, tearing into them with your claws to deal Percentage Damage",
                "key": "Q",
                "icon": "static/heroes/abilities/black-cat-2-calling-card.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "3100"
                    },
                    {
                        "label": "Maximum Dash Distance",
                        "value": "40m"
                    },
                    {
                        "label": "Fore-swing Damage Reduction",
                        "value": "50%"
                    },
                    {
                        "label": "Ability Duration",
                        "value": "10s"
                    },
                    {
                        "label": "Maximum Targeting Distance",
                        "value": "8m"
                    },
                    {
                        "label": "1st Claw Strike Damage",
                        "value": "30"
                    },
                    {
                        "label": "2nd Claw Strike Damage",
                        "value": "70"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260416/c1b8429e-cbce-4c01-ad81-b1255d6ddbb8.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "CAT'S CRADLE",
                "description": "Lunge forward with claws bared, slicing through any enemies caught in your path",
                "key": "Shift",
                "icon": "static/heroes/abilities/black-cat-3-cat-s-cradle.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Shift"
                    },
                    {
                        "label": "Maximum Dash Distance",
                        "value": "15m"
                    },
                    {
                        "label": "Damage",
                        "value": "40"
                    },
                    {
                        "label": "Cooldown",
                        "value": "1 charges, with each charge taking 8s to recharge"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260416/0724214f-fa9d-4530-803b-02b40f0b9af7.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "TURN OF FORTUNE",
                "description": "Launch a grappling hook forward that damages an enemy on impact and steals Fortune before pulling it back to Black Cat",
                "key": "E",
                "icon": "static/heroes/abilities/black-cat-4-turn-of-fortune.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Hook Speed",
                        "value": "120m/s"
                    },
                    {
                        "label": "Hook Maximum Distance",
                        "value": "30m"
                    },
                    {
                        "label": "Hook Damage",
                        "value": "30"
                    },
                    {
                        "label": "Bonus Health from Hook Hit",
                        "value": "50"
                    },
                    {
                        "label": "Cooldown",
                        "value": "5s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260416/46a0da80-3314-466d-aab1-41bc525fc793.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "THIEVING GRACE",
                "description": "Perform a double jump",
                "key": "Space",
                "icon": "static/heroes/abilities/black-cat-5-thieving-grace.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Space"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260416/331db52b-ea1e-4d74-a4c7-c27fa17ec1a5.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "FORTUNE'S FAVOR",
                "description": "Spend Fortuneto unleash either Grapple Swipeor Phantom Pursuit",
                "key": "Right Click",
                "icon": "static/heroes/abilities/black-cat-6-fortune-s-favor.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Grapple Swipe Fortune Consumption",
                        "value": "150"
                    },
                    {
                        "label": "Phantom Pursuit Fortune Consumption",
                        "value": "300"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260416/f20a3d87-0110-46b5-ae9c-e942746833cd.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "STEALTHY CATWALK",
                "description": "Hold {Jump} to crawl up vertical surfaces",
                "key": "Space",
                "icon": "static/heroes/abilities/black-cat-7-stealthy-catwalk.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Space"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260416/76e1a388-8bcd-40cb-b9b9-cbfea50d5264.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "MALKIN MISFORTUNE",
                "description": "Apply Jinx to enemies on hit. Jinxed foes have a chance to lose their bonus damage when striking Black Cat with a Critical Hit",
                "key": "Passive",
                "icon": "static/heroes/abilities/black-cat-8-malkin-misfortune.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20260416/048b7e20-1062-44e0-9ae2-588cbb9d4fc8.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "GIFT OF GOLD",
                "description": "Black Cat shares items acquired from Insider Trading with White Fox and Captain America. White Fox receives the Life Orb, which restores Spirit Fox Tail energy and converts life energy into Nine-Tailed Radiance that auto-tracks nearby allies and enemies, granting allies speed and healing while dealing damage and slowing enemies. Captain America receives the Vibranium Energy Amplifier, which expands shield block range when raised and reflects projectiles back along the crosshair direction.",
                "key": "Passive",
                "icon": "static/heroes/abilities/black-cat-9-gift-of-gold.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "5% Damage Boost"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260416/dba9f061-232b-4cca-8797-cf61c520201e.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "CLAW WHIP",
                "description": "Fire out tethered claws and whip them forward in a devastating arc, dealing damage to all enemies caught in range",
                "key": "Left Click",
                "icon": "static/heroes/abilities/black-cat-10-claw-whip.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "150° cone spell field with a radius of 7.5m and a height of 2.5m"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "65"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "0.6s per hit"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 30°, drop to 30% of maximum damage at 75°"
                    },
                    {
                        "label": "Bonus Health Per Hit",
                        "value": "25"
                    },
                    {
                        "label": "Max Bonus Health",
                        "value": "50"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20260416/5868fb3b-fb3d-4ed5-9907-0252b6687288.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "CALLING CARD",
                "description": "Issue a Calling Card to all enemies. Instantly dash to any enemy in sight and range, tearing into them with your claws to deal Percentage Damage",
                "key": "Q",
                "icon": "static/heroes/abilities/black-cat-11-calling-card.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "3100"
                    },
                    {
                        "label": "Maximum Dash Distance",
                        "value": "60m"
                    },
                    {
                        "label": "Fore-swing Damage Reduction",
                        "value": "50%"
                    },
                    {
                        "label": "Ability Duration",
                        "value": "10s"
                    },
                    {
                        "label": "Maximum Targeting Distance",
                        "value": "8m"
                    },
                    {
                        "label": "1st Claw Strike Damage",
                        "value": "30"
                    },
                    {
                        "label": "2nd Claw Strike Damage",
                        "value": "30+20% Target’s Maximum Health"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260416/542f0f37-1553-45e5-b794-9a5804088ccb.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "CAT'S CRADLE",
                "description": "Lunge forward with claws bared, slicing through any enemies caught in your path",
                "key": "Shift",
                "icon": "static/heroes/abilities/black-cat-12-cat-s-cradle.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Shift"
                    },
                    {
                        "label": "Maximum Dash Distance",
                        "value": "15m"
                    },
                    {
                        "label": "Damage",
                        "value": "40"
                    },
                    {
                        "label": "Cooldown",
                        "value": "1 charges, with each charge taking 8s to recharge"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260416/de907edd-e322-4e4b-b64d-26f1dd5bd08e.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "PHANTOM PURSUIT",
                "description": "Swiftly dash to an enemy, unleash a rapid flurry of claw attacks, and flash back to your starting position. Black Cat is Untargetable during this move",
                "key": "E",
                "icon": "static/heroes/abilities/black-cat-13-phantom-pursuit.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Dash Duration",
                        "value": "0.25s"
                    },
                    {
                        "label": "Damage",
                        "value": "70"
                    },
                    {
                        "label": "Maximum Dash Distance",
                        "value": "20m"
                    },
                    {
                        "label": "Cooldown",
                        "value": "2s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260416/0f50962e-bc08-42a0-85db-7138a350d05f.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "THIEVING GRACE",
                "description": "Perform a double jump",
                "key": "Space",
                "icon": "static/heroes/abilities/black-cat-14-thieving-grace.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Space"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260416/db492550-ee00-49bd-b8f2-a8725012dbe1.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "FORTUNE'S FAVOR",
                "description": "Spend Fortuneto unleash either Grapple Swipeor Phantom Pursuit",
                "key": "Right Click",
                "icon": "static/heroes/abilities/black-cat-15-fortune-s-favor.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Grapple Swipe Fortune Consumption",
                        "value": "150"
                    },
                    {
                        "label": "Phantom Pursuit Fortune Consumption",
                        "value": "300"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260416/aaaacbd7-f567-40c0-be49-494f0e6933db.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "STEALTHY CATWALK",
                "description": "Hold {Jump} to crawl up vertical surfaces",
                "key": "Space",
                "icon": "static/heroes/abilities/black-cat-16-stealthy-catwalk.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Space"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260416/cf0e15f3-6715-49c6-8313-9513eed6fa61.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "MALKIN MISFORTUNE",
                "description": "Apply Jinx to enemies on hit. Jinxed foes have a chance to lose their bonus damage when striking Black Cat with a Critical Hit",
                "key": "Passive",
                "icon": "static/heroes/abilities/black-cat-17-malkin-misfortune.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20260416/f8475d37-2f3e-495d-8783-66a39a55e6a7.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "GIFT OF GOLD",
                "description": "Black Cat shares items acquired from Insider Trading with White Fox and Captain America. White Fox receives the Life Orb, which restores Spirit Fox Tail energy and converts life energy into Nine-Tailed Radiance that auto-tracks nearby allies and enemies, granting allies speed and healing while dealing damage and slowing enemies. Captain America receives the Vibranium Energy Amplifier, which expands shield block range when raised and reflects projectiles back along the crosshair direction.",
                "key": "Passive",
                "icon": "static/heroes/abilities/black-cat-18-gift-of-gold.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "5% Damage Boost"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260416/dba9f061-232b-4cca-8797-cf61c520201e.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "GILDED DEAL",
                "description": "Use the Spatial Resonator to open a portal to the Elder Gods' dimension, consuming Fortune to trade with the Golden Elder and acquire items from the New York Thieves Guild vault.",
                "key": "F",
                "icon": "static/heroes/abilities/black-cat-19-gilded-deal.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260416/35b59c4e-01ea-4c4f-9321-2e378148df61.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "TABLET OF DESTINIES",
                "description": "Gain a random amount of Fortune",
                "key": "F",
                "icon": "static/heroes/abilities/black-cat-20-tablet-of-destinies.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Gain 0/50/200/500 Fortune randomly"
                    },
                    {
                        "label": "Fortune Consumption",
                        "value": "100"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260416/ce5e92ec-444e-48f9-9a2e-73b4f86c07fe.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "HELM OF HADES",
                "description": "Enter Invisiblestate for a set duration",
                "key": "F",
                "icon": "static/heroes/abilities/black-cat-21-helm-of-hades.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Fortune Consumption",
                        "value": "200"
                    },
                    {
                        "label": "Invisibility Duration",
                        "value": "2s"
                    },
                    {
                        "label": "Movement Speed Boost Duration",
                        "value": "2s"
                    },
                    {
                        "label": "Movement Boost",
                        "value": "60%, drop to 0 in 2s"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260416/b4507d88-ec34-4a0b-9303-96757d10cd5b.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "FALTINE FLAME ORB",
                "description": "Conjure an orb of mystical Faltine Flame to Revealand mark all nearby enemies",
                "key": "F",
                "icon": "static/heroes/abilities/black-cat-22-faltine-flame-orb.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Fortune Consumption",
                        "value": "200"
                    },
                    {
                        "label": "Summon Health",
                        "value": "50"
                    },
                    {
                        "label": "Maximum Summon Quantity",
                        "value": "1"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260416/004aee58-b3ee-436d-bbe7-41ef6c00b4d5.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "CHERNOBOG'S CRYSTAL",
                "description": "Purify yourself, instantly removing any active control effects",
                "key": "F",
                "icon": "static/heroes/abilities/black-cat-23-chernobog-s-crystal.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Fortune Consumption",
                        "value": "300"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Remove any active control effects"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260416/d7499d6e-8126-4d52-b3c5-649961da300b.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "RING OF ZONA",
                "description": "Open a portal on a surface, allowing instant traversal to the opposite side",
                "key": "F",
                "icon": "static/heroes/abilities/black-cat-24-ring-of-zona.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Fortune Consumption",
                        "value": "300"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260416/37abc875-d763-4531-8095-c0d74aae0e22.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "MENTO-FISH",
                "description": "Create a hypnosis field. Inflicts Slow, disables movement abilities, and Groundsall enemies caught within",
                "key": "F",
                "icon": "static/heroes/abilities/black-cat-25-mento-fish.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Fortune Consumption",
                        "value": "300"
                    },
                    {
                        "label": "Casting",
                        "value": "Projectile that generates a spell field upon impact"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "30m/s"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "A cylindrical spell field with a radius of 5m and a height of 40m."
                    },
                    {
                        "label": "Slow Ratio",
                        "value": "35%"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260416/685beeba-23c2-457c-83a0-9beb64c100d9.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "STICKY PAWS",
                "description": "Steal a set amount of Fortunewhenever your attacks hit an enemy",
                "key": "PASSIVE",
                "icon": "static/heroes/abilities/black-cat-26-sticky-paws.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "PASSIVE"
                    },
                    {
                        "label": "Fortune Gained per Target Hit (Feline Fury)",
                        "value": "50, up to 50"
                    },
                    {
                        "label": "Fortune Gained per Target Hit (Claw Whip)",
                        "value": "50, up to 100"
                    },
                    {
                        "label": "Fortune Gained per Target Hit (Phantom Pursuit)",
                        "value": "150, up to 150"
                    },
                    {
                        "label": "Fortune Gained per Hit (Turn of Fortune)",
                        "value": "300"
                    },
                    {
                        "label": "Fortune Gained per Hit (Calling Card)",
                        "value": "300"
                    },
                    {
                        "label": "Fortune Lost Upon Death",
                        "value": "Lose 50% of Fortune when defeated, with a minimum deduction of 200"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20260416/d1950ebc-6411-4006-93b9-c6db6b41ee45.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "275"
            },
            {
                "label": "Movement Speed",
                "value": "600"
            }
        ],
        "forms": [
            "Black Cat"
        ]
    },
    "black-panther": {
        "nickname": "BLACK PANTHER",
        "realName": "T'CHALLA",
        "roles": [
            "DUELIST"
        ],
        "intro": "T'Challa, King of Wakanda, wields the perfect blend of the cutting-edge Vibranium technology and ancestral power drawn from the Panther God, Bast. The Black Panther bides his time until elegantly infiltrating enemy lines and commencing his hunt.",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Vibranium Claws",
                "description": "Slice Vibranium Claws forward",
                "key": "Left Click",
                "icon": "static/heroes/abilities/black-panther-1-vibranium-claws.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Melee"
                    },
                    {
                        "label": "Damage",
                        "value": "35"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "3m"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "0.44s per hit"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/095862fd-2dce-4947-8996-58741ba3e326.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Bast's Descent",
                "description": "Summon Bast, pouncing forward, dealing damage, and attaching a Vibranium Mark to enemies hit while refreshing Spirit Rend",
                "key": "Q",
                "icon": "static/heroes/abilities/black-panther-2-bast-s-descent.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Cuboid Spell Field"
                    },
                    {
                        "label": "Range",
                        "value": "Length: 22m, Width: 20m, Height: 7m"
                    },
                    {
                        "label": "Casting Angle",
                        "value": "150°"
                    },
                    {
                        "label": "Damage",
                        "value": "150"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "3300"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Gain 50% Damage Reduction during Bast's Descent startup animation"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/796baaa9-278e-464f-a394-bc5869dbc473.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Spirit Rend",
                "description": "Lunge forward and deal damage to enemies. Vibranium Mark produces Bonus Health and refreshes the ability",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/black-panther-3-spirit-rend.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Casting",
                        "value": "Movement-based damage ability"
                    },
                    {
                        "label": "Average Speed",
                        "value": "50m/s"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "15m"
                    },
                    {
                        "label": "Damage",
                        "value": "80"
                    },
                    {
                        "label": "Bonus Health",
                        "value": "25"
                    },
                    {
                        "label": "Bonus Max Health",
                        "value": "75"
                    },
                    {
                        "label": "Cooldown",
                        "value": "10s"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/5420a5ab-0ba8-4c9c-8953-7f60adf79cd2.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Spinning Kick",
                "description": "Spiral forward and attach a Vibranium Mark to enemies hit",
                "key": "E",
                "icon": "static/heroes/abilities/black-panther-4-spinning-kick.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Movement-based damage ability"
                    },
                    {
                        "label": "Average Speed",
                        "value": "15m/s"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "16m"
                    },
                    {
                        "label": "Damage",
                        "value": "75"
                    },
                    {
                        "label": "Cooldown",
                        "value": "8s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/a56f606b-d519-49aa-9570-cc615be6f239.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Subtle Step",
                "description": "Hold Space to run on a wall; perform a jump after detaching from the wall",
                "key": "Space",
                "icon": "static/heroes/abilities/black-panther-5-subtle-step.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Space"
                    },
                    {
                        "label": "Wall-Crawling Speed",
                        "value": "10m/s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/715f8f12-5bf3-4f11-a583-ee4ad606136d.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Spear Toss",
                "description": "Toss a Vibranium energy spear forward, creating a Vibranium Force Field and attaching a Vibranium Mark to enemies in its radius",
                "key": "Right Click",
                "icon": "static/heroes/abilities/black-panther-6-spear-toss.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Arced projectile that generates a spell field upon impact"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "60m/s"
                    },
                    {
                        "label": "Range",
                        "value": "5m spherical radius"
                    },
                    {
                        "label": "Damage",
                        "value": "50"
                    },
                    {
                        "label": "Cooldown",
                        "value": "6s"
                    },
                    {
                        "label": "Charges",
                        "value": "2"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/4ccd846a-f72e-4d69-aa9f-6c459f67648c.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Panther's Cunning",
                "description": "Deal higher damage when at low Health",
                "key": "Passive",
                "icon": "static/heroes/abilities/black-panther-7-panther-s-cunning.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Trigger Condition",
                        "value": "Health drops below 100"
                    },
                    {
                        "label": "Damage Boost",
                        "value": "20%"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/07bd1118-a93b-49f7-8789-696e0480ee44.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "GAMMA VIBRANIUM ARMOR",
                "description": "Hulk charges Namor and Black Panther with gamma radiation. Namor can summon an extra Gamma Monstro which will continuously fire gamma rays at locked-on enemies. The longer the rays hit, the higher the damage. Black Panther's Vibranium armor is enhanced; when his health is low he receives a gamma shield, blocking incoming attacks and becoming Unstoppable",
                "key": "PASSIVE",
                "icon": "static/heroes/abilities/black-panther-8-gamma-vibranium-armor.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "PASSIVE"
                    },
                    {
                        "label": "Shield Value",
                        "value": "100"
                    },
                    {
                        "label": "Health Threshold for Ability Activation",
                        "value": "100"
                    },
                    {
                        "label": "Cooldown",
                        "value": "45"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250912/d1ab2347-3f3a-48e8-a936-506f89e78a75.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "275"
            },
            {
                "label": "Movement Speed",
                "value": "7m/s"
            }
        ],
        "forms": [
            "BLACK PANTHER"
        ]
    },
    "black-widow": {
        "nickname": "BLACK WIDOW",
        "realName": "NATASHA ROMANOVA",
        "roles": [
            "DUELIST"
        ],
        "intro": "Natasha Romanova is the world's most elite spy in any era. Her mastery of the sniper rifle eliminates targets from afar, while her shock batons neutralize close-range threats. Black Widow is locked, loaded, and ready to deliver a fatal bite!",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Widow's Bite Baton",
                "description": "Strike with the enhanced electric batons",
                "key": "Left Click",
                "icon": "static/heroes/abilities/black-widow-1-widow-s-bite-baton.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Melee"
                    },
                    {
                        "label": "Damage",
                        "value": "45"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "3m"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "2 strikes per second"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/66ad25fa-5a94-4087-8d1d-d626e1a5c798.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Red Room Rifle",
                "description": "Attack with the Red Room Rifle",
                "key": "Left Click",
                "icon": "static/heroes/abilities/black-widow-2-red-room-rifle.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast direct hit"
                    },
                    {
                        "label": "Damage",
                        "value": "120 damage per round"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 10m, decreasing to 50% at 20m"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "0.83 rounds per second"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "15"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "Yes"
                    },
                    {
                        "label": "Aiming down sights times",
                        "value": "0.3s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Shares the same magazine with Red Room Rifle. Straight Shooter activates only after aiming down sights for a specific duration; otherwise, it will fire from the Red Room Rifle"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/67bd0973-ab49-4e6d-a04b-70f67cb2514b.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Electro-Plasma Explosion",
                "description": "Switch the Red Room Rifle to Destruction mode and unleash an electro-plasma blast, damaging enemies within range and leaving plasma on the ground to Slow nearby enemies",
                "key": "Q",
                "icon": "static/heroes/abilities/black-widow-3-electro-plasma-explosion.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "100m/s"
                    },
                    {
                        "label": "Explosion Range",
                        "value": "5.6m - 8m (Maximum range is achieved after 0.6s of charging)"
                    },
                    {
                        "label": "Explosion Damage",
                        "value": "120 - 170 (Maximum damage is achieved after 0.6s of charging)"
                    },
                    {
                        "label": "Number of Plasma Globules",
                        "value": "7 - 20 (Maximum amount is achieved after 0.6s of charging)"
                    },
                    {
                        "label": "Plasma Range",
                        "value": "1.5m spherical radius"
                    },
                    {
                        "label": "Slow Rate",
                        "value": "-55%"
                    },
                    {
                        "label": "Plasma Duration",
                        "value": "10s"
                    },
                    {
                        "label": "Vulnerability Effect Duration",
                        "value": "4s"
                    },
                    {
                        "label": "Vulnerability Effect Rate",
                        "value": "15%"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "2800"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/2ab04f37-ede8-4c33-aee0-ef47e6d4c495.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Fleet Foot",
                "description": "Dash forward and enable a powerful jump",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/black-widow-4-fleet-foot.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Movement Boost",
                        "value": "33%"
                    },
                    {
                        "label": "Maximum Energy",
                        "value": "120"
                    },
                    {
                        "label": "Energy Cost (Sprinting)",
                        "value": "12/s"
                    },
                    {
                        "label": "Power Jump Energy Cost",
                        "value": "24 per leap"
                    },
                    {
                        "label": "Energy Recovery Speed",
                        "value": "30/s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/c54964b7-5c00-4229-8f65-5d156f05ce27.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Edge Dancer",
                "description": "Unleash a spinning kick to Knock enemies airborne. Landing the hit will allow her to zip to the target with a grappling hook for a second kick",
                "key": "E",
                "icon": "static/heroes/abilities/black-widow-5-edge-dancer.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Melee"
                    },
                    {
                        "label": "CastingSpinning Kick Damage",
                        "value": "35"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "5m"
                    },
                    {
                        "label": "Flying Kick Distance",
                        "value": "12m"
                    },
                    {
                        "label": "Flying Kick Damage",
                        "value": "35"
                    },
                    {
                        "label": "Flying Kick Stun Duration",
                        "value": "1s"
                    },
                    {
                        "label": "Flying Kick Casting Window",
                        "value": "5s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "15s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/63a7474c-3d1a-4db1-933a-c70c5a37e9ca.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Straight Shooter",
                "description": "Switch the Red Room Rifle to Sniper mode to fire high-energy rounds",
                "key": "Right Click",
                "icon": "static/heroes/abilities/black-widow-6-straight-shooter.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast direct hit"
                    },
                    {
                        "label": "Damage",
                        "value": "120 damage per hit"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "0.83 rounds per second"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "15"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "Yes"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Shares the same magazine with Red Room Rifle"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/6361d366-98b8-4268-825e-1371bf7c99f0.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "PHOENIX SNIPER",
                "description": "Jean Grey imbues Wolverine and Black Widow with the awe-inspiring Phoenix Force. When active, Wolverine's Feral Leap transforms into Phoenix Warrior, gaining lifesteal on all damage dealt and enveloping him with Phoenix flames that scorch nearby enemies, dealing Percentage Damage. Black Widow gains Phoenix Force-empowered bullets; her Phoenix Rounds explode on impact and heal allies in the blast radius",
                "key": "C",
                "icon": "static/heroes/abilities/black-widow-7-phoenix-sniper.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "C"
                    },
                    {
                        "label": "Cooldown",
                        "value": "2s"
                    },
                    {
                        "label": "Shoot Interval",
                        "value": "0.733s"
                    },
                    {
                        "label": "Damage",
                        "value": "40"
                    },
                    {
                        "label": "Healing",
                        "value": "50"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "3m spherical radius spell field"
                    },
                    {
                        "label": "Spell Field Healing",
                        "value": "40"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "30"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20251115/4763cec7-ceb7-4b14-8bd7-4d7d2b7a16ac.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "250"
            },
            {
                "label": "Movement Speed",
                "value": "6m/s"
            }
        ],
        "forms": [
            "Black Widow"
        ]
    },
    "blade": {
        "nickname": "BLADE",
        "realName": "ERIC BROOKS",
        "roles": [
            "DUELIST"
        ],
        "intro": "Half-human and half-vampire, Eric Brooks walks betweenworlds, craving the very life force of his enemies. As nightfalls, Blade's hunt begins as he wields the Sword of Draculato become the nightmare of any foe who dares to bare theirfangs.",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Ancestral Sword",
                "description": "Slash forward with Blade's Ancestral Sword",
                "key": "Left Click",
                "icon": "static/heroes/abilities/blade-1-ancestral-sword.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Melee"
                    },
                    {
                        "label": "Damage",
                        "value": "Cause 26 damage per single slash; double strike cause 13 damage per hit"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "5m"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "2 strikes per second"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20250808/7fbc426f-d5a0-4566-9d1f-00f79ad25bc3.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Hunter's Shotgun",
                "description": "Fire at enemies using your Shotgun",
                "key": "Left Click",
                "icon": "static/heroes/abilities/blade-2-hunter-s-shotgun.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Projectile that fires in a straight trajectory, which breaks into shrapnel after reaching a certain distance"
                    },
                    {
                        "label": "Initial Projectile Maximum Distance",
                        "value": "8m"
                    },
                    {
                        "label": "Initial Projectile Speed",
                        "value": "180 m/s"
                    },
                    {
                        "label": "Initial Projectile Damage",
                        "value": "45"
                    },
                    {
                        "label": "Shrapnel Amount",
                        "value": "11"
                    },
                    {
                        "label": "Damage per Shrapnel Hit",
                        "value": "8"
                    },
                    {
                        "label": "Shrapnel Projectile Speed",
                        "value": "150 m/s"
                    },
                    {
                        "label": "Shrapnel Damage Falloff",
                        "value": "Falloff begins at 15m, decreasing to 50% at 30m"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20250808/2b532b79-61a8-4300-98a8-5cbaa4f5a29b.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Scarlet Shroud",
                "description": "Parry with Ancestral Sword to become Unstoppable for a brief period, reducing damage taken from the front and decreasing the cooldown of Daywalker Dash",
                "key": "Right Click",
                "icon": "static/heroes/abilities/blade-3-scarlet-shroud.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Maximum Energy",
                        "value": "120"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "60/s"
                    },
                    {
                        "label": "Energy Recovery Speed",
                        "value": "15/s"
                    },
                    {
                        "label": "Activation Cost",
                        "value": "15"
                    },
                    {
                        "label": "Cooldown",
                        "value": "3s"
                    },
                    {
                        "label": "Unstoppable Duration",
                        "value": "1s after activation"
                    },
                    {
                        "label": "Damage Reduction",
                        "value": "80%"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Every 200 damage resisted grants 1 charge for Daywalker Dash"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250808/38dda78b-768c-421d-a971-772db41ee3dd.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Bloodline Awakening",
                "description": "Awaken the Dhampir bloodline, enhancing slash speed during continuous attacks and triggering Whirlwind Slash.If all Whirlwind Slash strikes hit, your Attack Speed will further increase. While under this state, you suffer Reduced Healing, but attacks gain Lifesteal",
                "key": "E",
                "icon": "static/heroes/abilities/blade-4-bloodline-awakening.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Left Click/Shift key ability hits accumulate attack speed buff levels; within the Bloodline Awakening duration, attacks gain Lifesteal and movement speed boost but suffer Reduced Healing"
                    },
                    {
                        "label": "Lifesteal Proportion",
                        "value": "70%, Affected by Healing Reduction"
                    },
                    {
                        "label": "Self Reduce Healing Proportion",
                        "value": "25%"
                    },
                    {
                        "label": "Movement Speed Boost",
                        "value": "1.5 m/s"
                    },
                    {
                        "label": "Max Attack Speed Boost Buff Stack",
                        "value": "10"
                    },
                    {
                        "label": "Left Click Hit Buff Stack",
                        "value": "1"
                    },
                    {
                        "label": "Shift Hit Buff Stack",
                        "value": "5"
                    },
                    {
                        "label": "Attack Speed Boost Proportion from Each Buff Stack",
                        "value": "10%"
                    },
                    {
                        "label": "Duration of Each Buff Stack",
                        "value": "1s"
                    },
                    {
                        "label": "Whirlwind Slash Damage",
                        "value": "64"
                    },
                    {
                        "label": "Hits to Trigger the Whirlwind Slash",
                        "value": "5"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Landing all four hits of Whirlwind Slash grants 1 slash speed stack; Excess lifesteal grants Bonus Health( max 75; conversion rate 50%)"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250808/407381d7-9280-4cfc-9f6e-2dac3d07e0ce.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Daywalker Dash",
                "description": "Dash forward. If wielding your gun, shoot at enemies upon impact, applying a Healing Reduction effect. If wielding your sword, deliver a cleaving strike that inflicts Slow",
                "key": "Shift",
                "icon": "static/heroes/abilities/blade-5-daywalker-dash.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Shift"
                    },
                    {
                        "label": "Casting",
                        "value": "Dash. Cause damage and special effects to the enemies hit"
                    },
                    {
                        "label": "Dash Distance",
                        "value": "15m"
                    },
                    {
                        "label": "Damage",
                        "value": "30"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Hit while wielding the gun, inflict Slow effect to the enemy; hit while wielding the sword, deal Healing Reduction to the enemy"
                    },
                    {
                        "label": "Healing Reduction Proportion",
                        "value": "apply 8% Healing Reduction per strike (32% total if all hit)"
                    },
                    {
                        "label": "Healing Reduction Duration",
                        "value": "4s"
                    },
                    {
                        "label": "Slow Rate",
                        "value": "40%"
                    },
                    {
                        "label": "Slow Duration",
                        "value": "1.5s"
                    },
                    {
                        "label": "Gun Second Hit Damage",
                        "value": "50"
                    },
                    {
                        "label": "Sword Second Hit Damage",
                        "value": "10 per hit, 4 hits in total"
                    },
                    {
                        "label": "Second Hit Damage Range",
                        "value": "6.5m"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250808/317a7483-cdd2-4114-9fed-861f7973e7cf.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Thousand-Fold Slash",
                "description": "Charge power and swiftly draw the Sword of Dracula, executing a powerful Iaido strike as you dash forward, leaving behind a slashing zone where the sword automatically strikes enemies. Enemies hit suffer Reduced Healing",
                "key": "Q",
                "icon": "static/heroes/abilities/blade-6-thousand-fold-slash.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "2800"
                    },
                    {
                        "label": "Self Slow",
                        "value": "25%"
                    },
                    {
                        "label": "Maximum Charge Time",
                        "value": "3s"
                    },
                    {
                        "label": "Charge time for max distance",
                        "value": "1s"
                    },
                    {
                        "label": "Dash Distance",
                        "value": "10m, maximum distance 24m after fully charged."
                    },
                    {
                        "label": "Direct Hit Damage",
                        "value": "100"
                    },
                    {
                        "label": "Spell Field Damage Over Time",
                        "value": "225/s"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "Length: Maximum dash distance; Width: 6m; Height: 4.5m"
                    },
                    {
                        "label": "Spell Field Duration",
                        "value": "2s"
                    },
                    {
                        "label": "Healing Reduction Proportion",
                        "value": "20%"
                    },
                    {
                        "label": "Healing Reduction Duration",
                        "value": "4s"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250808/76a3bf21-fa7d-46b9-af37-db2c078fda6f.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "ECLIPSE EDGE",
                "description": "Blessed by Khonshu, Blade gains a new ability. When activated, Blade swings his Ancestral Sword in a powerful slash, dashing forward a short distance. At the end of the dash, he swiftly slashes four times, each strike sending a Darkmoon Blade forward. When a Darkmoon Blade hits an enemy, it bounces to nearby targets",
                "key": "C",
                "icon": "static/heroes/abilities/blade-7-eclipse-edge.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "C"
                    },
                    {
                        "label": "Cooldown",
                        "value": "20s"
                    },
                    {
                        "label": "Dash Duration",
                        "value": "8m"
                    },
                    {
                        "label": "Dash Damage",
                        "value": "30"
                    },
                    {
                        "label": "Number of Projectiles",
                        "value": "4"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "150m/s"
                    },
                    {
                        "label": "Damage",
                        "value": "40"
                    },
                    {
                        "label": "Bounce Range",
                        "value": "8m"
                    },
                    {
                        "label": "Damage Falloff Per Bounce",
                        "value": "20% per bounce"
                    },
                    {
                        "label": "Maximum Times of Bounce",
                        "value": "3"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20251115/103c790d-0d19-45e9-aad0-3a5ca92c2313.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "350"
            },
            {
                "label": "Movement Speed",
                "value": "6m/s"
            }
        ],
        "forms": [
            "BLADE"
        ]
    },
    "captain-america": {
        "nickname": "CAPTAIN AMERICA",
        "realName": "STEVEN “STEVE” ROGERS",
        "roles": [
            "VANGUARD"
        ],
        "intro": "Enhanced by the Super-Soldier Serum, Steven \"Steve\" Rogers uses his Vibranium shield and extensive combat training to confront any threat to justice. When Captain America rallies his troops, a wave of courage sweeps across the battlefield!",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Sentinel Strike",
                "description": "Get up close to strike enemies. Landing the second hit enables a shield throw that can ricochet four times",
                "key": "Left Click",
                "icon": "static/heroes/abilities/captain-america-1-sentinel-strike.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Change Form"
                    },
                    {
                        "label": "Melee Range",
                        "value": "4m"
                    },
                    {
                        "label": "Shield Flying Speed",
                        "value": "60m/s"
                    },
                    {
                        "label": "Max Flying Distance",
                        "value": "25m"
                    },
                    {
                        "label": "Damage",
                        "value": "Melee Attack Damage: 45, Flying Shield Damage: 45"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "Melee 1st Hit: 0.4s, Melee 2nd Hit: 0.5s, Flying Shield 1st Hit: 0.5s, Flying Shield 2nd Hit: 0.57s"
                    },
                    {
                        "label": "Ammo",
                        "value": "Up to 4 throws"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "No"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Automatically target enemies near the crosshair"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/588f99a1-b1e0-4133-a626-35f8e6e4b158.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Freedom Charge",
                "description": "Shield held high, carve a path forward, granting both himself and allies along the path continuous Bonus Health and Movement Boosts. Allies also gain Ultimate Ability Charge Acceleration. Using Living Legend and Leading Dash while this ability is active can Launch Up enemies",
                "key": "Q",
                "icon": "static/heroes/abilities/captain-america-2-freedom-charge.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Activation"
                    },
                    {
                        "label": "Range",
                        "value": "A spherical spell field with a 4m radius enveloping the caster, and a spell area with a width of 4m along the path"
                    },
                    {
                        "label": "Spell Field Duration",
                        "value": "10s"
                    },
                    {
                        "label": "Spell Area Duration",
                        "value": "5s"
                    },
                    {
                        "label": "Health Recovery Rate",
                        "value": "Cast to gain 150 Bonus Health and grant allies 100 Bonus Health. Every second afterward, gain 100 Bonus Health and grant allies 60 Bonus Health"
                    },
                    {
                        "label": "Movement Boost",
                        "value": "Grant a 30% Movement Boost to both yourself and your allies"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "3100"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Allies within its path gain a 20% boost to Ultimate Energy charge efficiency"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/301a3e56-eeee-47e4-b3b6-08c164b5f780.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Leading Dash",
                "description": "Boost speed and enable Fearless Leap to leap into the air",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/captain-america-3-leading-dash.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Casting",
                        "value": "Channeled"
                    },
                    {
                        "label": "Movement Boost",
                        "value": "33.40%"
                    },
                    {
                        "label": "Fearless Leap Height",
                        "value": "5m"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/dfc71932-8e4a-47e1-8eaf-3dffddf51cb4.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Vibranium Energy Saw",
                "description": "Hurl the energy-charged shield to strike enemies in a path",
                "key": "E",
                "icon": "static/heroes/abilities/captain-america-4-vibranium-energy-saw.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast projectile that can ricochet"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "80 m/s"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "25m"
                    },
                    {
                        "label": "Number of Ricochets",
                        "value": "3"
                    },
                    {
                        "label": "Damage",
                        "value": "Start at 70, with a 20% reduction for each ricochet"
                    },
                    {
                        "label": "Cooldown",
                        "value": "6s"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/ba7fc0c4-f0c7-4ce7-a792-63374163cc22.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Liberty Rush",
                "description": "Raise the shield and charge forward",
                "key": "F",
                "icon": "static/heroes/abilities/captain-america-5-liberty-rush.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast forward dash"
                    },
                    {
                        "label": "Dash Distance",
                        "value": "12m"
                    },
                    {
                        "label": "Damage",
                        "value": "30"
                    },
                    {
                        "label": "Cooldown",
                        "value": "10s"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/63eef162-7c33-46a8-8f48-aa74b29f910a.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Super-Soldier Slam",
                "description": "Slam down from the sky onto the targeted area, Launching Up enemies",
                "key": "Left Click",
                "icon": "static/heroes/abilities/captain-america-6-super-soldier-slam.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Targeted"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "20m (horizontal)"
                    },
                    {
                        "label": "Damage",
                        "value": "30"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/0261fd68-7164-4852-a86a-a5d02f914b2a.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Living Legend",
                "description": "Raise the shield to deflect incoming projectiles, sending them ricocheting in random directions",
                "key": "Right Click",
                "icon": "static/heroes/abilities/captain-america-7-living-legend.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Channeled"
                    },
                    {
                        "label": "Maximum Shield Value",
                        "value": "350"
                    },
                    {
                        "label": "Recovery Shield Value",
                        "value": "50/s"
                    },
                    {
                        "label": "Delayed Recovery After Release",
                        "value": "4s"
                    },
                    {
                        "label": "Cooldown After Destroyed",
                        "value": "5s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "1s"
                    },
                    {
                        "label": "Ricochet Damage Falloff",
                        "value": "50%"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/97a1851f-7f3d-4297-a8ba-3d4650422a58.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Captain's Spirit",
                "description": "Inspired by Captain America's resolve, Winter Soldier can leap to the aid of a designated ally, slamming the ground with his mechanical arm to deal damage to nearby foes. Additionally, Captain America and Winter Soldier can interact with each other once both parties confirm. The duo collides and unleashes a shockwave that deals damage and inflicts slow on enemies",
                "key": "Passive",
                "icon": "static/heroes/abilities/captain-america-8-captain-s-spirit.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "Captain America gain 100 Max Health"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250410/c34a6f5c-8be1-4bcb-a0f0-f5572a64e6e9.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "VIBRANIUM BASTION",
                "description": "Black Cat shares her luck with her allies. When White Fox embraces her newfound fortune, she unleashestracking Spirit Tails to grant Healing and Speed to allies, while damaging and Slowing foes. When Captain America enjoys his luck, his shield's block radius expands and allows him to aim deflectedProjectiles directly toward his target",
                "key": "C",
                "icon": "static/heroes/abilities/captain-america-9-vibranium-bastion.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "C"
                    },
                    {
                        "label": "Cooldown",
                        "value": "15s"
                    },
                    {
                        "label": "Ability Duration",
                        "value": "10s"
                    },
                    {
                        "label": "Summon Radius Increase",
                        "value": "1m"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Within the duration, deflect Projectiles ricochet directly toward his target direction."
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260416/dba9f061-232b-4cca-8797-cf61c520201e.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "575"
            },
            {
                "label": "Movement Speed",
                "value": "6 m/s"
            }
        ],
        "forms": [
            "CAPTAIN AMERICA"
        ]
    },
    "cloak-and-dagger": {
        "nickname": "CLOAK&DAGGER",
        "realName": "TYRONE JOHNSON AND TANDY BOWEN",
        "roles": [
            "STRATEGIST"
        ],
        "intro": "Tyrone Johnson and Tandy Bowen are nearly inseparable, like two sides of the same coin. Intertwined by forces of shadow and light, Cloak & Dagger fight as a united front, dealing havoc and healing allies across the arena.",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Darkforce Cloak",
                "description": "Inflict continuous damage on an enemy",
                "key": "Left Click",
                "icon": "static/heroes/abilities/cloak-and-dagger-1-darkforce-cloak.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Cylindrical Spell Field"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Attacks will target the nearest enemy to the crosshair, dealing damage"
                    },
                    {
                        "label": "Damage",
                        "value": "80/s"
                    },
                    {
                        "label": "Range",
                        "value": "20m"
                    },
                    {
                        "label": "Ammo",
                        "value": "∞"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "No"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/94227f4c-02fd-4954-900c-f149b05b5cea.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Eternal Bond",
                "description": "Perform four rapid dashes, healing allies and damaging enemies along the path",
                "key": "Q",
                "icon": "static/heroes/abilities/cloak-and-dagger-2-eternal-bond.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Persistent Spell Field"
                    },
                    {
                        "label": "Damage",
                        "value": "30/s"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "250/s"
                    },
                    {
                        "label": "Range",
                        "value": "A cylindrical spell field with a 4m radius and 15m in length"
                    },
                    {
                        "label": "Duration",
                        "value": "11s"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "4500"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/9791de0a-9b39-4111-a535-77a8fccaef5a.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Light's Embrace",
                "description": "Switch to Dagger",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/cloak-and-dagger-3-light-s-embrace.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Casting",
                        "value": "Instant Cast"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/d79fe95c-03cf-4d39-97ce-a2af95dd180b.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Terror Cape",
                "description": "Deploy a Veil of Darkforce to damage enemies upon touch, applying Blind to narrow their sight and Vulnerability to amplify damage received",
                "key": "E",
                "icon": "static/heroes/abilities/cloak-and-dagger-4-terror-cape.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Spell Field"
                    },
                    {
                        "label": "Special Effect",
                        "value": "The spell field advances along the casting path"
                    },
                    {
                        "label": "Damage",
                        "value": "55"
                    },
                    {
                        "label": "Blinding Duration",
                        "value": "1.5s"
                    },
                    {
                        "label": "Range",
                        "value": "Visibility is obstructed beyond 10m"
                    },
                    {
                        "label": "Vulnerability",
                        "value": "28%"
                    },
                    {
                        "label": "Vulnerability Duration",
                        "value": "3s"
                    },
                    {
                        "label": "Range",
                        "value": "Width: 6m, Height: 4.5m"
                    },
                    {
                        "label": "Movement Speed",
                        "value": "20m/s"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "25m"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/a57ebbc2-dcf5-4511-8a5e-7291aefbaf3f.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Dark Teleportation",
                "description": "Enshroud nearby allies in the Darkforce Dimension, plunging them into the Phased state, making them untargetable and invisible to enemies and granting them a Movement Boost",
                "key": "Right Click",
                "icon": "static/heroes/abilities/cloak-and-dagger-5-dark-teleportation.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Persistent Spell Field"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Allies within the area gain Invisibility and Movement Boost"
                    },
                    {
                        "label": "Duration",
                        "value": "2s"
                    },
                    {
                        "label": "Range",
                        "value": "10m spherical radius"
                    },
                    {
                        "label": "Cooldown",
                        "value": "Veil of Lightforce & Terror Cape share charges, capped out at 2 with each taking 10s to recharge. After using either, both abilities enter a 2s cooldown"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/08104768-56d7-4bda-84ae-bd4cd7245223.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "FROM SHADOW TO LIGHT",
                "description": "Cloak & Dagger inject light and dark energy into Hawkeye's katana. When Hawkeye uses Crescent Slash, enemies hit are launched back, and a blade wave filled with light and energy sweeps forward. This wave passes through both allies and enemies: it heals and boosts healing for allies, while damaging enemies and applying Vulnerability",
                "key": "Passive",
                "icon": "static/heroes/abilities/cloak-and-dagger-6-from-shadow-to-light.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-up Bonus",
                        "value": "15% Healing Boost"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20251115/9a215533-35d3-4b33-b726-f9696b57259c.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Lightforce Dagger",
                "description": "Unleash a bouncing Lightforce Dagger to damage enemies and heal nearby allies",
                "key": "Left Click",
                "icon": "static/heroes/abilities/cloak-and-dagger-7-lightforce-dagger.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast projectile that generates a spell area upon impact"
                    },
                    {
                        "label": "Special Effect",
                        "value": "The projectile features an attraction effect, pulling in the closest target to the crosshair and creating a spell field upon impact. This spell field provides healing effects"
                    },
                    {
                        "label": "Damage",
                        "value": "18 damage per round"
                    },
                    {
                        "label": "Healing Per Hit",
                        "value": "12 per hit"
                    },
                    {
                        "label": "Area of Effect Healing",
                        "value": "20 per hit"
                    },
                    {
                        "label": "Range",
                        "value": "8m spherical radius"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "2.27 hits per second"
                    },
                    {
                        "label": "Ammo",
                        "value": "12"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "No"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/5211b159-6fa8-4589-829f-facb1c455241.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Eternal Bond",
                "description": "Perform four rapid dashes, healing allies and damaging enemies along the path",
                "key": "Q",
                "icon": "static/heroes/abilities/cloak-and-dagger-8-eternal-bond.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Persistent Spell Field"
                    },
                    {
                        "label": "Damage",
                        "value": "30/s"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "250/s"
                    },
                    {
                        "label": "Range",
                        "value": "A cylindrical spell field with a 4m radius and 15m in length"
                    },
                    {
                        "label": "Duration",
                        "value": "13s"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "4500"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/9791de0a-9b39-4111-a535-77a8fccaef5a.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Shadow's Embrace",
                "description": "Switch to Cloak",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/cloak-and-dagger-9-shadow-s-embrace.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Casting",
                        "value": "Instant Cast"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/3e810039-6b5c-43e0-b1c6-22808f1ee3cf.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Veil of Lightforce",
                "description": "Deploy a Veil of Lightforce to heal allies upon touch and grant them a Healing Boost",
                "key": "E",
                "icon": "static/heroes/abilities/cloak-and-dagger-10-veil-of-lightforce.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Spell Field"
                    },
                    {
                        "label": "Special Effect",
                        "value": "The spell field advances along the casting path"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "45"
                    },
                    {
                        "label": "Healing Boost",
                        "value": "20%"
                    },
                    {
                        "label": "Duration",
                        "value": "4s"
                    },
                    {
                        "label": "Range",
                        "value": "Width: 6m, Height: 4.5m"
                    },
                    {
                        "label": "Movement Speed",
                        "value": "20m/s"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "25m"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/b2149229-d3c4-4056-9fa4-04704c96c3af.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Dagger Storm",
                "description": "Launch a volley of daggers, creating a Healing Over Time field in the impact area",
                "key": "Right Click",
                "icon": "static/heroes/abilities/cloak-and-dagger-11-dagger-storm.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast projectile with delayed impact that also generates a spell field"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "45/s"
                    },
                    {
                        "label": "Duration",
                        "value": "6s"
                    },
                    {
                        "label": "Range",
                        "value": "5m spherical radius"
                    },
                    {
                        "label": "Cooldown",
                        "value": "Veil of Lightforce & Terror Cape share charges, capped out at 2 with each taking 10s to recharge. After using either, both abilities enter a 2s cooldown"
                    },
                    {
                        "label": "Special Effect",
                        "value": "When a Spell Field is created, allies in range get a One-Time Healing of 60"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/a106ebc0-80b0-4dd9-bf68-0c19f464e8bc.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "275"
            },
            {
                "label": "Movement Speed",
                "value": "6m/s"
            }
        ],
        "forms": [
            "Dagger"
        ]
    },
    "cyclops": {
        "nickname": "CYCLOPS",
        "realName": "SCOTT SUMMERS",
        "roles": [
            "DUELIST"
        ],
        "intro": "Scott Summers leads the X-Men as Cyclops. Through his specialized ruby quartz visor, he precisely controls the devastating force channeled through eyes, neutralizing any threat on the battlefield. But when that visor comes off, all restraint disappears, erupting into an unstoppable torrent of concussive energy!",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Optic Blast",
                "description": "Fire a quick burst of kinetic force forward. Hitting enemies accelerates Ricochet Force charge rate",
                "key": "Left Click",
                "icon": "static/heroes/abilities/cyclops-1-optic-blast.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Tick Rate",
                        "value": "0.03s per use"
                    },
                    {
                        "label": "Damage per Tick",
                        "value": "25"
                    },
                    {
                        "label": "Hit Checks per Attack",
                        "value": "3"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "0.6s"
                    },
                    {
                        "label": "Ricochet Force CD Reduction per Hit",
                        "value": "0.15s"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20260611/67d45b41-e124-4be6-a08f-28b7f6868a7e.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Concussive Beam",
                "description": "Continuously fire a powerful beam that can refract between enemies and the environment. Hitting enemies accelerates Ricochet Force charge rate",
                "key": "Right Click",
                "icon": "static/heroes/abilities/cyclops-2-concussive-beam.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Tick Rate",
                        "value": "0.083s per use"
                    },
                    {
                        "label": "Damage per Tick",
                        "value": "11.5"
                    },
                    {
                        "label": "Ricochet Damage Falloff",
                        "value": "50%, minimum 10%"
                    },
                    {
                        "label": "Environment Ricochet Damage Falloff",
                        "value": "30%"
                    },
                    {
                        "label": "Ricochet Force CD Reduction per Hit",
                        "value": "0.15s"
                    },
                    {
                        "label": "Maximum Energy",
                        "value": "100"
                    },
                    {
                        "label": "Energy Cost per Second",
                        "value": "25/s"
                    },
                    {
                        "label": "Energy Recovery per Second",
                        "value": "10/s"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20260611/3f017cb2-5d18-4fcb-8ca4-15e3da0fdab6.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Ricochet Force",
                "description": "Fire a beam that can diffract and track nearby enemies after hitting terrain. Upon use, Cyclops gains Bonus Health",
                "key": "E",
                "icon": "static/heroes/abilities/cyclops-3-ricochet-force.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Beam Damage",
                        "value": "80"
                    },
                    {
                        "label": "Environment Ricochet Damage Falloff",
                        "value": "65%"
                    },
                    {
                        "label": "Environment Refraction Damage Falloff",
                        "value": "20%"
                    },
                    {
                        "label": "Character Refraction Damage Falloff",
                        "value": "50%"
                    },
                    {
                        "label": "Environment Refraction Damage Falloff Distance",
                        "value": "Falloff begins at 8m, decreasing to 40% at 12m"
                    },
                    {
                        "label": "Environment Refraction Damage Scaling per Refraction",
                        "value": "After the first refraction, each additional refraction increases damage by 10%, up to 20%"
                    },
                    {
                        "label": "Environment Refraction Character Tracking Range",
                        "value": "12m"
                    },
                    {
                        "label": "Cooldown",
                        "value": "2 charges, with each charge taking 15s to recharge. Base Cooldown 2s"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260611/f247fe64-7879-4363-b6be-609748fa254a.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Propulsion Burst",
                "description": "Fire a propulsion beam to push yourself and the target backward, applying a Slow effect to the enemy",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/cyclops-4-propulsion-burst.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    },
                    {
                        "label": "Ability Duration",
                        "value": "Minimum 0.35s, maximum 1s"
                    },
                    {
                        "label": "Dash Duration",
                        "value": "Minimum 11m, maximum 22m"
                    },
                    {
                        "label": "Slow Effect",
                        "value": "35% for 2s"
                    },
                    {
                        "label": "Tick Rate",
                        "value": "0.083s per use"
                    },
                    {
                        "label": "Damage",
                        "value": "5 per hit"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260611/b8204ec4-4bc0-4d75-9e40-c75d9a80159a.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Optic Ascent",
                "description": "Fire a propulsion beam directly downward to push yourself up and knock back hit enemies, applying a Slow effect to them",
                "key": "F",
                "icon": "static/heroes/abilities/cyclops-5-optic-ascent.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    },
                    {
                        "label": "Ability Duration",
                        "value": "0.6s"
                    },
                    {
                        "label": "Dash Duration",
                        "value": "12m"
                    },
                    {
                        "label": "Movement Boost",
                        "value": "35% for 2s"
                    },
                    {
                        "label": "Tick Rate",
                        "value": "0.083s per use"
                    },
                    {
                        "label": "Damage",
                        "value": "5 per hit"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260611/e20c4dc4-44bd-4e8c-b872-d10e84ef478e.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Kinetic Hover",
                "description": "Enter a slow-fall state while firing Concussive Beam mid-air",
                "key": "Passive",
                "icon": "static/heroes/abilities/cyclops-6-kinetic-hover.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20260611/34579f57-e95c-49e5-a80e-9cd0b03350d8.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Ruby Rage",
                "description": "Remove visor and fire a powerful sweeping beam forward. The blast leaves behind volatile excess energy that erupts, dealing massive secondary explosive damage",
                "key": "Q",
                "icon": "static/heroes/abilities/cyclops-7-ruby-rage.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "3700"
                    },
                    {
                        "label": "First Spell Field Damage",
                        "value": "75+20% Maximum Health"
                    },
                    {
                        "label": "Interval Between Two Fields",
                        "value": "1.1s"
                    },
                    {
                        "label": "Second Spell Field Damage",
                        "value": "75+40% Maximum Health"
                    },
                    {
                        "label": "Maximum Range",
                        "value": "60m"
                    },
                    {
                        "label": "Spell Field Width",
                        "value": "First field 2m, second field 8m"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260611/a9a51b9e-f60d-494a-9ae7-3e185cde4c4d.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Red Adamantium",
                "description": "Cyclops supercharges Wolverine's claws, extending his attack range. While active, Wolverine's Vicious Rampage is replaced with Kinetic Claws, granting him a brief forward lunge that unleashes a flurry of slashes around him",
                "key": "Passive",
                "icon": "static/heroes/abilities/cyclops-8-red-adamantium.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "5% Damage Boost"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260611/163cb861-6d98-42a9-8101-c0fa96a4c48f.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "275"
            },
            {
                "label": "Movement Speed",
                "value": "600"
            }
        ],
        "forms": [
            "Cyclops"
        ]
    },
    "daredevil": {
        "nickname": "DAREDEVIL",
        "realName": "MATT MURDOCK",
        "roles": [
            "DUELIST"
        ],
        "intro": "A tragic accident transformed Matt Murdock, blinding him, but awakening his incredible Radar Sense. When darkness falls, Daredevil wields his billy clubs in place of a gavel, doling out justice and purging the world of evil!",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "JUSTICE JAB",
                "description": "Swing Billy Clubs forward. Gain Fury on hit",
                "key": "Left Click",
                "icon": "static/heroes/abilities/daredevil-1-justice-jab.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Melee"
                    },
                    {
                        "label": "Damage",
                        "value": "35"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "4.5m"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Gain 15 Fury on hit"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20251010/9a0c9bf6-2e70-4a7a-8aac-92e1a9691ecb.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "RIGHTEOUS CROSS",
                "description": "Cross your Billy Clubs and surge forward. Gain Fury on hit",
                "key": "Left Click",
                "icon": "static/heroes/abilities/daredevil-2-righteous-cross.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Maximum Dash Distance",
                        "value": "6m"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "50"
                    },
                    {
                        "label": "Spell Field Maximum Distance",
                        "value": "6m"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Gain 15 Fury on hit"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20251010/ee03f218-5394-415f-b11a-3a4858128d81.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "OBJECTION!",
                "description": "Whirl billy clubs in a tight guard to block frontal damage and reflect projectiles, becoming immune to all incoming harm during this stance and gain Fury",
                "key": "Right Click",
                "icon": "static/heroes/abilities/daredevil-3-objection.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Duration",
                        "value": "1.2s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Block frontal damage and reflect projectiles, becoming immune to all incoming harm during this stance. Gain 60 Fury when successfully blocking an attack."
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20251010/0d23a7fb-886a-4f9c-91ef-22eddd0352a9.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "DEVIL'S LATCH",
                "description": "Fire a grappling line that reels Daredevil and his target toward each other. On completion, gain Fury and temporarily enables Cross Interrogation",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/daredevil-4-devil-s-latch.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "25m"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "180m/s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Enable Righteous Cross within 5 seconds after using this ability. Gain 30 Fury"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20251010/39ffe656-8f28-43c4-be3d-cc79ed2df6a5.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "INFERNAL FURY",
                "description": "Expend Fury to unleash Devil's Chain or Devil's Throw. Devil's Chain converts damage into Bonus Health, while Devil's Throw Slows enemies on hit and temporarily enables Cross Interrogation",
                "key": "Right Click",
                "icon": "static/heroes/abilities/daredevil-5-infernal-fury.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Special Effect",
                        "value": "During the activation, Daredevil can unleash Devil's Chain or Devil's Throw. Enable Righteous Cross within 5 seconds after using this ability"
                    },
                    {
                        "label": "Fury Required for Activation",
                        "value": "60"
                    },
                    {
                        "label": "Bonus Max Health",
                        "value": "100"
                    },
                    {
                        "label": "Bonus Health Falloff",
                        "value": "Falloff begins at 5s and decreases by 30/s"
                    },
                    {
                        "label": "DEVIL'S CHAIN",
                        "value": ""
                    },
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "Box shaped spell field. Length: 8m; Width: 4m; Height: 4m"
                    },
                    {
                        "label": "High Damage Spell Field Range",
                        "value": "2m spherical radius spell field at the end"
                    },
                    {
                        "label": "Damage/Bonus Health Conversion",
                        "value": "0.7"
                    },
                    {
                        "label": "Bonus Health Gained",
                        "value": "25"
                    },
                    {
                        "label": "Damage",
                        "value": "40. Cause 65 damage when the target caught in the high damage range"
                    },
                    {
                        "label": "DEVIL'S THROW",
                        "value": ""
                    },
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "150m/s"
                    },
                    {
                        "label": "Projectile Damage",
                        "value": "30"
                    },
                    {
                        "label": "Max Number of Ricochets",
                        "value": "4. Up to 2 ricochets if there are no targets"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Devil's Throw slows enemies on hit"
                    },
                    {
                        "label": "Slow Rate",
                        "value": "20%"
                    },
                    {
                        "label": "Bonus Health Gained",
                        "value": "50"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20251010/e0e39493-ba93-4947-a38f-7d86f314b48b.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Sonic Pursuit",
                "description": "Locks onto a target, gaining increased Speed; and Damage Reduction when attacked. While in range, dash to the target, Blinding them and restore Fury",
                "key": "F",
                "icon": "static/heroes/abilities/daredevil-6-sonic-pursuit.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Movement Boost",
                        "value": "2.1m/s. Falloff begins at 10m away from the target, decreasing to 0.9m/s at 40m from the target"
                    },
                    {
                        "label": "Self Damage Reduction",
                        "value": "10%"
                    },
                    {
                        "label": "Select Range",
                        "value": "40m"
                    },
                    {
                        "label": "Dash Cooldown",
                        "value": "15s"
                    },
                    {
                        "label": "Dash Select Range",
                        "value": "12m"
                    },
                    {
                        "label": "Max Dash Speed",
                        "value": "100m/s"
                    },
                    {
                        "label": "Dash Damage Range",
                        "value": "1m spherical radius spell field"
                    },
                    {
                        "label": "Dash Damage",
                        "value": "20"
                    },
                    {
                        "label": "Special Effect",
                        "value": "If Daredevil defeats the target, refresh the cooldown. Gain 60 Fury after the dash"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20251010/041a40d0-92c7-4a69-9ddd-92af7dbaf73f.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "RADAR SENSE",
                "description": "Detect enemy movements within a set radius",
                "key": "Passive",
                "icon": "static/heroes/abilities/daredevil-7-radar-sense.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Maximum Detection Distance",
                        "value": "40m"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20251010/1dd21aa7-df86-4264-9861-76e20570a272.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "BLIND ASCENT",
                "description": "Run along walls and spring off them to reposition",
                "key": "Space",
                "icon": "static/heroes/abilities/daredevil-8-blind-ascent.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Space"
                    },
                    {
                        "label": "Wall-Crawling Speed",
                        "value": "10 m/s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20251010/ce9cbf4e-0c10-4fbe-bd57-af7eada7b84e.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "LET THE DEVIL OUT",
                "description": "Embrace the Beast within. Enemies in Daredevil's line of sight take damage and suffer a ramping Blind effect. Continually gain Fury while active",
                "key": "Q",
                "icon": "static/heroes/abilities/daredevil-9-let-the-devil-out.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Time Required to Reach the Maximum Blind Range and Damage",
                        "value": "3s"
                    },
                    {
                        "label": "Spell Field Duration",
                        "value": "8s"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "15m"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "3400"
                    },
                    {
                        "label": "Damage",
                        "value": "50/s. Cause 85 damage per second when reaching the max damage"
                    },
                    {
                        "label": "Blind Effect",
                        "value": "Visual range 35m, decreasing to 10m when the Blind effect reaches its maximum"
                    },
                    {
                        "label": "Fury Recovery Speed",
                        "value": "30/s"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20251010/0aa73672-4753-4c5d-9f39-e501bd6dbbae.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "BLIND VERDICT",
                "description": "Daredevil shares the location of his Sonic Pursuit target with The Punisher. At the same time, The Punisher can launch a devil-infused shock grenade to damage and blind enemies",
                "key": "Passive",
                "icon": "static/heroes/abilities/daredevil-10-blind-verdict.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "5% damage boost"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20251010/b101bc7c-3d49-48dc-a02a-7e13cba90108.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "300"
            },
            {
                "label": "Movement Speed",
                "value": "6m/s"
            }
        ],
        "forms": [
            "DAREDEVIL"
        ]
    },
    "deadpool": {
        "nickname": "DEADPOOL",
        "realName": "WADE WILSON",
        "roles": [
            "VANGUARD",
            "DUELIST",
            "STRATEGIST"
        ],
        "intro": "Wade Wilson is the full package (or so he claims), with devastating damage output, an impenetrable shield, and swift healing. There's no limit to what Deadpool can achieve, as long as he keeps his moves flashy! And, of course, every epic attack comes with an endless barrage of witty banter!",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "DUAL DESERT EAGLES - VANGUARD",
                "description": "Nobody lays a finger on my teammates! Anyone tries, and I'm firing these big boy bullets straight at their face!",
                "key": "Left Click",
                "icon": "static/heroes/abilities/deadpool-1-dual-desert-eagles-vanguard.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Rapid-fire projectile."
                    },
                    {
                        "label": "Damage",
                        "value": "34 damage per round"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 15m, decreasing to 50% at 30m"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "2.5 rounds per second"
                    },
                    {
                        "label": "Ammo",
                        "value": "30"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/612130fb-e64b-45c5-a9fe-536fce19cb0a.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "THE BAN HAMMER",
                "description": "You! Yeah, you - the hyper one! Eyes off my friends. I sentence you to...whatever! Get ready to be taunted. I get bonus HP and healing, and if you whiff your abilities, you take damage, and I get even more HP!",
                "key": "Q",
                "icon": "static/heroes/abilities/deadpool-2-the-ban-hammer.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Damage From Per Ability Missed",
                        "value": "35"
                    },
                    {
                        "label": "Bonus Health From Per Ability Missed",
                        "value": "60 per ability missed"
                    },
                    {
                        "label": "Ability Duration",
                        "value": "8s"
                    },
                    {
                        "label": "Bonus Health Gained Upon Activation",
                        "value": "200"
                    },
                    {
                        "label": "Healing Over Time During Activation",
                        "value": "25/s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "60s"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260116/2dd26fc5-baa0-418f-8130-fb8e96ff90b4.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "MAGICAL UNICORN SHIELD!",
                "description": "Plushie power! It stops every single attack those chumps throw, giving my team a safety bubble. It's cute AND bulletproof",
                "key": "Right Click",
                "icon": "static/heroes/abilities/deadpool-3-magical-unicorn-shield.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Summons' Health",
                        "value": "300"
                    },
                    {
                        "label": "Maximum Duration for Summons",
                        "value": "4s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/fef38c04-fee0-40a5-ad7f-79577aa45743.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "BUNNY BOUNCE",
                "description": "Yup, I can double jump in midair! During The Big Test and its upgrade, I can also stomp heads and wall jump to reset its cooldown. Stomp enemies so hard they won't get near my team!",
                "key": "Space",
                "icon": "static/heroes/abilities/deadpool-4-bunny-bounce.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Space"
                    },
                    {
                        "label": "Cooldown",
                        "value": "6s"
                    },
                    {
                        "label": "Maximum Jump Distance",
                        "value": "16m"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/183eb974-55a8-488f-bd08-ef83ad4688e3.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "HEALING FACTOR",
                "description": "Out of combat? I'm healing up, staying battle-ready to protect my team. And if I'm about to croak? Surprise! I get a free pass, and my health zooms back up. Nice try, villains",
                "key": "PASSIVE",
                "icon": "static/heroes/abilities/deadpool-5-healing-factor.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "PASSIVE"
                    },
                    {
                        "label": "Healing over Time",
                        "value": "25/s"
                    },
                    {
                        "label": "Healing over Time from Activated Healing Factor",
                        "value": "50/s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "45s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "The healing factor kicks in after Deadpool has been out of combat for 5s. If Deadpool takes more than 200 damage within a two-second window, the healing factor activates and boosts the healing"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/eb588f97-66b2-45b7-b543-88aeaa167a58.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "MAXIMUM FLAIR",
                "description": "Listen up, eyes on the prize, don't wander off! Every time my abilities land on a bad guy, the style points shoot up a notch! When it's full, I can pop my ultimate! With me on the team, you're all staying alive and fabulous!",
                "key": "Passive",
                "icon": "static/heroes/abilities/deadpool-6-maximum-flair.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Special Effect",
                        "value": "The ultimate ability can be unleashed after reaching an S rating. The rating is cleared if Deadpool is defeated."
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/fc477704-7f13-4fc9-a949-55a43fd0399a.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "UPGRADE!",
                "description": "I'm here to smack baddies, get XP, and shield my friends! When my XP is full, I get to upgrade an ability! Bonus: Score the final hit and force your foe into a selfie—more XP for me! I'm invincible while striking my best duckface. No photobombs!",
                "key": "F",
                "icon": "static/heroes/abilities/deadpool-7-upgrade.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Accumulate XP in battle. When maxed, choose an ability to upgrade for powerful boosts"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/8581a805-ffde-468d-9b45-47ea9dc540da.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "DEADPOOL IN YOUR AREA - VANGUARD",
                "description": "Want to hurt my team? Good luck! I hit you with a taunt, mess up your vision, and burn your health nonstop! Best part: my swords and guns go full turbo for the duration. Blink and you'll miss it",
                "key": "E",
                "icon": "static/heroes/abilities/deadpool-8-deadpool-in-your-area-vanguard.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    },
                    {
                        "label": "Ability Duration",
                        "value": "5s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Disrupt enemies' vision in range and gain XP. Enemies can damage Deadpool to end the disruption. Increase left-click attack speed for the duration."
                    },
                    {
                        "label": "Damage Needed to Remove the Disruption",
                        "value": "100"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "10/s"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "A cylindrical spell field with a 6m radius and a height of 6m."
                    },
                    {
                        "label": "Damage Reduction",
                        "value": "20%"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/947a7dad-eb1a-48ae-a028-0c018245d0bd.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Comical Chaos",
                "description": "Deadpool hands Jeff the Land Shark a plushie with attitude. Jeff can spit it ahead where it'll continuously Taunt nearby enemies and Block Vision, while allies in range enjoy a plush-powered healing party!",
                "key": "Passive",
                "icon": "static/heroes/abilities/deadpool-9-comical-chaos.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "+50 Max Health"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260116/7ff581ee-1f52-4aae-97a8-37f03509c681.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "KICK@$$ KATANA - VANGUARD",
                "description": "Protecting my team means my katanas go full savage. No mercy for the baddies!",
                "key": "Left Click",
                "icon": "static/heroes/abilities/deadpool-10-kick-katana-vanguard.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Melee"
                    },
                    {
                        "label": "Damage",
                        "value": "30 per hit"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "First strike: 0.6s; second strike: 0.53s; third strike: 0.6s"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "4m"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/cd46d5e0-bd27-47b8-b5af-a50a3ae283e4.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "THE BIG TEST",
                "description": "Wake the #!&% up, hero! We've got a game to win! Speed and healing buffs for starters, bonus Hazardous Hijinks for me, and extra HP for me and my nearby friends. Hit enough baddies with the right abilities exactly as I ask, and you unlock mega speed and healing, plus reset my Healing Factor cooldown!. Team protection mode: activated!",
                "key": "Q",
                "icon": "static/heroes/abilities/deadpool-11-the-big-test.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Ability Duration",
                        "value": "The challenge lasts 12s. The buff lasts 6s after you complete it."
                    },
                    {
                        "label": "Boost Spell Field Range",
                        "value": "6m radius spherical spell field"
                    },
                    {
                        "label": "Bonus Health",
                        "value": "Self: 200; allies: 50"
                    },
                    {
                        "label": "Healing over Time",
                        "value": "Upon activation: 50/s; challenge completed: 100/s"
                    },
                    {
                        "label": "Movement Boost",
                        "value": "Upon activation: 15%; challenge completed: 30%"
                    },
                    {
                        "label": "Cooldown",
                        "value": "60s"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260116/01cf36e8-0774-4b0f-96eb-1860e9d8ad4a.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "HAZARDOUS HIJINKS - VANGUARD",
                "description": "Try getting to my teammates, I dare you! My dash slash knocks fools down, and if I hit, I get to do it again. Up to three times, baby!",
                "key": "Right Click",
                "icon": "static/heroes/abilities/deadpool-12-hazardous-hijinks-vanguard.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Cooldown",
                        "value": "10s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Refresh the cooldown if it hits an enemy for up to 2 times."
                    },
                    {
                        "label": "Damage",
                        "value": "40"
                    },
                    {
                        "label": "Dash Duration",
                        "value": "Up to 12m"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/bc056ad5-a545-497b-a4b3-296be9f62c3b.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "BUNNY BOUNCE",
                "description": "Yup, I can double jump in midair! During The Big Test and its upgrade, I can also stomp heads and wall jump to reset its cooldown. Stomp enemies so hard they won't get near my team!",
                "key": "Space",
                "icon": "static/heroes/abilities/deadpool-13-bunny-bounce.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Space"
                    },
                    {
                        "label": "Maximum Dash Distance",
                        "value": "16m"
                    },
                    {
                        "label": "Cooldown",
                        "value": "6s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/f83e789b-8ec4-4623-9162-a873b479ada6.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "HEALING FACTOR",
                "description": "Out of combat? I'm healing up, staying battle-ready to protect my team. And if I'm about to croak? Surprise! I get a free pass, and my health zooms back up. Nice try, villains",
                "key": "PASSIVE",
                "icon": "static/heroes/abilities/deadpool-14-healing-factor.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "PASSIVE"
                    },
                    {
                        "label": "Healing over Time",
                        "value": "25/s"
                    },
                    {
                        "label": "Healing over Time from Activated Healing Factor",
                        "value": "50/s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "45s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "The healing factor kicks in after Deadpool has been out of combat for 5s. If Deadpool takes more than 200 damage within a two-second window, the healing factor activates and boosts the healing"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/68817e55-2b49-4e4f-9e54-36bc0530574e.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "MAXIMUM FLAIR",
                "description": "Listen up, eyes on the prize, don't wander off! Every time my abilities land on a bad guy, the style points shoot up a notch! When it's full, I can pop my ultimate! With me on the team, you're all staying alive and fabulous!",
                "key": "Passive",
                "icon": "static/heroes/abilities/deadpool-15-maximum-flair.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Special Effect",
                        "value": "The ultimate ability can be unleashed after reaching an S rating. The rating is cleared if Deadpool is defeated"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/1e05f233-ac32-4fe9-b1b8-9c7cd4e165a3.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "UPGRADE!",
                "description": "I'm here to smack baddies, get XP, and shield my friends! When my XP is full, I get to upgrade an ability! Bonus: Score the final hit and force your foe into a selfie—more XP for me! I'm invincible while striking my best duckface. No photobombs!",
                "key": "F",
                "icon": "static/heroes/abilities/deadpool-16-upgrade.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Accumulate XP in battle. When maxed, choose an ability to upgrade for powerful boosts."
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/bf797f74-4018-4b36-85d6-89159ea831b4.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "DEADPOOL IN YOUR AREA - VANGUARD",
                "description": "Want to hurt my team? Good luck! I hit you with a taunt, mess up your vision, and burn your health nonstop! Best part: my swords and guns go full turbo for the duration. Blink and you'll miss it",
                "key": "E",
                "icon": "static/heroes/abilities/deadpool-17-deadpool-in-your-area-vanguard.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    },
                    {
                        "label": "Ability Duration",
                        "value": "5s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Disrupt enemies' vision in range and gain XP. Enemies can damage Deadpool to end the disruption. Increase left-click attack speed for the duration."
                    },
                    {
                        "label": "Damage Needed to Remove the Disruption",
                        "value": "100"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "10/s"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "A cylindrical spell field with a 6m radius and a height of 6m"
                    },
                    {
                        "label": "Damgae Reduction",
                        "value": "20%"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/b4f7983e-98fb-46bb-aabc-c8bb80041553.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Comical Chaos",
                "description": "Deadpool hands Jeff the Land Shark a plushie with attitude. Jeff can spit it ahead where it'll continuously Taunt nearby enemies and Block Vision, while allies in range enjoy a plush-powered healing party!",
                "key": "Passive",
                "icon": "static/heroes/abilities/deadpool-18-comical-chaos.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "+50 Max Health"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260116/7ff581ee-1f52-4aae-97a8-37f03509c681.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "DUAL DESERT EAGLES - VANGUARD UPGRADED",
                "description": "I rack up shots, then, BOOM! A mind-blowing bubble bomb for all the enemies. Teammate security: maximum",
                "key": "Left Click",
                "icon": "static/heroes/abilities/deadpool-19-dual-desert-eagles-vanguard-upgraded.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Beam Damage",
                        "value": "39 damage per round"
                    },
                    {
                        "label": "Beam Attack Interval",
                        "value": "2.5 rounds per second"
                    },
                    {
                        "label": "Ammo",
                        "value": "40"
                    },
                    {
                        "label": "Projectile Attack Interval",
                        "value": "After every 5 beam bullets fired, the next shot fires 1 additional projectile"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "60 m/s"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "25"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "3m radius spherical spell field"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/9950e177-ed31-4cc3-9dd0-5e81a1ebd0f4.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "KICK@$$ KATANA - VANGUARD UPGRADED",
                "description": "Relax, you've got Deadpool on your side! Swords out, baddies out. My stab hits crit, and a Bad Bunny hit makes the next swing a stabby special",
                "key": "Left Click",
                "icon": "static/heroes/abilities/deadpool-20-kick-katana-vanguard-upgraded.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Damage",
                        "value": "35 per hit"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "First strike: 0.5s; second strike: 0.43s; third strike: 0.5s"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "4m"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/bff49308-0b5f-46fc-81ca-46fe94f05f81.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "DEADPOOL IN YOUR AREA - VANGUARD UPGRADED",
                "description": "Teammates, stay safe! Dummies, look here! It's showtime: I taunt, blind you, and hit warp speed with my swords and guns. Plus, my crew gets a damage reduction buff, so they're basically invincible. Dummies that stick around too long will even have their UI taped over!",
                "key": "E",
                "icon": "static/heroes/abilities/deadpool-21-deadpool-in-your-area-vanguard-upgraded.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    },
                    {
                        "label": "Ability Duration",
                        "value": "5s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Disrupt enemies' vision in range and gain XP. Enemies can damage Deadpool to end the disruption. Increase left-click attack speed for the duration."
                    },
                    {
                        "label": "Damage Needed to Remove the Disruption",
                        "value": "100"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "10/s"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "A cylindrical spell field with a 6m radius and a height of 6m"
                    },
                    {
                        "label": "Damage Reduction",
                        "value": "Self: 30%; allies: 20%"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/dd186638-8506-401f-b1a7-c09436994ad7.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "HAZARDOUS HIJINKS - VANGUARD UPGRADED",
                "description": "Watch this pro bodyguard in action! I dash forward, nail the bad guy, and bounce in any direction I want. Oh, and I can do this two more times real quick!",
                "key": "Right Click",
                "icon": "static/heroes/abilities/deadpool-22-hazardous-hijinks-vanguard-upgraded.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Cooldown",
                        "value": "2 charges, with each charge taking 10s to recharge."
                    },
                    {
                        "label": "Special Effect",
                        "value": "Refresh the cooldown if it hits an enemy for up to 2 times. Deadpool bounces as the ability hits an enemy."
                    },
                    {
                        "label": "Damage",
                        "value": "40"
                    },
                    {
                        "label": "Dash Duration",
                        "value": "Up to 12m"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/5477ab5b-877f-48c7-9541-973e67722586.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "MAGICAL UNICORN SHIELD! - UPGRADED",
                "description": "My ultra-cool, super shiny, extra huggable, and totally blinged-out plushy. Toss it ahead, and it lands as an invincible sphere of awesomeness! Blocking attacks and keeping my team safe inside our furry fortress",
                "key": "Right Click",
                "icon": "static/heroes/abilities/deadpool-23-magical-unicorn-shield-upgraded.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Summons' Health",
                        "value": "400"
                    },
                    {
                        "label": "Maximum Duration for Summons",
                        "value": "4s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/58a98547-303e-4b5d-b0ca-d05be7c951c6.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "THE BIG TEST - UPGRADED",
                "description": "Hey, player! Warm-up's over, time for the main event! Speed, healing, dashes, for me, and bonus HP for all! Smash enough baddies with the skills I say, and you unlock super buffs (massive speed and healing), plus Healing Factor resets. For some time after, each hit means more HP for the crew and you. Don't mess this up!",
                "key": "Q",
                "icon": "static/heroes/abilities/deadpool-24-the-big-test-upgraded.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Ability Duration",
                        "value": "The challenge lasts 12s. The buff lasts 8s after you complete it."
                    },
                    {
                        "label": "Boost Spell Field Range",
                        "value": "6m radius spherical spell field"
                    },
                    {
                        "label": "Bonus Health",
                        "value": "Self: 300; allies: 50"
                    },
                    {
                        "label": "Healing over Time",
                        "value": "Upon activation: 50/s; challenge completed: 100/s"
                    },
                    {
                        "label": "Movement Boost",
                        "value": "Upon activation: 15%; challenge completed: 30%"
                    },
                    {
                        "label": "Cooldown",
                        "value": "60s"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260116/917c3099-6c03-40db-a5af-da7bd907b710.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "THE BAN HAMMER - UPGRADED",
                "description": "Upgraded courtroom drama! Congrats, unlucky one! You're my pick; enjoy the taunt! I score bonus health and healing, and you take ongoing damage. If you miss an ability while court is in session, it's a double whammy. You get more pain, AND I get more extra HP! Thanks in advance!",
                "key": "Q",
                "icon": "static/heroes/abilities/deadpool-25-the-ban-hammer-upgraded.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Damage From Per Ability Missed",
                        "value": "35"
                    },
                    {
                        "label": "Bonus Health From Per Ability Missed",
                        "value": "70 per ability missed"
                    },
                    {
                        "label": "Ability Duration",
                        "value": "8s"
                    },
                    {
                        "label": "Bonus Health upon Activation",
                        "value": "200"
                    },
                    {
                        "label": "Healing During Activation",
                        "value": "25/s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "60s"
                    },
                    {
                        "label": "Damage Over Time",
                        "value": "25/s"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260116/944e9d57-7cfe-47fe-97bf-dbda97f0552c.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Comical Chaos",
                "description": "Deadpool hands Jeff the Land Shark a plushie with attitude. Jeff can spit it ahead where it'll continuously Taunt nearby enemies and Block Vision, while allies in range enjoy a plush-powered healing party!",
                "key": "Passive",
                "icon": "static/heroes/abilities/deadpool-26-comical-chaos.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "+50 Max Health"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260116/7ff581ee-1f52-4aae-97a8-37f03509c681.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "DUAL DESERT EAGLES - DUELIST",
                "description": "Bang! Bang! Unleash two hand cannons left and right, because one gun is never enough. Pew pew, baby!",
                "key": "Left Click",
                "icon": "static/heroes/abilities/deadpool-27-dual-desert-eagles-duelist.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Rapid-fire projectile"
                    },
                    {
                        "label": "Damage",
                        "value": "38 per hit"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 18m, decreasing to 80% at 30m"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "2.5 rounds per second"
                    },
                    {
                        "label": "Ammo",
                        "value": "30"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/bbbc1021-c26d-4d45-b504-41fecb1fd329.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "SKILL ISSUE",
                "description": "Let's play judge! Pick a dumb-dumb and slap a taunt. They miss an ability? Boom! Gavel drops, and I slap them with pain and snark",
                "key": "Q",
                "icon": "static/heroes/abilities/deadpool-28-skill-issue.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Damage From Per Ability Missed",
                        "value": "60"
                    },
                    {
                        "label": "Ability Duration",
                        "value": "8s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "45s"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260116/32d6d205-925f-4e0b-ba3c-36c29e716545.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "HEADSHOT! - DUELIST",
                "description": "Ever seen someone throw their own face? Watch me KO a crowd, then catch my mug on the rebound!. Don't lose your head over it",
                "key": "Right Click",
                "icon": "static/heroes/abilities/deadpool-29-headshot-duelist.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast projectile with delayed impact that also generates a spell field"
                    },
                    {
                        "label": "Projectile Damage",
                        "value": "Unleash: 30; return: 25"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "80m/s"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "15/s"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "4m spherical radius spell field"
                    },
                    {
                        "label": "Spell Field Duration",
                        "value": "1s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "10s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260116/fe2d56e5-76f1-440b-b799-f3339fac8787.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "BUNNY HOP",
                "description": "Hippity-hoppity, Deadpool's on your property! Watch me squeeze in a second jump midair! Hop on heads or kick off walls with Bunny Hop to refresh the cooldown, and if I land on someone? Free health for me, and a headache for them. Whee!",
                "key": "Space",
                "icon": "static/heroes/abilities/deadpool-30-bunny-hop.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Space"
                    },
                    {
                        "label": "Damage",
                        "value": "25"
                    },
                    {
                        "label": "Bonus Health",
                        "value": "25, up to 50"
                    },
                    {
                        "label": "Cooldown",
                        "value": "6s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Refresh the cooldown if it hits an enemy."
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/e30a48d2-58b5-4ea4-9fbf-b0ea4237ce55.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "HEALING FACTOR",
                "description": "Out of combat? I'm healing up, staying battle-ready to protect my team. And if I'm about to croak? Surprise! I get a free pass, and my health zooms back up. Nice try, villains",
                "key": "PASSIVE",
                "icon": "static/heroes/abilities/deadpool-31-healing-factor.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "PASSIVE"
                    },
                    {
                        "label": "Healing over Time",
                        "value": "25/s"
                    },
                    {
                        "label": "Healing over Time from Activated Healing Factor",
                        "value": "50/s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "45s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "The healing factor kicks in after Deadpool has been out of combat for 5s. If Deadpool takes more than 200 damage within a two-second window, the healing factor activates and boosts the healing"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/34f96677-28fa-4445-ba68-7e5553a9452e.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "MAXIMUM FLAIR",
                "description": "Listen up, eyes on the prize, don't wander off! Every time my abilities land on a bad guy, the style points shoot up a notch! When it's full, I can pop my ultimate! With me on the team, you're all staying alive and fabulous!",
                "key": "Passive",
                "icon": "static/heroes/abilities/deadpool-32-maximum-flair.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Special Effect",
                        "value": "The ultimate ability can be unleashed after reaching an S rating. The rating is cleared if Deadpool is defeated."
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/f1818cfa-e96d-4f24-9aad-cbf41a68b80d.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "UPGRADE!",
                "description": "I'm here to smack baddies, get XP, and shield my friends! When my XP is full, I get to upgrade an ability! Bonus: Score the final hit and force your foe into a selfie—more XP for me! I'm invincible while striking my best duckface. No photobombs!",
                "key": "F",
                "icon": "static/heroes/abilities/deadpool-33-upgrade.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Accumulate XP in battle. When maxed, choose an ability to upgrade for powerful boosts."
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/b0d6febd-72f5-45ad-8ed4-801c869b8959.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "DEADPOOL IN YOUR AREA - DUELIST",
                "description": "True heroes taunt face-to-face! I roast nearby baddies, mess up their vision, and tank their hits like a boss. Try me!",
                "key": "E",
                "icon": "static/heroes/abilities/deadpool-34-deadpool-in-your-area-duelist.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    },
                    {
                        "label": "Ability Duration",
                        "value": "5s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Disrupt enemies' vision in range and gain XP. Enemies can damage Deadpool to end the disruption."
                    },
                    {
                        "label": "Damage Needed to Remove the Disruption",
                        "value": "100"
                    },
                    {
                        "label": "Self Damage Reduction",
                        "value": "20%"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "15/s"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "A cylindrical spell field with a 6m radius and a height of 6m"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/c48ac808-c0fc-40ca-b988-4209f308059b.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Comical Chaos",
                "description": "Deadpool hands Jeff the Land Shark a plushie with attitude. Jeff can spit it ahead where it'll continuously Taunt nearby enemies and Block Vision, while allies in range enjoy a plush-powered healing party!",
                "key": "Passive",
                "icon": "static/heroes/abilities/deadpool-35-comical-chaos.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "5% Damage Boost"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260116/7ff581ee-1f52-4aae-97a8-37f03509c681.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "KICK@$$ KATANA - DUELIST",
                "description": "Slicey, dicey, twice as nicey! Swing both swords at whoever gets too close. Sushi, anyone?",
                "key": "Left Click",
                "icon": "static/heroes/abilities/deadpool-36-kick-katana-duelist.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Melee"
                    },
                    {
                        "label": "Damage",
                        "value": "40 per hit"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "First strike: 0.6s; second strike: 0.53s; third strike: 0.6s"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "4m"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/f441fc76-d37a-495d-bff2-9c8a74fae424.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "POP QUIZ!",
                "description": "Hey, you! Yeah, you! Ready for a challenge? Free speed and healing just for trying. Nail enough hits with the right abilities and unlock the deluxe speed-heal package. It's an A+ in chaos!",
                "key": "Q",
                "icon": "static/heroes/abilities/deadpool-37-pop-quiz.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Ability Duration",
                        "value": "The challenge lasts 12s. The buff lasts 6s after you complete it."
                    },
                    {
                        "label": "Healing over Time",
                        "value": "Upon activation: 35/s; challenge completed: 70/s"
                    },
                    {
                        "label": "Movement Boost",
                        "value": "Upon activation: 15%; challenge completed: 30%"
                    },
                    {
                        "label": "Cooldown",
                        "value": "45s"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260116/ddeac56f-2a2b-458f-a09b-30c02e893bda.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "HAZARDOUS HIJINKS - DUELIST",
                "description": "Blink, and you'll miss my deadly dash combo. Slash, dash, repeat! Hit someone? You get to go again! (Up to 2 more times. Don't get greedy.) Who says I can't multitask?",
                "key": "Right Click",
                "icon": "static/heroes/abilities/deadpool-38-hazardous-hijinks-duelist.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Cooldown",
                        "value": "2 charges, with each charge taking 10s to recharge."
                    },
                    {
                        "label": "Special Effect",
                        "value": "Refresh the cooldown if it hits an enemy for up to 2 times."
                    },
                    {
                        "label": "Damage",
                        "value": "40"
                    },
                    {
                        "label": "Dash Duration",
                        "value": "Up to 12m"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/a97263d2-9d7d-4f0e-9846-952d3a8873f2.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "BUNNY HOP",
                "description": "Hippity-hoppity, Deadpool's on your property! Watch me squeeze in a second jump midair! Hop on heads or kick off walls with Bunny Hop to refresh the cooldown, and if I land on someone? Free health for me, and a headache for them. Whee!",
                "key": "Space",
                "icon": "static/heroes/abilities/deadpool-39-bunny-hop.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Space"
                    },
                    {
                        "label": "Damage",
                        "value": "25"
                    },
                    {
                        "label": "Bonus Health",
                        "value": "25, up to 50"
                    },
                    {
                        "label": "Cooldown",
                        "value": "6s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Refresh the cooldown if it hits an enemy or an ally. Transform the next katana base attack to a Stab."
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/61987493-d453-45cc-8f8b-6da0078b21ea.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "HEALING FACTOR",
                "description": "Out of combat? I'm healing up, staying battle-ready to protect my team. And if I'm about to croak? Surprise! I get a free pass, and my health zooms back up. Nice try, villains",
                "key": "PASSIVE",
                "icon": "static/heroes/abilities/deadpool-40-healing-factor.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "PASSIVE"
                    },
                    {
                        "label": "Healing over Time",
                        "value": "25/s"
                    },
                    {
                        "label": "Healing over Time from Activated Healing Factor",
                        "value": "50/s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "45s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "The healing factor kicks in after Deadpool has been out of combat for 5s. If Deadpool takes more than 200 damage within a two-second window, the healing factor activates and boosts the healing"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/d6633d77-4996-4afb-9640-29af2ad835f5.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "MAXIMUM FLAIR",
                "description": "Listen up, eyes on the prize, don't wander off! Every time my abilities land on a bad guy, the style points shoot up a notch! When it's full, I can pop my ultimate! With me on the team, you're all staying alive and fabulous!",
                "key": "Passive",
                "icon": "static/heroes/abilities/deadpool-41-maximum-flair.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Special Effect",
                        "value": "The ultimate ability can be unleashed after reaching an S rating. The rating is cleared if Deadpool is defeated."
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/13385900-a033-4e64-bf97-f8adac56bbea.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "UPGRADE!",
                "description": "I'm here to smack baddies, get XP, and shield my friends! When my XP is full, I get to upgrade an ability! Bonus: Score the final hit and force your foe into a selfie—more XP for me! I'm invincible while striking my best duckface. No photobombs!",
                "key": "F",
                "icon": "static/heroes/abilities/deadpool-42-upgrade.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Accumulate XP in battle. When maxed, choose an ability to upgrade for powerful boosts."
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/0cf9ba9a-131e-4460-9205-2acfb9fdad48.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "DEADPOOL IN YOUR AREA - DUELIST",
                "description": "True heroes taunt face-to-face! I roast nearby baddies, mess up their vision, and tank their hits like a boss. Try me!",
                "key": "E",
                "icon": "static/heroes/abilities/deadpool-43-deadpool-in-your-area-duelist.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    },
                    {
                        "label": "Ability Duration",
                        "value": "5s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Disrupt enemies' vision in range and gain XP. Enemies can damage Deadpool to end the disruption."
                    },
                    {
                        "label": "Damage Needed to Remove the Disruption",
                        "value": "100"
                    },
                    {
                        "label": "Self Damage Reduction",
                        "value": "20%"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "15/s"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "A cylindrical spell field with a 6m radius and a height of 6m"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/68c29f6d-a09c-45e0-8d88-4ee6bd767f6c.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Comical Chaos",
                "description": "Deadpool hands Jeff the Land Shark a plushie with attitude. Jeff can spit it ahead where it'll continuously Taunt nearby enemies and Block Vision, while allies in range enjoy a plush-powered healing party!",
                "key": "Passive",
                "icon": "static/heroes/abilities/deadpool-44-comical-chaos.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "5% Damage Boost"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260116/7ff581ee-1f52-4aae-97a8-37f03509c681.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "DUAL DESERT EAGLES - DUELIST UPGRADED",
                "description": "Keep blasting till you trigger a BOOM. My thoughts literally explode onto the battlefield. Talk about mind-blowing firepower!",
                "key": "Left Click",
                "icon": "static/heroes/abilities/deadpool-45-dual-desert-eagles-duelist-upgraded.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Beam Damage",
                        "value": "46 damage per round"
                    },
                    {
                        "label": "Beam Attack Interval",
                        "value": "2 rounds per second"
                    },
                    {
                        "label": "Ammo",
                        "value": "40"
                    },
                    {
                        "label": "Projectile Attack Interval",
                        "value": "After every 5 beam bullets fired, the next shot fires 1 additional projectile"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "60 m/s"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "25"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "3m radius spherical spell field"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/1225939a-146b-4699-9d72-050fcaa16d4c.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "KICK@$$ KATANA - DUELIST UPGRADED",
                "description": "Now with extra chop! Stabs can go straight for the noggin. Heads up! Do a Bunny Hop and POW! Stabby Stabby action guaranteed! Run while you can!",
                "key": "Left Click",
                "icon": "static/heroes/abilities/deadpool-46-kick-katana-duelist-upgraded.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Damage",
                        "value": "45 per hit"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "First strike: 0.5s; second strike: 0.43s; third strike: 0.5s"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "4m"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/b8b503aa-e398-45a1-8500-698622cc9de4.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "DEADPOOL IN YOUR AREA - DUELIST UPGRADED",
                "description": "Check out the best trash talk in the Chronoverse! Keep taunting and melting their HP! I even block their screen, so they can't see squat. Plus, I tank hits like a champ. Enemies that stick around too long get the bottom of their screen taped up. By the end, they won't even find their health bar and whatnot. Good luck fighting what you can't see, suckers!",
                "key": "E",
                "icon": "static/heroes/abilities/deadpool-47-deadpool-in-your-area-duelist-upgraded.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    },
                    {
                        "label": "Ability Duration",
                        "value": "5s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Disrupt enemies' vision in range and gain XP. Enemies can damage Deadpool to end the disruption."
                    },
                    {
                        "label": "Damage Needed to Remove the Disruption",
                        "value": "100"
                    },
                    {
                        "label": "Self Damage Reduction",
                        "value": "35%"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "15/s"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "A cylindrical spell field with a 6m radius and a height of 6m"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/b43a5885-06d3-4e7f-a65a-862e8b0a75b8.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "HAZARDOUS HIJINKS - DUELIST UPGRADED",
                "description": "Now with bouncy castle action! Slash, bounce, repeat. It's like the world's deadliest pinball!. Cooldowns? Never heard of 'em. Keep going as long as you hit stuff, just don't let me fall flat on my ass!",
                "key": "Right Click",
                "icon": "static/heroes/abilities/deadpool-48-hazardous-hijinks-duelist-upgraded.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Cooldown",
                        "value": "2 charges, with each charge taking 10s to recharge."
                    },
                    {
                        "label": "Special Effect",
                        "value": "Refresh the cooldown if it hits an enemy. Deadpool bounces as the ability hits an enemy."
                    },
                    {
                        "label": "Damage",
                        "value": "40"
                    },
                    {
                        "label": "Dash Duration",
                        "value": "Up to 12m"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/6b324b73-b598-456a-9559-b42bf1e77176.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "HEADSHOT! - DUELIST UPGRADED",
                "description": "Juggle my noggin for extra throws! If you catch it thrice, it goes kaboom. Everyone gets a piece of my mind",
                "key": "Right Click",
                "icon": "static/heroes/abilities/deadpool-49-headshot-duelist-upgraded.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Projectile Damage",
                        "value": "Unleash: 30; return: 25"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "80m/s"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "15/s"
                    },
                    {
                        "label": "Third Unleash Explosion Damage",
                        "value": "45"
                    },
                    {
                        "label": "Spell Field Duration",
                        "value": "First unleash: 1s; second unleash: 1s; third unleash: 2s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "10s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260116/edddeceb-fcc3-4937-b3f3-ef12531eaf98.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "POP QUIZ! - UPGRADED",
                "description": "Don't just stand there, you blockhead! The challenge's still rolling. But don't worry, I'm not one of those money-hungry scam artists. The buffs are on the house, no price hike. Take on this challenge, and you'll get three freebies: a little Speed boost, Continuous Healing, and Damage Up. Hit enough baddies with the right abilities exactly as I ask, and you unlock the ultimate bundle (Super Speed, Super Healing, Damage Boost AND reset all your cooldowns (except Healing Factor; no cheating!). Now THAT'S love",
                "key": "Q",
                "icon": "static/heroes/abilities/deadpool-50-pop-quiz-upgraded.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Ability Duration",
                        "value": "The challenge lasts 12s. The buff lasts 8s after you complete it."
                    },
                    {
                        "label": "Healing over Time",
                        "value": "Upon activation: 30/s; challenge completed: 60/s"
                    },
                    {
                        "label": "Movement Boost",
                        "value": "Upon activation: 15%; challenge completed: 30%"
                    },
                    {
                        "label": "Damage Boost",
                        "value": "Upon activation: 15%; challenge completed: 30%"
                    },
                    {
                        "label": "Cooldown",
                        "value": "45s"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260116/83b33337-d2fb-4d39-929e-096c8aa53056.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "SKILL ISSUE - UPGRADED",
                "description": "Dumbpoochu, I choose you! Taunt time! Their HP melts away, and if they whiff an ability, they get bonus pain AND Vulnerability. Double whammy! Objection? Overruled!",
                "key": "Q",
                "icon": "static/heroes/abilities/deadpool-51-skill-issue-upgraded.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Damage From Per Ability Missed",
                        "value": "60"
                    },
                    {
                        "label": "Vulnerability Ration From Ability Missed",
                        "value": "10% for each stack. Up to 4 stacks."
                    },
                    {
                        "label": "Ability Duration",
                        "value": "8s"
                    },
                    {
                        "label": "Damage Over Time",
                        "value": "25/s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "45s"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260116/05a3bb0c-552b-48d5-9cd0-1f7e1e349923.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Comical Chaos",
                "description": "Deadpool hands Jeff the Land Shark a plushie with attitude. Jeff can spit it ahead where it'll continuously Taunt nearby enemies and Block Vision, while allies in range enjoy a plush-powered healing party!",
                "key": "Passive",
                "icon": "static/heroes/abilities/deadpool-52-comical-chaos.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "5% Damage Boost"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260116/7ff581ee-1f52-4aae-97a8-37f03509c681.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "DUAL DESERT EAGLES - STRATEGIST",
                "description": "Nobody lays a finger on my teammates! Anyone tries, and I'm firing these big boy bullets straight at their face!",
                "key": "Left Click",
                "icon": "static/heroes/abilities/deadpool-53-dual-desert-eagles-strategist.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Rapid-fire projectile"
                    },
                    {
                        "label": "Damage",
                        "value": "25 damage per round"
                    },
                    {
                        "label": "Healing",
                        "value": "45 per round"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "2.5 rounds per second"
                    },
                    {
                        "label": "Ammo",
                        "value": "30"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/742f6ca8-600f-484d-8675-bac5d7b3788a.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "PWNAGE POUND",
                "description": "You! Yeah, you - the hyper one! Eyes off my friends. I sentence you to...whatever! Get ready to be taunted. I get bonus HP and healing, and if you whiff your abilities, you take damage, and I get even more HP!",
                "key": "Q",
                "icon": "static/heroes/abilities/deadpool-54-pwnage-pound.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Damage From Per Ability Missed",
                        "value": "60"
                    },
                    {
                        "label": "Ability Duration",
                        "value": "8s"
                    },
                    {
                        "label": "Healing Over Time",
                        "value": "80/s"
                    },
                    {
                        "label": "Healing From Per Ability Missed",
                        "value": "80 per ability missed"
                    },
                    {
                        "label": "Healing Spell Field Range",
                        "value": "8m radius spherical spell field"
                    },
                    {
                        "label": "Cooldown",
                        "value": "60s"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260116/8480f602-9af4-45fd-b52d-1a12f22cb3b8.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "BOUNCING BOBBLEHEAD - STRATEGIST",
                "description": "Plushie power! It stops every single attack those chumps throw, giving my team a safety bubble. It's cute AND bulletproof",
                "key": "Right Click",
                "icon": "static/heroes/abilities/deadpool-55-bouncing-bobblehead-strategist.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast projectile with delayed impact that also generates a spell field"
                    },
                    {
                        "label": "Projectile Damage",
                        "value": "Unleash: 20; return: 20"
                    },
                    {
                        "label": "Projectile Healing",
                        "value": "Unleash: 40; return: 40"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "80m/s"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "10/s"
                    },
                    {
                        "label": "Spell Field Healing",
                        "value": "50/s"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "4m spherical radius spell field"
                    },
                    {
                        "label": "Spell Field Duration",
                        "value": "1s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "8s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260116/5d99dd32-9db1-4810-8b0d-6b760db4bdf7.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "HEALING HOP",
                "description": "Yup, I can double jump in midair! During The Big Test and its upgrade, I can also stomp heads and wall jump to reset its cooldown. Stomp enemies so hard they won't get near my team!",
                "key": "Space",
                "icon": "static/heroes/abilities/deadpool-56-healing-hop.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Space"
                    },
                    {
                        "label": "Damage",
                        "value": "25"
                    },
                    {
                        "label": "Healing",
                        "value": "35"
                    },
                    {
                        "label": "Cooldown",
                        "value": "6s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Refresh the cooldown if it hits an enemy or an ally. Transform the next katana base attack to a Stab."
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/ed8221fc-11a3-48a6-bfe8-03d37528203a.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "HEALING FACTOR",
                "description": "Out of combat? I'm healing up, staying battle-ready to protect my team. And if I'm about to croak? Surprise! I get a free pass, and my health zooms back up. Nice try, villains",
                "key": "PASSIVE",
                "icon": "static/heroes/abilities/deadpool-57-healing-factor.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "PASSIVE"
                    },
                    {
                        "label": "Healing over Time",
                        "value": "25/s"
                    },
                    {
                        "label": "Healing over Time from Activated Healing Factor",
                        "value": "50/s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "30s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "The healing factor kicks in after Deadpool has been out of combat for 5s. If Deadpool takes more than 200 damage within a two-second window, the healing factor activates and boosts the healing"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/0ef403ed-dc90-4200-9d01-f46dc30be7e7.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "MAXIMUM FLAIR",
                "description": "Listen up, eyes on the prize, don't wander off! Every time my abilities land on a bad guy, the style points shoot up a notch! When it's full, I can pop my ultimate! With me on the team, you're all staying alive and fabulous!",
                "key": "Passive",
                "icon": "static/heroes/abilities/deadpool-58-maximum-flair.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Special Effect",
                        "value": "The ultimate ability can be unleashed after reaching an S rating. The rating is cleared if Deadpool is defeated."
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/aef6ba6f-d996-4c2d-ba9e-ef34a0cc9ddc.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "UPGRADE!",
                "description": "I'm here to smack baddies, get XP, and shield my friends! When my XP is full, I get to upgrade an ability! Bonus: Score the final hit and force your foe into a selfie—more XP for me! I'm invincible while striking my best duckface. No photobombs!",
                "key": "F",
                "icon": "static/heroes/abilities/deadpool-59-upgrade.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Accumulate XP in battle. When maxed, choose an ability to upgrade for powerful boosts"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/18700c8d-3453-49d2-8da7-622b77e22dae.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "DEADPOOL IN YOUR AREA - STRATEGIST",
                "description": "Want to hurt my team? Good luck! I hit you with a taunt, mess up your vision, and burn your health nonstop! Best part: my swords and guns go full turbo for the duration. Blink and you'll miss it",
                "key": "E",
                "icon": "static/heroes/abilities/deadpool-60-deadpool-in-your-area-strategist.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    },
                    {
                        "label": "Ability Duration",
                        "value": "5s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Disrupt enemies' vision in range and gain XP. Enemies can damage Deadpool to end the disruption."
                    },
                    {
                        "label": "Damage Needed to Remove the Disruption",
                        "value": "100"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "10/s"
                    },
                    {
                        "label": "Spell Field Healing",
                        "value": "60/s"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "A cylindrical spell field with a 6m radius and a height of 6m"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/fa941747-fc9e-4138-af71-9dc6b0fc6a54.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Comical Chaos",
                "description": "Deadpool hands Jeff the Land Shark a plushie with attitude. Jeff can spit it ahead where it'll continuously Taunt nearby enemies and Block Vision, while allies in range enjoy a plush-powered healing party!",
                "key": "Passive",
                "icon": "static/heroes/abilities/deadpool-61-comical-chaos.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "+5% Healing Bonus"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260116/7ff581ee-1f52-4aae-97a8-37f03509c681.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "KICK@$$ KATANA - STRATEGIST",
                "description": "Protecting my team means my katanas go full savage. No mercy for the baddies!",
                "key": "Left Click",
                "icon": "static/heroes/abilities/deadpool-62-kick-katana-strategist.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Melee"
                    },
                    {
                        "label": "Damage",
                        "value": "30 per hit"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "First strike: 0.6s; second strike: 0.53s; third strike: 0.6s"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "4m"
                    },
                    {
                        "label": "Healing Spell Field Range",
                        "value": "5m radius spherical spell field"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "32"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/e091b58b-f4c4-4094-9076-5aa489f85ec6.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "FINAL EXAM",
                "description": "Wake the #!&% up, hero! We've got a game to win! Speed and healing buffs for starters, bonus Healing Hijinks for me, and extra HP for me and my nearby friends. Hit enough baddies with the right abilities exactly as I ask, and you unlock mega speed and healing, plus reset my Healing Factor cooldown!. Team protection mode: activated!",
                "key": "Q",
                "icon": "static/heroes/abilities/deadpool-63-final-exam.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Ability Duration",
                        "value": "The challenge lasts 12s. The buff lasts 6s after you complete it."
                    },
                    {
                        "label": "Healing Amount",
                        "value": "Upon activation: 70/s; challenge completed: 100/s"
                    },
                    {
                        "label": "Healing Spell Field Range",
                        "value": "8m radius spherical spell field"
                    },
                    {
                        "label": "Cooldown",
                        "value": "60s"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260116/cb9139a3-04c0-41b5-ad70-114a5e5baef5.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "HEALING HIJINKS - STRATEGIST",
                "description": "Try getting to my teammates, I dare you! My dash slash knocks fools down, and if I hit, I get to do it again. Up to three times, baby!",
                "key": "Right Click",
                "icon": "static/heroes/abilities/deadpool-64-healing-hijinks-strategist.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Cooldown",
                        "value": "2 charges, with each charge taking 10s to recharge."
                    },
                    {
                        "label": "Damage",
                        "value": "30"
                    },
                    {
                        "label": "Dash Duration",
                        "value": "Up to 12m"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "45"
                    },
                    {
                        "label": "Healing Spell Field Range",
                        "value": "5m spherical radius spell field"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/cbd80a74-aafa-46b2-96c8-645bb247f439.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "HEALING HOP",
                "description": "Yup, I can double jump in midair! During Final Exam and its upgrade, I can also stomp heads and wall jump to reset its cooldown. Stomp enemies so hard they won't get near my team!",
                "key": "Space",
                "icon": "static/heroes/abilities/deadpool-65-healing-hop.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Space"
                    },
                    {
                        "label": "Damage",
                        "value": "25"
                    },
                    {
                        "label": "Healing",
                        "value": "35"
                    },
                    {
                        "label": "Cooldown",
                        "value": "6s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Refresh the cooldown if it hits an enemy or an ally. Transform the next katana base attack to a Stab."
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/d86afade-9135-4cbd-87d0-18d484cf7556.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "HEALING FACTOR",
                "description": "Out of combat? I'm healing up, staying battle-ready to protect my team. And if I'm about to croak? Surprise! I get a free pass, and my health zooms back up. Nice try, villains",
                "key": "PASSIVE",
                "icon": "static/heroes/abilities/deadpool-66-healing-factor.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "PASSIVE"
                    },
                    {
                        "label": "Healing over Time",
                        "value": "25/s"
                    },
                    {
                        "label": "Healing over Time from Activated Healing Factor",
                        "value": "50/s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "30s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "The healing factor kicks in after Deadpool has been out of combat for 5s. If Deadpool takes more than 200 damage within a two-second window, the healing factor activates and boosts the healing"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/257f524b-d3e0-438f-b7cc-01b8a2f7efdc.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "MAXIMUM FLAIR",
                "description": "Listen up, eyes on the prize, don't wander off! Every time my abilities land on a bad guy, the style points shoot up a notch! When it's full, I can pop my ultimate! With me on the team, you're all staying alive and fabulous!",
                "key": "Passive",
                "icon": "static/heroes/abilities/deadpool-67-maximum-flair.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Special Effect",
                        "value": "The ultimate ability can be unleashed after reaching an S rating. The rating is cleared if Deadpool is defeated"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/7f9679be-20c5-48d5-b232-7ba2172b04b9.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "UPGRADE!",
                "description": "I'm here to smack baddies, get XP, and shield my friends! When my XP is full, I get to upgrade an ability! Bonus: Score the final hit and force your foe into a selfie—more XP for me! I'm invincible while striking my best duckface. No photobombs!",
                "key": "F",
                "icon": "static/heroes/abilities/deadpool-68-upgrade.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Accumulate XP in battle. When maxed, choose an ability to upgrade for powerful boosts."
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/d628f429-4396-4fea-89bb-c9367cec8478.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "DEADPOOL IN YOUR AREA - STRATEGIST",
                "description": "Want to hurt my team? Good luck! I hit you with a taunt, mess up your vision, and burn your health nonstop! Best part: my swords and guns go full turbo for the duration. Blink and you'll miss it",
                "key": "E",
                "icon": "static/heroes/abilities/deadpool-69-deadpool-in-your-area-strategist.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    },
                    {
                        "label": "Ability Duration",
                        "value": "5s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Disrupt enemies' vision in range and gain XP. Enemies can damage Deadpool to end the disruption."
                    },
                    {
                        "label": "Damage Needed to Remove the Disruption",
                        "value": "100"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "10/s"
                    },
                    {
                        "label": "Spell Field Healing",
                        "value": "60/s"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "A cylindrical spell field with a 6m radius and a height of 6m"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/10363965-15e5-4296-8132-9732627c1c8f.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Comical Chaos",
                "description": "Deadpool hands Jeff the Land Shark a plushie with attitude. Jeff can spit it ahead where it'll continuously Taunt nearby enemies and Block Vision, while allies in range enjoy a plush-powered healing party!",
                "key": "Passive",
                "icon": "static/heroes/abilities/deadpool-70-comical-chaos.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "+5% Healing Bonus"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260116/7ff581ee-1f52-4aae-97a8-37f03509c681.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "DUAL DESERT EAGLES - STRATEGIST UPGRADED",
                "description": "I rack up shots, then, BOOM! A mind-blowing bubble bomb for all the enemies. Teammate security: maximum",
                "key": "Left Click",
                "icon": "static/heroes/abilities/deadpool-71-dual-desert-eagles-strategist-upgraded.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Beam Damage",
                        "value": "28"
                    },
                    {
                        "label": "Beam Healing",
                        "value": "50"
                    },
                    {
                        "label": "Beam Attack Interval",
                        "value": "2.5 rounds per second"
                    },
                    {
                        "label": "Ammo",
                        "value": "40"
                    },
                    {
                        "label": "Projectile Attack Interval",
                        "value": "After every 5 beam bullets fired, the next shot fires 1 additional projectile"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "60 m/s"
                    },
                    {
                        "label": "Projectile Healing",
                        "value": "15"
                    },
                    {
                        "label": "Spell Field Healing",
                        "value": "40"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "20"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "3m radius spherical spell field"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/78599d08-a3e3-40a7-a163-59e4135f91f9.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "KICK@$$ KATANA - STRATEGIST UPGRADED",
                "description": "Relax, you've got Deadpool on your side! Swords out, baddies out. My stab hits crit, and a Healing Hop hit makes the next swing a stabby special",
                "key": "Left Click",
                "icon": "static/heroes/abilities/deadpool-72-kick-katana-strategist-upgraded.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Damage",
                        "value": "35 per hit"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "First strike: 0.5s; second strike: 0.43s; third strike: 0.5s"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "4m"
                    },
                    {
                        "label": "Healing Spell Field Range",
                        "value": "8m radius spherical spell field"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "35"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/351cd1a6-3b7e-4bd8-93b2-8f672d1528c6.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "DEADPOOL IN YOUR AREA - STRATEGIST UPGRADED",
                "description": "Teammates, stay safe! Dummies, look here! It's showtime: I taunt, blind you, and hit warp speed with my swords and guns. Plus, my crew gets a damage reduction buff, so they're basically invincible. Dummies that stick around too long will even have their UI taped over!",
                "key": "E",
                "icon": "static/heroes/abilities/deadpool-73-deadpool-in-your-area-strategist-upgraded.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    },
                    {
                        "label": "Ability Duration",
                        "value": "5s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Disrupt enemies' vision in range and gain XP. Enemies can damage Deadpool to end the disruption."
                    },
                    {
                        "label": "Damage Needed to Remove the Disruption",
                        "value": "100"
                    },
                    {
                        "label": "Spell Field Healing",
                        "value": "70/s"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "10/s"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "A cylindrical spell field with a 6m radius and a height of 6m."
                    },
                    {
                        "label": "Damage Boost",
                        "value": "20%"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/cf86463c-760f-4bbf-9dda-f45465f9872a.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "HEALING HIJINKS - STRATEGIST UPGRADED",
                "description": "Watch this pro bodyguard in action! I dash forward, nail the bad guy, and bounce in any direction I want. Oh, and I can do this two more times real quick!",
                "key": "Right Click",
                "icon": "static/heroes/abilities/deadpool-74-healing-hijinks-strategist-upgraded.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Cooldown",
                        "value": "2 charges, with each charge taking 10s to recharge."
                    },
                    {
                        "label": "Special Effect",
                        "value": "Refresh the cooldown if it hits an enemy for up to 2 times. Deadpool bounces as the ability hits an enemy."
                    },
                    {
                        "label": "Damage",
                        "value": "40"
                    },
                    {
                        "label": "Dash Duration",
                        "value": "Up to 12m"
                    },
                    {
                        "label": "Healing Spell Field Range",
                        "value": "8m radius spherical spell field"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "55"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260114/dec06e87-6750-4796-91bf-a77d08cb8ce9.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "BOUNCING BOBBLEHEAD - STRATEGIST UPGRADED",
                "description": "My ultra-cool, super shiny, extra huggable, and totally blinged-out plushy. Toss it ahead, and it lands as an invincible sphere of awesomeness! Blocking attacks and keeping my team safe inside our furry fortress",
                "key": "Right Click",
                "icon": "static/heroes/abilities/deadpool-75-bouncing-bobblehead-strategist-upgraded.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Projectile Damage",
                        "value": "Unleash: 25; return: 20"
                    },
                    {
                        "label": "Projectile Healing",
                        "value": "Unleash: 45; return: 30"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "80m/s"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "10/s"
                    },
                    {
                        "label": "Spell Field Healing",
                        "value": "55/s"
                    },
                    {
                        "label": "Third Unleash Explosion Damage",
                        "value": "20"
                    },
                    {
                        "label": "Third Unleash Explosion Healing",
                        "value": "70"
                    },
                    {
                        "label": "Spell Field Duration",
                        "value": "First unleash: 1s; second unleash: 1s; third unleash: 2s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "8s"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260116/a0174fbe-7018-46bf-b960-9b88bbbbf227.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "FINAL EXAM - UPGRADED",
                "description": "Hey, player! Warm-up's over, time for the main event! Speed, healing, dashes, for me, and bonus HP for all! Smash enough baddies with the skills I say, and you unlock super buffs(massive speed and healing), plus Healing Factor resets. For some time after, each hit means more HP for the crew and you. Don't mess this up!",
                "key": "Q",
                "icon": "static/heroes/abilities/deadpool-76-final-exam-upgraded.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Ability Duration",
                        "value": "The challenge lasts 12s. The buff lasts 8s after you complete it."
                    },
                    {
                        "label": "Healing Amount",
                        "value": "80/s upon activation; 120/s after completing the challenge"
                    },
                    {
                        "label": "Healing Spell Field Range",
                        "value": "8m radius spherical spell field"
                    },
                    {
                        "label": "Bonus Health from Completing the Challenge",
                        "value": "300"
                    },
                    {
                        "label": "Cooldown",
                        "value": "60s"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260116/070f508b-a481-4fb2-8304-46bd0f690137.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "PWNAGE POUND - UPGRADED",
                "description": "Upgraded courtroom drama! Congrats, unlucky one! You're my pick; enjoy the taunt! I score bonus health and healing, and you take ongoing damage. If you miss an ability while court is in session, it's a double whammy. You get more pain, AND I get more extra HP! Thanks in advance!",
                "key": "Q",
                "icon": "static/heroes/abilities/deadpool-77-pwnage-pound-upgraded.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Damage From Per Ability Missed",
                        "value": "60"
                    },
                    {
                        "label": "Ability Duration",
                        "value": "8s"
                    },
                    {
                        "label": "Healing Over Time",
                        "value": "100/s"
                    },
                    {
                        "label": "Healing From Per Ability Missed",
                        "value": "90 per ability missed"
                    },
                    {
                        "label": "Healing Spell Field Range",
                        "value": "8m radius spherical spell field"
                    },
                    {
                        "label": "Cooldown",
                        "value": "60s"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260116/f6c942a1-e1fd-4360-beda-fc4f62ceb0e0.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Comical Chaos",
                "description": "Deadpool hands Jeff the Land Shark a plushie with attitude. Jeff can spit it ahead where it'll continuously Taunt nearby enemies and Block Vision, while allies in range enjoy a plush-powered healing party!",
                "key": "Passive",
                "icon": "static/heroes/abilities/deadpool-78-comical-chaos.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "+5% Healing Bonus"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260116/7ff581ee-1f52-4aae-97a8-37f03509c681.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "450"
            },
            {
                "label": "Movement Speed",
                "value": "600"
            }
        ],
        "forms": [
            "DEADPOOL"
        ]
    },
    "devil-dinosaur": {
        "nickname": "DEVIL DINOSAUR",
        "realName": "DEVIL DINOSAUR",
        "roles": [
            "VANGUARD"
        ],
        "intro": "Don't let his name scare you — Devil Dinosaur is actually a gentle giant. But with razor-sharp fangs, a mighty sweeping tail, a thunderous roar, and a force-field shield gifted by his human partner Moon Girl, it's no wonder why heroes and villains alike are intimidated by this prehistoric powerhouse!",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Primal Bite",
                "description": "Bite forward. Applies a Bleed that deals continuous Percentage Damage",
                "key": "Left Click",
                "icon": "static/heroes/abilities/devil-dinosaur-1-primal-bite.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Melee"
                    },
                    {
                        "label": "Damage",
                        "value": "75"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "4m"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "1st and 3rd attacks: 1s; 2nd attack: 0.9s"
                    },
                    {
                        "label": "Bleed Damage",
                        "value": "0.75% Maximum Health"
                    },
                    {
                        "label": "Bleed Duration",
                        "value": "4s"
                    },
                    {
                        "label": "Bleed Tick Rate",
                        "value": "2 times per second"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20260514/115176f7-366a-4c84-a53e-5cb01ce83315.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Impact Beam",
                "description": "Unleash a devastating beam of energy that inflicts a Bleed and Slow.",
                "key": "Right Click",
                "icon": "static/heroes/abilities/devil-dinosaur-2-impact-beam.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Ability Duration",
                        "value": "3.3s"
                    },
                    {
                        "label": "Attack Range",
                        "value": "17m"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "40/s"
                    },
                    {
                        "label": "Spell Field Radius",
                        "value": "1.2m"
                    },
                    {
                        "label": "Slow Effect",
                        "value": "15% for 2s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260514/8deeb802-0265-45e5-8ea0-8ac836bf938e.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Buddy Barrier",
                "description": "Activate the heart-shaped generator to expand a spherical shield that blocks incoming damage. Enemies caught within are Slowed",
                "key": "E",
                "icon": "static/heroes/abilities/devil-dinosaur-3-buddy-barrier.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    },
                    {
                        "label": "Summons Max Health",
                        "value": "450"
                    },
                    {
                        "label": "Maximum Duration for Summons",
                        "value": "6s"
                    },
                    {
                        "label": "Slow Effect",
                        "value": "15% for 2s"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260514/5262ea98-9407-49e5-92c3-4630ededb30d.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Savage Predation",
                "description": "Dash and pounce on your prey with a vicious bite, applying a Bleed. If the target is already Bleeding, clamp down before hurling them away",
                "key": "Shift",
                "icon": "static/heroes/abilities/devil-dinosaur-4-savage-predation.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Shift"
                    },
                    {
                        "label": "Cooldown",
                        "value": "10s"
                    },
                    {
                        "label": "Dash Duration",
                        "value": "2s"
                    },
                    {
                        "label": "Dashing Speed",
                        "value": "15m/s"
                    },
                    {
                        "label": "Bite Damage",
                        "value": "50"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260514/d5b729a9-bd0a-4e51-9bd4-a4bf2b40b5ef.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Frenzied Feast",
                "description": "Unleash a flurry of continuous bites, converting the damage dealt into Bonus Health. Deals extra damage against Bleeding targets",
                "key": "F",
                "icon": "static/heroes/abilities/devil-dinosaur-5-frenzied-feast.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Cooldown",
                        "value": "8s"
                    },
                    {
                        "label": "Bite Damge",
                        "value": "First 4 hits: 15 each; 5th hit: 30"
                    },
                    {
                        "label": "Bonus Damage",
                        "value": "First 4 hits: 5% Maximum Health each; 5th hit: 10% Maximum Health"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260514/e3644601-c665-47c0-b70b-eff7718330c8.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Prehistoric Plating",
                "description": "Take reduced damage from headshots. Immune to launch-up, knock-back, and other displacement effects. Enemies and allies generate less Ultimate Ability Energy when damaging or healing him",
                "key": "Passive",
                "icon": "static/heroes/abilities/devil-dinosaur-6-prehistoric-plating.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Headshot Damage Taken Reduction",
                        "value": "50%"
                    },
                    {
                        "label": "Ultimate Energy Gain Reduction from Damage/Healing Him",
                        "value": "35%"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20260514/c9b874b3-dde9-4453-9fb8-e49f5ecdec9d.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Apex Advantage",
                "description": "Gain Bonus Health when you inflict Bleeding upon an enemy",
                "key": "Passive",
                "icon": "static/heroes/abilities/devil-dinosaur-7-apex-advantage.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Bonus Health",
                        "value": "150% of Bleed Damage Dealt"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20260515/750da25f-7267-479e-9161-ad9109a5209c.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Devil-Beast Rampage",
                "description": "Erupt in primal fury! Gain a massive Movement Speed Boost while unleashing earth-shattering stomps that Launch enemies and applies a Bleed. Thunderous roars also emit sonic waves that Slow enemies hit",
                "key": "Q",
                "icon": "static/heroes/abilities/devil-dinosaur-8-devil-beast-rampage.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "3400"
                    },
                    {
                        "label": "Stomp Field Spawn Interval",
                        "value": "0.3"
                    },
                    {
                        "label": "Frenzied Feast Cooldown Reduction",
                        "value": "1s"
                    },
                    {
                        "label": "Savage Predation Cooldown Reduction",
                        "value": "4s"
                    },
                    {
                        "label": "Speed Boost During Ultimate",
                        "value": "70%"
                    },
                    {
                        "label": "Stomp Field Range",
                        "value": "8m radius spherical spell field"
                    },
                    {
                        "label": "Stomp Field Damage",
                        "value": "10"
                    },
                    {
                        "label": "Stomp Field Launch-up Interval",
                        "value": "0.8s"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260514/6acd3e0f-759b-44c1-b1bc-b42dd520aa74.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Prehistoric Partner",
                "description": "The Punisher rides atop Devil Dinosaur, restricting him to only Adjudication/Deliverance and Scourge Grenade while disabling other abilities. While mounted, Devil Dinosaur absorbs a portion of all damage inflicted on The Punisher",
                "key": "Passive",
                "icon": "static/heroes/abilities/devil-dinosaur-9-prehistoric-partner.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "Maximum Health +100"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260514/f043428e-f28d-45a2-9ea9-54f04059d9aa.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "750"
            },
            {
                "label": "Movement Speed",
                "value": "600"
            }
        ],
        "forms": [
            "DEVIL DINOSAUR"
        ]
    },
    "doctor-strange": {
        "nickname": "DOCTOR STRANGE",
        "realName": "STEPHEN STRANGE",
        "roles": [
            "VANGUARD"
        ],
        "intro": "As the Sorcerer Supreme, Doctor Stephen Strange gracefully wields ancient spells to turn the tide of even the most impossible battle. However, magic always comes at a cost, and each use of his arcane abilities gradually awakens the darkness within him.",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Daggers of Denak",
                "description": "Cast Daggers of Denak forward",
                "key": "Left Click",
                "icon": "static/heroes/abilities/doctor-strange-1-daggers-of-denak.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Five-round delayed hit projectiles"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "60 m/s"
                    },
                    {
                        "label": "Damage",
                        "value": "16"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 10m, decreasing to 80% at 20m"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "5.56 rounds per second, with a 0.03-second interval between every two rounds"
                    },
                    {
                        "label": "Ammo",
                        "value": "10 (1 dagger per release)"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "No"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/005933a8-1d97-42c6-aac7-27e1bc018038.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Eye of Agamotto",
                "description": "Separate nearby enemies' Souls from their bodies. Damage dealt to these Souls is transferred to their physical bodies",
                "key": "Q",
                "icon": "static/heroes/abilities/doctor-strange-2-eye-of-agamotto.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast spell field that surrounds the caster"
                    },
                    {
                        "label": "Range",
                        "value": "10m spherical radius"
                    },
                    {
                        "label": "Damage",
                        "value": "60"
                    },
                    {
                        "label": "Soul Separation Duration",
                        "value": "3s"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "3100"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/0fd358bd-cf3c-4029-9455-3693bc12cbb5.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Cloak of Levitation",
                "description": "Ascend and then enter a brief state of sustained flight",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/doctor-strange-3-cloak-of-levitation.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Casting",
                        "value": "Instant Cast"
                    },
                    {
                        "label": "Dash Distance",
                        "value": "8m"
                    },
                    {
                        "label": "Free-Flight Duration",
                        "value": "6s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/bcd20b65-6414-40bd-9f37-524652c0ed5b.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Maelstrom of Madness",
                "description": "Release Dark Magic to deal damage to nearby enemies",
                "key": "E",
                "icon": "static/heroes/abilities/doctor-strange-4-maelstrom-of-madness.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast spell field that surrounds the caster"
                    },
                    {
                        "label": "Range",
                        "value": "8m spherical radius"
                    },
                    {
                        "label": "Damage",
                        "value": "Each point of Dark Magic deals 1.3 damage"
                    },
                    {
                        "label": "Cooldown",
                        "value": "6s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/fc0621cc-3ee2-490c-bd45-28986775291c.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Pentagram of Farallah",
                "description": "Open portals between two locations, enabling all units to travel through them",
                "key": "F",
                "icon": "static/heroes/abilities/doctor-strange-5-pentagram-of-farallah.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Casting",
                        "value": "Multi-segment release"
                    },
                    {
                        "label": "Duration",
                        "value": "20s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "180s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/9161c8ab-2eb3-4546-b454-c9d18e0ddad5.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Shield of the Seraphim",
                "description": "Create a protective barrier against damage",
                "key": "Right Click",
                "icon": "static/heroes/abilities/doctor-strange-6-shield-of-the-seraphim.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Channeled"
                    },
                    {
                        "label": "Maximum Shield Value",
                        "value": "700"
                    },
                    {
                        "label": "Recovery Speed",
                        "value": "60/s"
                    },
                    {
                        "label": "Delayed Recovery After Release",
                        "value": "1s"
                    },
                    {
                        "label": "Cooldown After Destroyed",
                        "value": "3s"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/9a8c0b57-316f-42da-bcca-9923be81d771.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Price of Magic",
                "description": "Dark Magic accumulates with every hit on an enemy. If Dark Magic peaks for too long, Doctor Strange will be cursed with Anti-Heal",
                "key": "Passive",
                "icon": "static/heroes/abilities/doctor-strange-7-price-of-magic.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Anti-Heal Activation Delay at Peak Dark Magic",
                        "value": "3s"
                    },
                    {
                        "label": "Anti-Heal Duration",
                        "value": "2s"
                    },
                    {
                        "label": "Generate Dark Magic",
                        "value": "Daggers of Denak: Each hit generates 3.5 Dark Magic. When using the V key, every enemy hit generates 10 Dark Magic"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/14622714-9438-4212-8a0b-738f282a64bc.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Enchanted Enhancement",
                "description": "Doctor Strange shares his arcane mastery, replacing Scarlet Witch's Chthonian Burst with Mystic Burst upon activation. Hold down the attack button to unleash a rapid, relentless salvo of magical missiles in the target direction",
                "key": "Passive",
                "icon": "static/heroes/abilities/doctor-strange-8-enchanted-enhancement.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "Doctor Strange gain 100 Max Health"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250410/99eb7c66-a521-4b6b-aa54-1048db609e28.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "PSIONIC VORTEX",
                "description": "Invisible Woman enhances Doctor Strange's Maelstrom of Madness with a psionic explosion. The explosion damages and pulls enemies toward Doctor Strange. Based on the explosion's damage, Doctor Strange and nearby allies gain Bonus Health",
                "key": "E",
                "icon": "static/heroes/abilities/doctor-strange-9-psionic-vortex.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Cooldown",
                        "value": "6s"
                    },
                    {
                        "label": "Damage",
                        "value": "Each point of energy deals 1.3 damage."
                    },
                    {
                        "label": "Range",
                        "value": "8m spherical radius spell field"
                    },
                    {
                        "label": "Self Bonus Health Conversion",
                        "value": "0.3"
                    },
                    {
                        "label": "Ally Bonus Health Conversion",
                        "value": "0.2"
                    },
                    {
                        "label": "Bonus Max Health",
                        "value": "75"
                    },
                    {
                        "label": "Special Effect",
                        "value": "The spell field pulls enemies in range toward Doctor Strange"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260213/b0dacbcf-e7ec-4ddf-9e37-cc7a6c38d97b.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "575"
            },
            {
                "label": "Movement Speed",
                "value": "6 m/s"
            }
        ],
        "forms": [
            "DOCTOR STRANGE"
        ]
    },
    "elsa-bloodstone": {
        "nickname": "ELSA BLOODSTONE",
        "realName": "ELSA BLOODSTONE",
        "roles": [
            "DUELIST"
        ],
        "intro": "Born into a line of legendary monster hunters, Elsa Bloodstone boasts incredible physical prowess and an innate talent for subduing the creepiest of creatures. The instinct to hunt is in her blood, and every foe she faces inevitably becomes prey ensnared in her traps!",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "DOUBLE-BARREL BLASTER",
                "description": "Fire your shotgun forward",
                "key": "Left Click",
                "icon": "static/heroes/abilities/elsa-bloodstone-1-double-barrel-blaster.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Shotgun projectiles that hit instantly"
                    },
                    {
                        "label": "Damage",
                        "value": "4.5 per round"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 20m, decreasing to 70% at 30m"
                    },
                    {
                        "label": "Bullets Fired Each Cast",
                        "value": "10"
                    },
                    {
                        "label": "Crosshair Spread Radius(at 10m)",
                        "value": "0.13m"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "The firing interval between shots is 0.12s, with an interval of 0.8s between each round of shooting"
                    },
                    {
                        "label": "Ammo",
                        "value": "8"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "Yes"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20260210/8a132243-9cec-4ed8-aa27-f374bc58d1a7.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "MONSTER-PIERCER",
                "description": "Unleash your elephant gun forward. Bullets pierce enemies and deal high damage",
                "key": "Left Click",
                "icon": "static/heroes/abilities/elsa-bloodstone-2-monster-piercer.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Shotgun projectiles that hit instantly"
                    },
                    {
                        "label": "Damage",
                        "value": "13+0.8% of enemy's maximum health"
                    },
                    {
                        "label": "Bullets Fired Each Cast",
                        "value": "5"
                    },
                    {
                        "label": "Crosshair Spread Radius (at 10m)",
                        "value": "6m"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "No"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20260210/ff430438-d356-492c-bd28-2c68160d3a7a.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "INHERITED INSTINCT",
                "description": "Dealing damage increases hunting Instinct. Defeating enemies caught by Smoky Snare grants additional Instinct. Higher Instinct reduces the cooldown of Helix Advance",
                "key": "PASSIVE",
                "icon": "static/heroes/abilities/elsa-bloodstone-3-inherited-instinct.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "PASSIVE"
                    },
                    {
                        "label": "Instinct from KOs",
                        "value": "100"
                    },
                    {
                        "label": "Additional Instinct from KOs Caught by Smoky Snare",
                        "value": "200"
                    },
                    {
                        "label": "Damage/Instinct Conversion Rate",
                        "value": "0.009"
                    },
                    {
                        "label": "Special Effect 1",
                        "value": "Instinct levels up when it reaches 100, up to 3 levels"
                    },
                    {
                        "label": "Special Effect 2",
                        "value": "For each Instinct level gained, reduce the cooldown of Helix Advance by 2s"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20260210/4b228e3f-c80f-4bd7-903f-c38148164bd9.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "RUTHLESS PURSUIT",
                "description": "Dash forward, gaining Bonus Health and launching enemies hit. Follow up with a Double-Barrel Blaster shot that propels you backward and Slows enemies. Using either stage empowers your next Double-Barrel Blaster, transforming it into Monster-Piercer",
                "key": "E",
                "icon": "static/heroes/abilities/elsa-bloodstone-4-ruthless-pursuit.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Movement-based damage ability"
                    },
                    {
                        "label": "Max Dash Speed",
                        "value": "40m/s"
                    },
                    {
                        "label": "Max Dash Duration",
                        "value": "0.3s"
                    },
                    {
                        "label": "Damage",
                        "value": "30"
                    },
                    {
                        "label": "Cooldown",
                        "value": "8s"
                    },
                    {
                        "label": "Special Effect 1",
                        "value": "Launch up enemies hit, and activate the follow up in 5s"
                    },
                    {
                        "label": "Special Effect 2",
                        "value": "Using either stage empowers your next Double-Barrel Blaster, transforming it into Monster-Piercer"
                    },
                    {
                        "label": "Bonus Health",
                        "value": "Every unleash of Ruthless Pursuit and Helix Advance grants 30 bonus health. Max bonus health is 75"
                    },
                    {
                        "label": "Follow Up",
                        "value": ""
                    },
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Max Damage Distance",
                        "value": "8m"
                    },
                    {
                        "label": "Damage",
                        "value": "30"
                    },
                    {
                        "label": "Dash Speed",
                        "value": "15 m/s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260210/d3e00685-1ad7-4e9d-a9cc-4d176abfdf09.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "HELIX ADVANCE",
                "description": "Dash forward. Your next Double-Barrel Blaster becomes Monster-Piercer",
                "key": "Shift",
                "icon": "static/heroes/abilities/elsa-bloodstone-5-helix-advance.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Shift"
                    },
                    {
                        "label": "Max Dash Speed",
                        "value": "27.5m/s"
                    },
                    {
                        "label": "Max Dash Duration",
                        "value": "0.28s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "In 6s after unleashing Helix Advance, the next Double-Barrel Blaster becomes Monster-Piercer"
                    },
                    {
                        "label": "Special Effect 2",
                        "value": "Every unleash of Ruthless Pursuit and Helix Advance grants 30 bonus health. Max bonus health is 75"
                    },
                    {
                        "label": "Cooldown",
                        "value": "10s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260210/d5490ea6-b478-4c97-9ef7-20621038e83e.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "LIVING BULLET",
                "description": "Fire a Living Bullet round that splits upon impact, seeking nearby enemies and marking each with a Spectral Sigil. Hitting marked targets with Double-Barrel Blaster or Monster-Piercer grants Elsa a brief Speed boost. Living Bullets deal extra damage to shields and enemies with Bonus Health",
                "key": "Right Click",
                "icon": "static/heroes/abilities/elsa-bloodstone-6-living-bullet.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "60m/s"
                    },
                    {
                        "label": "Projectile Damage",
                        "value": "60"
                    },
                    {
                        "label": "Special Effect 1",
                        "value": "After hits an enemy, the projectile splits to several bullets to trace the enemies in range"
                    },
                    {
                        "label": "Tracing Range",
                        "value": "8m radius spherical spell field"
                    },
                    {
                        "label": "Maximum Splits",
                        "value": "3"
                    },
                    {
                        "label": "Cooldown",
                        "value": "8s"
                    },
                    {
                        "label": "Special Effect 2",
                        "value": "Projectile deals 40 extra damage to shields and enemies with bonus health"
                    },
                    {
                        "label": "Speed Boost",
                        "value": "Increase movement speed by 40% for 1s"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260210/4931ed8c-267e-4117-bc98-174750ceebdf.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "SMOKY SNARE",
                "description": "Launch a trap containing the monster Diablo. Once deployed, it becomes Invisible and Invulnerable. When an enemy triggers it, Diablo Immobilizes and Damages them. Use to dash to the trapped enemy. Enemies can destroy Diablo to break free",
                "key": "F",
                "icon": "static/heroes/abilities/elsa-bloodstone-7-smoky-snare.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    },
                    {
                        "label": "Trap Health",
                        "value": "100"
                    },
                    {
                        "label": "Maximum Immobilizing Duration",
                        "value": "1.2s"
                    },
                    {
                        "label": "Special Effect 1",
                        "value": "The trap becomes Invisible and Invulnerable after one-second deployment"
                    },
                    {
                        "label": "Triggered Trap Damage",
                        "value": "Cause 5 damage every 0.2s, last 1.2s"
                    },
                    {
                        "label": "Summons' Health",
                        "value": "50"
                    },
                    {
                        "label": "Special Effect 2",
                        "value": "Defeat the summon to end the Immobolized state early"
                    },
                    {
                        "label": "Special Effect 3",
                        "value": "Elsa can dash to the enemy who triggers the trap"
                    },
                    {
                        "label": "Maximum Select Distance",
                        "value": "30m"
                    },
                    {
                        "label": "Maximum Dash Duration",
                        "value": "0.25s"
                    },
                    {
                        "label": "Maximum Dash Speed",
                        "value": "60m/s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260210/a23b9d06-1993-42ec-91af-c2e44696ba07.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "APEX PREDATOR",
                "description": "Summon the Glartrox to charge forward. The Glartrox can be recalled to charge back toward Elsa. When colliding with terrain or upon return, it bites fiercely, dealing heavy damage",
                "key": "Q",
                "icon": "static/heroes/abilities/elsa-bloodstone-8-apex-predator.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "3400"
                    },
                    {
                        "label": "Glartrox Health",
                        "value": "400"
                    },
                    {
                        "label": "Glartrox Seize Damage",
                        "value": "75"
                    },
                    {
                        "label": "Glartrox Bite Damage",
                        "value": "125"
                    },
                    {
                        "label": "Special Effect 1",
                        "value": "Enemies seized by Glartrox cannot use their abilities until it stops moving"
                    },
                    {
                        "label": "Special Effect 2",
                        "value": "Elsa can recall Glartrox at any time"
                    },
                    {
                        "label": "Special Effect 3",
                        "value": "When the Glartrox collides with terrain, returns, or reaches its maximum dash duration, it bites fiercely, dealing massive damage. If Glartrox is defeated, the bite will not be triggered"
                    },
                    {
                        "label": "Glartrox Movement Speed",
                        "value": "15m/s"
                    },
                    {
                        "label": "Glartrox Maximum Dash Duration",
                        "value": "Maximum durations for dashing and returning are 3.5s each"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Glartrox cannot be critical hit. Drag 8 targets at most"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260210/baae636a-b026-4d93-b08f-3185544fbeb3.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "BLOODSTONE'S BOOMBOX BULLETS",
                "description": "Deadpool hands Jeff the Land Shark a plushie. Jeff can spit it ahead where it'll continuously Taunt nearby enemies and Block Vision, while allies in range are healed! Elsa Bloodstone's Living Bullet changes to special rounds that Taunt targets with Deadpool's chatter, while Slowing, and damaging nearby enemies over time. Elsa can recall the rounds to heal based on damage dealt",
                "key": "Right Click",
                "icon": "static/heroes/abilities/elsa-bloodstone-9-bloodstone-s-boombox-bullets.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "60m/s"
                    },
                    {
                        "label": "Projectile Damage",
                        "value": "First hit: 60; second hit: 40"
                    },
                    {
                        "label": "Second Hit Damage Over Time",
                        "value": "20/s for 2s"
                    },
                    {
                        "label": "Slow Effect",
                        "value": "Reduce movement speed by 35% for 2s"
                    },
                    {
                        "label": "Taunt Duration",
                        "value": "2s"
                    },
                    {
                        "label": "Damage/Healing Conversion Rate",
                        "value": "30%"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260210/ef8a763c-f6b0-4c09-9217-37d1796495c2.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "250"
            },
            {
                "label": "Movement Speed",
                "value": "600"
            }
        ],
        "forms": [
            "ELSA BLOODSTONE"
        ]
    },
    "emma-frost": {
        "nickname": "EMMA FROST",
        "realName": "EMMA FROST",
        "roles": [
            "VANGUARD"
        ],
        "intro": "For Emma Frost, war is the purest form of art. With her formidable telepathic abilities, she intricately weaves a deadly mental web that ensnares her foes, while her indestructible diamond form lets her lead her teammates fearlessly into the fray. Forever elegant and composed, Emma reigns as the one true queen of the battlefield!",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "TELEPATHIC PULSE",
                "description": "Fire a psionic beam to deal damage; the longer the beam hits, the higher the damage",
                "key": "Left Click",
                "icon": "static/heroes/abilities/emma-frost-1-telepathic-pulse.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Channeled"
                    },
                    {
                        "label": "Ammo",
                        "value": "70"
                    },
                    {
                        "label": "Damage",
                        "value": "Damage increases with energy: 0 - 70/s, 99 - 110/s, full energy - 140/s"
                    },
                    {
                        "label": "Attack Range",
                        "value": "18m"
                    },
                    {
                        "label": "Ammo Consumption",
                        "value": "10/s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Energy gain: Hero hit: 12/s; Sentience hit: 18/s; Common summons hit: 5/s; Shield hit: 6/s. Falloff begins 4s after not hitting an enemy, at a rate of 30/s"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20250409/af9f583d-3891-4929-afe5-f41651b71edb.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "MIND'S AEGIS",
                "description": "Create a levitating barrier at the designated location",
                "key": "Right Click",
                "icon": "static/heroes/abilities/emma-frost-2-mind-s-aegis.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Deployable Shield"
                    },
                    {
                        "label": "Maximum Shield Value",
                        "value": "400"
                    },
                    {
                        "label": "Recovery Speed",
                        "value": "80/s"
                    },
                    {
                        "label": "Delayed Recovery After Release",
                        "value": "2s"
                    },
                    {
                        "label": "Reposition Cooldown",
                        "value": "1s"
                    },
                    {
                        "label": "Cooldown After Destroyed",
                        "value": "4s"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250409/32c4bdf3-c6de-4131-b202-db95bbd1fc07.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "PSYCHIC SPEAR",
                "description": "Seize control of an enemy's sentience—damage dealt to the sentience cascades to the physical form and can be pierced by Telepathic Pulse. When the sentience shatters, it unleashes extra damage on its owner",
                "key": "E",
                "icon": "static/heroes/abilities/emma-frost-3-psychic-spear.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast delayed projectile"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "80m/s"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "24m"
                    },
                    {
                        "label": "Sentience Health",
                        "value": "Target's 25% Current Health"
                    },
                    {
                        "label": "Damage",
                        "value": "Deal 5 damage per direct hit. When the sentience shatters, it deals damage to the target, which is equal to 25% of the target's maximum health"
                    },
                    {
                        "label": "Special Effect",
                        "value": "When the distance between the target and its sentience is more than 15m, their linkage can be broken"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250409/091083f4-aa98-4bf7-8b9e-318798ee4939.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "DIAMOND FORM",
                "description": "Activate Diamond Form to transform your attack style while gaining Damage Reduction and becoming Unstoppable",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/emma-frost-4-diamond-form.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Casting",
                        "value": "Switch Form"
                    },
                    {
                        "label": "Duration",
                        "value": "8s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "25% Damage Reduction in Diamond form"
                    },
                    {
                        "label": "Cooldown",
                        "value": "15s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250409/139006e1-78e5-443f-9b1e-271c3f6bc276.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "FACETED FURY",
                "description": "In Diamond Form, deliver a crushing double-fisted strike to enemies",
                "key": "Left Click",
                "icon": "static/heroes/abilities/emma-frost-5-faceted-fury.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast Spell Field"
                    },
                    {
                        "label": "Damage",
                        "value": "First & second hit: 50; third hit: 70; fourth hit: 80"
                    },
                    {
                        "label": "Attack Range",
                        "value": "4m"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250409/a5598975-b4ab-49a5-b99c-a9a4d044f37c.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "CRYSTAL KICK",
                "description": "In Diamond Form, unleash a flying kick forward and knock back enemies; extra damage is dealt if they're propelled into a wall",
                "key": "Right Click",
                "icon": "static/heroes/abilities/emma-frost-6-crystal-kick.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast Spell Field"
                    },
                    {
                        "label": "Hit Range",
                        "value": "5m"
                    },
                    {
                        "label": "Damage",
                        "value": "Hit damage: 40; damage increases to 90 when the target is knocked into walls"
                    },
                    {
                        "label": "Cooldown",
                        "value": "2s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Maximum knockback distance: 10m"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250409/dd86d9de-5844-4759-9692-5e0fac76579a.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "CARBON CRUSH",
                "description": "In Diamond Form, lunge forward to grab an enemy, then execute a back slam to inflict damage",
                "key": "E",
                "icon": "static/heroes/abilities/emma-frost-7-carbon-crush.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Dash Based Control"
                    },
                    {
                        "label": "Damage",
                        "value": "30"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "7m"
                    },
                    {
                        "label": "Cooldown",
                        "value": "6s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Control effect duration: 1.6s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250409/a30a134d-c77a-48c3-a212-ea7704c72453.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "PSIONIC SEDUCTION",
                "description": "Project a forward psychic assault that stuns foes and prevents them from unleashing their Ultimate Abilities; if the effect lingers, it gradually commandeers their mind, forcing them to move toward Emma Frost",
                "key": "Q",
                "icon": "static/heroes/abilities/emma-frost-8-psionic-seduction.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Large-ranged Persistent Spell Field"
                    },
                    {
                        "label": "Duration",
                        "value": "6s"
                    },
                    {
                        "label": "Range",
                        "value": "Cone shape spell field, angle range: 80°, length: 30m"
                    },
                    {
                        "label": "Damage",
                        "value": "Basic damage 80/s; distance falloff: falloff begins at 10m, decreasing to 70% at 30m; angle falloff: falloff begins at 7° from the center of view, decreasing to 80% at 20°"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "3100"
                    },
                    {
                        "label": "Special Effect",
                        "value": "When exposed to the ability, enemies accumulate 10 stacks per second, and the stacks decrease by 10 stacks per second when they leave the exposure. At 15 stacks, a control effect is triggered. Each enemy can only be controlled once per ultimate activation. Gain 25% Damage Reduction during the ability."
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250409/f186ffef-db20-4cce-ac54-f3963738fa64.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "ICED OUT DIAMOND",
                "description": "Luna Snow grants Winter's Chill to Iron Fist and Emma Frost. When Iron Fist activates Harmony Recovery, he can heal nearby allies with Lunar Chi. Emma Frost can project ice energy forward, dealing damage and slowing enemies. She can also enhance her diamond form, condensing frost into an Absolute Zero Diamond barrier that blocks enemy attacks and movement",
                "key": "C",
                "icon": "static/heroes/abilities/emma-frost-9-iced-out-diamond.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "C"
                    },
                    {
                        "label": "Summons' Health",
                        "value": "250"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "A fan-shaped spell field with a radius of 12m, a height of 3m, and an angle of 60°"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "60"
                    },
                    {
                        "label": "Slow Rate",
                        "value": "45%"
                    },
                    {
                        "label": "Slow Duration",
                        "value": "3s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "20s"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250409/f7eaa483-8960-4b6f-b427-c9568e54e110.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "600"
            },
            {
                "label": "Movement Speed",
                "value": "6m/s"
            }
        ],
        "forms": [
            "Emma Frost"
        ]
    },
    "gambit": {
        "nickname": "GAMBIT",
        "realName": "REMY LEBEAU",
        "roles": [
            "STRATEGIST"
        ],
        "intro": "Charming and free-spirited, Remy LeBeau manipulates kinetic energy with unmatched skill. With a flick of his wrist, his charged playing cards become explosive projectiles for foes or heal his allies through kinetic shifting. When the charismatic Gambit lights up the battlefield, he always plays to win!",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Kinetic Cards",
                "description": "Launch three kinetic-charged cards in an arc ahead. Each card detonates on impact, creating a single-target explosion that damages enemies and heals allies",
                "key": "Left Click",
                "icon": "static/heroes/abilities/gambit-1-kinetic-cards.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Projectile that fires in a straight trajectory"
                    },
                    {
                        "label": "Cards Launched Per Unleash",
                        "value": "3 cards per unleash"
                    },
                    {
                        "label": "Angle Between the Side Cards and the Center Card",
                        "value": "2°"
                    },
                    {
                        "label": "Card Damage",
                        "value": "20 damage per round"
                    },
                    {
                        "label": "Card Healing",
                        "value": "28 health per round"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "0.45s per round"
                    },
                    {
                        "label": "Ammo",
                        "value": "21"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "No"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "150 m/s"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "60m"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20251114/803eab7e-6824-40ba-8439-6852d4d13098.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Ragin' Royal Flush",
                "description": "Lock onto an ally within sight and unleash multiple Aces that heal and Purify. Both enter the Kinetic Transfer state, granting increased Movement Speed and Jump Boost, while enhancing attacks with additional single-target explosive damage and providing the ally with Ultimate Ability Charge Acceleration",
                "key": "Q",
                "icon": "static/heroes/abilities/gambit-2-ragin-royal-flush.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Targeted"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "4500"
                    },
                    {
                        "label": "Range",
                        "value": "Cone shape spell field, angle range: 110°, length: 40m"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Gambit and the targeted ally receive the Purify and Jump Boost effect."
                    },
                    {
                        "label": "One-Time Healing",
                        "value": "100"
                    },
                    {
                        "label": "Movement Speed Boost Ratio",
                        "value": "30%"
                    },
                    {
                        "label": "Enhanced Damage Ratio",
                        "value": "20%"
                    },
                    {
                        "label": "Damage Trigger Interval",
                        "value": "0.5s"
                    },
                    {
                        "label": "Healing over time",
                        "value": "55/s"
                    },
                    {
                        "label": "Ultimate Abilities Charge Acceleration Ratio",
                        "value": "20%"
                    },
                    {
                        "label": "Spell Field Duration",
                        "value": "8s"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20251114/1dca6707-3f6b-48ef-a180-1f2a6f2f0c6c.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Cajun Charge",
                "description": "Side-step forward with bo staff in hand, dashing a short distance",
                "key": "Shift",
                "icon": "static/heroes/abilities/gambit-3-cajun-charge.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Shift"
                    },
                    {
                        "label": "Casting",
                        "value": "Dash"
                    },
                    {
                        "label": "Cooldown",
                        "value": "2 charges, with each charge taking 12.5s to recharge."
                    },
                    {
                        "label": "Dash Duration",
                        "value": "8m"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20251114/ac36a353-d40b-4511-a13a-27f14a429c04.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Healing Hearts",
                "description": "Conjure a Heart card by consuming one stack of Sleight of Hand to Heal and switch to the Healing Hearts deck",
                "key": "E",
                "icon": "static/heroes/abilities/gambit-4-healing-hearts.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Cooldown",
                        "value": "4 charges, with each charge taking 8s to recharge."
                    },
                    {
                        "label": "Self Healing",
                        "value": "Heal 20 health per second within duration"
                    },
                    {
                        "label": "Maximum Duration",
                        "value": "6s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Within the duration, consume one stack of Sleight of Hand to use Bridge Boost and Purifying Pick-Up."
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20251114/6ac2c5f0-a2b1-4c61-9a9d-ad754bf80f8b.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Breaking Spades",
                "description": "Conjure a Spade card by consuming one stack of Sleight of Hand to gain Damage Boost and switch to the Breaking Spades deck",
                "key": "F",
                "icon": "static/heroes/abilities/gambit-5-breaking-spades.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Cooldown",
                        "value": "4 charges, with each charge taking 8s to recharge"
                    },
                    {
                        "label": "Self Damage Boost",
                        "value": "10%"
                    },
                    {
                        "label": "Maximum Duration",
                        "value": "6s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Within the duration, consume one stack of Sleight of Hand to use Explosive Trick and Bidding Barrage"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20251114/1ef52531-92a7-4f67-8087-c439b12fd268.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Bayou Bash",
                "description": "Channel kinetic energy into the bo staff, then slam it into the ground after a sweeping strike, creating a shockwave that damages nearby enemies and heals allies",
                "key": "Right Click",
                "icon": "static/heroes/abilities/gambit-6-bayou-bash.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast spell field that surrounds the caster"
                    },
                    {
                        "label": "Cooldown",
                        "value": "2 charges, with each charge taking 8s to recharge"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "5m spherical radius"
                    },
                    {
                        "label": "Damage",
                        "value": "60"
                    },
                    {
                        "label": "Healing",
                        "value": "To allies: 60; self: 60"
                    },
                    {
                        "label": "Big Easy Impact",
                        "value": ""
                    },
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Dash"
                    },
                    {
                        "label": "Dash Distance",
                        "value": "12m"
                    },
                    {
                        "label": "Spell Field Generation Quantity",
                        "value": "3"
                    },
                    {
                        "label": "Spell Field Generation Interval",
                        "value": "0.1"
                    },
                    {
                        "label": "Range",
                        "value": "5m spherical radius"
                    },
                    {
                        "label": "Damage",
                        "value": "25 per field"
                    },
                    {
                        "label": "Healing",
                        "value": "To allies and self: 15/hit"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20251114/c8149d2a-578d-425b-baef-97750a81d644.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "ACE OF ACES",
                "description": "Gambit charges Magneto's greatsword with kinetic energy. When Magneto activates this ability, Iron Volley is replaced with Ace Greatsword, which detonates upon striking enemies. The explosion leaves residual kinetic energy within the target, inflicting secondary damage after a brief delay",
                "key": "Passive",
                "icon": "static/heroes/abilities/gambit-7-ace-of-aces.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "5% Healing Boost"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20251114/0e30670c-1902-40f4-94ab-95be6d0bd05b.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Bridge Boost",
                "description": "While Healing Hearts deck is active, trigger Flush Empowerment to card spring and fire a full deck forward. Cards bounce between allies on impact, granting Health and a Healing Boost",
                "key": "E",
                "icon": "static/heroes/abilities/gambit-8-bridge-boost.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Projectile that fires in a straight trajectory."
                    },
                    {
                        "label": "Special Effect",
                        "value": "The projectile automatically tracks allies and will bounce between allies on impact. Bridge Boost bounces on a single target are set to a maximum of 2"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "120m/s"
                    },
                    {
                        "label": "Max Number of Ricochets",
                        "value": "6"
                    },
                    {
                        "label": "Healing",
                        "value": "50 damage per round"
                    },
                    {
                        "label": "Healing Boost Ratio",
                        "value": "0.15"
                    },
                    {
                        "label": "Duration",
                        "value": "4s"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20251114/c698518d-fcb9-49f7-88e4-6a0fdef24189.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Purifying Pick-Up",
                "description": "While Healing Hearts deck is active, trigger Raise Empowerment to launch a cluster of cards in an arc ahead. Explosions heal nearby allies and Purify them",
                "key": "F",
                "icon": "static/heroes/abilities/gambit-9-purifying-pick-up.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Casting",
                        "value": "Projectile that generates a spell field upon impact."
                    },
                    {
                        "label": "Number of Generated Projectiles",
                        "value": "10"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "100 m/s"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "15m"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "5m spherical radius"
                    },
                    {
                        "label": "Spell Field Healing",
                        "value": "70 per field"
                    },
                    {
                        "label": "Special Effect",
                        "value": "The spell field applies Purify to allies upon impact. This can take effect on allies a maximum of 2 times and on himself once."
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20251114/4721ac14-6de6-4a2c-ad41-41f66bcf60ef.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Explosive Trick",
                "description": "While Breaking Spades deck is active, trigger Flush Empowerment to fire a full set of cards forward. Cards explode on impact, dealing damage while inflicting Reduced Healing",
                "key": "F",
                "icon": "static/heroes/abilities/gambit-10-explosive-trick.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Casting",
                        "value": "Projectile that generates a spell field upon impact"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "150 m/s"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "5m spherical radius"
                    },
                    {
                        "label": "Damage",
                        "value": "70"
                    },
                    {
                        "label": "Reduced Healing Ratio",
                        "value": "0.25"
                    },
                    {
                        "label": "Reduced Healing Duration",
                        "value": "4s"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20251114/fd0e01ed-c52f-47c1-bfcf-cf6f21d7489f.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Bidding Barrage",
                "description": "While Breaking Spades deck is active, trigger Raise Empowerment to scattering cards in an arc in all directions. Explosions damage enemies and Launch them up",
                "key": "E",
                "icon": "static/heroes/abilities/gambit-11-bidding-barrage.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Projectile that generates a spell field upon impact"
                    },
                    {
                        "label": "Number of Projectiles",
                        "value": "10"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "100 m/s"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "15m"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "5m spherical radius"
                    },
                    {
                        "label": "Damage",
                        "value": "70"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Launch enemies up on hit, which can take effect only once."
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20251114/5b36fc07-c4e6-496a-9944-efb824adfe0f.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "250"
            },
            {
                "label": "Movement Speed",
                "value": "600"
            }
        ],
        "forms": [
            "Gambit"
        ]
    },
    "groot": {
        "nickname": "GROOT",
        "realName": "GROOT",
        "roles": [
            "VANGUARD"
        ],
        "intro": "A flora colossus from Planet X, the alien known as Groot exhibits enhanced vitality and the ability to manipulate all forms of vegetation. As sturdy as a towering tree, Groot forges his own way, serving as the team's silent but reliable pathfinder.",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Vine Strike",
                "description": "Launch vines to attack enemies",
                "key": "Left Click",
                "icon": "static/heroes/abilities/groot-1-vine-strike.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast projectile with delayed impact"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "120m/s"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "22m"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "0.7s"
                    },
                    {
                        "label": "Damage",
                        "value": "65"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "No"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/b1e08b7f-2364-45cb-9ebc-6b73214d8529.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Strangling Prison",
                "description": "Fire a massive vine cluster that pulls nearby enemies to its center and Imprisons them",
                "key": "Q",
                "icon": "static/heroes/abilities/groot-2-strangling-prison.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast projectile with a downward delay that creates a spell field upon impact"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "60m/s"
                    },
                    {
                        "label": "Range",
                        "value": "8m spherical radius"
                    },
                    {
                        "label": "Damage",
                        "value": "The projectile deals 10 damage, while the spell field deals 70 damage. While imprisoning enemies, it deals 20 damage every 0.5s"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "2800"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Imprison enemies for 3.5s"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/72a68f64-ac6b-4b4d-a6c2-a96d8ba932f2.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Thornlash Wall",
                "description": "Target a location and grow a Thornlash Wall. When Awakened, it strikes nearby enemies attacked by Groot and his allies",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/groot-3-thornlash-wall.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Casting",
                        "value": "Targeted"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "18m"
                    },
                    {
                        "label": "Thornlash Wall Health",
                        "value": "250"
                    },
                    {
                        "label": "Cooldown",
                        "value": "2 charges, with each charge taking 6s to recharge"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Thornlash Wall deals 60 damage every 0.5s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/22175d18-5214-4a59-a1a2-b20d042ac46c.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Ironwood Wall",
                "description": "Target a location and grow an Ironwood Wall. When the wall is Awakened, damage dealt by Groot and nearby allies grants Groot Bonus Health. Groot gains Unstoppable while near Ironwood Walls",
                "key": "E",
                "icon": "static/heroes/abilities/groot-4-ironwood-wall.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Targeted"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "10m"
                    },
                    {
                        "label": "Thornlash Wall Health",
                        "value": "600"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Ironwood Wall heals 40 Bonus Health per second, up to 250 Bonus Health; gain Unstoppable status when within 15m of Awakened Ironwood Walls"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/6b671ac4-7312-4702-8062-5f3d93cdbcd4.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Spore Bomb",
                "description": "Throw an explosive Spore Bomb that splits into multiple small explosive spores",
                "key": "Right Click",
                "icon": "static/heroes/abilities/groot-5-spore-bomb.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast projectile with a downward delay that creates a spell field upon impact"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "60m/s"
                    },
                    {
                        "label": "Range",
                        "value": "Spore Bomb generates a spell field with a 5m spherical radius, while small explosive spores create a spell field with a 1.5m spherical radius"
                    },
                    {
                        "label": "Damage",
                        "value": "The projectile itself deals no damage, while Spore Bomb deals 55 damage and explosive spores deal 10 damage"
                    },
                    {
                        "label": "Cooldown",
                        "value": "6s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Spore Bomb explodes into 6 explosive spores"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/bba9fe65-f6c7-46de-807c-0ba36c78e505.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Flora Colossus",
                "description": "Wooden walls near Groot will Awaken, activating an extra effect. Right-click while building a wooden wall to continue building additional walls",
                "key": "Passive",
                "icon": "static/heroes/abilities/groot-6-flora-colossus.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Casting",
                        "value": "Persistent spell field that surrounds the caster"
                    },
                    {
                        "label": "Range",
                        "value": "A cylindrical spell field with a 24m radius and a height of 40m"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/9a004657-cc4f-47c9-8f81-a4d3471a03bb.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Furious Flora",
                "description": "Perform a combo with his arms, and the third strike will slightly Launch Up the hit enemy airborne",
                "key": "V",
                "icon": "static/heroes/abilities/groot-7-furious-flora.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "V"
                    },
                    {
                        "label": "Range",
                        "value": "The first two strikes can reach 3m, while the third strike can reach 4m"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241125/32653d8e-2a57-460d-af0a-72f35b84b607.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Wild Wall",
                "description": "Mantis enhances Groot's wooden walls and Loki's Rune Stones with life energy. Groot can additionally unleash a Flower Wall, which, when in Flora Colossus state, restores health to random nearby allies and grants them Damage Reduction. Loki's Rune Stones grant allies within Regeneration Domain a Damage Boost",
                "key": "C",
                "icon": "static/heroes/abilities/groot-8-wild-wall.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "C"
                    },
                    {
                        "label": "Casting",
                        "value": "Targeted"
                    },
                    {
                        "label": "Cooldown",
                        "value": "10s"
                    },
                    {
                        "label": "Flower Wall Health",
                        "value": "150"
                    },
                    {
                        "label": "Range",
                        "value": "10m spherical radius spell field"
                    },
                    {
                        "label": "Maximum Unleash Distance",
                        "value": "7m"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "40/s"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250808/1c89933e-1908-4b71-80d1-9074582fa726.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "700"
            },
            {
                "label": "Movement Speed",
                "value": "6m/s"
            }
        ],
        "forms": [
            "GROOT"
        ]
    },
    "hawkeye": {
        "nickname": "HAWKEYE",
        "realName": "CLINT BARTON",
        "roles": [
            "DUELIST"
        ],
        "intro": "Despite his lack of superpowers, Hawkeye's unparalleled skills as a marksman have earned him a spot alongside earth's mightiest heroes. With a cool head and steady hand, Clint Barton never misses a target… so enemies best stay out of his sights!",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Piercing Arrow",
                "description": "Shoot a powerful arrow",
                "key": "Left Click",
                "icon": "static/heroes/abilities/hawkeye-1-piercing-arrow.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Charged projectile with an arced trajectory"
                    },
                    {
                        "label": "Slow Rate While Charging",
                        "value": "-20%"
                    },
                    {
                        "label": "Minimum Charge Time",
                        "value": "0.7s"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "120 - 180 m/s (Maximum speed is achieved after 0.9s of charging)"
                    },
                    {
                        "label": "Damage",
                        "value": "28 - 70 (Maximum damage is achieved after 0.9s of charging)"
                    },
                    {
                        "label": "Ammo",
                        "value": "Infinite"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "Yes"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241124/9107db4e-f275-49aa-87bf-96c697157a15.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Blast Arrow",
                "description": "Shoot three explosive arrows",
                "key": "Left Click",
                "icon": "static/heroes/abilities/hawkeye-2-blast-arrow.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Arced projectile that generates a spell field upon impact"
                    },
                    {
                        "label": "Slow Rate While Charging",
                        "value": "-20%"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "60 m/s"
                    },
                    {
                        "label": "Projectile Damage",
                        "value": "16"
                    },
                    {
                        "label": "Range",
                        "value": "3m spherical radius"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "34"
                    },
                    {
                        "label": "Blast Arrows Per Cast",
                        "value": "3"
                    },
                    {
                        "label": "Spread Angle",
                        "value": "11.3°"
                    },
                    {
                        "label": "Cooldown",
                        "value": "0.5s"
                    },
                    {
                        "label": "Charges",
                        "value": "3"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241124/b54fcda9-4e31-4a7b-87c7-c7e8fd675434.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Hunter's Sight",
                "description": "Capture Afterimages of enemies in his view. Damage dealt to an Afterimage is transferred to the corresponding enemy",
                "key": "Q",
                "icon": "static/heroes/abilities/hawkeye-3-hunter-s-sight.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Duration",
                        "value": "10s"
                    },
                    {
                        "label": "Afterimage Generation Interval",
                        "value": "0.5s"
                    },
                    {
                        "label": "Afterimage Duration",
                        "value": "3s"
                    },
                    {
                        "label": "Draw Speed Boost Multiplier",
                        "value": "1.5"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "3100"
                    },
                    {
                        "label": "Special Mechanic",
                        "value": "While Hunter's Sight is active, bow draw speed is increased"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241124/15af78f7-6723-402d-916e-0e17ebf4b6df.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Crescent Slash",
                "description": "Unsheathe a katana and slash forward, launching up enemies hit",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/hawkeye-4-crescent-slash.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Casting",
                        "value": "Melee"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "8m"
                    },
                    {
                        "label": "Damage",
                        "value": "40"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241124/a598cd3c-e1d2-4403-8d48-13bf9dcf1b39.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Hypersonic Arrow",
                "description": "Shoot a Hypersonic Arrow, dealing two instances of damage to enemies in its path and inflicting them with Slow. This ability can Knock Down flying heroes",
                "key": "E",
                "icon": "static/heroes/abilities/hawkeye-5-hypersonic-arrow.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Straight-line projectile that is accompanied by a spell field"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "150 m/s"
                    },
                    {
                        "label": "First Spell Field Range",
                        "value": "Length: 3m, Width: 3m, Height: 2.7m"
                    },
                    {
                        "label": "First Damage",
                        "value": "55"
                    },
                    {
                        "label": "Second Spell Field Range",
                        "value": "Length: 3m, Width: 5m, Height: 1.6m"
                    },
                    {
                        "label": "Second Damage",
                        "value": "55"
                    },
                    {
                        "label": "Slow Rate",
                        "value": "-40%"
                    },
                    {
                        "label": "Slow Duration",
                        "value": "1s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241124/96e35f6b-b42a-461a-9cd9-554ed05e3470.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Ronin Slash",
                "description": "Swing a wakizashi to strike frontal enemies, deflecting all incoming projectiles",
                "key": "V",
                "icon": "static/heroes/abilities/hawkeye-6-ronin-slash.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "V"
                    },
                    {
                        "label": "Casting",
                        "value": "Melee"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "3m"
                    },
                    {
                        "label": "Special Effect",
                        "value": "This ability cannot block explosions or effects created by projectiles on hit"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241124/d8d9cc33-6737-4481-b442-ce0375138806.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Skyward Leap",
                "description": "Perform a double jump in the direction of movement",
                "key": "Space",
                "icon": "static/heroes/abilities/hawkeye-7-skyward-leap.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Space"
                    },
                    {
                        "label": "Cooldown",
                        "value": "6s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241124/83892ce1-2db5-4c6c-a0f2-a4117ab86aab.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Archer's Focus",
                "description": "Aim at an enemy to improve focus, enhancing the damage inflicted by Piercing Arrow",
                "key": "Passive",
                "icon": "static/heroes/abilities/hawkeye-8-archer-s-focus.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Bonus Damage",
                        "value": "0 - 90 (Maximum damage is achieved after 0.9s of aiming)"
                    },
                    {
                        "label": "Triggering Distance",
                        "value": "40m"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "Yes"
                    },
                    {
                        "label": "Special Mechanic",
                        "value": "Apply bonus damage to the base damage of Piercing Arrow"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20241124/54419864-579b-4029-bc38-150d604b96c2.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "MOONLIT SLASH",
                "description": "Cloak & Dagger inject light and dark energy into Hawkeye's katana. When Hawkeye uses Crescent Slash, enemies hit are launched back, and a blade wave filled with light and energy sweeps forward. This wave passes through both allies and enemies: it heals and boosts healing for allies, while damaging enemies and applying Vulnerability",
                "key": "Shift",
                "icon": "static/heroes/abilities/hawkeye-9-moonlit-slash.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Shift"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    },
                    {
                        "label": "Blade Wave Speed",
                        "value": "60 m/s"
                    },
                    {
                        "label": "Blade Wave Range",
                        "value": "Length: 2m, Width: 6m, Height: 2m"
                    },
                    {
                        "label": "Blade Wave Damage",
                        "value": "60"
                    },
                    {
                        "label": "Vulnerability Ratio",
                        "value": "0.15"
                    },
                    {
                        "label": "Vulnerability Duration",
                        "value": "4s"
                    },
                    {
                        "label": "Blade Wave Healing",
                        "value": "60"
                    },
                    {
                        "label": "Healing Boost",
                        "value": "0.15"
                    },
                    {
                        "label": "Healing Boost Duration",
                        "value": "4s"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20251115/51eb0c6d-b829-4f42-8254-63a45af24047.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "250"
            },
            {
                "label": "Movement Speed",
                "value": "6 m/s"
            }
        ],
        "forms": [
            "HAWKEYE"
        ]
    },
    "hela": {
        "nickname": "HELA",
        "realName": "HELA",
        "roles": [
            "DUELIST"
        ],
        "intro": "As the Goddess of Death, Hela wields supreme control over the fallen souls residing in Hel. With a haunting whisper and a murder of crows, the queen of the underworld gracefully reaps the souls of her enemies without an ounce of mercy.",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Nightsword Thorn",
                "description": "Throw Nightsword thorns",
                "key": "Left Click",
                "icon": "static/heroes/abilities/hela-1-nightsword-thorn.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast direct hit"
                    },
                    {
                        "label": "Damage",
                        "value": "70"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 18m, decreasing to 70% at 30m"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "2 rounds per second"
                    },
                    {
                        "label": "Ammo",
                        "value": "10"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "Yes"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/ea4b3942-f0b3-43b4-a2fc-d5b43b6a8b35.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Goddess of Death",
                "description": "Soar into the sky and unleash Nastrond Crows from each hand at will",
                "key": "Q",
                "icon": "static/heroes/abilities/hela-2-goddess-of-death.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Straight-line projectile that generates a spell field upon impact"
                    },
                    {
                        "label": "Duration",
                        "value": "10s"
                    },
                    {
                        "label": "Nastrond Crow Health",
                        "value": "1000"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "1 rounds per second"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "80 m/s"
                    },
                    {
                        "label": "Explosion Range",
                        "value": "6m spherical radius"
                    },
                    {
                        "label": "Explosion Damage",
                        "value": "125"
                    },
                    {
                        "label": "Explosion Damage Falloff",
                        "value": "32% falloff at 4m."
                    },
                    {
                        "label": "Energy Cost",
                        "value": "4000"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/cc37d07b-7128-47a0-8706-240fda571a47.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Astral Flock",
                "description": "Transform into a Nastrond Crow to glide forth, press again to undo the transformation. Gain Bonus Health when the transformation ends",
                "key": "Shift",
                "icon": "static/heroes/abilities/hela-3-astral-flock.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Shift"
                    },
                    {
                        "label": "Casting",
                        "value": "Dash"
                    },
                    {
                        "label": "Dash Speed",
                        "value": "15 m/s"
                    },
                    {
                        "label": "Dash Distance",
                        "value": "18m"
                    },
                    {
                        "label": "Cooldown",
                        "value": "15s"
                    },
                    {
                        "label": "Bonus Health",
                        "value": "25"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Shapeshift into a Nastrond Crow and gain invincibility"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/e9a46cd0-2dcc-4835-9f4b-f18302c03eac.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Soul Drainer",
                "description": "Project an explosive Hel sphere to Stun nearby enemies.",
                "key": "E",
                "icon": "static/heroes/abilities/hela-4-soul-drainer.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Arced projectile that generates a spell field upon impact"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "40 m/s"
                    },
                    {
                        "label": "Damage",
                        "value": "1"
                    },
                    {
                        "label": "Range",
                        "value": "3m spherical radius"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "40"
                    },
                    {
                        "label": "Stun Duration",
                        "value": "0.3s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "10s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/558313fc-c58a-4507-a812-18e9acf92b97.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Piercing Night",
                "description": "Fire multiple Nightsword thorns that detonate after a delay",
                "key": "Right Click",
                "icon": "static/heroes/abilities/hela-5-piercing-night.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Straight-line projectile that generates a spell field upon impact"
                    },
                    {
                        "label": "Number of Projectiles",
                        "value": "4"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "80 m/s"
                    },
                    {
                        "label": "Projectile Damage",
                        "value": "10"
                    },
                    {
                        "label": "Explosion Delay",
                        "value": "3s"
                    },
                    {
                        "label": "Range",
                        "value": "3m spherical radius"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "35 damage per round"
                    },
                    {
                        "label": "Cooldown",
                        "value": "8s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Projectiles stick to enemies on hit"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/b40f4698-b5ca-4cd1-a8fd-4ff916f1a5da.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Nastrond Crowstorm",
                "description": "Defeating an enemy will generate a Nastrond Crow, exploding after a duration",
                "key": "Passive",
                "icon": "static/heroes/abilities/hela-6-nastrond-crowstorm.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Delay",
                        "value": "1.8s"
                    },
                    {
                        "label": "Range",
                        "value": "5m spherical radius"
                    },
                    {
                        "label": "Damage",
                        "value": "80"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/f7bbe4b0-932e-421b-a60e-d5fb5560c6f7.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Hel's Descent",
                "description": "Hold Space to fall slowly",
                "key": "Space",
                "icon": "static/heroes/abilities/hela-7-hel-s-descent.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Space"
                    },
                    {
                        "label": "Horizontal Movement Speed",
                        "value": "6 m/s"
                    },
                    {
                        "label": "Descending Speed",
                        "value": "3.5 m/s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/29f6f04d-087b-4e97-8aeb-3b505b3c2952.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Hel Tendrils",
                "description": "Venom shares his symbiotes with Jeff and Hela. Hela's Hel Tendrils unleash a symbiotic Hel Sphere. Upon hit, it pulls nearby enemies toward the impact point and links them, slowing enemies that try to escape.",
                "key": "E",
                "icon": "static/heroes/abilities/hela-8-hel-tendrils.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "40 m/s"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "40"
                    },
                    {
                        "label": "Range",
                        "value": "3m spherical radius spell field"
                    },
                    {
                        "label": "Stun Duration",
                        "value": "0.3s"
                    },
                    {
                        "label": "Maximum Linking Distance",
                        "value": "5m"
                    },
                    {
                        "label": "Maximum Linking Duration",
                        "value": "2s"
                    },
                    {
                        "label": "Slow Effect",
                        "value": "Slow the enemies by 20% at the center, increasing to 40% at 2.5m from the center."
                    },
                    {
                        "label": "Cooldown",
                        "value": "10s"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250712/bf161d8e-a652-4abe-aca7-add44ac5429e.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "DEATH KNELL",
                "description": "Hela channels energy of the undead to empower Namor. When Namor strikes with his trident, a spectral water column erupts at the target area, slowing enemies hit. Whenever Hela or Namor assist in a KO, an invulnerable Undead Monstro spawns at the fallen enemy's position, automatically attacking the nearest foe for a short time before vanishing",
                "key": "Passive",
                "icon": "static/heroes/abilities/hela-9-death-knell.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Undead Monstro Duration",
                        "value": "3s"
                    },
                    {
                        "label": "Undead Monstro Damage",
                        "value": "10"
                    },
                    {
                        "label": "Undead Monstro Fire Rate",
                        "value": "0.5s per hit"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 20m, decreasing to 50% at 40m"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20251011/00e05df0-3681-4908-a9f8-c14cc35bbc57.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "250"
            },
            {
                "label": "Movement Speed",
                "value": "6 m/s"
            }
        ],
        "forms": [
            "HELA"
        ]
    },
    "hulk": {
        "nickname": "HULK",
        "realName": "BRUCE BANNER",
        "roles": [
            "VANGUARD"
        ],
        "intro": "Brilliant scientist Dr. Bruce Banner has finally found a way to coexist with his monstrous alter ego, the Hulk. By accumulating gamma energy over multiple transformations, he can become a wise and strong Hero Hulk or a fierce and destructive Monster Hulk – a true force of fury on the battlefield!",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Gamma Ray Gun",
                "description": "Fire with a Gamma Ray Gun",
                "key": "Left Click",
                "icon": "static/heroes/abilities/hulk-1-gamma-ray-gun.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast projectile with delayed impact"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "80m/s"
                    },
                    {
                        "label": "Damage",
                        "value": "16"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "5 rounds per second"
                    },
                    {
                        "label": "Ammo",
                        "value": "25"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "Yes"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/8cb6a38e-5f26-483e-8b6c-92ff443084d1.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Puny Banner",
                "description": "Transform from Bruce Banner into Hero Hulk",
                "key": "Q",
                "icon": "static/heroes/abilities/hulk-2-puny-banner.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Transformation"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "600"
                    },
                    {
                        "label": "Special Effect",
                        "value": "The caster is immobilized during the transformation process and gains Invincibility"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/9a3b272b-318b-45e2-a863-274aa7bcf288.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Gamma Grenade",
                "description": "Launch a Gamma Grenade to inflict damage and Launch Up enemies",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/hulk-3-gamma-grenade.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast projectile with a downward delay that creates a spell field upon impact"
                    },
                    {
                        "label": "Damage",
                        "value": "40"
                    },
                    {
                        "label": "Range",
                        "value": "3m spherical radius"
                    },
                    {
                        "label": "Cooldown",
                        "value": "8s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "When the caster enters the spell field, it restores 50 gamma energy"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/3187b7a0-06b5-4e1c-babe-796554bc2430.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Gamma Boost",
                "description": "Hulk charges Iron Man and Namor with gamma radiation. When Iron Man uses Armor Overdrive, he will initiate a gamma upgrade. When Namor receives the radiation, he will summon an extra Gamma Monstro which will continuously fire gamma rays at locked-on enemies. The longer the rays hit, the higher the damage",
                "key": "Passive",
                "icon": "static/heroes/abilities/hulk-4-gamma-boost.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "Hero Hulk and Monster Hulk gain 100 Max Health"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/101d8739-0c74-4e34-bbbc-207cfef95ce0.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Heavy Blow",
                "description": "Swing fists forward to punch enemies",
                "key": "Left Click",
                "icon": "static/heroes/abilities/hulk-5-heavy-blow.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast Spell Field"
                    },
                    {
                        "label": "Damage",
                        "value": "40"
                    },
                    {
                        "label": "Range",
                        "value": "4.5m"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "0.467s"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/cc774c86-d162-462f-95d0-1b11d36eed83.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "HULK SMASH!",
                "description": "Unleash stored gamma energy, transforming from Hero Hulk into Monster Hulk for a limited time period",
                "key": "Q",
                "icon": "static/heroes/abilities/hulk-6-hulk-smash.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Transformation"
                    },
                    {
                        "label": "Duration",
                        "value": "12s"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "3400"
                    },
                    {
                        "label": "Special Effect",
                        "value": "The caster is immobilized during the transformation process and gains Invincibility"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/a3a3990b-5005-4616-abc2-96e48a971420.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Indestructible Guard",
                "description": "Generate gamma shields for Hero Hulk and nearby allies, absorbing and converting damage into energy for HULK SMASH",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/hulk-7-indestructible-guard.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast spell field that surrounds the caster"
                    },
                    {
                        "label": "Range",
                        "value": "5m spherical radius"
                    },
                    {
                        "label": "Cooldown",
                        "value": "10s"
                    },
                    {
                        "label": "Caster's Shield Value",
                        "value": "200"
                    },
                    {
                        "label": "Ally's Shield Value",
                        "value": "100"
                    },
                    {
                        "label": "Max Shield Duration",
                        "value": "2.5s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "When the caster's shield takes damage, 130% of the damage is converted into gamma energy. When an ally's shield takes damage, 10% of the damage is converted into gamma energy"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/4879fdb5-3227-4af4-9264-dd04c12941b4.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Radioactive Lockdown",
                "description": "Emit gamma energy to irradiate enemies and render them immobilize and immune to all ability effects. Using Heavy Blow or Gamma Burst will prematurely remove this status",
                "key": "E",
                "icon": "static/heroes/abilities/hulk-8-radioactive-lockdown.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast projectile."
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "100m/s"
                    },
                    {
                        "label": "Damage",
                        "value": "5"
                    },
                    {
                        "label": "Cooldown",
                        "value": "15s"
                    },
                    {
                        "label": "Max Duration",
                        "value": "2s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Heavy Blow and Gamma Burst can detect and damage irradiated enemies, and prematurely remove the status"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/172254e3-9768-4dec-9157-76b456d5383d.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Incredible Leap",
                "description": "HOLD Space to perform a charged leap that allows Hero Hulk to Knock a flying enemy to the ground",
                "key": "Space",
                "icon": "static/heroes/abilities/hulk-9-incredible-leap.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Space"
                    },
                    {
                        "label": "Casting",
                        "value": "Charged Dash"
                    },
                    {
                        "label": "Minimum Charge Time",
                        "value": "0.4s"
                    },
                    {
                        "label": "Maximum Charge Time",
                        "value": "1.7s"
                    },
                    {
                        "label": "Speed at Minimum Charge Time",
                        "value": "19m/s"
                    },
                    {
                        "label": "Speed at Maximum Charge Time",
                        "value": "25m/s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Press Space during the Incredible Leap to cling to the wall you encounter"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/b74339de-5816-4639-ba7f-d32d39f620cd.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Gamma Burst",
                "description": "Emit gamma-ray bursts to inflict damage. Reduce Indestructible Guard cooldown upon hit",
                "key": "Right Click",
                "icon": "static/heroes/abilities/hulk-10-gamma-burst.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast projectile that can pierce through enemies"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "80m/s"
                    },
                    {
                        "label": "Damage",
                        "value": "65"
                    },
                    {
                        "label": "Cooldown",
                        "value": "Basic Cooldown 2s, with a charge of 6s per use."
                    },
                    {
                        "label": "Special Effect",
                        "value": "Each direct hit reduces Indestructible Guard cooldown by 1s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/c55bb9d3-8b8b-44ad-ac43-4fb9bcf02130.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Gamma Boost",
                "description": "Hulk charges Iron Man and Namor with gamma radiation. When Iron Man uses Armor Overdrive, he will initiate a gamma upgrade. When Namor receives the radiation, he will summon an extra Gamma Monstro which will continuously fire gamma rays at locked-on enemies. The longer the rays hit, the higher the damage",
                "key": "Passive",
                "icon": "static/heroes/abilities/hulk-11-gamma-boost.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "Hero Hulk and Monster Hulk gain 100 Max Health"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/101d8739-0c74-4e34-bbbc-207cfef95ce0.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Gamma Fastball",
                "description": "Wolverine, Hulk can interact with each other. Once both parties confirm, Hulk can lift Wolverine and press the key to hurl him forward",
                "key": "C",
                "icon": "static/heroes/abilities/hulk-12-gamma-fastball.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "C"
                    },
                    {
                        "label": "Casting",
                        "value": "Targeted"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "20m"
                    },
                    {
                        "label": "Cooldown",
                        "value": "3s when not thrown, 15s when thrown"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/cb438e5d-7e3c-47ff-af80-0b776f860874.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Heavy Blow",
                "description": "Swing fists forward to punch and launch up enemies",
                "key": "Left Click",
                "icon": "static/heroes/abilities/hulk-13-heavy-blow.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast Spell Field"
                    },
                    {
                        "label": "Damage",
                        "value": "70"
                    },
                    {
                        "label": "Range",
                        "value": "5m"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "0.52s"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/cc774c86-d162-462f-95d0-1b11d36eed83.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "World Breaker",
                "description": "Grab and smash the enemy in front",
                "key": "Q",
                "icon": "static/heroes/abilities/hulk-14-world-breaker.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Targeted"
                    },
                    {
                        "label": "Damage",
                        "value": "Delivers 5 hits, each dealing 40 damage"
                    },
                    {
                        "label": "Duration",
                        "value": "5s"
                    },
                    {
                        "label": "Range",
                        "value": "5m"
                    },
                    {
                        "label": "Special Effect",
                        "value": "While performing the smash, Hulk gains a 30% Damage Reduction"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/e2c65ff1-2180-4f19-b7b0-1cf08ad1b1c4.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Radioactive Lockdown",
                "description": "Emit gamma energy to irradiate enemies and render them immobilize and immune to all ability effects. Using Heavy Blow or Gamma Burst will prematurely remove this status",
                "key": "E",
                "icon": "static/heroes/abilities/hulk-15-radioactive-lockdown.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast projectile"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "150m/s"
                    },
                    {
                        "label": "Damage",
                        "value": "5"
                    },
                    {
                        "label": "Cooldown",
                        "value": "5s"
                    },
                    {
                        "label": "Max Duration",
                        "value": "2s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Heavy Blow and Gamma Burst can detect and damage irradiated enemies, and prematurely remove the status"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/5965d229-691b-42be-859e-bc83191b3d1d.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Incredible Leap",
                "description": "HOLD Space to perform a charged leap that allows Monster Hulk to Knock a flying enemy to the ground",
                "key": "Space",
                "icon": "static/heroes/abilities/hulk-16-incredible-leap.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Space"
                    },
                    {
                        "label": "Casting",
                        "value": "Charged Dash"
                    },
                    {
                        "label": "Minimum Charge Time",
                        "value": "0.7s"
                    },
                    {
                        "label": "Maximum Charge Time",
                        "value": "1.5s"
                    },
                    {
                        "label": "Speed at Minimum Charge Time",
                        "value": "19.4m/s"
                    },
                    {
                        "label": "Speed at Maximum Charge Time",
                        "value": "25m/s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Press Space during the Incredible Leap to cling to the wall you encounter"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/b74339de-5816-4639-ba7f-d32d39f620cd.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Gamma Burst",
                "description": "Emit gamma-ray bursts to inflict damage",
                "key": "Right Click",
                "icon": "static/heroes/abilities/hulk-17-gamma-burst.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast projectile that can pierce through enemies"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "60m/s"
                    },
                    {
                        "label": "Damage",
                        "value": "125"
                    },
                    {
                        "label": "Cooldown",
                        "value": "1s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/0ac60cf3-6b01-485b-b205-900f7ac674a4.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Gamma Boost",
                "description": "Hulk charges Iron Man and Namor with gamma radiation. When Iron Man uses Armor Overdrive, he will initiate a gamma upgrade. When Namor receives the radiation, he will summon an extra Gamma Monstro which will continuously fire gamma rays at locked-on enemies. The longer the rays hit, the higher the damage",
                "key": "Passive",
                "icon": "static/heroes/abilities/hulk-18-gamma-boost.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "Hero Hulk and Monster Hulk gain 100 Max Health"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/101d8739-0c74-4e34-bbbc-207cfef95ce0.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Gamma Fastball",
                "description": "Wolverine, Hulk can interact with each other. Once both parties confirm, Hulk can lift Wolverine and press the key to hurl him forward",
                "key": "C",
                "icon": "static/heroes/abilities/hulk-19-gamma-fastball.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "C"
                    },
                    {
                        "label": "Casting",
                        "value": "Targeted"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "20m"
                    },
                    {
                        "label": "Cooldown",
                        "value": "3s when not thrown, 15s when thrown"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/cb438e5d-7e3c-47ff-af80-0b776f860874.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "200"
            },
            {
                "label": "Movement Speed",
                "value": "6m/s"
            }
        ],
        "forms": [
            "Monster Hulk"
        ]
    },
    "human-torch": {
        "nickname": "HUMAN TORCH",
        "realName": "JOHNNY STORM",
        "roles": [
            "DUELIST"
        ],
        "intro": "The Fantastic Four's resident heartthrob, Johnny Storm, adds an intense flare to every battle he fights. Shrouded in roaring flames, the Human Torch always manages to look cool while turning up the heat!",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Fire Cluster",
                "description": "Launch forward a splittable fireball",
                "key": "Left Click",
                "icon": "static/heroes/abilities/human-torch-1-fire-cluster.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Burst Projectile"
                    },
                    {
                        "label": "Charges",
                        "value": "6"
                    },
                    {
                        "label": "Charge Speed",
                        "value": "Instantly recover all Fire Cluster energy after not using Fire Cluster for 1s"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "0.5s per round"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "150m/s"
                    },
                    {
                        "label": "Shot Damage",
                        "value": "5.5 per round"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 15m, decreasing to 60% at 20m."
                    },
                    {
                        "label": "Crosshair Spread Radius (at 10m)",
                        "value": "0.33m"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "Yes"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20250220/2afdfcab-b55a-4a18-a47e-9c2a6bb175b8.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Blazing Blast",
                "description": "Launch a fireball to create a Flame Field at the targeted area",
                "key": "Right Click",
                "icon": "static/heroes/abilities/human-torch-2-blazing-blast.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Straight-line projectile that generates a spherical spell field upon impact."
                    },
                    {
                        "label": "Charges",
                        "value": "3"
                    },
                    {
                        "label": "Charge Speed",
                        "value": "2.5s per strike"
                    },
                    {
                        "label": "Blazing Blast Projectile Speed",
                        "value": "80m/s"
                    },
                    {
                        "label": "Blazing Blast Damage",
                        "value": "45"
                    },
                    {
                        "label": "Flame Field Range",
                        "value": "3m spherical radius"
                    },
                    {
                        "label": "Flame Field Duration",
                        "value": "6s"
                    },
                    {
                        "label": "Flame Field Continuous Damage",
                        "value": "20/s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250220/af838642-8301-4f48-b5ea-5c3413c7cb7f.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Flaming Meteor",
                "description": "Dive towards the ground, dealing damage to enemies and detonating any Flame Fields hit",
                "key": "F",
                "icon": "static/heroes/abilities/human-torch-3-flaming-meteor.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Max Dash Speed",
                        "value": "80m/s"
                    },
                    {
                        "label": "Range",
                        "value": "5m spherical radius"
                    },
                    {
                        "label": "Damage",
                        "value": "40"
                    },
                    {
                        "label": "Flame Field Detonation Range",
                        "value": "3m spherical radius"
                    },
                    {
                        "label": "Flame Field Detonation Damage",
                        "value": "55"
                    },
                    {
                        "label": "Bonus Health",
                        "value": "50"
                    },
                    {
                        "label": "Cooldown",
                        "value": "15s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250220/e3c91a9a-e174-4309-b2c6-975f0671805a.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Plasma Body",
                "description": "Enter a state of accelerated ascent",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/human-torch-4-plasma-body.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Movement Boost",
                        "value": "2.5m/s"
                    },
                    {
                        "label": "Duration",
                        "value": "4s"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "10m"
                    },
                    {
                        "label": "Cooldown",
                        "value": "2 charges, with each charge taking 8s to recharge"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250220/bed6bb7e-ac4e-4b83-b75f-32b4c02b3249.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Pyro-Prison",
                "description": "Form a fire wall between Fire Fields to burn enemies",
                "key": "E",
                "icon": "static/heroes/abilities/human-torch-5-pyro-prison.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Max Link Distance",
                        "value": "40m"
                    },
                    {
                        "label": "Max Link Height",
                        "value": "2m"
                    },
                    {
                        "label": "Fire Wall Duration",
                        "value": "5s"
                    },
                    {
                        "label": "Fire Wall Damage",
                        "value": "65"
                    },
                    {
                        "label": "Pyro-Prison Continuous Damage",
                        "value": "40/s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "15s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250220/d20f2e24-4f10-4fd8-a3a9-73b2920b27ee.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Supernova",
                "description": "Explode with cosmic fire to deal damage to enemies within range. Upon skill activation, all Flame Fields will transform into Flame Tornadoes, dealing extra damage",
                "key": "Q",
                "icon": "static/heroes/abilities/human-torch-6-supernova.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "3400"
                    },
                    {
                        "label": "Duration",
                        "value": "8s"
                    },
                    {
                        "label": "Activation Shock Wave Range",
                        "value": "20m spherical radius"
                    },
                    {
                        "label": "Activation Wave Damage",
                        "value": "75"
                    },
                    {
                        "label": "Flame Tornado Unleash Speed",
                        "value": "0.7s per use"
                    },
                    {
                        "label": "Flame Tornado Range",
                        "value": "3m spherical radius; 8m high capsule-shaped spell field."
                    },
                    {
                        "label": "Flame Tornado Continuous Damage",
                        "value": "110/s"
                    },
                    {
                        "label": "Supernova Damage Reduction",
                        "value": "-30%"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250220/49ec9ee0-bff0-41c5-944f-ff679966e4d4.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Storm Siblings",
                "description": "The Invisible Woman taps into her powers, channeling Psionic Might to fortify the entire Fantastic Four team, granting damage resistance. Once activated, they can continually generate Bonus Health, making up for lost Health",
                "key": "C",
                "icon": "static/heroes/abilities/human-torch-7-storm-siblings.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "C"
                    },
                    {
                        "label": "Duration",
                        "value": "5s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "25s"
                    },
                    {
                        "label": "Bonus Health Growth",
                        "value": "Generate 5 Bonus Health per 0.1s"
                    },
                    {
                        "label": "Bonus Max Health",
                        "value": "100"
                    },
                    {
                        "label": "Team-Up Target",
                        "value": "Invisible Woman"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250220/d6c32fd9-64ab-4b65-9092-0f7c95ebe95a.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Pyrokinetic Energy",
                "description": "Human Torch stores Pyrokinetic Energy in Spider-Man's suit, enabling him to unleash an Inferno Blast that sprays a fiery web while performing a backflip to create distance. The flames damage enemies and apply a Burn-Tracer. Detonating these Burn-Tracers inflicts Damage Over Time",
                "key": "Passive",
                "icon": "static/heroes/abilities/human-torch-8-pyrokinetic-energy.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "5% Damage Boost"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250712/b61ccad0-a950-4723-ae31-1f4e52f0d330.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Two In One",
                "description": "Human Torch can lift The Thing into the air and slam him down, dealing damage, launching enemies, and creating a zone that disables mobility abilities",
                "key": "X",
                "icon": "static/heroes/abilities/human-torch-9-two-in-one.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "X"
                    },
                    {
                        "label": "Cooldown",
                        "value": "Successfully interacted: 30s; fail to interact: 3s"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "20m"
                    },
                    {
                        "label": "Flight Speed",
                        "value": "15m/s"
                    },
                    {
                        "label": "Slam Down Initial Horizontal Velocity",
                        "value": "15m/s"
                    },
                    {
                        "label": "Maximum Flight Duration",
                        "value": "8s"
                    },
                    {
                        "label": "Damage",
                        "value": "Launch-up spell field causes 30 damage; mobility abilities disabling spell field causes 15 damage per second"
                    },
                    {
                        "label": "Launch Up Range",
                        "value": "A cylindrical spell field with a radius of 8m and a height of 1m"
                    },
                    {
                        "label": "Mobility Abilities Disabling Range",
                        "value": "A cylindrical spell field with a radius of 8m and a height of 8m"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250730/99129fb5-1ec9-4589-99b4-9df1d892ab9b.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "250"
            },
            {
                "label": "Movement Speed",
                "value": "6m/s"
            },
            {
                "label": "Movement Mode",
                "value": "Flight"
            }
        ],
        "forms": [
            "Human Torch"
        ]
    },
    "invisible-woman": {
        "nickname": "INVISIBLE WOMAN",
        "realName": "SUSAN STORM",
        "roles": [
            "STRATEGIST"
        ],
        "intro": "The Invisible Woman is able to slip in and out of sight without a trace. No matter how intense the battle may be, Susan Richards always keeps her cool, conjuring up impenetrable force fields to protect herself and her team.",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Orb Projection",
                "description": "Launch a force field orbs that can pierce heroes, flying to maximum distance before returning to Invisible Woman; damaging enemies and healing teammates",
                "key": "Left Click",
                "icon": "static/heroes/abilities/invisible-woman-1-orb-projection.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast projectile with delayed impact."
                    },
                    {
                        "label": "Special Effect",
                        "value": "Orbs can pierce heroes and return to Invisible Woman after reaching their maximum distance. They damage enemies and heal teammates"
                    },
                    {
                        "label": "Damage",
                        "value": "Deal 30 damage per hit upon being shot out and 15 damage per hit on its return journey."
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "No falloff"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "Heal 45 health per hit upon being shot out and 35 health per hit on its return journey."
                    },
                    {
                        "label": "Fire Rate",
                        "value": "0.5s per hit"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "150 m/s"
                    },
                    {
                        "label": "Maximum Flight Distance",
                        "value": "35m"
                    },
                    {
                        "label": "Ammo",
                        "value": "10"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "No"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20250110/79e037c4-353c-46a1-abb1-1188ff3f98e3.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Guardian Shield",
                "description": "Generate a force shield in front of a selected ally or in front of you. The shield can block damage and provide Healing Over Time to nearby allies. Enemies that pass through the shield are slowed",
                "key": "Right Click",
                "icon": "static/heroes/abilities/invisible-woman-2-guardian-shield.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Targeted"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "50/sec, self 15/sec"
                    },
                    {
                        "label": "Range",
                        "value": "3m radius"
                    },
                    {
                        "label": "Slow Rate",
                        "value": "35%"
                    },
                    {
                        "label": "Slow Duration",
                        "value": "3s"
                    },
                    {
                        "label": "Maximum Shield Value",
                        "value": "200"
                    },
                    {
                        "label": "Special Effect 1",
                        "value": "Before the shield is destroyed, Invisible Woman can choose to reproject the shield onto a selected teammate at any time"
                    },
                    {
                        "label": "Special Effect 2",
                        "value": "After the shield has been damaged, Invisible Woman can press the F key to reclaim the shield and restore its value"
                    },
                    {
                        "label": "Special Effect 3",
                        "value": "If no Guardian Shield is present, pressing the recall key now deploys a shield in front of Invisible Woman"
                    },
                    {
                        "label": "Recovery Shield Value Per Second",
                        "value": "34"
                    },
                    {
                        "label": "Cooldown After Destroyed",
                        "value": "6s"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250108/af32c3d3-713a-4faf-90f7-1be2dcfa8cbd.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Psionic Vortex",
                "description": "Gather psionic energy and then cast it, upon impact or pressing the Ability key again, it erupts into a psionic vortex, continuously drawing in enemies and causing damage",
                "key": "Shift",
                "icon": "static/heroes/abilities/invisible-woman-3-psionic-vortex.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Shift"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast projectile with delayed impact that also generates a spell field"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "80 m/s"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "5m radius"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "35/sec"
                    },
                    {
                        "label": "Spell Field Duration",
                        "value": "4s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Applies a slow effect to enemies within the spell field; the closer they are to the center of the field, the greater the slow effect"
                    },
                    {
                        "label": "Slow Rate",
                        "value": "Center 50%, Edge 0"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250108/308c5ab3-2b3f-4f53-9eb6-05c171ad4863.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Force Physics",
                "description": "Manipulate psionic energy to push or pull enemies in front of her",
                "key": "E",
                "icon": "static/heroes/abilities/invisible-woman-4-force-physics.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Cylindrical Spell Field"
                    },
                    {
                        "label": "Range",
                        "value": "1.5m radius, 35m length"
                    },
                    {
                        "label": "Damage",
                        "value": "50"
                    },
                    {
                        "label": "Push Range",
                        "value": "10m"
                    },
                    {
                        "label": "Pull-Range",
                        "value": "7m"
                    },
                    {
                        "label": "Cooldown",
                        "value": "10s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250108/0d7893e9-e90e-483f-8b90-414535d6f133.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Invisible Boundary",
                "description": "Manifest an unseen force field within a chosen area, rendering allies inside undetectable by enemies and provide Healing Over Time. Enemies that pass through the field are slowed",
                "key": "Q",
                "icon": "static/heroes/abilities/invisible-woman-5-invisible-boundary.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Targeted, generates a cylindrical spell field"
                    },
                    {
                        "label": "Pass-Through Slow Rate",
                        "value": "55%"
                    },
                    {
                        "label": "Slow Duration",
                        "value": "1s"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "180/sec"
                    },
                    {
                        "label": "Range",
                        "value": "10m radius, 40m height"
                    },
                    {
                        "label": "Duration",
                        "value": "8s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Slows enemies within range by 20%"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "4500"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250108/c10fa2f1-64e5-417a-abbe-0092e98b0afb.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Covert Advance",
                "description": "Enter Invisible state some time after disengaging from combat and grant yourself Healing Over Time",
                "key": "Passive",
                "icon": "static/heroes/abilities/invisible-woman-6-covert-advance.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "30/sec"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20250108/d273333c-e1da-4d98-925d-b7ce8601144c.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Veiled Step",
                "description": "Generate a force field at your feet, stepping on it propels her into the Invisible state",
                "key": "Space",
                "icon": "static/heroes/abilities/invisible-woman-7-veiled-step.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Space"
                    },
                    {
                        "label": "Cooldown",
                        "value": "6s"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250108/eb7b6f46-9d82-4df8-a513-8d94c07546e9.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Fantasti-Force",
                "description": "The Invisible Woman taps into her powers, channeling Psionic Might to fortify Mr.Fantastic. This formidable force bolsters Mr.Fantastic, granting damage resistance. Once activated, they can continually generate Bonus Health, making up for lost Health",
                "key": "Passive",
                "icon": "static/heroes/abilities/invisible-woman-8-fantasti-force.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "15% Healing Boost"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250109/053365f9-0714-4d9c-a51f-2fd1c173a7f3.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "275"
            },
            {
                "label": "Movement Speed",
                "value": "6 m/s"
            }
        ],
        "forms": [
            "INVISIBLE WOMAN"
        ]
    },
    "iron-fist": {
        "nickname": "IRON FIST",
        "realName": "LIN LIE",
        "roles": [
            "DUELIST"
        ],
        "intro": "Lin Lie is a master of Chinese martial arts who once wielded the shattered Sword of Fu Xi. After fusing its pieces with the mighty Chi of Shou-Lao, he is poised to strike his foes with the grace and force of a soaring dragon as the latest immortal Iron Fist",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Jeet Kune Do",
                "description": "Strike the targeted enemy with Jeet Kune Do, reducing the cooldown of Block and Strike with every hit",
                "key": "Left Click",
                "icon": "static/heroes/abilities/iron-fist-1-jeet-kune-do.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Melee"
                    },
                    {
                        "label": "Damage",
                        "value": "The first four strikes each deal 35 damage, while the fifth strike deals 55 damage"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "3m"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "The first four strikes have an interval of 0.45s between them, while the fifth strike has a 0.67s interval from the fourth strike"
                    },
                    {
                        "label": "Maximum Pull-In Distance",
                        "value": "6m"
                    },
                    {
                        "label": "Dragon's Defense Cooldown Reduction Per Hit",
                        "value": "1.2s"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/08e65caa-9aa0-425c-aeba-fa1544c03be2.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Yat Jee Chung Kuen",
                "description": "Dash forward to pursue the targeted enemy and unleash a flurry of attacks",
                "key": "Left Click",
                "icon": "static/heroes/abilities/iron-fist-2-yat-jee-chung-kuen.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Melee"
                    },
                    {
                        "label": "Duration",
                        "value": "5s"
                    },
                    {
                        "label": "Maximum Pull-In Distance",
                        "value": "11m"
                    },
                    {
                        "label": "Dashing Speed Without Target",
                        "value": "12 m/s"
                    },
                    {
                        "label": "Dashing Distance Without Target",
                        "value": "3m"
                    },
                    {
                        "label": "Range",
                        "value": "3m"
                    },
                    {
                        "label": "Damage",
                        "value": "8 base damage + 3.1% of the enemy's Max Health per strike"
                    },
                    {
                        "label": "Attack Speed",
                        "value": "7 strikes per second"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/fd8bfe86-ffd7-4752-9da3-d005bafa8668.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Living Chi",
                "description": "Become living Chi to boost his speed, damage, and attack range, delivering stronger punches while reducing the cooldown of Dragon's Defense",
                "key": "Q",
                "icon": "static/heroes/abilities/iron-fist-3-living-chi.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Duration",
                        "value": "12s"
                    },
                    {
                        "label": "Yat Jee Chung Kuen Bonus Range",
                        "value": "100%"
                    },
                    {
                        "label": "K'un-Lun Kick Bonus Range",
                        "value": "100%"
                    },
                    {
                        "label": "Damage Boost",
                        "value": "30%"
                    },
                    {
                        "label": "Movement Boost",
                        "value": "20%"
                    },
                    {
                        "label": "Yat Jee Chung Kuen Cooldown Reduction",
                        "value": "-80%"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "3400"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/080f088b-94dd-45ac-9bc7-9e5c512d51d0.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "K'un-Lun Kick",
                "description": "Dash forward, delivering a flying kick when hitting an enemy or reaching full range, dealing damage to nearby enemies. Damage increases with lower enemy health",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/iron-fist-4-k-un-lun-kick.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Casting",
                        "value": "Movement-based damage ability"
                    },
                    {
                        "label": "Dashing Speed",
                        "value": "40 m/s"
                    },
                    {
                        "label": "Maximum Dash Distance",
                        "value": "12m"
                    },
                    {
                        "label": "First Flying Kick Damage",
                        "value": "40"
                    },
                    {
                        "label": "Second Flying Kick Damage",
                        "value": "35 - 70 (Maximum damage is achieved when the target is at 50% Health)"
                    },
                    {
                        "label": "Cooldown",
                        "value": "10s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/e5377516-d352-4169-bb87-7bd68523dda7.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Harmony Recovery",
                "description": "Cross legs and channel Chi, slowly gaining Bonus Health",
                "key": "E",
                "icon": "static/heroes/abilities/iron-fist-5-harmony-recovery.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Duration",
                        "value": "3s"
                    },
                    {
                        "label": "Healing Per Second",
                        "value": "100"
                    },
                    {
                        "label": "Excess Healing/Max Health Conversion",
                        "value": "100"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/14e2c16b-cf9f-4e49-bef0-690bcc3d910c.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Crane Leap",
                "description": "Perform up to three consecutive jumps while airborne",
                "key": "Space",
                "icon": "static/heroes/abilities/iron-fist-6-crane-leap.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Space"
                    },
                    {
                        "label": "Cooldown",
                        "value": "3 charges, with each charge taking 1s to recharge"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/62f2f94b-228c-4015-9d56-b9134c171cf5.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Dragon's Defense",
                "description": "Assume a defensive stance with a boost of Chi to block incoming attacks and gain Damage Reduction, then strike back with Yat Jee Chung Kuen",
                "key": "Right Click",
                "icon": "static/heroes/abilities/iron-fist-7-dragon-s-defense.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Block Time",
                        "value": "1.2s"
                    },
                    {
                        "label": "Damage Reduction",
                        "value": "30%"
                    },
                    {
                        "label": "Bonus Health/Damage Blocked Conversion",
                        "value": "1.3"
                    },
                    {
                        "label": "Max Health/Damage Blocked Conversion",
                        "value": "175"
                    },
                    {
                        "label": "Cooldown",
                        "value": "15s"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/5745baab-4f3f-47f0-9eb0-8b8ea67f81f2.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Wall Runner",
                "description": "Run horizontally along the walls",
                "key": "Space",
                "icon": "static/heroes/abilities/iron-fist-8-wall-runner.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Space"
                    },
                    {
                        "label": "Wall-Crawling Speed",
                        "value": "9 m/s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/53125bd3-2ca7-4b39-a51c-bac18c6ecfdd.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Chi Absorption",
                "description": "Assists in taking down enemies allow him to absorb their Chi and gain Bonus Health",
                "key": "Passive",
                "icon": "static/heroes/abilities/iron-fist-9-chi-absorption.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Bonus Health",
                        "value": "50"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/2946ce20-8956-4efb-9729-afbdaa5efc51.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Lunar Chi",
                "description": "Luna Snow grants Winter's Chill to Hawkeye and Iron Fist. When Iron Fist activates Harmony Recovery, he can heal nearby allies with Lunar Chi",
                "key": "E",
                "icon": "static/heroes/abilities/iron-fist-10-lunar-chi.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Cylindrical Spell Field"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Excess healing converts to Bonus Health."
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    },
                    {
                        "label": "Healing Range",
                        "value": "A cylindrical spell field with a 10m radius and a height of 10m."
                    },
                    {
                        "label": "Healing Amount",
                        "value": "55/s"
                    },
                    {
                        "label": "Duration",
                        "value": "3s"
                    },
                    {
                        "label": "Bonus Health Falloff Delay",
                        "value": "2s"
                    },
                    {
                        "label": "Bonus Health Falloff Speed",
                        "value": "15/s"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250808/63e8c36e-c83a-439d-9359-5f343c7d65fa.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "300"
            },
            {
                "label": "Movement Speed",
                "value": "6 m/s"
            }
        ],
        "forms": [
            "IRON FIST"
        ]
    },
    "iron-man": {
        "nickname": "IRON MAN",
        "realName": "ANTHONY \"TONY\" STARK",
        "roles": [
            "DUELIST"
        ],
        "intro": "Armed with superior intellect and a nanotech battlesuit of his own design, Tony Stark stands alongside gods as the Invincible Iron Man. His state of the art armor turns any battlefield into his personal playground, allowing him to steal the spotlight he so desperately desires.",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Repulsor Blast",
                "description": "Fire nano pulse cannons forward",
                "key": "Left Click",
                "icon": "static/heroes/abilities/iron-man-1-repulsor-blast.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Straight-line projectile that generates a spell field upon impact"
                    },
                    {
                        "label": "Ammo",
                        "value": "100"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "No"
                    },
                    {
                        "label": "Special Mechanic 1",
                        "value": "After firing the one-handed repulsor twice in a row, the next attack will fire two repulsors at once"
                    },
                    {
                        "label": "Special Mechanic 2",
                        "value": "Repulsor Blast and Unibeam share the same ammo count"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "60 m/s"
                    },
                    {
                        "label": "Damage",
                        "value": "35"
                    },
                    {
                        "label": "Range",
                        "value": "3m spherical radius"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "50"
                    },
                    {
                        "label": "Spell Field Damage Falloff",
                        "value": "40% falloff at 3m"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "1.67 rounds per second"
                    },
                    {
                        "label": "Ammo Consumption",
                        "value": "10 damage per round"
                    },
                    {
                        "label": "Two-handed Repulsors",
                        "value": ""
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "80 m/s"
                    },
                    {
                        "label": "Damage",
                        "value": "50"
                    },
                    {
                        "label": "Range",
                        "value": "5m spherical radius"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "65"
                    },
                    {
                        "label": "Spell Field Damage Falloff",
                        "value": "40% falloff at 5m"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "1.39 rounds per second"
                    },
                    {
                        "label": "Ammo Consumption",
                        "value": "16 damage per round"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/d69cf17a-732e-486d-87e3-43c5892e42c3.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Repulsor Blast (Armor Overdrive)",
                "description": "Fire nano pulse cannons forward",
                "key": "Left Click",
                "icon": "static/heroes/abilities/iron-man-2-repulsor-blast-armor-overdrive.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Straight-line projectile that generates a spell field upon impact"
                    },
                    {
                        "label": "Ammo",
                        "value": "Infinite"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "No"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "80m/s"
                    },
                    {
                        "label": "Damage",
                        "value": "45"
                    },
                    {
                        "label": "Range",
                        "value": "5m spherical radius"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "65"
                    },
                    {
                        "label": "Spell Field Damage Falloff",
                        "value": "40% falloff at 5m"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "1.33 rounds per second"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/d69cf17a-732e-486d-87e3-43c5892e42c3.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Unibeam",
                "description": "Fire nano pulse cannons forward",
                "key": "Right Click",
                "icon": "static/heroes/abilities/iron-man-3-unibeam.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Channeled"
                    },
                    {
                        "label": "Ammo",
                        "value": "100"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "No"
                    },
                    {
                        "label": "Special Mechanic",
                        "value": "Repulsor Blast and Unibeam share the same ammo count"
                    },
                    {
                        "label": "Beam Length",
                        "value": "25m"
                    },
                    {
                        "label": "Damage",
                        "value": "140 damage per second"
                    },
                    {
                        "label": "Ammo Consumption",
                        "value": "10/s"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/5a005241-4e91-4240-9da0-671454971524.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Unibeam (Armor Overdrive)",
                "description": "Fire nano pulse cannons forward",
                "key": "Right Click",
                "icon": "static/heroes/abilities/iron-man-4-unibeam-armor-overdrive.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Channeled"
                    },
                    {
                        "label": "Ammo",
                        "value": "Infinite"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "No"
                    },
                    {
                        "label": "Beam Length",
                        "value": "25m"
                    },
                    {
                        "label": "Damage",
                        "value": "190/s"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/5a005241-4e91-4240-9da0-671454971524.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Invincible Pulse Cannon",
                "description": "Fire a devastating pulse cannon in the targeted direction, delivering catastrophic damage to the targeted area upon impact",
                "key": "Q",
                "icon": "static/heroes/abilities/iron-man-5-invincible-pulse-cannon.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Straight-line projectile that generates a spell field upon impact"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "3400"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "25 m/s"
                    },
                    {
                        "label": "Dispersive Spell Field",
                        "value": "Length: 15m, Width: 5m, Height: 5m"
                    },
                    {
                        "label": "Damage Over Time",
                        "value": "300/s"
                    },
                    {
                        "label": "Explosion Range",
                        "value": "10m spherical radius"
                    },
                    {
                        "label": "Explosion Damage",
                        "value": "1000"
                    },
                    {
                        "label": "Spell Field Damage Falloff",
                        "value": "5% falloff at 10m"
                    },
                    {
                        "label": "Special Mechanic",
                        "value": "As the projectile travels, it creates a dispersive spell field that deals Damage Over Time to nearby enemies"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/35909ad4-f7f5-4d30-8d58-b076bebca067.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Hyper-Velocity",
                "description": "Activate Hyper-Velocity state for swift forward flight",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/iron-man-6-hyper-velocity.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Movement Boost",
                        "value": "100%"
                    },
                    {
                        "label": "Maximum Energy",
                        "value": "120"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "15/s"
                    },
                    {
                        "label": "Energy Recovery Speed",
                        "value": "10/s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/ea996cd4-74a0-40d7-9498-3253084b9be2.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Hyper-Velocity (Armor Overdrive)",
                "description": "Activate Hyper-Velocity state for swift forward flight",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/iron-man-7-hyper-velocity-armor-overdrive.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Movement Boost",
                        "value": "100%"
                    },
                    {
                        "label": "Maximum Energy",
                        "value": "Infinite"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/ea996cd4-74a0-40d7-9498-3253084b9be2.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Armor Overdrive",
                "description": "Activate Armor Overdrive state, enhancing the damage of Repulsor Blast and Unibeam",
                "key": "E",
                "icon": "static/heroes/abilities/iron-man-8-armor-overdrive.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Duration",
                        "value": "10s"
                    },
                    {
                        "label": "Bonus Health",
                        "value": "100"
                    },
                    {
                        "label": "Cooldown",
                        "value": "20s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Each KO while Armor Overdrive is active extends its duration by 2s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/27f07e85-4220-4227-892b-04c9850a7c02.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Micro-Missile Barrage",
                "description": "When Hyper-Velocity or Armor Overdrive is used, Iron Man can launch a missile bombardment",
                "key": "F",
                "icon": "static/heroes/abilities/iron-man-9-micro-missile-barrage.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Casting",
                        "value": "Scatter-type projectile that generates a spell area upon impact"
                    },
                    {
                        "label": "Missiles",
                        "value": "16"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "15 m/s"
                    },
                    {
                        "label": "Range",
                        "value": "2m spherical radius"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "20 damage per round"
                    },
                    {
                        "label": "Cooldown",
                        "value": "8s"
                    },
                    {
                        "label": "Special Mechanic",
                        "value": "Launch missiles directly beneath Iron Man"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/19e4e5da-fa8d-4cf8-a817-1111d91dc389.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Micro-Missile Barrage (Armor Overdrive)",
                "description": "When Hyper-Velocity or Armor Overdrive is used, Iron Man can launch a missile bombardment",
                "key": "F",
                "icon": "static/heroes/abilities/iron-man-10-micro-missile-barrage-armor-overdrive.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Casting",
                        "value": "Scatter-type projectile that generates a spell area upon impact"
                    },
                    {
                        "label": "Missiles",
                        "value": "18"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "60 m/s"
                    },
                    {
                        "label": "Range",
                        "value": "2m spherical radius"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "15 damage per round"
                    },
                    {
                        "label": "Cooldown",
                        "value": "6s"
                    },
                    {
                        "label": "Special Mechanic",
                        "value": "Launch in the direction of Iron Man's crosshair"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/19e4e5da-fa8d-4cf8-a817-1111d91dc389.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "NANO TECH",
                "description": "When Iron Man, Ultron and Squirrel Girl team up, Ultron's Encephalo-Ray upgrades to Nano-Ray, firing a beam that pierces through all characters, dealing continuous damage to foes while healing allies; Squirrel Girl gains the Squirrel Missile ability. She directs a squirrel to ride Iron Man's nanotech glove as a homing missile. Upon hit, the squirrel flees just before a fiery explosion!",
                "key": "Passive",
                "icon": "static/heroes/abilities/iron-man-11-nano-tech.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "5% Damage Boost"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250531/2d4ab1bf-a8da-4216-9c4c-5e755596e86d.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "250"
            },
            {
                "label": "Movement Speed",
                "value": "6 m/s"
            },
            {
                "label": "Movement Mode",
                "value": "Flight"
            }
        ],
        "forms": [
            "IRON MAN"
        ]
    },
    "jeff-the-land-shark": {
        "nickname": "JEFF THE LAND SHARK",
        "realName": "JEFF",
        "roles": [
            "STRATEGIST"
        ],
        "intro": "Most landsharks are vicious creatures of the deep... but not Jeff! This adorable and mischievous little landshark brings splashes of joy and healing to every battle. But if the tide turns, Jeff can morph into a voracious beast, swallowing an army of foes in one giant gulp!",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Joyful Splash",
                "description": "Unleash a healing splash",
                "key": "Left Click",
                "icon": "static/heroes/abilities/jeff-the-land-shark-1-joyful-splash.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Rapid-fire, delayed projectile"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "100m/s"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "130/s"
                    },
                    {
                        "label": "Damage",
                        "value": "70/s"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Damage falloff starts at 15m to a maximum of 65% at 30m"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "20 rounds per second"
                    },
                    {
                        "label": "Ammo",
                        "value": "100"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/404c171f-9a95-4341-8313-b2f6d16fd6f1.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Aqua Burst",
                "description": "Launch a high-speed water sphere that bursts upon impact, dealing damage to enemies within range",
                "key": "Right Click",
                "icon": "static/heroes/abilities/jeff-the-land-shark-2-aqua-burst.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast projectile with delayed impact that also generates a spell field"
                    },
                    {
                        "label": "Damage",
                        "value": "Projectile Damage: 25 damage per round, Spell Field Damage: 45 damage per cast"
                    },
                    {
                        "label": "Range",
                        "value": "3m spherical radius"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 1m, decreasing to 50% at 3m (projectile damage has no falloff)"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "100m/s"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "1.75 rounds per second"
                    },
                    {
                        "label": "Cooldown",
                        "value": "3 charges, with each charge taking 3s to recharge"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Direct hits can launch enemies up"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "No"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/247fc32e-57f7-4bc3-a52a-ed9e9a46e49e.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "It's Jeff!",
                "description": "Deep dive into the scene and resurface to swallow both enemies and allies within range, activating Hide and Seek for a brief duration before ejecting the swallowed heroes forward",
                "key": "Q",
                "icon": "static/heroes/abilities/jeff-the-land-shark-3-it-s-jeff.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Targeted"
                    },
                    {
                        "label": "Special Effect1",
                        "value": "After swallowing allies and enemies, Jeff will deal damage to enemies and heal allies for the duration of the effect, during which they will also benefit from Hide and Seek"
                    },
                    {
                        "label": "Special Effect2",
                        "value": "It's Jeff! (Ultimate Ability) leaves an 8m radius Healing Pool at the point of activation that heals allies within range by 100/s. Healing Pool lasts for 8s"
                    },
                    {
                        "label": "Range",
                        "value": "10m radius,5m high cylindrical spell field"
                    },
                    {
                        "label": "Damage",
                        "value": "25/s"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "225/s"
                    },
                    {
                        "label": "Bonus Health (Ally)",
                        "value": "Overflow healing on swallowed allies grants 45 Health per second as Bonus Health, up to 150"
                    },
                    {
                        "label": "Duration",
                        "value": "6s"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "4500"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/25d707ba-9f22-4b05-bb8e-d2eb22a8f1f5.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Hide and Seek",
                "description": "Dive into the scene with only his dorsal fin exposed, granting himself a Movement Boost. Jeff can heal while submerged and gains the wall-crawl ability",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/jeff-the-land-shark-4-hide-and-seek.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Casting",
                        "value": "Instant Cast"
                    },
                    {
                        "label": "Special Effect",
                        "value": "During the dive, gain Unstoppable, healing over time, and a Movement Boost, while Jeff's hitbox is reduced"
                    },
                    {
                        "label": "Movement Boost",
                        "value": "60%"
                    },
                    {
                        "label": "Maximum Energy",
                        "value": "120"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "20/s"
                    },
                    {
                        "label": "Energy Recovery Speed",
                        "value": "15/s"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "35/s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/ef573d4e-d703-4015-982f-e171765bc65f.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Healing Bubble",
                "description": "Spit a bubble that heals the ally who collects it, granting them Healing Boost and Movement Boost while also launching up nearby enemies",
                "key": "E",
                "icon": "static/heroes/abilities/jeff-the-land-shark-5-healing-bubble.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Summons"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Touching the bubble will immediately activate its effect"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "30/s"
                    },
                    {
                        "label": "Healing Boost",
                        "value": "15%"
                    },
                    {
                        "label": "Movement Boost",
                        "value": "60%"
                    },
                    {
                        "label": "Buff Duration",
                        "value": "4s"
                    },
                    {
                        "label": "Duration",
                        "value": "180s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "3 charges, with each charge taking 6s to recharge"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/4d341032-2db5-4cb1-84eb-2ecaa167bd2f.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Oblivious Cuteness",
                "description": "Reduce damage taken from critical hits",
                "key": "Passive",
                "icon": "static/heroes/abilities/jeff-the-land-shark-6-oblivious-cuteness.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Critical Hit Damage Reduction",
                        "value": "50%"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/d976ea1f-f15a-4b12-8a47-edbb88304548.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "IT'S JEFF-NADO!",
                "description": "When Storm activates Omega Hurricane and Jeff the Land Shark's It's Jeff is ready, they can unleash a powerful Team-Up Ability. During this period, Storm's Omega Hurricane merges with Jeff to form a Jeff-nado",
                "key": "Z",
                "icon": "static/heroes/abilities/jeff-the-land-shark-7-it-s-jeff-nado.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Z"
                    },
                    {
                        "label": "Select Range",
                        "value": "60m radius, 90° fan-shaped area in front of Jeff"
                    },
                    {
                        "label": "Swallow Time Required",
                        "value": "1.5s"
                    },
                    {
                        "label": "Warning before Swallow",
                        "value": "0.1"
                    },
                    {
                        "label": "Swallow Range",
                        "value": "10m spherical radius spell field centered around Storm"
                    },
                    {
                        "label": "Swallow Damage",
                        "value": "80"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "2 hits per second"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250531/50deaa25-2f90-439c-a1fb-15c9597ff6ab.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "GUARDIAN OF THE DEEP",
                "description": "Venom shares his symbiotes with Jeff and Hela. Jeff's Guardian of the Deep links with nearby allies, providing continuous healing. When the effect ends, it releases a powerful healing burst, converting any excess into Bonus Health.",
                "key": "X",
                "icon": "static/heroes/abilities/jeff-the-land-shark-8-guardian-of-the-deep.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "X"
                    },
                    {
                        "label": "Cooldown",
                        "value": "20s"
                    },
                    {
                        "label": "Range",
                        "value": "10m spherical radius spell field"
                    },
                    {
                        "label": "Continuous Healing Duration",
                        "value": "5s"
                    },
                    {
                        "label": "Continuous Healing Efficiency",
                        "value": "60/s"
                    },
                    {
                        "label": "One-time Healing Amount",
                        "value": "70"
                    },
                    {
                        "label": "Bonus Health",
                        "value": "50"
                    },
                    {
                        "label": "Bonus Health Falloff",
                        "value": "Falloff begins at 3s and decreases by 30/s"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250531/e2e11f8b-69d4-4412-adec-b3ad76c55446.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "New Friends",
                "description": "Jeff the Land Shark and Rocket Raccoon can ride on Groot's shoulders, receiving Damage Reduction",
                "key": "None",
                "icon": "static/heroes/abilities/jeff-the-land-shark-9-new-friends.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "None"
                    },
                    {
                        "label": "Casting",
                        "value": "Targeted"
                    },
                    {
                        "label": "Range",
                        "value": "Up to 12m"
                    },
                    {
                        "label": "Damage Reduction",
                        "value": "35%"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241123/87222dcb-ebbb-4edc-a8f0-f7123ee5f61b.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Jeff's Cuddle Buddy",
                "description": "Jeff the Land Shark and Rocket Raccoon can ride on Groot's shoulders, receiving Damage Reduction",
                "key": "C",
                "icon": "static/heroes/abilities/jeff-the-land-shark-10-jeff-s-cuddle-buddy.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "C"
                    },
                    {
                        "label": "Cooldown",
                        "value": "35"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "A cylindrical spell field with a 6m radius and a height of 6m."
                    },
                    {
                        "label": "Healing",
                        "value": "50/s"
                    },
                    {
                        "label": "Duration",
                        "value": "5s"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260117/8d44e8d8-40a4-4d9f-9647-8450a01bb368.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "250"
            },
            {
                "label": "Movement Speed",
                "value": "6m/s"
            }
        ],
        "forms": [
            "JEFF THE LAND SHARK"
        ]
    },
    "loki": {
        "nickname": "LOKI",
        "realName": "LOKI LAUFEYSON",
        "roles": [
            "STRATEGIST"
        ],
        "intro": "What greater thrill is there for a God of Mischief than to outsmart his foes? The cunning trickster Loki uses his illusions and shapeshifting abilities to weave in and out of combat, toying with enemies at every turn.",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Mystical Missile",
                "description": "Fire Mystical Missiles to heal allies or deal damage to enemies. Direct hits on allies provide extra healing",
                "key": "Left Click",
                "icon": "static/heroes/abilities/loki-1-mystical-missile.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast projectile with delayed impact that also generates a spell field"
                    },
                    {
                        "label": "Damage",
                        "value": "The projectile deals no damage, while the spell field inflicts 25 damage per cast"
                    },
                    {
                        "label": "Range",
                        "value": "3m spherical radius"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 0.5m, decreasing to 80% at 2.5m"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "100 m/s"
                    },
                    {
                        "label": "Area Of Effect Healing",
                        "value": "40 per hit"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "1.75 rounds per second"
                    },
                    {
                        "label": "Ammo",
                        "value": "10"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "No"
                    },
                    {
                        "label": "Healing Per Hit",
                        "value": "10 per hit"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/ed396f47-c71d-47d9-b81b-3345b8dc9622.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "God of Mischief",
                "description": "Shapeshift into a targeted ally or enemy hero and use all their abilities except any of their Team-Up Abilities",
                "key": "Q",
                "icon": "static/heroes/abilities/loki-2-god-of-mischief.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Targeted"
                    },
                    {
                        "label": "Special Effect",
                        "value": "After transforming, Loki's Ultimate ability will be fully charged. Casting a transformation-type Ultimate ability will extend the duration of God of Mischief until the transformation ability ends"
                    },
                    {
                        "label": "Duration",
                        "value": "12s"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "4500"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/8348514b-e03f-442b-9aa2-ab90fcd2186a.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Regeneration Domain",
                "description": "Use Rune Stones to create a magical field that provides allies Healing and converts incoming damage into further healing",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/loki-3-regeneration-domain.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Casting",
                        "value": "Release a spell field at the location of Loki and the Illusion"
                    },
                    {
                        "label": "Special Effect",
                        "value": "The spell field is sustained by Rune Stones. It will disappear if the Rune Stone is destroyed or if its maximum duration is reached. Allies within the field will receive healing over time, and any damage taken will be converted into healing based on the amount of damage taken"
                    },
                    {
                        "label": "Range",
                        "value": "A cylindrical spell field with a radius of 5m and a height of 2m"
                    },
                    {
                        "label": "Duration",
                        "value": "5s"
                    },
                    {
                        "label": "Conversion Rate",
                        "value": "30%"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "100/s"
                    },
                    {
                        "label": "Rune Stone Health",
                        "value": "100"
                    },
                    {
                        "label": "Cooldown",
                        "value": "30s"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/e7dd8ace-749c-49a0-bc71-bb9c59a8ba2f.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Doppelganger",
                "description": "Project an Illusion that can cast some of Loki's abilities",
                "key": "E",
                "icon": "static/heroes/abilities/loki-4-doppelganger.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Targeted"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "30m"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Project an Illusion at a selected location"
                    },
                    {
                        "label": "Cooldown",
                        "value": "2 charges, with each charge taking 12s to recharge"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/ef9f3e86-7ad9-4ad4-8ca5-490d580e567b.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Devious Exchange",
                "description": "Swap with the selected Illusion",
                "key": "F",
                "icon": "static/heroes/abilities/loki-5-devious-exchange.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Casting",
                        "value": "Targeted"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "30m"
                    },
                    {
                        "label": "Cooldown",
                        "value": "15s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/ac0da903-c22d-4471-bff9-d7df0a2a6ba6.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Backstab",
                "description": "Pull out a dagger to stab enemies, dealing extra damage when attacking an enemy from behind",
                "key": "V",
                "icon": "static/heroes/abilities/loki-6-backstab.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "V"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast Spell Field"
                    },
                    {
                        "label": "Damage",
                        "value": "Damage: 30; Backstab Damage: +15 (total of 45)"
                    },
                    {
                        "label": "Range",
                        "value": "3m"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/fe10c19c-0649-4c4d-a406-4e7ea9ada27a.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Deception",
                "description": "Become Invisible and conjure an Illusion to deceive enemies",
                "key": "Right Click",
                "icon": "static/heroes/abilities/loki-7-deception.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Instant Cast"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Loki leaves an illusion in his place and becomes invisible while continuously healing himself. This invisibility has no time limit, but any actions other than casting Devious Exchange, reloading, or casting Doppelganger will render him visible"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "Health regenerates at a rate of 20 Health per second while invisible"
                    },
                    {
                        "label": "Cooldown",
                        "value": "15s"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/ed974a34-cbea-4529-b613-028bb481b125.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Deific Blessing",
                "description": "Mantis enhances Groot's wooden walls and Loki's Rune Stones with life energy. Groot can additionally unleash a Flower Wall, which, when in Flora Colossus state, restores health to random nearby allies and grants them Damage Reduction. Loki's Rune Stones grant allies within Regeneration Domain a Damage Boost",
                "key": "Shift",
                "icon": "static/heroes/abilities/loki-8-deific-blessing.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Shift"
                    },
                    {
                        "label": "Range",
                        "value": "A cylindrical spell field with a radius of 6.5m and a height of 2m."
                    },
                    {
                        "label": "Maximum Duration for Summons",
                        "value": "5s"
                    },
                    {
                        "label": "Conversion Rate",
                        "value": "30%"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "100/s"
                    },
                    {
                        "label": "Rune Stone Health",
                        "value": "100"
                    },
                    {
                        "label": "Cooldown",
                        "value": "30s"
                    },
                    {
                        "label": "Damage Boost",
                        "value": "15%"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250808/bc864d9a-7a8e-4700-84aa-324d7227de88.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "275"
            },
            {
                "label": "Movement Speed",
                "value": "6 m/s"
            },
            {
                "label": "Illusion Health",
                "value": "250"
            },
            {
                "label": "Illusion Duration",
                "value": "60"
            },
            {
                "label": "Maximum Illusion Quantity",
                "value": "2"
            },
            {
                "label": "Illusion Damage",
                "value": "80%"
            },
            {
                "label": "Illusion Healing",
                "value": "100%"
            }
        ],
        "forms": [
            "LOKI"
        ]
    },
    "luna-snow": {
        "nickname": "LUNA SNOW",
        "realName": "SEOL HEE",
        "roles": [
            "STRATEGIST"
        ],
        "intro": "Equal parts pop star and Super Hero, Luna Snow puts on a dazzling show with both her light and dark ice powers. The arena is her stage, where Seol Hee and her team orchestrate spectacular displays that earn her an ever-increasing number of fans and wins.",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Light & Dark Ice",
                "description": "Fire ice shots that damage enemies or heal allies",
                "key": "Left Click",
                "icon": "static/heroes/abilities/luna-snow-1-light-and-dark-ice.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "A triple shot that hits instantly"
                    },
                    {
                        "label": "Damage",
                        "value": "24 damage per round, for a total of 72 damage"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 20m, decreasing to 70% at 40m"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "24 health per round, for a total of 72 health"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "0.5s for three shots. The interval between the first two shots is 0.05s"
                    },
                    {
                        "label": "Ammo",
                        "value": "30"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "Yes"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/9b9358c8-4975-450c-8f88-5e18d637d0c4.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Fate of Both Worlds",
                "description": "Take center stage and start dancing! Press to toggle between two performances: Heal allies or grant them Damage Boost",
                "key": "Q",
                "icon": "static/heroes/abilities/luna-snow-2-fate-of-both-worlds.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Persistent spell field that surrounds the caster"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "250/s"
                    },
                    {
                        "label": "Damage Boost",
                        "value": "40%"
                    },
                    {
                        "label": "Cast to heal the ally once",
                        "value": "200"
                    },
                    {
                        "label": "Shield Value",
                        "value": "250"
                    },
                    {
                        "label": "Duration",
                        "value": "10s"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "5000"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/47cd68fc-feb1-45d8-b204-69e09294dc80.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Ice Arts",
                "description": "Fire ice shards for a short duration, damaging enemies or healing allies while restoring her own Health",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/luna-snow-3-ice-arts.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast spell field that pierces through enemies"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Replace the previous Light & Dark Ice cast"
                    },
                    {
                        "label": "Damage",
                        "value": "50 damage per round"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "75 health per round"
                    },
                    {
                        "label": "Range",
                        "value": "A cylindrical spell field with a radius of 1m and a height of 40m"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "1.43 rounds per second"
                    },
                    {
                        "label": "Duration",
                        "value": "6s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "15s"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/db8d7bd7-8433-4b9c-b79a-4893df673815.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Share the Stage",
                "description": "Attach Idol Aura to an ally. Allies with Idol Aura also restore Health when Luna Snow is healing others",
                "key": "E",
                "icon": "static/heroes/abilities/luna-snow-4-share-the-stage.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Targeted"
                    },
                    {
                        "label": "Healing Boost",
                        "value": "35%"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Provide healing to allies marked with Idol Aura; Reduce Ice Arts cooldown by 2s whenever a hero with Idol Aura takes part in a KO"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/c5d05de8-094f-4003-81bc-449b5e9b65d0.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Absolute Zero",
                "description": "Cast a clump of ice to Freeze the hit enemy and restore Health",
                "key": "Right Click",
                "icon": "static/heroes/abilities/luna-snow-5-absolute-zero.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast projectile with delayed impact"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "80m/s"
                    },
                    {
                        "label": "Damage",
                        "value": "50"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Freeze enemies for 2.7s. However, if they are attacked during the last 2.2s of the freeze, the effect will be canceled. Grants 50 Bonus Health per enemy hit"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/3bbafdb7-d05d-4040-ac35-ba3ef0e021ba.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Cryo Heart",
                "description": "Automatically restore Health when casting Ice Arts or Absolute Zero",
                "key": "Passive",
                "icon": "static/heroes/abilities/luna-snow-6-cryo-heart.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "30/s for 3 seconds"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/1e2f39fb-fb72-4b78-923d-09ba6b076e4f.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Smooth Skate",
                "description": "Keep moving forward to start ice skating and enable higher jumps",
                "key": "Passive",
                "icon": "static/heroes/abilities/luna-snow-7-smooth-skate.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Time Required to Start Skating",
                        "value": "0.5s"
                    },
                    {
                        "label": "Skating Speed",
                        "value": "9.6m/s"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/c672e9c6-8368-4a9b-88b5-d78fefe000ba.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Number One Idol",
                "description": "Boost Damage and Healing. Gain extra healing when healing others",
                "key": "F",
                "icon": "static/heroes/abilities/luna-snow-8-number-one-idol.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Healing Boost",
                        "value": "10%"
                    },
                    {
                        "label": "Damage Boost",
                        "value": "10%"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20251222/b4210d02-0f6e-4b2b-9550-dd23e58547fa.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "ICED OUT DIAMOND",
                "description": "Luna Snow grants Winter's Chill to Iron Fist and Emma Frost. When Iron Fist activates Harmony Recovery, he can heal nearby allies with Lunar Chi. Emma Frost can project ice energy forward, dealing damage and slowing enemies. She can also enhance her diamond form, condensing frost into an Absolute Zero Diamond barrier that blocks enemy attacks and movement",
                "key": "Passive",
                "icon": "static/heroes/abilities/luna-snow-9-iced-out-diamond.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "5% Healing Boost"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260107/0241d1da-8792-47ed-bff4-ba336a1d8f8c.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "SPIRIT FOX ACCORD",
                "description": "White Fox grants Luna Snow a spirit fox for protection. Luna can activate it for a burst of speed and fire it forward, healing allies in its path while applying Charm to enemies",
                "key": "C",
                "icon": "static/heroes/abilities/luna-snow-10-spirit-fox-accord.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "C"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "60 m/s"
                    },
                    {
                        "label": "Damage Area Radius",
                        "value": "3m"
                    },
                    {
                        "label": "Charm Area Radius",
                        "value": "0.8m"
                    },
                    {
                        "label": "Damage",
                        "value": "35"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "60"
                    },
                    {
                        "label": "Charm Duration",
                        "value": "0.4s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "20s"
                    },
                    {
                        "label": "Movement Boost (Self)",
                        "value": "30% for 4s"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260320/ebe9992a-a9bc-4840-9e3b-7b37ed9cdba3.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "275"
            },
            {
                "label": "Movement Speed",
                "value": "6m/s"
            }
        ],
        "forms": [
            "LUNA SNOW"
        ]
    },
    "magik": {
        "nickname": "MAGIK",
        "realName": "ILLYANA RASPUTIN",
        "roles": [
            "DUELIST"
        ],
        "intro": "Trained in the dark arts and wielding her mighty Soulsword, Magik leaps through portals to navigate the arena with ease. Once Illyana transforms into the demonic Darkchild, all who dare stand against her will fall before her merciless blade.",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Soulsword",
                "description": "Slash forward with the Soulsword",
                "key": "Left Click",
                "icon": "static/heroes/abilities/magik-1-soulsword.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Melee"
                    },
                    {
                        "label": "Damage",
                        "value": "75"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "6.5m"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 4.5m, decreasing to 50% at 6.5m"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "0.83s per hit"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/3c254667-aec0-4d1f-bac8-8f74e5c7ec57.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Darkchild",
                "description": "Transform into Darkchild, gaining enhancements to all her abilities",
                "key": "Q",
                "icon": "static/heroes/abilities/magik-2-darkchild.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Transformation"
                    },
                    {
                        "label": "Duration",
                        "value": "12s"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "3400"
                    },
                    {
                        "label": "Special Effect",
                        "value": "When in the Darkchild state, all of Magik's abilities are enhanced"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/54ceb957-f089-4149-9b6e-f19b0b434f76.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Stepping Discs",
                "description": "Jump through a Stepping Disc, teleporting a short distance in the direction of movement. Become Invincible while teleporting",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/magik-3-stepping-discs.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Casting",
                        "value": "Dash"
                    },
                    {
                        "label": "Average Speed",
                        "value": "12m/s"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "10m"
                    },
                    {
                        "label": "Combo Ability Casting Window",
                        "value": "3s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "6s"
                    },
                    {
                        "label": "Charges",
                        "value": "2"
                    },
                    {
                        "label": "Special Effect 1",
                        "value": "Magik is invincible while moving"
                    },
                    {
                        "label": "Special Effect 2",
                        "value": "Magik can perform a combo ability within a certain time frame, choosing between Eldritch Whirl or Demon's Rage"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/83bdc026-b6c1-4c72-8a4e-b82036d06a5b.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Umbral Incursion",
                "description": "Dash forward and launch up enemies",
                "key": "E",
                "icon": "static/heroes/abilities/magik-4-umbral-incursion.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Movement-based damage ability"
                    },
                    {
                        "label": "Average Speed",
                        "value": "46m/s"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "16m"
                    },
                    {
                        "label": "Upward Slash Damage",
                        "value": "85"
                    },
                    {
                        "label": "Cooldown",
                        "value": "8s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/23e2f98e-b25d-465f-8aca-92772da73677.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Eldritch Whirl",
                "description": "Spin while swinging the Soulsword after exiting a Stepping Disc",
                "key": "Left Click",
                "icon": "static/heroes/abilities/magik-5-eldritch-whirl.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "A cylindrical spell field in melee range"
                    },
                    {
                        "label": "Damage",
                        "value": "50"
                    },
                    {
                        "label": "Range",
                        "value": "A cylindrical spell field with a radius of 6m and a height of 5m"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/a360c242-9475-4d7b-ba43-efb57fdbc44a.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Magik Slash",
                "description": "Strike forward an air slash",
                "key": "Right Click",
                "icon": "static/heroes/abilities/magik-6-magik-slash.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Charged projectile that travels in a straight trajectory"
                    },
                    {
                        "label": "Maximum Charge Time",
                        "value": "2s"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "80m/s"
                    },
                    {
                        "label": "Damage",
                        "value": "45 - 81 (Maximum damage is achieved after 1.2s of charging)"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Projectile pierces enemies and reduces Stepping Discs cooldown by 1s per enemy pierced"
                    },
                    {
                        "label": "Cooldown",
                        "value": "6s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/ddcc3be2-0a9f-4588-bbeb-b6ecc289d8cf.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Demon's Rage",
                "description": "Summon a Limbo demon that attacks enemies after exiting a Stepping Disc",
                "key": "Right Click",
                "icon": "static/heroes/abilities/magik-7-demon-s-rage.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "A cuboid spell field in melee range"
                    },
                    {
                        "label": "Damage",
                        "value": "20 damage per hit"
                    },
                    {
                        "label": "Attack Speed",
                        "value": "0.25s per hit"
                    },
                    {
                        "label": "Range",
                        "value": "Length: 6.5m, Width: 3m, Height: 3m"
                    },
                    {
                        "label": "Maximum Duration for Summons",
                        "value": "4s"
                    },
                    {
                        "label": "Summons' Health",
                        "value": "100"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/a9c67524-0a71-4106-8a95-f26d78aa15e1.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Limbo's Might",
                "description": "Convert damage inflicted on enemies into Bonus Health to herself",
                "key": "Passive",
                "icon": "static/heroes/abilities/magik-8-limbo-s-might.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Conversion Rate",
                        "value": "30%"
                    },
                    {
                        "label": "Bonus Max Health",
                        "value": "150"
                    },
                    {
                        "label": "Energy Cost Special Effect",
                        "value": "Convert damage taken into Bonus Health"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/ca2c47d6-8349-4bae-b6bc-58436c47776b.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "CHAIN OF CYTTORAK",
                "description": "Doctor Strange shares his arcane mastery with Scarlet Witch and Magik. Scarlet Witch's Chthonian Burst is replaced with Mystic Burst upon activation. Hold down the attack button to unleash a rapid, relentless salvo of magical missiles in the target direction. Magik can unleash a Chain of Cyttorak that links two enemies and slows them; the farther they are apart, the greater the Slow effect inflicted during the link",
                "key": "C",
                "icon": "static/heroes/abilities/magik-9-chain-of-cyttorak.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "C"
                    },
                    {
                        "label": "Max Link Generation Distance",
                        "value": "15m"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "120m/s"
                    },
                    {
                        "label": "Projectile Hit Damage",
                        "value": "45"
                    },
                    {
                        "label": "Damage to the Link's Secondary Target",
                        "value": "30"
                    },
                    {
                        "label": "Link Maximum Duration",
                        "value": "4s"
                    },
                    {
                        "label": "Slow Rate",
                        "value": "Begins at 0%, growing to 40% at 5m"
                    },
                    {
                        "label": "Link Breakage Distance",
                        "value": "30m"
                    },
                    {
                        "label": "Cooldown",
                        "value": "20s"
                    },
                    {
                        "label": "Damage Over Time",
                        "value": "10/s"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250912/d6385e94-02b9-4890-b366-46e7194f8ade.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Soulsword",
                "description": "Slash forward with the Soulsword",
                "key": "Left Click",
                "icon": "static/heroes/abilities/magik-10-soulsword.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Melee"
                    },
                    {
                        "label": "Damage",
                        "value": "Deals 3 hits at intervals of 0.15s, with each hit dealing 35 damage"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "10m"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 6m, decreasing to 25% at 10m"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "1 hit per second"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/1429fdcf-3e9f-4dd9-873e-4ccf6f758cfd.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Stepping Discs",
                "description": "Jump through a Stepping Disc, teleporting a short distance in the direction of movement. Become Invincible while teleporting",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/magik-11-stepping-discs.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Casting",
                        "value": "Dash"
                    },
                    {
                        "label": "Average Speed",
                        "value": "17m/s"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "10m"
                    },
                    {
                        "label": "Combo Ability Casting Window",
                        "value": "3s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "3s"
                    },
                    {
                        "label": "Charges",
                        "value": "2"
                    },
                    {
                        "label": "Special Effect 1",
                        "value": "Magik is invincible while moving"
                    },
                    {
                        "label": "Special Effect 2",
                        "value": "Magik can perform a combo ability within a certain time frame, choosing between Eldritch Whirl or Demon's Rage"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/77738b7f-79a1-4eae-8d72-8bbda393bd5e.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Umbral Incursion",
                "description": "Dash forward and launch up enemies",
                "key": "E",
                "icon": "static/heroes/abilities/magik-12-umbral-incursion.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Movement-based damage ability"
                    },
                    {
                        "label": "Average Speed",
                        "value": "60m/s"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "20m"
                    },
                    {
                        "label": "Upward Slash Damage",
                        "value": "140"
                    },
                    {
                        "label": "Cooldown",
                        "value": "6s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/d5f0b817-5275-4e8f-a1cf-7674cfe5e077.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Eldritch Whirl",
                "description": "Spin while swinging the Soulsword after exiting a Stepping Disc",
                "key": "Left Click",
                "icon": "static/heroes/abilities/magik-13-eldritch-whirl.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "A cylindrical spell field in melee range"
                    },
                    {
                        "label": "Damage",
                        "value": "Deals 3 hits at intervals of 0.25s, each dealing 45 damage"
                    },
                    {
                        "label": "Range",
                        "value": "A cylindrical spell field with a radius of 12m and a height of 5m"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/ab4444b3-e2b2-4855-bce8-ac5e4aadec45.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Magik Slash",
                "description": "Strike forward an air slash",
                "key": "Right Click",
                "icon": "static/heroes/abilities/magik-14-magik-slash.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Projectile that fires in a straight trajectory"
                    },
                    {
                        "label": "Maximum Charge Time",
                        "value": "2s"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "100m/s"
                    },
                    {
                        "label": "Damage",
                        "value": "90 - 180 (Maximum damage is achieved after 1.8s of charging)"
                    },
                    {
                        "label": "Cooldown",
                        "value": "3s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/055e35e2-253d-45da-ae04-82984115f741.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Demon's Rage",
                "description": "Summon a Limbo demon that attacks enemies after exiting a Stepping Disc",
                "key": "Right Click",
                "icon": "static/heroes/abilities/magik-15-demon-s-rage.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "A cuboid spell field in melee range"
                    },
                    {
                        "label": "Damage",
                        "value": "25 damage per hit"
                    },
                    {
                        "label": "Attack Speed",
                        "value": "0.25s per hit"
                    },
                    {
                        "label": "Range",
                        "value": "Length: 6m, Width: 4m, Height: 4m"
                    },
                    {
                        "label": "Maximum Duration for Summons",
                        "value": "4s"
                    },
                    {
                        "label": "Summons' Health",
                        "value": "200"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/7c8271e5-5e8c-4394-a7d5-7a9e6f578295.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "250"
            },
            {
                "label": "Movement Speed",
                "value": "6m/s"
            }
        ],
        "forms": [
            "MAGIK"
        ]
    },
    "magneto": {
        "nickname": "MAGNETO",
        "realName": "MAX EISENHARDT",
        "roles": [
            "VANGUARD"
        ],
        "intro": "The Master of Magnetism bends even the strongest metal to his whims, shielding his allies and striking at his foes. Whether he calls himself Max Eisenhardt, Erik Lehnsherr, or simply Magneto, the hardships this warrior has endured have made him as unbreakable as the steel he brandishes.",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Iron Volley",
                "description": "Fire a volley of magnetic orbs forward. The range of the resulting explosion increases based on distance flown",
                "key": "Left Click",
                "icon": "static/heroes/abilities/magneto-1-iron-volley.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast projectile with delayed impact that also generates a spell field"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "80m/s"
                    },
                    {
                        "label": "Charges",
                        "value": "10"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "25m"
                    },
                    {
                        "label": "Range",
                        "value": "Initially, it produces a spell field with a 1m spherical radius; when the projectile reaches maximum distance, the explosion radius expands to a spell field with a 3m spherical radius"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "0.8s"
                    },
                    {
                        "label": "Damage",
                        "value": "Projectile Damage: 40. The spell field deals 40 damage at its center, reducing to 50% within a 3m radius from the center"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/3401f142-e87e-40ad-8ff2-3a749a6f4984.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Meteor M",
                "description": "Draw in all materials around to forge an iron meteor that deals massive damage upon impact. Absorbing enemy projectiles can enhance the meteor's power, yet overloading will cause it to self-destruct",
                "key": "Q",
                "icon": "static/heroes/abilities/magneto-2-meteor-m.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Create a persistent spell field that launches a projectile upon completion, which generates another spell field on impact"
                    },
                    {
                        "label": "Projectile Absorption Range",
                        "value": "15m spherical radius"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "45m/s"
                    },
                    {
                        "label": "Explosion Range",
                        "value": "Initially, the ability has a spherical range with a radius of 5m. After charging for 4s, it expands to an 8m radius"
                    },
                    {
                        "label": "Maximum Duration",
                        "value": "5s"
                    },
                    {
                        "label": "Damage",
                        "value": "The projectile deals no damage. The base damage at the center of the spell field starts at 100 and increases to 350 when fully charged. Each point of Energy adds an extra 3 points of damage to the spell field, with damage reducing to 50% at a distance of 6m from the center"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "3400"
                    },
                    {
                        "label": "Special Effect",
                        "value": "For each point of projectile damage absorbed, the power increases by 0.125, with a maximum absorption of 800 projectile damage"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/9cd870bb-e876-438b-9416-b230d990d3e8.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Metallic Curtain",
                "description": "Change the magnetic field around to form a metallic curtain, blocking all incoming projectiles",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/magneto-3-metallic-curtain.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Casting",
                        "value": "Shield"
                    },
                    {
                        "label": "Maximum Energy",
                        "value": "100"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "65/s"
                    },
                    {
                        "label": "Energy Recovery Delay",
                        "value": "1s"
                    },
                    {
                        "label": "Energy Recovery Speed",
                        "value": "11/s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "3s"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/e834f5cc-ab25-4c64-8c84-4fc1e19f4f7c.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Metal Bulwark",
                "description": "Conjure a metal shield around a chosen ally. Damage taken will transform into rings on Magneto's back",
                "key": "E",
                "icon": "static/heroes/abilities/magneto-4-metal-bulwark.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Targeted"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "20m"
                    },
                    {
                        "label": "Shield Value",
                        "value": "200"
                    },
                    {
                        "label": "Max Shield Duration",
                        "value": "2.5s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "15s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "The shield grants one charge of Iron Ring for every 100 damage it absorbs"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/3b28340a-e0b8-4801-98b5-32ca9934bb01.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Iron Bulwark",
                "description": "Conjure an iron shield around himself. Damage taken will transform into rings on Magneto's back",
                "key": "F",
                "icon": "static/heroes/abilities/magneto-5-iron-bulwark.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Shield Value",
                        "value": "200"
                    },
                    {
                        "label": "Max Shield Duration",
                        "value": "2.5s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "10s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "The shield grants one charge of Iron Ring for every 100 damage it absorbs"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/02e7eb06-6242-43ba-bd8d-3ae7e124f774.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Mag-Cannon",
                "description": "Convert the iron rings on Magneto's back into a Mag-Cannon and launch a metallic mass forward. Higher stacks of rings increase damage, and full stacks knock back enemies",
                "key": "Right Click",
                "icon": "static/heroes/abilities/magneto-6-mag-cannon.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast projectile with delayed impact"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "120m/s"
                    },
                    {
                        "label": "Damage",
                        "value": "Iron Rings' first charge deals 40 damage, the second charge deals 65 damage, and the third charge deals 90 damage"
                    },
                    {
                        "label": "Cooldown",
                        "value": "No cooldown, but the ability can only be activated when the Iron Ring has at least one charge"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "No"
                    },
                    {
                        "label": "Special Effect",
                        "value": "When fully charged, the Iron Ring has a 6m knockback distance"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/fa0cf0a3-32cc-4104-8c74-4fe98a7b8628.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Magnetic Descent",
                "description": "Hold Space to fall slowly",
                "key": "Space",
                "icon": "static/heroes/abilities/magneto-7-magnetic-descent.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Space"
                    },
                    {
                        "label": "Horizontal Movement Speed",
                        "value": "6m/s"
                    },
                    {
                        "label": "Descending Speed",
                        "value": "3.5m/s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/d59de34f-22d9-459b-9469-8a2bb8ce714c.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "ROYAL BLADE",
                "description": "Gambit charges Magneto's greatsword with kinetic energy. When Magneto activates this ability, Iron Volley is replaced with Ace Greatsword, which detonates upon striking enemies. The explosion leaves residual kinetic energy within the target, inflicting secondary damage after a brief delay",
                "key": "C",
                "icon": "static/heroes/abilities/magneto-8-royal-blade.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "C"
                    },
                    {
                        "label": "Cooldown",
                        "value": "30s"
                    },
                    {
                        "label": "Duration",
                        "value": "10s"
                    },
                    {
                        "label": "Shoot Interval",
                        "value": "First hit 0.6s, second hit 1s"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "80m/s"
                    },
                    {
                        "label": "Projectile Damage",
                        "value": "40"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "3m spherical radius spell field"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "30"
                    },
                    {
                        "label": "Explosion Delay",
                        "value": "0.5s"
                    },
                    {
                        "label": "Delay Explosion Damage",
                        "value": "25"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20251115/76aaa2b5-ba1a-44b7-a584-82b904800075.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "650"
            },
            {
                "label": "Movement Speed",
                "value": "6m/s"
            },
            {
                "label": "Iron Ring Charging Speed",
                "value": "3s per charge"
            }
        ],
        "forms": [
            "MAGNETO"
        ]
    },
    "mantis": {
        "nickname": "MANTIS",
        "realName": "MANTIS",
        "roles": [
            "STRATEGIST"
        ],
        "intro": "Mantis uses her impressive mental abilities and her penchant for plant control to anchor any team she fights alongside. Her powers tap into a limitless flow of life energy, gently nourishing everything she touches.",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Life Energy Blast",
                "description": "Fire an energy thorn and regain one Life Orb after a critical hit.",
                "key": "Left Click",
                "icon": "static/heroes/abilities/mantis-1-life-energy-blast.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast projectile with delayed impact"
                    },
                    {
                        "label": "Damage",
                        "value": "55 damage per round"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "150m/s"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "No falloff"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "2.5 rounds per second"
                    },
                    {
                        "label": "Ammo",
                        "value": "15"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "Yes"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Critical hit generates 1 Life Orb"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/53a8b0e2-f33b-4630-a318-b11feeb63da7.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Soul Resurgence",
                "description": "Release energy around her while moving, providing Healing Over Time and Movement Boosts for surrounding allies. Excess healing converts to Bonus Health",
                "key": "Q",
                "icon": "static/heroes/abilities/mantis-2-soul-resurgence.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Persistent spell field that surrounds the caster"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "150"
                    },
                    {
                        "label": "Caster & Ally One-time Healing Amount",
                        "value": "200"
                    },
                    {
                        "label": "Movement Boost",
                        "value": "3m/s"
                    },
                    {
                        "label": "Excess Healing/Bonus Health Conversion",
                        "value": "100%"
                    },
                    {
                        "label": "Excess Healing/Max Health Conversion",
                        "value": "150"
                    },
                    {
                        "label": "Range",
                        "value": "15m spherical radius"
                    },
                    {
                        "label": "Duration",
                        "value": "8s"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "4300"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/6185722d-c92f-4eab-8a8c-106168ad6e1a.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Spore Slumber",
                "description": "Throw a spore to Sedate the nearest enemy",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/mantis-3-spore-slumber.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast projectile with delayed impact that also generates a spell field"
                    },
                    {
                        "label": "Damage",
                        "value": "10"
                    },
                    {
                        "label": "Range",
                        "value": "3m spherical radius"
                    },
                    {
                        "label": "Sedation Duration",
                        "value": "3.5s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "A Mantis illusions will manifest beside the sedated heroes. Allies can attack this illusion to awaken the affected hero"
                    },
                    {
                        "label": "Illusion Health",
                        "value": "100"
                    },
                    {
                        "label": "Cooldown",
                        "value": "15s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/297739c8-b9b1-4d0c-9578-0ba4d2cede4e.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Allied Inspiration",
                "description": "Consume Life Orbs to grant allies a Damage Boost",
                "key": "E",
                "icon": "static/heroes/abilities/mantis-4-allied-inspiration.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Targeted"
                    },
                    {
                        "label": "Damage Boost",
                        "value": "8%"
                    },
                    {
                        "label": "Movement Boost",
                        "value": "1m/s"
                    },
                    {
                        "label": "Duration",
                        "value": "8s (16s maximum duration)"
                    },
                    {
                        "label": "Cooldown",
                        "value": "Consume 1 Life Orb"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/c43c7aff-d641-4b43-829b-ddf53bf2b3e7.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Natural Anger",
                "description": "Consume Life Orbs to grant herself a Damage Boost",
                "key": "F",
                "icon": "static/heroes/abilities/mantis-5-natural-anger.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Casting",
                        "value": "Instant Cast"
                    },
                    {
                        "label": "Damage Boost",
                        "value": "12%"
                    },
                    {
                        "label": "Duration",
                        "value": "8s (the duration cannot stack; repeatedly casting will only refresh the duration)"
                    },
                    {
                        "label": "Cooldown",
                        "value": "Consume 1 Life Orb"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/a414ebec-b637-44c3-83dd-4db27749575b.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Healing Flower",
                "description": "Consume Life Orbs to grant allies Healing Over Time",
                "key": "Right Click",
                "icon": "static/heroes/abilities/mantis-6-healing-flower.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Targeted"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Healing Flower provides two types of healing effects: One-time Healing and Healing Over Time"
                    },
                    {
                        "label": "One-time Healing Amount",
                        "value": "55"
                    },
                    {
                        "label": "Healing Over Time Amount",
                        "value": "10 + 2.5% of the target's maximum Health per second"
                    },
                    {
                        "label": "Duration",
                        "value": "8s (16s maximum duration)"
                    },
                    {
                        "label": "Cooldown",
                        "value": "Consume 1 Life Orb"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/cd2771ec-d276-4a64-91fd-faa67a121da6.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Nature's Favor",
                "description": "Receive a Movement Boost when not injured and Healing Over Time when consuming Life Orbs",
                "key": "Passive",
                "icon": "static/heroes/abilities/mantis-7-nature-s-favor.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Time Required to Leave Combat",
                        "value": "3s"
                    },
                    {
                        "label": "Out-of-Combat Movement Speed",
                        "value": "7.5m/s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Consume Life Orbs to receive Healing Over Time"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "12.5 per second"
                    },
                    {
                        "label": "Duration",
                        "value": "8s"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/b921470f-e723-4129-847e-be24fd974552.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Heavenly Guardian",
                "description": "Mantis enhances Groot's wooden walls and Loki's Rune Stones with life energy. Groot can additionally unleash a Flower Wall, which, when in Flora Colossus state, restores health to random nearby allies and grants them Damage Reduction. Loki's Rune Stones grant allies within Regeneration Domain a Damage Boost",
                "key": "Passive",
                "icon": "static/heroes/abilities/mantis-8-heavenly-guardian.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "10% Healing Boost"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250808/d0ee6b57-7475-4e57-a5c1-f02c357545d4.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "250"
            },
            {
                "label": "Movement Speed",
                "value": "6m/s"
            },
            {
                "label": "Life Orb Cooldown",
                "value": "4 charges, with each charge taking 3s to recharge"
            }
        ],
        "forms": [
            "MANTIS"
        ]
    },
    "mister-fantastic": {
        "nickname": "MISTER FANTASTIC",
        "realName": "REED RICHARDS",
        "roles": [
            "DUELIST"
        ],
        "intro": "Reed Richards believes that true strength comes from remaining flexible, both mentally and physically. Mister Fantastic's elastic body, which can twist and stretch into any form with ease, is almost as impressive as his brilliant mind.",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Stretch Punch",
                "description": "Stretch out a forward punch to attack enemies",
                "key": "Left Click",
                "icon": "static/heroes/abilities/mister-fantastic-1-stretch-punch.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Straight Spell Field"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "70"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "15m"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "1.1s per hit"
                    },
                    {
                        "label": "Ammo",
                        "value": "Infinite"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "None"
                    },
                    {
                        "label": "Gained Elasticity",
                        "value": "8"
                    },
                    {
                        "label": "Special Mechanic",
                        "value": "Swinging your arms can attack multiple targets"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20250110/6ca25ced-20ea-495c-b403-d84fa949b02a.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Distended Grip",
                "description": "Extend arms forward to entangle an enemy, then press Primary Attack to pull the hit enemy toward him, or select and yank another enemy, Knocking Them Airborne against each other. Hit targets are Immobilized",
                "key": "Right Click",
                "icon": "static/heroes/abilities/mister-fantastic-2-distended-grip.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Projectile that fires in a straight trajectory"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "60 m/s"
                    },
                    {
                        "label": "Initial Projectile Range",
                        "value": "20m"
                    },
                    {
                        "label": "Secondary Release Maximum Distance",
                        "value": "25m"
                    },
                    {
                        "label": "Initial Projectile Damage",
                        "value": "20"
                    },
                    {
                        "label": "Secondary Projectile Damage",
                        "value": "20"
                    },
                    {
                        "label": "Single-Target Pull Range",
                        "value": "10m"
                    },
                    {
                        "label": "Single-Target Pull Damage",
                        "value": "50"
                    },
                    {
                        "label": "Dual-Target Pull Damage",
                        "value": "30"
                    },
                    {
                        "label": "Gained Elasticity",
                        "value": "30"
                    },
                    {
                        "label": "Cooldown",
                        "value": "6s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "After successfully pulling an enemy with Distended Grip, the target is afflicted with a 1-second immobilize effect"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250108/f2a1a063-eb4b-4274-a9b8-fac92c4abeba.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Flexible Elongation",
                "description": "Gain a Shield, select a target and dash towards them, dealing damage to enemies or granting a Shield to allies",
                "key": "E",
                "icon": "static/heroes/abilities/mister-fantastic-3-flexible-elongation.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Maximum Select Distance",
                        "value": "15m"
                    },
                    {
                        "label": "Bonus Health (Self)",
                        "value": "75"
                    },
                    {
                        "label": "Bonus Health (Ally)",
                        "value": "75"
                    },
                    {
                        "label": "Damage",
                        "value": "30"
                    },
                    {
                        "label": "Cooldown",
                        "value": "6s"
                    },
                    {
                        "label": "Gained Elasticity",
                        "value": "20"
                    },
                    {
                        "label": "Charges",
                        "value": "2"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250108/014f9fc0-5b64-4c2d-afb1-4669b7b5369c.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Reflexive Rubber",
                "description": "Stretch the body to absorb damage before launching stored damage in the targeted direction",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/mister-fantastic-4-reflexive-rubber.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Shield Value",
                        "value": "300"
                    },
                    {
                        "label": "Maximum Duration",
                        "value": "3s"
                    },
                    {
                        "label": "Self Slow Rate",
                        "value": "-35%"
                    },
                    {
                        "label": "Damage Absorbed - Damage Reflected Conversion Rate",
                        "value": "60%"
                    },
                    {
                        "label": "Reflected Projectile Speed",
                        "value": "80 m/s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250108/d152620a-90bc-407e-a3f1-b137503624d0.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Brainiac Bounce",
                "description": "Leap upward and smash the ground, slowing enemies within range. Mister Fantastic can leap again upon landing a hit",
                "key": "Q",
                "icon": "static/heroes/abilities/mister-fantastic-5-brainiac-bounce.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Spherical Spell Field"
                    },
                    {
                        "label": "Range",
                        "value": "10m spherical radius"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "Initial 70, Each Additional Leap +14, Max 140"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Start at 3m, 71.4% falloff at 10m"
                    },
                    {
                        "label": "Slow Rate",
                        "value": "Per Leap -10%, Can Stack, Max -60%"
                    },
                    {
                        "label": "Slow Duration",
                        "value": "3s"
                    },
                    {
                        "label": "Minimum Leaps",
                        "value": "3"
                    },
                    {
                        "label": "Maximum Leaps",
                        "value": "6"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "3100"
                    },
                    {
                        "label": "Special Mechanic",
                        "value": "After the minimum number of leaps, each additional leap must hit an enemy to trigger the next one"
                    },
                    {
                        "label": "Special Mechanic",
                        "value": "When Mister Fantastic uses Brainiac Bounce (Ultimate Ability), immediately gain Bonus Health equal to that gained when entering inflated state"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250108/05dcb43c-4de3-483a-afc6-d06c6e76e4ff.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Elastic Strength",
                "description": "Using abilities generates Elasticity, boosting attack power. Reaching full Elasticity triggers an Inflated state that increases Maximum Health, further boosts damage, and enables the use of Reflexive Rubber",
                "key": "Passive",
                "icon": "static/heroes/abilities/mister-fantastic-6-elastic-strength.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Max Elasticity",
                        "value": "100"
                    },
                    {
                        "label": "Inflated Duration",
                        "value": "6s"
                    },
                    {
                        "label": "Damage",
                        "value": "80"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "8m"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "0.92s per hit"
                    },
                    {
                        "label": "Special Effect",
                        "value": "gain 350 Maximum Health and a one-time heal of 350, which is removed upon exiting the Inflated state"
                    },
                    {
                        "label": "Movement Boost",
                        "value": "20%"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20250108/25010c9f-083e-4097-a443-544e0eeaa0ab.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "FANTASTIC AMPLIFIER",
                "description": "Rocket Raccoon upgrades his B.R.B. for Star-Lord and Mister Fantastic. Star-Lord gets an Astral Jump device, allowing him to teleport to its deployment point from anywhere on the map. Mister Fantastic receives a Fantastic Amplifier, removing his Elasticity limit and letting him actively enter Inflation state",
                "key": "C",
                "icon": "static/heroes/abilities/mister-fantastic-7-fantastic-amplifier.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "C"
                    },
                    {
                        "label": "Cooldown",
                        "value": "25s"
                    },
                    {
                        "label": "Ability Duration",
                        "value": "10s"
                    },
                    {
                        "label": "Energy Consumed Per Second During Inflation State",
                        "value": "16.67"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260213/eeb353f6-40cf-4c6d-b787-db7a4d316868.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "375"
            },
            {
                "label": "Movement Speed",
                "value": "6 m/s"
            }
        ],
        "forms": [
            "MISTER FANTASTIC"
        ]
    },
    "moon-knight": {
        "nickname": "MOON KNIGHT",
        "realName": "MARC SPECTOR",
        "roles": [
            "DUELIST"
        ],
        "intro": "As the avatar of the Egyptian God of Vengeance, Marc Spector's body has been enhanced by Khonshu himself. Bathed in a luminous aura that pierces the darkness, Moon Knight glides through the night, ready to sear his enemies with his master's sacred Ankhs.",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Crescent Dart",
                "description": "Unleash Crescent Darts forward that can bounce between enemies and Ankhs, dealing damage to enemies",
                "key": "Left Click",
                "icon": "static/heroes/abilities/moon-knight-1-crescent-dart.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Triple shot that fires in a straight trajectory"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "150m/s"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "The firing interval between shots is 0.05s, with an interval of 0.57s between each round of shooting"
                    },
                    {
                        "label": "Damage",
                        "value": "23 damage per round"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 30m, decreasing to 50% at 50m"
                    },
                    {
                        "label": "Maximum Bounce Distance",
                        "value": "7m"
                    },
                    {
                        "label": "Maximum Number of Bounces",
                        "value": "3"
                    },
                    {
                        "label": "Damage Falloff Per Bounce",
                        "value": "-30%"
                    },
                    {
                        "label": "Ammo",
                        "value": "30"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "Yes"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/f4bab63c-dd7b-4ddc-b9f5-d0481acffaf3.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Hand of Khonshu",
                "description": "Open a portal that allows Khonshu to bombard enemies with his talons",
                "key": "Q",
                "icon": "static/heroes/abilities/moon-knight-2-hand-of-khonshu.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Delayed Spherical Spell Field"
                    },
                    {
                        "label": "Duration",
                        "value": "4.5s"
                    },
                    {
                        "label": "Descending Range",
                        "value": "8m radius"
                    },
                    {
                        "label": "Frequency",
                        "value": "4 hits per second"
                    },
                    {
                        "label": "Number of Hits",
                        "value": "18"
                    },
                    {
                        "label": "Range",
                        "value": "5m spherical radius"
                    },
                    {
                        "label": "Damage",
                        "value": "150 damage per hit"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Start at 1.5m, 70% falloff at 5m"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "2800"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/9253ada4-37a7-4cc9-9008-2d3e748d8dc1.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Night Glider",
                "description": "Hold SHIFT to glide",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/moon-knight-3-night-glider.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Horizontal Movement Speed",
                        "value": "8.7m/s"
                    },
                    {
                        "label": "Descending Speed",
                        "value": "1.5m/s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/815eee35-da1f-4c84-808b-ce71aa39df9c.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Ancient Ankh",
                "description": "Fire an Ankh to launch up enemies within its radius towards the center",
                "key": "E",
                "icon": "static/heroes/abilities/moon-knight-4-ancient-ankh.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Straight-line projectile that generates a spell field upon impact"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "60m/s"
                    },
                    {
                        "label": "Pull-In Range",
                        "value": "5m spherical radius"
                    },
                    {
                        "label": "Pull-In Damage",
                        "value": "20"
                    },
                    {
                        "label": "Bouncing Range",
                        "value": "7m spherical radius"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/4dee2bf5-3255-4ce7-bfe4-463eb64bda06.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Moonlight Hook",
                "description": "Launch a frontal grappling hook that pulls Moon Knight towards it",
                "key": "F",
                "icon": "static/heroes/abilities/moon-knight-5-moonlight-hook.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Casting",
                        "value": "Dash"
                    },
                    {
                        "label": "Grappling Hook Speed",
                        "value": "120m/s"
                    },
                    {
                        "label": "Grappling Hook Length",
                        "value": "25m"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "21.5m/s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/60e26c6a-92ea-4e8a-a669-4c3a9be668f7.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Rising Leap",
                "description": "Perform a double jump",
                "key": "Space",
                "icon": "static/heroes/abilities/moon-knight-6-rising-leap.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Space"
                    },
                    {
                        "label": "Cooldown",
                        "value": "6s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/f7f1a460-7069-42b0-b926-a5fd1c43d171.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Moon Blade",
                "description": "Launch forward a Moon Blade that can bounce between enemies and Ankhs, dealing damage to enemies",
                "key": "Right Click",
                "icon": "static/heroes/abilities/moon-knight-7-moon-blade.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Projectile that fires in a straight trajectory"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "120m/s"
                    },
                    {
                        "label": "Damage",
                        "value": "70"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 30m, decreasing to 50% at 50m"
                    },
                    {
                        "label": "Maximum Bounce Distance",
                        "value": "7m"
                    },
                    {
                        "label": "Maximum Number of Bounces",
                        "value": "3"
                    },
                    {
                        "label": "Damage Falloff Per Bounce",
                        "value": "-30%"
                    },
                    {
                        "label": "Bonus Health",
                        "value": "25, up to a max of 76 Bonus Health"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "Yes"
                    },
                    {
                        "label": "Cooldown",
                        "value": "6s"
                    },
                    {
                        "label": "Charges",
                        "value": "2"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/7864c28b-7c4b-4cc4-8e74-d600e7c586ee.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Triple Eclipse",
                "description": "Perform a combo with his truncheon, and the third strike will launch up the enemy hit slightly",
                "key": "V",
                "icon": "static/heroes/abilities/moon-knight-8-triple-eclipse.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "V"
                    },
                    {
                        "label": "Casting",
                        "value": "Melee"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "3m"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241125/9b92fd1c-3cdc-4d9d-83cf-f43d6706a73d.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "MOON GOD'S CHOSEN",
                "description": "Blessed by Khonshu, Blade gains a new ability. When activated, Blade swings his Ancestral Sword in a powerful slash, dashing forward a short distance. At the end of the dash, he swiftly slashes four times, each strike sending a Darkmoon Blade forward. When a Darkmoon Blade hits an enemy, it bounces to nearby targets",
                "key": "Passive",
                "icon": "static/heroes/abilities/moon-knight-9-moon-god-s-chosen.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "5% Damage Boost"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20251115/85d68157-5d41-4297-a2b2-d353a96dda73.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "275"
            },
            {
                "label": "Movement Speed",
                "value": "6m/s"
            }
        ],
        "forms": [
            "MOON KNIGHT"
        ]
    },
    "namor": {
        "nickname": "NAMOR",
        "realName": "NAMOR MCKENZIE",
        "roles": [
            "DUELIST"
        ],
        "intro": "The unrivaled King of the Seas, Namor surfs into battle on a mighty wave with an army of fierce aquatic creatures in his wake. When ancient horns of war blare, devastation soon follows as deadly waters engulf the arena.",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Trident of Neptune",
                "description": "Throw the trident forward, reducing Aquatic Dominion's cooldown upon enemy impact. Critical hits cause Monstro Spawn to enter a berserk state, gaining increased Attack Speed",
                "key": "Left Click",
                "icon": "static/heroes/abilities/namor-1-trident-of-neptune.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Projectile with an arced trajectory"
                    },
                    {
                        "label": "Damage",
                        "value": "75"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "150 m/s"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "1.09 rounds per second"
                    },
                    {
                        "label": "Ammo",
                        "value": "Infinite"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "Yes"
                    },
                    {
                        "label": "Aquatic Dominion Charge Per Hit",
                        "value": "0.13"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/cc74a8d7-aa7a-4bef-9777-6f2499ece5a4.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Horn of Proteus",
                "description": "Summon Giganto to leap atop enemies within range, disabling their mobility abilities",
                "key": "Q",
                "icon": "static/heroes/abilities/namor-2-horn-of-proteus.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Cylindrical Spell Field"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "30m"
                    },
                    {
                        "label": "Range",
                        "value": "A cylindrical spell field with an inner circle radius of 3.5m, an outer circle radius of 9m, and a height of 3m"
                    },
                    {
                        "label": "Hit Delay",
                        "value": "1.5s"
                    },
                    {
                        "label": "Damage",
                        "value": "Inner Circle Damage: 500; Outer Circle Damage: 180"
                    },
                    {
                        "label": "Immobilize Duration",
                        "value": "1.5s"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "3100"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/41fb388d-1b2c-433f-ab04-3a02562c5b19.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Blessing of the Deep",
                "description": "Summon a protective barrier while flying upwards",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/namor-3-blessing-of-the-deep.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Vertical Moving Distance",
                        "value": "7m"
                    },
                    {
                        "label": "Maximum Duration",
                        "value": "3s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "20s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/e301578f-ee43-42c9-a95a-f162259d62fb.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Aquatic Dominion",
                "description": "Summon a Monstro Spawn that can autonomously attack enemies",
                "key": "E",
                "icon": "static/heroes/abilities/namor-4-aquatic-dominion.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Arced Trajectory (Summon Monstro Spawn), Direct Hit (Monstro Spawn)"
                    },
                    {
                        "label": "Projectile Speed (Summon Monstro Spawn)",
                        "value": "30 m/s"
                    },
                    {
                        "label": "Monstro Spawn Maximum Duration",
                        "value": "8s"
                    },
                    {
                        "label": "Monstro Spawn Health",
                        "value": "125"
                    },
                    {
                        "label": "Monstro Spawn Attack Range",
                        "value": "40m"
                    },
                    {
                        "label": "Monstro Spawn Maximum Quantity",
                        "value": "2"
                    },
                    {
                        "label": "Charges",
                        "value": "2"
                    },
                    {
                        "label": "Default Charging Speed",
                        "value": "0.1/s"
                    },
                    {
                        "label": "Default",
                        "value": ""
                    },
                    {
                        "label": "Monstro Spawn Fire Rate",
                        "value": "2 rounds per second"
                    },
                    {
                        "label": "Monstro Spawn Damage",
                        "value": "18"
                    },
                    {
                        "label": "Monstro Spawn Damage Falloff",
                        "value": "Falloff begins at 20m, decreasing to 50% at 40m"
                    },
                    {
                        "label": "Enhanced",
                        "value": ""
                    },
                    {
                        "label": "Duration",
                        "value": "2s"
                    },
                    {
                        "label": "Monstro Spawn Fire Rate",
                        "value": "5 rounds per second"
                    },
                    {
                        "label": "Monstro Spawn Damage",
                        "value": "12"
                    },
                    {
                        "label": "Monstro Spawn Damage Falloff",
                        "value": "Falloff begins at 20m, decreasing to 30% at 40m"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/4bf22127-5c87-4163-82d7-ba90c1edae57.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Wrath of the Seven Seas",
                "description": "Launch the trident forward to damage nearby enemies, then direct all Monstro Spawn to perform an enhanced attack on the nearest hit enemy. When the trident hits an enemy, Monstro Spawn to enter a berserk state, gaining increased Attack Speed",
                "key": "Right Click",
                "icon": "static/heroes/abilities/namor-5-wrath-of-the-seven-seas.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Arced projectile that generates a spell field upon impact"
                    },
                    {
                        "label": "Projectile Damage",
                        "value": "40"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "150 m/s"
                    },
                    {
                        "label": "Range",
                        "value": "3m spherical radius"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "60"
                    },
                    {
                        "label": "Spell Field Damage Falloff",
                        "value": "50% falloff at 3m"
                    },
                    {
                        "label": "Enhanced Monstro Spawn Projectile Damage",
                        "value": "60"
                    },
                    {
                        "label": "Enhanced Monstro Spawn Projectile Speed",
                        "value": "120 m/s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "6s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/0e8f873c-9edf-43ff-87f8-1db24dcb4500.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "TIDAL DIRGE",
                "description": "Hela channels energy of the undead to empower Namor. When Namor strikes with his trident, a spectral water column erupts at the target area, slowing enemies hit. Whenever Hela or Namor assist in a KO, an invulnerable Undead Monstro spawns at the fallen enemy's position, automatically attacking the nearest foe for a short time before vanishing",
                "key": "Passive",
                "icon": "static/heroes/abilities/namor-6-tidal-dirge.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "C"
                    },
                    {
                        "label": "Inner Circle Spell Field Range",
                        "value": "A cylindrical spell field with a radius of 3m and a height of 13m"
                    },
                    {
                        "label": "Outer Circle Spell Field Range",
                        "value": "A cylindrical spell field with a radius of 6m and a height of 11m"
                    },
                    {
                        "label": "Inner Circle Damage",
                        "value": "65"
                    },
                    {
                        "label": "Outer Circle Damage",
                        "value": "45"
                    },
                    {
                        "label": "Reduced Healing Rate",
                        "value": "20%"
                    },
                    {
                        "label": "Slow Rate",
                        "value": "35%"
                    },
                    {
                        "label": "Outer Circle Generate Delay",
                        "value": "0.5s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "30s"
                    },
                    {
                        "label": "Undead Monstro",
                        "value": ""
                    },
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Undead Monstro Duration",
                        "value": "3s"
                    },
                    {
                        "label": "Undead Monstro Damage",
                        "value": "10"
                    },
                    {
                        "label": "Undead Monstro Fire Rate",
                        "value": "0.5s per hit"
                    },
                    {
                        "label": "Undead Monstro Rage Damage",
                        "value": "6"
                    },
                    {
                        "label": "Undead Monstro Rage Fire Rate",
                        "value": "5 rounds per second"
                    },
                    {
                        "label": "Undead Monstro Maximum Amount",
                        "value": "2"
                    },
                    {
                        "label": "Rage Duration",
                        "value": "2s"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 20m, decreasing to 50% at 40m"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Undead Monstro is untargetable"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20251011/e1e60d27-462f-41da-90cb-96f47ef58548.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "275"
            },
            {
                "label": "Movement Speed",
                "value": "6 m/s"
            }
        ],
        "forms": [
            "NAMOR"
        ]
    },
    "peni-parker": {
        "nickname": "PENI PARKER",
        "realName": "PENI PARKER",
        "roles": [
            "VANGUARD"
        ],
        "intro": "Peni Parker may be young, but she bravely stands on the frontlines to protect the Web of Life and Destiny. Together, this teen prodigy and her state-of-the-art mech, the sensational SP//dr, make for the most thrilling duo on the battlefield!",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Cyber-Web Cluster",
                "description": "Launch forward a Cyber-Web Cluster",
                "key": "Left Click",
                "icon": "static/heroes/abilities/peni-parker-1-cyber-web-cluster.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Rapid-fire, delayed projectile that is accompanied by a spell field"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "150m/s"
                    },
                    {
                        "label": "Range",
                        "value": "1.5m spherical radius"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "3.33 rounds per second"
                    },
                    {
                        "label": "Damage",
                        "value": "Projectile Damage: 15; Spell Field Damage: 15"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "Yes"
                    },
                    {
                        "label": "Special Effect",
                        "value": "20% slowdown on release"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/2b24b421-99cf-4e20-b584-8f8e755911af.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Spider-Sweeper",
                "description": "Enhance the SP//dr suit, launching up enemies in its path and deploying Arachno-Mines, Spider-Drones, and Cyber-Webs repeatedly",
                "key": "Q",
                "icon": "static/heroes/abilities/peni-parker-2-spider-sweeper.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Enhancement"
                    },
                    {
                        "label": "Sweep Range",
                        "value": "5m"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "1s"
                    },
                    {
                        "label": "Spider-Drone Generation Interval",
                        "value": "0.5s"
                    },
                    {
                        "label": "Arachno-Mine Attack Interval",
                        "value": "0.7s"
                    },
                    {
                        "label": "Maximum Arachno-Mine Quantity",
                        "value": "7"
                    },
                    {
                        "label": "Range",
                        "value": "4m spherical radius"
                    },
                    {
                        "label": "Duration",
                        "value": "12s"
                    },
                    {
                        "label": "Damage",
                        "value": "Sweep Attack Damage: 60"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "3400"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Gain 450 Bonus Health and a 70% Movement Boost"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/bcccc074-f210-4239-a6e1-05ae478859a6.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Bionic Spider-Nest",
                "description": "Generate a Bionic Spider-Nest at a targeted area, periodically spawning Spider-Drones and creating Cyber-Webs. While in the Cyber-Web, Peni and allies gain Healing Over Time and a Movement Boost. Excess healing converts into Bonus Health. Spider-Drones inflict a Slow effect on hit, which can stack and refresh its effect period with multiple hits",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/peni-parker-3-bionic-spider-nest.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Casting",
                        "value": "Targeted"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "10m"
                    },
                    {
                        "label": "Spider-Nest Health",
                        "value": "350"
                    },
                    {
                        "label": "Range",
                        "value": "12m spherical radius"
                    },
                    {
                        "label": "Damage",
                        "value": "Each Spider-Drone inflicts 40 damage"
                    },
                    {
                        "label": "Cooldown",
                        "value": "15s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Two Spider-Drones are generated every 3s, slows hit enemies by 8% for 2s, each hit stacks the effect and resets the slow period, stacking up to 40%"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/b0a9458d-2a87-483c-a165-c362bf34d179.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Arachno-Mine",
                "description": "Deploy Arachno-Mines that can be concealed within the confines of a Cyber-Web",
                "key": "E",
                "icon": "static/heroes/abilities/peni-parker-4-arachno-mine.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast Spell Field"
                    },
                    {
                        "label": "Range",
                        "value": "3m spherical radius"
                    },
                    {
                        "label": "Damage",
                        "value": "100"
                    },
                    {
                        "label": "Cooldown",
                        "value": "4 charges, with each charge taking 4s to recharge"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/a0c17f1d-4984-4961-af7a-515078b751a4.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Cyber-Bond",
                "description": "Shoot a web strand that links to the targeted area or Cyber-Web. If stretched too far, it will trigger a pullback",
                "key": "F",
                "icon": "static/heroes/abilities/peni-parker-5-cyber-bond.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Casting",
                        "value": "Dash"
                    },
                    {
                        "label": "Pull-back Distance",
                        "value": "10m"
                    },
                    {
                        "label": "Maximum Cyber-Bond Distance",
                        "value": "19m, with the possibility to exceed this distance if descending"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "100m/s"
                    },
                    {
                        "label": "Minimum Dash Distance",
                        "value": "10m"
                    },
                    {
                        "label": "Maximum Dash Distance",
                        "value": "30m"
                    },
                    {
                        "label": "Cooldown",
                        "value": "3s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/6146023c-4c46-4135-aba6-79eff6014d3b.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Wall Crawl",
                "description": "HOLD Jump to crawl on vertical surfaces",
                "key": "Space",
                "icon": "static/heroes/abilities/peni-parker-6-wall-crawl.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Space"
                    },
                    {
                        "label": "Wall-Crawling Speed",
                        "value": "7.2m/s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/a812a9bf-dcaa-443a-870f-79586813d558.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Cyber-Web Snare",
                "description": "Cast futuristic webbing that Immobilizes enemies or creates a Cyber-Web. While in the Cyber-Web, Peni and allies gain Healing Over Time and a Movement Boost. Excess healing converts into Bonus Health",
                "key": "Right Click",
                "icon": "static/heroes/abilities/peni-parker-7-cyber-web-snare.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast projectile with delayed impact"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "60 m/s"
                    },
                    {
                        "label": "Range",
                        "value": "3m spherical radius"
                    },
                    {
                        "label": "Damage",
                        "value": "5"
                    },
                    {
                        "label": "Cooldown",
                        "value": "3s"
                    },
                    {
                        "label": "Special Effect 1",
                        "value": "Enemies hit are ensnared for 0.7s. While trapped in the Cyber-Web, Peni Parker receives 25 healing per second. Any excess healing is converted into Bonus Health, up to a maximum of 200 Health, and grants a 25% Movement Boost"
                    },
                    {
                        "label": "Special Effect 2",
                        "value": "Allies in Peni's Cyber-Webs now receive the same Healing Over Time and a Movement Boost effects as her. Movement Boost for allies is 25%, Healing is 15/s. Ally excess healing converts into Bonus Health, up to 25"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/036e9648-779e-48a7-ab8b-0e60bc0c5bd1.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "ARMORIZED SPIDER-NEST",
                "description": "Enhanced by Rocket Raccoon, Peni Parker’s Bionic Spider-Nest regularly generates strengthened armor packs. Each armor pack grants bonus health to the hero who picks up the pack. Peni Parker can deploy Bionic Spider-Nest and Armored Spider-Nest at the same time",
                "key": "C",
                "icon": "static/heroes/abilities/peni-parker-8-armorized-spider-nest.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "C"
                    },
                    {
                        "label": "Cooldown",
                        "value": "30"
                    },
                    {
                        "label": "Spider-Nest Health",
                        "value": "250"
                    },
                    {
                        "label": "Spider-Drone Generate Interval",
                        "value": "3s"
                    },
                    {
                        "label": "Spider-Drone Generate Quantity",
                        "value": "2"
                    },
                    {
                        "label": "Spider-Drone Explosion Range",
                        "value": "1m spherical radius spell field"
                    },
                    {
                        "label": "Spider-Drone Damage",
                        "value": "40"
                    },
                    {
                        "label": "Armor Pack Generate Interval",
                        "value": "3s"
                    },
                    {
                        "label": "Bonus Health From Armor Pack",
                        "value": "50"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250531/b2250054-6ee6-4b3e-8062-57ef69717686.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Cyber-Spiders",
                "description": "Peni Parker whips up a Sticky Bomb for Spider-Man! Prime it, then toss it before the timer's up for a blast that damages nearby enemies and attaches a Spider-Tracer to them. If not thrown in time, it explodes on Spider-Man, recharging a Web-Cluster shot and granting Bonus Health",
                "key": "Passive",
                "icon": "static/heroes/abilities/peni-parker-9-cyber-spiders.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "+50 Max Health"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260117/99aa4398-a29a-4cac-8935-2542feff88f6.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "650"
            },
            {
                "label": "Movement Speed",
                "value": "6m/s"
            }
        ],
        "forms": [
            "PENI PARKER"
        ]
    },
    "phoenix": {
        "nickname": "PHOENIX",
        "realName": "JEAN GREY",
        "roles": [
            "DUELIST"
        ],
        "intro": "Original X-Man Jean Grey boasted immense psychic power even before becoming host the unbridled Phoenix Force, embodiment of life and psionic energy across the universe. Now aligned with this ancient cosmic power, Jean and the Phoenix traverse space together, burning bright as both a spark of creation and inferno of destruction!",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Cosmic Flames",
                "description": "Launch a fiery projectile forward, applying 1 Spark to enemies hit. Critical hits apply 2 Sparks. At 3 Sparks, Phoenix triggers a fiery explosion that applies 1 Spark to enemies around and Healing Over Time to self. Sparks from explosions will not stack within a brief period",
                "key": "Left Click",
                "icon": "static/heroes/abilities/phoenix-1-cosmic-flames.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Damage",
                        "value": "55"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 10m, decreasing to 65% at 30m"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "0.435s per round"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Apply 1 Spark to enemies hit. Critical hits apply 2 Sparks. At 3 Sparks, Phoenix triggers a fiery explosion that applies 1 Spark to enemies around. Sparks from explosions will not stack within a brief period."
                    },
                    {
                        "label": "Explosion Direct Damage",
                        "value": "35"
                    },
                    {
                        "label": "Explosion Range Damage",
                        "value": "12"
                    },
                    {
                        "label": "Explosion Range",
                        "value": "4m spherical radius spell field"
                    },
                    {
                        "label": "Self Healing Amount after the Explosion",
                        "value": "5/s for 4 s"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20250710/e458821f-fbdc-4505-8407-0eafe85f5a22.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Telekinesis Burst",
                "description": "Mark a targeted area with psionic energy, followed by a series of fiery explosions. The first blast Stuns enemies, while the subsequent two explosions inflict Slow. Applies 1 Spark to enemies hit",
                "key": "Right Click",
                "icon": "static/heroes/abilities/phoenix-2-telekinesis-burst.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Target Explosion Damage",
                        "value": "20"
                    },
                    {
                        "label": "Target Explosion Range",
                        "value": "A cylindrical spell field with a 2m radius and a height of 4m."
                    },
                    {
                        "label": "Subsequent Explosion Damage",
                        "value": "20"
                    },
                    {
                        "label": "Subsequent Explosion Range",
                        "value": "A cylindrical spell field with a 3m radius and a height of 6m."
                    },
                    {
                        "label": "Special Effect",
                        "value": "The first blast Stuns enemies, while the subsequent two explosions inflict Slow."
                    },
                    {
                        "label": "Stun Duration",
                        "value": "0.3s"
                    },
                    {
                        "label": "Slow Effect",
                        "value": "Inflict 30% Slow for 2 seconds."
                    },
                    {
                        "label": "Cooldown",
                        "value": "10s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250710/986f26e7-7141-4dc9-90ac-acff1b8c380a.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Dark Ascent",
                "description": "Merge with the Phoenix, entering a state of free flight. Gain a Movement Boost",
                "key": "E",
                "icon": "static/heroes/abilities/phoenix-3-dark-ascent.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Enter a state of free flight within the duration. Gain a 50% Movement Boost"
                    },
                    {
                        "label": "Cooldown",
                        "value": "1s"
                    },
                    {
                        "label": "Maximum Energy",
                        "value": "1200"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "400/s"
                    },
                    {
                        "label": "Energy Recovery",
                        "value": "120/s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250710/7ef4eae3-1354-41eb-ac11-0fefbcd96808.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Telepathic Illusion",
                "description": "Leave behind an illusion and instantly teleport in the desired direction, followed by detonating the illusion. Enemies hit are applied with 1 Spark",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/phoenix-4-telepathic-illusion.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Dash Distance",
                        "value": "8m"
                    },
                    {
                        "label": "Detonation Damage",
                        "value": "50"
                    },
                    {
                        "label": "Detonation Range",
                        "value": "3m spherical radius spell field"
                    },
                    {
                        "label": "Special Effect",
                        "value": "The detonation applies 1 Spark to enemies hit."
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250710/18388d22-1918-4cfe-98e3-7a59f701b1a6.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Endsong Inferno",
                "description": "Soar into the sky with the Phoenix and crash down onto a selected area, dealing devastating damage to enemies while creating a shockwave that destroys enemy summons, shields, and any Bonus Health. Enemies hit are applied with 1 Spark",
                "key": "Q",
                "icon": "static/heroes/abilities/phoenix-5-endsong-inferno.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "3100"
                    },
                    {
                        "label": "Explosion Damage",
                        "value": "140"
                    },
                    {
                        "label": "Explosion Range",
                        "value": "10m spherical radius spell field"
                    },
                    {
                        "label": "Shockwave Damage",
                        "value": "50"
                    },
                    {
                        "label": "Summons' Health",
                        "value": "500"
                    },
                    {
                        "label": "Special Effect",
                        "value": "The shockwave destroys enemy summons, shields, and any Bonus Health. Enemies hit by the spell field and the shockwave are applied with 1 Spark."
                    },
                    {
                        "label": "Self Healing Amount",
                        "value": "250"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250710/4a733ade-7bcc-4152-b3e7-3dc01bfcdb06.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Mind's Grace",
                "description": "Jean Grey imbues Wolverine with the awe-inspiring Phoenix Force",
                "key": "Passive",
                "icon": "static/heroes/abilities/phoenix-6-mind-s-grace.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "10% damage boost"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250710/89d03be4-06bc-4a67-abb6-f7e95a222760.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "250"
            },
            {
                "label": "Movement Speed",
                "value": "6m/s"
            }
        ],
        "forms": [
            "Phoenix"
        ]
    },
    "psylocke": {
        "nickname": "PSYLOCKE",
        "realName": "SAI",
        "roles": [
            "DUELIST"
        ],
        "intro": "The psychic warrior known as Sai has the Mutant ability to conjure a variety of weapons with the power of her mind. Gracefully gliding across the battlefield, this trained ninja can shatter the enemy's defenses with a single thought.",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Psionic Crossbow",
                "description": "Unleash bolts with psionic crossbows to damage enemies and reduce the cooldowns of all her abilities",
                "key": "Left Click",
                "icon": "static/heroes/abilities/psylocke-1-psionic-crossbow.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Double projectile with spread"
                    },
                    {
                        "label": "Damage",
                        "value": "12 damage per round"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 15m, decreasing to 70% at 30m"
                    },
                    {
                        "label": "Bullets Fired Each Cast",
                        "value": "4"
                    },
                    {
                        "label": "Crosshair Spread Radius (at 10m)",
                        "value": "0.2m"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "The firing interval between shots is 0.2s, with an interval of 0.6s between each round of shooting"
                    },
                    {
                        "label": "Ammo",
                        "value": "16"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "Yes"
                    },
                    {
                        "label": "Critical Damage",
                        "value": "150%"
                    },
                    {
                        "label": "Cooldown Reduction On Hit",
                        "value": "0.3s per hit"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241127/95719d81-365d-4ad7-bf6b-026166c95aed.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Dance of the Butterfly",
                "description": "Slash nearby enemies with a psionic katana, dealing massive damage",
                "key": "Q",
                "icon": "static/heroes/abilities/psylocke-2-dance-of-the-butterfly.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Range",
                        "value": "10m spherical radius"
                    },
                    {
                        "label": "Duration",
                        "value": "4s"
                    },
                    {
                        "label": "Slow Rate",
                        "value": "-15%"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "2 hits per second"
                    },
                    {
                        "label": "Damage",
                        "value": "160 damage per hit"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "3400"
                    },
                    {
                        "label": "Special Mechanic",
                        "value": "Psylocke will slash a random enemy, giving priority to the one who has been hit the least"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241127/dabcc1e3-5490-4fa4-87ab-b9440a74b69b.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Psi-Blade Dash",
                "description": "Dash forward and slice through enemies along the path with psionic blades",
                "key": "Shift",
                "icon": "static/heroes/abilities/psylocke-3-psi-blade-dash.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Shift"
                    },
                    {
                        "label": "Average Speed",
                        "value": "43 m/s"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "12m"
                    },
                    {
                        "label": "Damage",
                        "value": "50"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    },
                    {
                        "label": "Charges",
                        "value": "2"
                    },
                    {
                        "label": "Special Mechanic",
                        "value": "Casting this ability will automatically recall the Wing Shurikens. The shurikens will first travel to Psylocke's starting position before returning to her"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241127/af147052-f9a1-416b-8bfc-0143471b18c1.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Psychic Stealth",
                "description": "Enter stealth and gain a Movement Boost",
                "key": "E",
                "icon": "static/heroes/abilities/psylocke-4-psychic-stealth.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Duration",
                        "value": "2s"
                    },
                    {
                        "label": "Movement Boost",
                        "value": "50%"
                    },
                    {
                        "label": "Cooldown",
                        "value": "15s"
                    },
                    {
                        "label": "Special Mechanic",
                        "value": "When attacked while in stealth, Psylocke will remain in stealth but will briefly become visible for a short duration"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241127/55b04754-bda5-4bcf-8a95-44479c836508.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Wing Shurikens",
                "description": "Launch a volley of psionic shurikens that stick to enemies, dealing damage and granting herself Bonus Health. Press again to recall the shurikens",
                "key": "Right Click",
                "icon": "static/heroes/abilities/psylocke-5-wing-shurikens.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Projectile that fires in a straight trajectory."
                    },
                    {
                        "label": "Number of Projectiles",
                        "value": "5"
                    },
                    {
                        "label": "Recall Window",
                        "value": "3s"
                    },
                    {
                        "label": "Bonus Health",
                        "value": "10 bonus health per round"
                    },
                    {
                        "label": "Cooldown",
                        "value": "8s"
                    },
                    {
                        "label": "Special Mechanic",
                        "value": "When the projectile is recalled, it will move 20s toward the crosshair before returning to Psylocke"
                    },
                    {
                        "label": "Firing Phase",
                        "value": ""
                    },
                    {
                        "label": "Damage",
                        "value": "9 damage per round"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "120 m/s"
                    },
                    {
                        "label": "Spread Angle",
                        "value": "0.86°"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "25m"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 15m, decreasing to 80% at 25m"
                    },
                    {
                        "label": "Recall Phase",
                        "value": ""
                    },
                    {
                        "label": "Damage",
                        "value": "9 per hit"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "120 m/s"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241127/90b85285-ea24-4fb2-8ec4-b60d3f177569.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "LIGHT & DARK DARTS",
                "description": "Cloak & Dagger share light and dark energy with Hawkeye and Psylocke. When Hawkeye uses Crescent Slash, he also releases a blade wave that heals and boosts healing for teammates, while inflicting damage and Vulnerability on enemies. Psylocke can launch a Light Boomerang Dart that heals allies, harms enemies, and provides her with temporary healing upon return. She can also unleash a ring of Dark Darts that slow enemies while she briefly enters a Phased state",
                "key": "Right Click",
                "icon": "static/heroes/abilities/psylocke-6-light-and-dark-darts.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "C"
                    },
                    {
                        "label": "Cooldown",
                        "value": "20s"
                    },
                    {
                        "label": "Light Boomerang Dart",
                        "value": ""
                    },
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Projectile Damage",
                        "value": "Deal 40 damage upon unleashing and 20 damage when retrieved."
                    },
                    {
                        "label": "Projectile Healing",
                        "value": "Heal 60 health upon unleashing and 30 health when retrieved."
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "150 m/s"
                    },
                    {
                        "label": "Projectile Maximum Flight Duration",
                        "value": "30m"
                    },
                    {
                        "label": "Self Healing",
                        "value": "35/s"
                    },
                    {
                        "label": "Self Healing Duration",
                        "value": "Grant 2s of self healing for each target hit"
                    },
                    {
                        "label": "Dark Darts",
                        "value": ""
                    },
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Projectile Damage",
                        "value": "Deal 50 damage. Affect a single target at most once."
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "100 m/s"
                    },
                    {
                        "label": "Slow Rate",
                        "value": "35%"
                    },
                    {
                        "label": "Slow Duration",
                        "value": "3s"
                    },
                    {
                        "label": "Phased State Duration",
                        "value": "2s"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20251212/67962d9c-35dd-4d15-9e06-5f85ea2c0aff.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "250"
            },
            {
                "label": "Movement Speed",
                "value": "6 m/s"
            }
        ],
        "forms": [
            "Psylocke"
        ]
    },
    "rocket-raccoon": {
        "nickname": "ROCKET RACCOON",
        "realName": "ROCKET RACCOON",
        "roles": [
            "STRATEGIST"
        ],
        "intro": "Rocket may not look like a tech genius or an expert tactician, but anyone who's ever made his hit list has quickly regretted underestimating him. This savvy space soldier is equally eager to boost his teammates and to collect bounties on his foes.",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Bombard Mode",
                "description": "Fire energy projectiles that deal damage",
                "key": "Left Click",
                "icon": "static/heroes/abilities/rocket-raccoon-1-bombard-mode.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Rapid-fire, delayed projectile"
                    },
                    {
                        "label": "Damage",
                        "value": "16 damage per round"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "180 m/s"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 10m, decreasing to 40% at 20m"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "12.05 rounds per second"
                    },
                    {
                        "label": "Ammo",
                        "value": "45"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "Yes"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/6d5fc9e6-f194-494f-bcb9-a0eea60e7f60.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Repair Mode",
                "description": "Shoot bouncing spheres to heal allies",
                "key": "Right Click",
                "icon": "static/heroes/abilities/rocket-raccoon-2-repair-mode.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast projectile with delayed impact that also generates a spell field"
                    },
                    {
                        "label": "Healing Amount (Ally)",
                        "value": "50/s"
                    },
                    {
                        "label": "One-time Healing Amount",
                        "value": "55"
                    },
                    {
                        "label": "Healing Amount (Self)",
                        "value": "30/s"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "80 m/s"
                    },
                    {
                        "label": "Range",
                        "value": "5m spherical radius"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "2 rounds per second"
                    },
                    {
                        "label": "Ammo",
                        "value": "8"
                    },
                    {
                        "label": "Duration",
                        "value": "5s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "One-time healing for allies when projectile hits them，Bouncing Spheres will bounce off surfaces upon contact, with a maximum of 10 bounces. When they approach injured allies, their speed will reduce"
                    },
                    {
                        "label": "Projectile Speed Reduction",
                        "value": "7 m/s"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/8e83a73c-dbc6-4d8b-bf0e-2f6fbffe20a4.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "C.Y.A.",
                "description": "Deploy a Cosmic Yarn Amplifier that grants allies a Damage Boost",
                "key": "Q",
                "icon": "static/heroes/abilities/rocket-raccoon-3-c-y-a.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Targeted ability that, when activated, summons a creature and detects allies within the area."
                    },
                    {
                        "label": "Damage Boost",
                        "value": "40%"
                    },
                    {
                        "label": "Bonus Health",
                        "value": "100/s"
                    },
                    {
                        "label": "Bonus Max Health",
                        "value": "150"
                    },
                    {
                        "label": "Range",
                        "value": "20m radius"
                    },
                    {
                        "label": "Duration",
                        "value": "12s"
                    },
                    {
                        "label": "Summons' Health",
                        "value": "800"
                    },
                    {
                        "label": "Special Effect",
                        "value": "During the ability's duration, linked allies will receive an additional 100 Bonus Health points per second, capping at 150. After breaking the link, this bonus starts to falloff after 1 second at a rate of 75 per/s"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "4300"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/8fa6c871-fb91-4115-bf94-a1ccf6f12d2c.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Jetpack Dash",
                "description": "Dash forward",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/rocket-raccoon-4-jetpack-dash.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Casting",
                        "value": "Dash"
                    },
                    {
                        "label": "Dash Direction",
                        "value": "Crosshair Direction"
                    },
                    {
                        "label": "Dash Distance",
                        "value": "8m"
                    },
                    {
                        "label": "Cooldown",
                        "value": "2 charges, with each charge taking 10s to recharge"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/66c6ccca-0e2b-4c87-87c3-29fddfa3b4c1.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "B.R.B.",
                "description": "Deploy a Battle Rebirth Beacon that revives a fallen ally and periodically produces armor packs and rocket jet packs",
                "key": "E",
                "icon": "static/heroes/abilities/rocket-raccoon-5-b-r-b.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Summons"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Generate an item every 3s, including Armor Pack and Rocket Boots"
                    },
                    {
                        "label": "Maximum Revive Distance",
                        "value": "50m"
                    },
                    {
                        "label": "Bonus Health From Armor Pack",
                        "value": "25"
                    },
                    {
                        "label": "Duration",
                        "value": "300s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "40s. You can reclaim the beacon by pressing E. When reclaimed, the cooldown will be reduced based on the beacon's remaining health. If you reclaim a full-health beacon, the minimum cooldown will be 5s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/f5f99d54-aeaa-4dc8-bad1-7c0e390434cf.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Wild Crawl",
                "description": "Hold Space to run on a wall",
                "key": "Space",
                "icon": "static/heroes/abilities/rocket-raccoon-6-wild-crawl.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Space"
                    },
                    {
                        "label": "Wall-Crawling Speed",
                        "value": "8m/s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/2bf79c26-d564-4a9e-8148-85e5b44add4f.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Flying Ace",
                "description": "Hold Space to fall slowly",
                "key": "Space",
                "icon": "static/heroes/abilities/rocket-raccoon-7-flying-ace.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Space"
                    },
                    {
                        "label": "Descending Speed",
                        "value": "3.5m/s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/75456c26-a53f-4d7e-955f-b663d7dd337a.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Old Friends",
                "description": "Jeff the Land Shark and Rocket Raccoon can ride on Groot's shoulders, receiving Damage Reduction",
                "key": "C",
                "icon": "static/heroes/abilities/rocket-raccoon-8-old-friends.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "C"
                    },
                    {
                        "label": "Casting",
                        "value": "Targeted"
                    },
                    {
                        "label": "Range",
                        "value": "Up to 12m"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Pressing SHIFT will exit the Team-Up status with Groot"
                    },
                    {
                        "label": "Damage Reduction",
                        "value": "0.35"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/8f92cf82-a9bb-4c40-bb3c-2aa6aebc9c6d.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "250"
            },
            {
                "label": "Movement Speed",
                "value": "6 m/s"
            }
        ],
        "forms": [
            "ROCKET RACCOON"
        ]
    },
    "rogue": {
        "nickname": "ROGUE",
        "realName": "ANNA MARIE",
        "roles": [
            "VANGUARD"
        ],
        "intro": "Anna Marie possesses the Mutant ability to absorb the powers of others with a touch. Her ever-adaptable arsenal of superhuman abilities helps turn the tide of any fight. After touching Raw Chronovium, Rogue's strength soared to new heights, allowing her to overwhelm enemies with unstoppable force!",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Power Surge Punch",
                "description": "Punch forward with both fists",
                "key": "Left Click",
                "icon": "static/heroes/abilities/rogue-1-power-surge-punch.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Melee"
                    },
                    {
                        "label": "Damage",
                        "value": "The first two strikes deal 35 damage, while the third strike deals 45 damage"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "4.5m"
                    },
                    {
                        "label": "Attack Speed",
                        "value": "The first two strikes: 0.33s/hit; the third strike: 0.73s/hit"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20251212/60a3fc70-a087-4e74-a818-74f20c3764b6.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Defensive Stance",
                "description": "Absorb nearby projectiles and reduce incoming damage; absorbed damage powers up your next Southern Brawl",
                "key": "Right Click",
                "icon": "static/heroes/abilities/rogue-2-defensive-stance.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Damage Reduction",
                        "value": "60%"
                    },
                    {
                        "label": "Maximum Energy",
                        "value": "100"
                    },
                    {
                        "label": "Energy Recovery Speed",
                        "value": "15/s"
                    },
                    {
                        "label": "Energy Consumption",
                        "value": "50/s"
                    },
                    {
                        "label": "Energy Required to Activate the Ability",
                        "value": "30"
                    },
                    {
                        "label": "Special Effect",
                        "value": "The reduced damage transforms into backlash energy that powers up the next Southern Brawl."
                    },
                    {
                        "label": "Reduced Damage-Backlash Energy Conversion Ratio",
                        "value": "0.55"
                    },
                    {
                        "label": "Maximum Backlash Energy",
                        "value": "100"
                    },
                    {
                        "label": "Maximum Backlash Energy Falloff",
                        "value": "20/s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20251212/6df4eb8d-f7ba-4808-8680-073c0f1286af.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Southern Brawl",
                "description": "While in Defensive Stance, dash forward and slam enemies in front, dealing area damage",
                "key": "Left Click",
                "icon": "static/heroes/abilities/rogue-3-southern-brawl.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Dash Distance",
                        "value": "8m"
                    },
                    {
                        "label": "Base Damage",
                        "value": "40"
                    },
                    {
                        "label": "Backlash Energy-Extra Damage Conversion Ratio",
                        "value": "0.9"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Launch up the enemies hit"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "8m"
                    },
                    {
                        "label": "Cooldown",
                        "value": "6s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20251212/965eb4f6-cddc-4a8d-8c72-8be39286bc1a.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Chrono Kick Combo",
                "description": "Dash forward and launch the enemy, entering flight; activate again to Knock Down nearby enemies. Your next two Power Surge Punch attacks become ranged, piercing enemies and granting Bonus Health",
                "key": "E",
                "icon": "static/heroes/abilities/rogue-4-chrono-kick-combo.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "Box shaped spell field. Length: 6.5m; Width: 4.5m; Height: 2m"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "30"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Launch up the enemy hit, entering flight. The next two Power Surge Punch attacks become ranged, and Chrono Kick Combo can be unleashed again."
                    },
                    {
                        "label": "Maximum Flight Duration",
                        "value": "3s"
                    },
                    {
                        "label": "Knock Down Spell Field Damage",
                        "value": "30"
                    },
                    {
                        "label": "Knock Down Spell Field Range",
                        "value": "6m radius spherical spell field"
                    },
                    {
                        "label": "Projectile Damage",
                        "value": "60"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "100 m/s"
                    },
                    {
                        "label": "Projectile Maximum Flying Distance",
                        "value": "20m"
                    },
                    {
                        "label": "Cooldown",
                        "value": "10s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20251212/f4b1d6b3-447e-47fd-bc18-9585ca699b80.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Fatal Attraction",
                "description": "Dash forward. Press again to unleash a burst of Chronovium Power, dealing continuous damage to nearby foes; after a delay, the energy retracts, pulling all enemies towards Rogue",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/rogue-5-fatal-attraction.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Dash Distance",
                        "value": "10m"
                    },
                    {
                        "label": "Dash Damage",
                        "value": "30"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Launch up enemies hit"
                    },
                    {
                        "label": "Spreading Spell Field Range",
                        "value": "Cylindrical Spell Field with a height of 3m, whose radius will expand to 8m after 0.8s"
                    },
                    {
                        "label": "Spreading Spell Field Damage",
                        "value": "40/s"
                    },
                    {
                        "label": "Retrieve Spell Field Damage",
                        "value": "30"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20251212/922413ba-afba-4475-b0f1-97e46caec2a3.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Ability Absorption",
                "description": "Dash forward to knock down your target and absorb their energy; after absorbing, replace Ability Absorption with one of their abilities or refresh Fatal Attraction. Also absorb Health and stats based on their role",
                "key": "F",
                "icon": "static/heroes/abilities/rogue-6-ability-absorption.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Dash Distance",
                        "value": "10m"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Knock down the target. Rogue becomes Unstoppable during the absorption."
                    },
                    {
                        "label": "Absorption Damage Over Time",
                        "value": "30/s"
                    },
                    {
                        "label": "Absorption Healing Over Time",
                        "value": "60/s"
                    },
                    {
                        "label": "Absorbed Ability Duration",
                        "value": "10s"
                    },
                    {
                        "label": "Boost from Vanguard Ability Absorption",
                        "value": "125 Maximum Health"
                    },
                    {
                        "label": "Debuff to the Vanguard Absorption Target",
                        "value": "Reduce 20 Maximum Health"
                    },
                    {
                        "label": "Boost from Duelist Ability Absorption",
                        "value": "20% Damage Boost"
                    },
                    {
                        "label": "Debuff to the Duelist Absorption Target",
                        "value": "Reduce 3% damage dealt"
                    },
                    {
                        "label": "Boost from Strategist Ability Absorption",
                        "value": "Self healing 20/s"
                    },
                    {
                        "label": "Debuff to the Strategist Absorption Target",
                        "value": "Reduce 4% healing dealt"
                    },
                    {
                        "label": "Absorption Process",
                        "value": "0.75s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "After absorbing, replace Ability Absorption with one of their abilities or refresh Fatal Attraction."
                    },
                    {
                        "label": "Cooldown",
                        "value": "25s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20251212/20a291b6-507e-4d9b-bd23-b215f1feb887.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Heartbreaker",
                "description": "Continuously absorb Ultimate Ability Energy from nearby enemies and steal stats based on their role",
                "key": "Q",
                "icon": "static/heroes/abilities/rogue-7-heartbreaker.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Duration",
                        "value": "8s"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "3400"
                    },
                    {
                        "label": "Ultimate Ability Energy Absorption Speed",
                        "value": "Absorb 4% of ultimate ability energy per second"
                    },
                    {
                        "label": "Maximum Stats Stolen from Vanguards",
                        "value": "400 maximum health"
                    },
                    {
                        "label": "Maximum Stats Stolen from Duelists",
                        "value": "35% damage boost"
                    },
                    {
                        "label": "Maximum Stats Stolen from Strategists",
                        "value": "Self healing 75/s"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "8m radius spherical spell field"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "15/s"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20251212/c5ba783e-9ca3-436c-bcaa-a1dc284b6355.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "HEARTS AS ONE",
                "description": "Gambit shares kinetic energy with Magneto and Rogue. When Magneto activates this ability, Iron Volley is replaced with Ace Greatsword, which detonates upon striking enemies. The explosion leaves residual kinetic energy within the target, inflicting secondary damage after a brief delay. When Rogue activates the ability, each of her attacks causes a kinetic explosion that damages nearby enemies and heals nearby allies",
                "key": "C",
                "icon": "static/heroes/abilities/rogue-8-hearts-as-one.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "C"
                    },
                    {
                        "label": "Spell Field Duration",
                        "value": "8s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "30s"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "5+targets' 2% Maximum Health"
                    },
                    {
                        "label": "Spell Field Healing",
                        "value": "25"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "8m radius spherical spell field"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20251212/c5b731bf-5102-4caf-96d1-ba09c16e4e87.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "675"
            },
            {
                "label": "Movement Speed",
                "value": "600"
            }
        ],
        "forms": [
            "ROGUE"
        ]
    },
    "scarlet-witch": {
        "nickname": "SCARLET WITCH",
        "realName": "WANDA MAXIMOFF",
        "roles": [
            "DUELIST"
        ],
        "intro": "Wanda Maximoff is adept at harnessing formidable chaos magic, casting hexes with the power to twist and reshape reality itself. Energy, space, and matter are mere playthings in the hands of Scarlet Witch!",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Chaos Control",
                "description": "Unleash Chaos Magic on enemies to deal damage and restore Chaos Energy",
                "key": "Left Click",
                "icon": "static/heroes/abilities/scarlet-witch-1-chaos-control.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Cylindrical Spell Field"
                    },
                    {
                        "label": "Range",
                        "value": "A cylindrical spell field with a radius of 3m and a height of 20m"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "0.1s per hit"
                    },
                    {
                        "label": "Damage",
                        "value": "8.5 per hit"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 10m, decreasing to 90% at 20m"
                    },
                    {
                        "label": "Chthonian Burst Recharge Per Hit",
                        "value": "0.15 per hit"
                    },
                    {
                        "label": "Ammo",
                        "value": "Infinite"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "No"
                    },
                    {
                        "label": "Special Effect 1",
                        "value": "Attack the nearest enemy within range"
                    },
                    {
                        "label": "Special Effect 2",
                        "value": "Hitting with Chaos Control charges Chthonian Burst"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/9df1d11b-6486-4f0e-83a8-b7e5dca461b6.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Reality Erasure",
                "description": "Engage in free-flight while charging energy, then unleash it to deal massive damage",
                "key": "Q",
                "icon": "static/heroes/abilities/scarlet-witch-2-reality-erasure.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Spherical Spell Field"
                    },
                    {
                        "label": "Range",
                        "value": "15m spherical radius"
                    },
                    {
                        "label": "Damage",
                        "value": "9999"
                    },
                    {
                        "label": "Charge Time",
                        "value": "4s"
                    },
                    {
                        "label": "Slow Rate",
                        "value": "Begin to slow down by 1.5s, with the effect gradually increasing to -25% by 3.5s"
                    },
                    {
                        "label": "Bonus Health (Self)",
                        "value": "100"
                    },
                    {
                        "label": "Special Effect",
                        "value": "During this period, Scarlet Witch enters a Free-flight state, pulls in nearby enemies (within 15m radius) during cast charge. Max pull speed up to 3m/s"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "3400"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/9fe279e3-1ca1-4202-b925-4eaddc649f14.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Mystic Projection",
                "description": "Enter the Phased state for free-flight. Press again to exit early",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/scarlet-witch-3-mystic-projection.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Casting",
                        "value": "Dash"
                    },
                    {
                        "label": "Duration",
                        "value": "1.5s"
                    },
                    {
                        "label": "Movement Boost",
                        "value": "50%"
                    },
                    {
                        "label": "Charges",
                        "value": "2"
                    },
                    {
                        "label": "Recharge Speed",
                        "value": "10s per charge"
                    },
                    {
                        "label": "Special Effect",
                        "value": "During this period, Scarlet Witch enters the Projection state, can be healed by teammates"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/a1bd056d-4040-4dda-a79a-c1c721718e2b.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Dark Seal",
                "description": "Land a hit on a target or the scene, or press E to generate a Force Field that periodically Stuns enemies within range",
                "key": "E",
                "icon": "static/heroes/abilities/scarlet-witch-4-dark-seal.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Straight-line projectile that generates a spell field upon impact"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "60 m/s"
                    },
                    {
                        "label": "Spell Field Generation Delay",
                        "value": "0.8s"
                    },
                    {
                        "label": "Range",
                        "value": "3m spherical radius"
                    },
                    {
                        "label": "Spell Field Duration",
                        "value": "4.5s"
                    },
                    {
                        "label": "Detection Interval",
                        "value": "1.25s"
                    },
                    {
                        "label": "Stun Duration Per Detection",
                        "value": "0.5s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/06d393d2-e8b7-443c-8e04-3696ecefac86.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Telekinesis",
                "description": "Hold Space to fall slowly",
                "key": "Space",
                "icon": "static/heroes/abilities/scarlet-witch-5-telekinesis.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Space"
                    },
                    {
                        "label": "Horizontal Movement Speed",
                        "value": "6 m/s"
                    },
                    {
                        "label": "Descending Speed",
                        "value": "3.5 m/s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/2893e078-cc3e-49ec-8447-4ff73a549139.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Chthonian Burst",
                "description": "Consume Chaos Energy to fire explosive magic missiles, damaging enemies",
                "key": "Right Click",
                "icon": "static/heroes/abilities/scarlet-witch-6-chthonian-burst.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Straight-line projectile that generates a spell field upon impact"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "120 m/s"
                    },
                    {
                        "label": "Projectile Damage",
                        "value": "40"
                    },
                    {
                        "label": "Range",
                        "value": "3m spherical radius"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "40"
                    },
                    {
                        "label": "Charges",
                        "value": "4"
                    },
                    {
                        "label": "Default Charging Speed",
                        "value": "0.2/s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/97e67269-1308-46d2-aef0-99ef179d9748.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Sorcery Surge",
                "description": "Doctor Strange shares his arcane mastery, replacing Scarlet Witch's Chthonian Burst with Mystic Burst upon activation. Hold down the attack button to unleash a rapid, relentless salvo of magical missiles in the target direction",
                "key": "Right Click",
                "icon": "static/heroes/abilities/scarlet-witch-7-sorcery-surge.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Straight-line projectile that generates a spell field upon impact"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "120 m/s"
                    },
                    {
                        "label": "Projectile Damage",
                        "value": "10"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "1.5m spherical radius"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "6"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "0.15s per round"
                    },
                    {
                        "label": "Duration",
                        "value": "10s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "30s"
                    },
                    {
                        "label": "Special Mechanic",
                        "value": "Chaos Control can released during the Sorcery Surge"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250410/99eb7c66-a521-4b6b-aa54-1048db609e28.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "250"
            },
            {
                "label": "Movement Speed",
                "value": "6 m/s"
            }
        ],
        "forms": [
            "SCARLET WITCH"
        ]
    },
    "spider-man": {
        "nickname": "SPIDER-MAN",
        "realName": "PETER PARKER",
        "roles": [
            "DUELIST"
        ],
        "intro": "Swinging around the arena on his signature weblines, your friendly neighborhood Spider-Man, AKA Peter Parker, catches his rivals by surprise with sneaky, sticky bursts of webbing and unexpected attacks from above. Look out… here comes the Spider-Man!",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Spider-Power",
                "description": "Swing fists forward to strike, dealing extra damage to the enemy with a Spider-Tracer",
                "key": "Left Click",
                "icon": "static/heroes/abilities/spider-man-1-spider-power.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Melee"
                    },
                    {
                        "label": "Special Mechanic",
                        "value": "The default attack is a punch, but after landing two consecutive punches, the next attack will be a flying kick"
                    },
                    {
                        "label": "Punch",
                        "value": ""
                    },
                    {
                        "label": "Damage",
                        "value": "25"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "3m"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "0.37s per punch"
                    },
                    {
                        "label": "Kick",
                        "value": ""
                    },
                    {
                        "label": "Damage",
                        "value": "40"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "4m"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "0.82s per kick"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/b69dc2e7-1a28-471e-a000-19b06a1adac4.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Web-Cluster",
                "description": "Shoot a Web-Cluster that deals damage and attaches a Spider-Tracer to the hit enemy",
                "key": "Right Click",
                "icon": "static/heroes/abilities/spider-man-2-web-cluster.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Projectile that fires in a straight trajectory"
                    },
                    {
                        "label": "Charges",
                        "value": "5"
                    },
                    {
                        "label": "Recharge Speed",
                        "value": "2s per shot"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "120 m/s"
                    },
                    {
                        "label": "Damage",
                        "value": "30"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 20m, decreasing to 50% at 40m"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "No"
                    },
                    {
                        "label": "Spider-Tracer Duration",
                        "value": "3s"
                    },
                    {
                        "label": "Spider-Tracer Damage",
                        "value": "45"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/51836fcc-b278-46b2-80d6-3450f9902f18.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Spectacular Spin",
                "description": "Launch Web-Clusters all around to damage and Stun enemies",
                "key": "Q",
                "icon": "static/heroes/abilities/spider-man-3-spectacular-spin.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Spherical Spell Field"
                    },
                    {
                        "label": "Range",
                        "value": "8m spherical radius"
                    },
                    {
                        "label": "Duration",
                        "value": "2.4s"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "0.08s per hit"
                    },
                    {
                        "label": "Damage",
                        "value": "15 damage per hit"
                    },
                    {
                        "label": "Bonus Health (Self)",
                        "value": "250"
                    },
                    {
                        "label": "Slow Effect",
                        "value": "-3% per hit"
                    },
                    {
                        "label": "Slow Duration",
                        "value": "1s"
                    },
                    {
                        "label": "Hits Required to Stun",
                        "value": "20"
                    },
                    {
                        "label": "Stun Duration",
                        "value": "1.5s"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "2800"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Striking an enemy applies a stacking Slow effect, and after reaching a certain number of stacks, the enemy will be Stunned"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/df0e1190-adea-471c-aa47-186aaabe41dc.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Web-Swing",
                "description": "Shoot a strand of webbing to swing.",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/spider-man-4-web-swing.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Casting",
                        "value": "Dash"
                    },
                    {
                        "label": "Maximum Webbing Length",
                        "value": "30m"
                    },
                    {
                        "label": "Charges",
                        "value": "3"
                    },
                    {
                        "label": "Recharge Speed",
                        "value": "6s per charge"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/fb95e6a5-5e9d-44d7-b565-2cda190e0cb8.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Get Over Here!",
                "description": "Shoot webbing to reel in the hit enemy. If the enemy is tagged with a Spider-Tracer, Spider-Man will get pulled to them instead",
                "key": "E",
                "icon": "static/heroes/abilities/spider-man-5-get-over-here.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Projectile that fires in a straight trajectory"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "80 m/s"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "20m"
                    },
                    {
                        "label": "Projectile Damage",
                        "value": "25"
                    },
                    {
                        "label": "Kicking Distance",
                        "value": "24m"
                    },
                    {
                        "label": "Kick Damage",
                        "value": "55"
                    },
                    {
                        "label": "Cooldown",
                        "value": "8s"
                    },
                    {
                        "label": "Special Mechanic",
                        "value": "Attack enemies marked with a Spider-Tracer, pulling Spider-Man towards them and performing a flying kick"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/d3b40d5d-cb78-4e6d-990c-0ec61404f8e0.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Amazing Combo",
                "description": "Launch an enemy upward, dealing extra damage to the enemy with a Spider-Tracer",
                "key": "F",
                "icon": "static/heroes/abilities/spider-man-6-amazing-combo.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Casting",
                        "value": "Melee"
                    },
                    {
                        "label": "Range",
                        "value": "4m spherical radius"
                    },
                    {
                        "label": "Damage",
                        "value": "70"
                    },
                    {
                        "label": "Charges",
                        "value": "2"
                    },
                    {
                        "label": "Recharge Speed",
                        "value": "6s per charge"
                    },
                    {
                        "label": "Cooldown",
                        "value": "2s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/db4cbe9c-98b6-47b2-849b-655e63c86f87.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Thwip and Flip",
                "description": "Perform a double jump",
                "key": "Space",
                "icon": "static/heroes/abilities/spider-man-7-thwip-and-flip.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Space"
                    },
                    {
                        "label": "Special Mechanic",
                        "value": "Can only be cast again after landing"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241124/82debb10-0166-41c3-914e-9dee98cd30af.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Spider-Sense",
                "description": "Give a warning of enemies that have been around",
                "key": "Passive",
                "icon": "static/heroes/abilities/spider-man-8-spider-sense.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Disappearance Time To Trigger Detection",
                        "value": "3s"
                    },
                    {
                        "label": "Range",
                        "value": "8m spherical radius"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/70f075d3-fdcc-4339-b537-061af16fae55.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Wall Crawl",
                "description": "Press Space to wall crawl, and while crawling, left-click to sprint",
                "key": "Space",
                "icon": "static/heroes/abilities/spider-man-9-wall-crawl.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Space"
                    },
                    {
                        "label": "Wall-Crawling Speed",
                        "value": "3 m/s"
                    },
                    {
                        "label": "Sprinting Speed",
                        "value": "9 m/s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/e0ab4409-cfaa-4e13-9731-240a09a6a553.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Inferno Blast",
                "description": "Human Torch stores Pyrokinetic Energy in Spider-Man's suit, enabling him to unleash an Inferno Blast that sprays a fiery web while performing a backflip to create distance. The flames damage enemies and apply a Burn-Tracer. Detonating these Burn-Tracers inflicts Damage Over Time",
                "key": "C",
                "icon": "static/heroes/abilities/spider-man-10-inferno-blast.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "C"
                    },
                    {
                        "label": "Damage",
                        "value": "30"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "8m"
                    },
                    {
                        "label": "Burn-Tracer Duration",
                        "value": "3s"
                    },
                    {
                        "label": "Burn-Tracer DoT Duration",
                        "value": "4s"
                    },
                    {
                        "label": "Burn-Tracer DoT Damage",
                        "value": "15/s"
                    },
                    {
                        "label": "Backflip Distance",
                        "value": "7m"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250712/76419110-b69d-460d-a1d3-4ccbceb7f6de.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Sticky Spider-Bomb",
                "description": "Cyber-Spiders Peni Parker whips up a Sticky Bomb for Spider-Man! Prime it, then toss it before the timer's up for a blast that damages nearby enemies and attaches a Spider-Tracer to them. If not thrown in time, it explodes on Spider-Man, recharging a Web-Cluster shot and granting Bonus Health",
                "key": "C",
                "icon": "static/heroes/abilities/spider-man-11-sticky-spider-bomb.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "C"
                    },
                    {
                        "label": "Countdown Duration",
                        "value": "3s"
                    },
                    {
                        "label": "Projectile Damage",
                        "value": "10"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "30"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "5m radius spherical spell field"
                    },
                    {
                        "label": "Bonus Health",
                        "value": "50"
                    },
                    {
                        "label": "Cooldown",
                        "value": "20"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260117/65af9b66-0441-49bc-aa49-9756d53c483d.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "250"
            },
            {
                "label": "Movement Speed",
                "value": "6 m/s"
            }
        ],
        "forms": [
            "SPIDER-MAN"
        ]
    },
    "squirrel-girl": {
        "nickname": "SQUIRREL GIRL",
        "realName": "DOREEN GREEN",
        "roles": [
            "DUELIST"
        ],
        "intro": "Possessing only the powers of a common squirrel, somehow Doreen Green manages to defeat seemingly invincible enemies in the most unexpected ways. Any foe who counts her out is bound to fall at the hands of the Unbeatable Squirrel Girl!",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Burst Acorn",
                "description": "Shoot bouncing Burst Acorns",
                "key": "Left Click",
                "icon": "static/heroes/abilities/squirrel-girl-1-burst-acorn.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Arced projectile that generates a spell field upon impact"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "80 m/s"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "3m spherical radius"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "110"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "70% falloff at 3m"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "1.49 acorns per second"
                    },
                    {
                        "label": "Ammo",
                        "value": "12"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "No"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/662dd801-7b3c-4929-bca7-4696b104811d.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Unbeatable Squirrel Tsunami",
                "description": "Summon a horde of squirrels to charge forward, dealing damage while bouncing against structures",
                "key": "Q",
                "icon": "static/heroes/abilities/squirrel-girl-2-unbeatable-squirrel-tsunami.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Duration",
                        "value": "10s"
                    },
                    {
                        "label": "Range",
                        "value": "Length: 3m, Width: 5m, Height: 1.75m"
                    },
                    {
                        "label": "Damage",
                        "value": "150"
                    },
                    {
                        "label": "Squirrel Horde Health",
                        "value": "300"
                    },
                    {
                        "label": "Squirrel Horde Movement Speed",
                        "value": "9 m/s"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "2800"
                    },
                    {
                        "label": "Special Mechanic",
                        "value": "The squirrels will rush towards the nearest enemy after bouncing instead of bouncing randomly"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/f87d8f38-b7d1-4a62-9aaa-eb00423c38d2.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Tail Bounce",
                "description": "Rocket upwards with a bounce of her tail",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/squirrel-girl-3-tail-bounce.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Jump Height",
                        "value": "9m"
                    },
                    {
                        "label": "Cooldown",
                        "value": "8s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/cc6be0d3-f369-4fcf-861d-5e0f2594af1a.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Mammal Bond",
                "description": "Reload Burst Acorns and can use an ability without cooldown once in a short duration",
                "key": "E",
                "icon": "static/heroes/abilities/squirrel-girl-4-mammal-bond.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Maximum Duration",
                        "value": "5s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/5714be78-0962-47d3-b231-1a3b6d8d98d3.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Squirrel Blockade",
                "description": "Launch an acorn to unleash Squirrel Guards, Imprisoning the first hit enemy",
                "key": "Right Click",
                "icon": "static/heroes/abilities/squirrel-girl-5-squirrel-blockade.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Charged projectile with an arced trajectory"
                    },
                    {
                        "label": "Maximum Charge Time",
                        "value": "1.5s"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "20 - 60 m/s (Maximum speed is achieved after 0.7s of charging)"
                    },
                    {
                        "label": "Damage",
                        "value": "50"
                    },
                    {
                        "label": "Imprison Duration",
                        "value": "1.33s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "8s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/403af848-dda8-42f7-a2a0-b3d0959eeefe.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Squirrel Missile",
                "description": "When Iron Man, Ultron and Squirrel Girl team up, Ultron's Encephalo-Ray upgrades to Nano-Ray, firing a beam that pierces through all characters, dealing continuous damage to foes while healing allies; Squirrel Girl gains the Squirrel Missile ability. She directs a squirrel to ride Iron Man's nanotech glove as a homing missile. Upon hit, the squirrel flees just before a fiery explosion!",
                "key": "C",
                "icon": "static/heroes/abilities/squirrel-girl-6-squirrel-missile.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "C"
                    },
                    {
                        "label": "Damage",
                        "value": "75"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 4m, decreasing to 50% at 8m"
                    },
                    {
                        "label": "Explosion Range",
                        "value": "8m spherical radius spell field"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "40 m/s"
                    },
                    {
                        "label": "Projectile Radius",
                        "value": "0.5m"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Automatically track enemies within a horizontal angle of 60°, a vertical angle of 60°, and a maximum distance of 60m"
                    },
                    {
                        "label": "Cooldown",
                        "value": "20"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250711/6a1bbb2e-7ee1-436e-87f0-f23f25f5799e.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "275"
            },
            {
                "label": "Movement Speed",
                "value": "6 m/s"
            }
        ],
        "forms": [
            "SQUIRREL GIRL"
        ]
    },
    "star-lord": {
        "nickname": "STAR-LORD",
        "realName": "PETER QUILL",
        "roles": [
            "DUELIST"
        ],
        "intro": "Peter Quill lives to dazzle his foes on the battlefield with his signature swagger. As his element guns paint arcs of devastation, his acrobatic moves sail through the sky with unrivaled style. With performances this spectacular, it's no wonder that Star-Lord is so legendary!",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Element Guns",
                "description": "Shoot enemies with dual Element Guns",
                "key": "Left Click",
                "icon": "static/heroes/abilities/star-lord-1-element-guns.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Rapid-fire shots with spread."
                    },
                    {
                        "label": "Damage",
                        "value": "6.5 damage per round"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 10m, decreasing to 50% at 25m"
                    },
                    {
                        "label": "Crosshair Spread Radius (at 10m)",
                        "value": "After 2 consecutive shots, the spread increases to 0.15m; after 5 consecutive shots, the spread expands to 0.24m"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "40 rounds per second"
                    },
                    {
                        "label": "Ammo",
                        "value": "50"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "Yes"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/947d9975-ec6d-4d17-b00b-ce4642fafebc.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Galactic Legend",
                "description": "Engage in free-flight and lock on to enemies in sight",
                "key": "Q",
                "icon": "static/heroes/abilities/star-lord-2-galactic-legend.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Rapid-fire projectile."
                    },
                    {
                        "label": "Damage",
                        "value": "6.5 damage per round"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 25m, decreasing to 75% at 40m"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "40 rounds per second"
                    },
                    {
                        "label": "Ammo",
                        "value": "40"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "No"
                    },
                    {
                        "label": "Duration",
                        "value": "8s"
                    },
                    {
                        "label": "Movement Boost",
                        "value": "20%"
                    },
                    {
                        "label": "Reload Time Reduction",
                        "value": "70%"
                    },
                    {
                        "label": "Maximum Locking Distance",
                        "value": "40m"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "3100"
                    },
                    {
                        "label": "Special Mechanic",
                        "value": "During this period, Star-Lord's Reload Speed increases significantly"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/cdfdc8b1-27e7-4a28-a666-3a3387b92263.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Rocket Propulsion",
                "description": "Consume energy to gain a Movement Boost and soar forward",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/star-lord-3-rocket-propulsion.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Movement Boost",
                        "value": "100%"
                    },
                    {
                        "label": "Maximum Energy",
                        "value": "1800"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "300/s"
                    },
                    {
                        "label": "Energy Recovery Speed",
                        "value": "100/s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/2c065ae8-398d-4001-a38d-c30a2d4737bc.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Blaster Barrage",
                "description": "Fire a frenzy of shots, causing damage to enemies within range.",
                "key": "E",
                "icon": "static/heroes/abilities/star-lord-4-blaster-barrage.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Spherical Spell Field"
                    },
                    {
                        "label": "Duration",
                        "value": "3s"
                    },
                    {
                        "label": "Range",
                        "value": "8m spherical radius"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "0.1 per hit"
                    },
                    {
                        "label": "Damage",
                        "value": "7.5 damage per hit"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 4m, decreasing to 80% at 8m"
                    },
                    {
                        "label": "Cooldown",
                        "value": "8s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/00802ad1-6900-44dc-a134-258fae77b326.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Stellar Shift",
                "description": "Dodge in the direction of movement and swiftly reload",
                "key": "Right Click",
                "icon": "static/heroes/abilities/star-lord-5-stellar-shift.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Invincibility Duration",
                        "value": "0.37s"
                    },
                    {
                        "label": "Charges",
                        "value": "2"
                    },
                    {
                        "label": "Recharge Speed",
                        "value": "5s per charge"
                    },
                    {
                        "label": "Bonus Health",
                        "value": "Unleashing Stellar Shift will grant Star-Lord 25 Bonus Health. Maximum Bonus Health is 25. Bonus Health falloff begins at 3s, decreasing to 0 in 1s."
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/8f25f3a9-7dba-437d-b794-fed37ea2fdd3.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Astral Jump",
                "description": "Star-Lord gets a teleport to its deployment point from anywhere on the map",
                "key": "C",
                "icon": "static/heroes/abilities/star-lord-6-astral-jump.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "C"
                    },
                    {
                        "label": "Cooldown",
                        "value": "Teleport Cooldown 30s; jump device deployment Cooldown 5s."
                    },
                    {
                        "label": "Teleport Delay",
                        "value": "1s"
                    },
                    {
                        "label": "Summons' Health",
                        "value": "100"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250808/cd6417e5-8cbb-4e85-b34f-0e4d79875b80.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "250"
            },
            {
                "label": "Movement Speed",
                "value": "6 m/s"
            }
        ],
        "forms": [
            "STAR-LORD"
        ]
    },
    "storm": {
        "nickname": "STORM",
        "realName": "ORORO MUNROE",
        "roles": [
            "DUELIST"
        ],
        "intro": "An Omega-level Mutant ability to manipulate weather patterns makes Ororo Munroe a force to be reckoned with. Rain or shine, thunder or lightning, nature itself bends to the command of the Goddess of the Storm!",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Wind Blade",
                "description": "Launch forward-piercing Wind Blades",
                "key": "Left Click",
                "icon": "static/heroes/abilities/storm-1-wind-blade.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Projectile that fires in a straight trajectory"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "150m/s"
                    },
                    {
                        "label": "Damage",
                        "value": "55 damage per round"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 15m, decreasing to 60% at 30m"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "2 rounds per second"
                    },
                    {
                        "label": "Ammo",
                        "value": "12"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "No"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Wind Blade pierces through enemies"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/ac2de8df-0a48-4c10-b0be-090c2662d5e6.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Omega Hurricane",
                "description": "Transform into a hurricane to draw in nearby enemies and deal damage",
                "key": "Q",
                "icon": "static/heroes/abilities/storm-2-omega-hurricane.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Spherical Spell Field"
                    },
                    {
                        "label": "Maximum Selection Duration",
                        "value": "5s"
                    },
                    {
                        "label": "Tornado Duration",
                        "value": "5s"
                    },
                    {
                        "label": "Range",
                        "value": "8m spherical radius"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "2 hits per second"
                    },
                    {
                        "label": "Damage",
                        "value": "80"
                    },
                    {
                        "label": "Bonus Health (Self)",
                        "value": "450"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "3400"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Weather effects will be disabled during the Ultimate"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/618d0d4a-f522-4ea9-9f11-64de62abe3ad.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Weather Control",
                "description": "Switch the weather to empower allies: Tornado grants a Movement Boost; Thunder grants a Damage Boost",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/storm-3-weather-control.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Casting",
                        "value": "Spherical Spell Field"
                    },
                    {
                        "label": "Range",
                        "value": "15m spherical radius"
                    },
                    {
                        "label": "Tornado",
                        "value": ""
                    },
                    {
                        "label": "Movement Boost (Self)",
                        "value": "16%"
                    },
                    {
                        "label": "Movement Boost (Ally)",
                        "value": "8%"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Using Wind Blade and Bolt Rush under this aura grants Storm Bonus Health. Damage Conversion Ratio: 25%, up to a max of 75 Bonus Health"
                    },
                    {
                        "label": "Thunder",
                        "value": ""
                    },
                    {
                        "label": "Damage Boost (Self)",
                        "value": "12%"
                    },
                    {
                        "label": "Damage Boost (Ally)",
                        "value": "8%"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Under this aura, Wind Blade hits reduce Bolt Rush cooldown by 0.5s (only once per cast, even if hitting multiple enemies). Increase Bolt Rush spell field range radius from 1m to 1.5m"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/10b670aa-f6c6-4775-811a-5d9c4e3ae6cf.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Goddess Boost",
                "description": "Channel the power of the weather to empower Storm: Tornado grants a Movement Boost and inflicts Slow on enemies; Thunder grants a Damage Boost and summons lightning to inflict damage",
                "key": "E",
                "icon": "static/heroes/abilities/storm-4-goddess-boost.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Spherical Spell Field"
                    },
                    {
                        "label": "Range",
                        "value": "15m spherical radius"
                    },
                    {
                        "label": "Duration",
                        "value": "8s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "15s"
                    },
                    {
                        "label": "Enhanced Tornado",
                        "value": ""
                    },
                    {
                        "label": "Movement Boost (Self)",
                        "value": "40%"
                    },
                    {
                        "label": "Movement Boost (Ally)",
                        "value": "20%"
                    },
                    {
                        "label": "Enemy Slow Rate",
                        "value": "-15%"
                    },
                    {
                        "label": "Enhanced Thunder",
                        "value": ""
                    },
                    {
                        "label": "Damage Boost (Self)",
                        "value": "25%"
                    },
                    {
                        "label": "Damage Boost (Ally)",
                        "value": "15%"
                    },
                    {
                        "label": "Strike Frequency",
                        "value": "2s per strike"
                    },
                    {
                        "label": "Damage",
                        "value": "35"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/af7bafa6-fe10-45d2-8a65-f1523f9c5223.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Bolt Rush",
                "description": "Unleash a lightning bolt forward",
                "key": "Right Click",
                "icon": "static/heroes/abilities/storm-5-bolt-rush.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Straight Spell Field"
                    },
                    {
                        "label": "Range",
                        "value": "A cylindrical spell field with a radius of 1m and a height of 40m"
                    },
                    {
                        "label": "Damage",
                        "value": "80"
                    },
                    {
                        "label": "Cooldown",
                        "value": "8s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/644cd425-b90f-41dd-b750-8d11c36e04d1.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "ETERNAL WEATHER WITCH",
                "description": "Storm channels her elemental power into Adam Warlock. When Adam uses Soaring Surge, his movement speed is increased. While flying, Adam leaves behind a storm-charged trail that heals and speeds up allies within it",
                "key": "Passive",
                "icon": "static/heroes/abilities/storm-6-eternal-weather-witch.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "5% Damage Boost"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260320/65f6fbec-1e61-459b-b559-80d192045108.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "250"
            },
            {
                "label": "Movement Speed",
                "value": "6 m/s"
            }
        ],
        "forms": [
            "STORM"
        ]
    },
    "the-punisher": {
        "nickname": "THE PUNISHER",
        "realName": "FRANK CASTLE",
        "roles": [
            "DUELIST"
        ],
        "intro": "Expertly wielding a full arsenal of futuristic weapons, Frank Castle is a formidable one-man army. With a steadfast resolve to deliver justice to his enemies, The Punisher won't cease in his mission until every last round is fired!",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Adjudication",
                "description": "Fire at enemies with Adjudication, his Automatic Rifle",
                "key": "Left Click",
                "icon": "static/heroes/abilities/the-punisher-1-adjudication.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Rapid-fire projectile"
                    },
                    {
                        "label": "Damage",
                        "value": "20 damage per round"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 20m, decreasing to 85% at 40m"
                    },
                    {
                        "label": "Crosshair Spread Radius (at 10m)",
                        "value": "Up to a 0.075m radius."
                    },
                    {
                        "label": "Fire Rate",
                        "value": "10 rounds per second"
                    },
                    {
                        "label": "Ammo",
                        "value": "40"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "Yes"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/e755fe97-976b-43f7-90d8-e791ca310df1.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Deliverance",
                "description": "Fire at enemies with Deliverance, his Shotgun",
                "key": "Left Click",
                "icon": "static/heroes/abilities/the-punisher-2-deliverance.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Shotgun projectiles that hit instantly"
                    },
                    {
                        "label": "Damage",
                        "value": "10 damage per round"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 8m, decreasing to 40% at 15m"
                    },
                    {
                        "label": "Bullets Fired Each Cast",
                        "value": "16"
                    },
                    {
                        "label": "Crosshair Spread Radius (at 10m)",
                        "value": "0.6m"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "1.43 rounds per second"
                    },
                    {
                        "label": "Ammo",
                        "value": "8"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "Yes"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/b420c662-6d55-438d-932a-d2947005b6de.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Final Judgement",
                "description": "Unleash two Gatling guns and missiles to attack enemies",
                "key": "Q",
                "icon": "static/heroes/abilities/the-punisher-3-final-judgement.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Rapid-fire projectiles that hit instantly and have a tracking trajectory"
                    },
                    {
                        "label": "Duration",
                        "value": "10s"
                    },
                    {
                        "label": "Slow Rate While Idling",
                        "value": "-10%"
                    },
                    {
                        "label": "Slow Rate While Shooting",
                        "value": "-30%"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "3400"
                    },
                    {
                        "label": "Gatling Gun",
                        "value": ""
                    },
                    {
                        "label": "Damage",
                        "value": "8 damage per round"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 20m, decreasing to 70% at 40m"
                    },
                    {
                        "label": "Crosshair Spread Radius (at 10m)",
                        "value": "Start with a spread radius of 0.6m, which reduces to 0.3m after 50 shots, and further decreases to 0.15m after 100 shots"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "33.33 rounds per second"
                    },
                    {
                        "label": "Ammo",
                        "value": "Infinite"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "Yes"
                    },
                    {
                        "label": "Shoulder-mounted Missiles",
                        "value": ""
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "60 m/s"
                    },
                    {
                        "label": "Damage",
                        "value": "50"
                    },
                    {
                        "label": "Interval Between Volleys",
                        "value": "3s"
                    },
                    {
                        "label": "Interval Between Missiles",
                        "value": "0.3s"
                    },
                    {
                        "label": "Maximum Number of Missiles Per Volley",
                        "value": "8"
                    },
                    {
                        "label": "Maximum Number of Locked-on Missiles Per Target",
                        "value": "3"
                    },
                    {
                        "label": "Maximum Locking Distance",
                        "value": "40m"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/6695cf9f-352c-4bf3-aab1-1824ecf39c95.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Vantage Connection",
                "description": "Launch a hook to generate a cable that enables the Punisher to move rapidly by pressing F",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/the-punisher-4-vantage-connection.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Casting",
                        "value": "Dash"
                    },
                    {
                        "label": "Cable Attachment Angle",
                        "value": "20° - 160°"
                    },
                    {
                        "label": "Cable Length",
                        "value": "5m - 35m"
                    },
                    {
                        "label": "Dash Speed",
                        "value": "25 m/s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "20s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/e39565ca-3dfd-4794-bb51-23ec19256130.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Culling Turret",
                "description": "Deploy a Culling Turret that grounds Punisher and blocks damage from the front while dealing massive damage",
                "key": "E",
                "icon": "static/heroes/abilities/the-punisher-5-culling-turret.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Rapid-fire projectiles that create a spell field upon impact"
                    },
                    {
                        "label": "Damage",
                        "value": "10 damage per round"
                    },
                    {
                        "label": "Explosion Damage",
                        "value": "10 damage per round"
                    },
                    {
                        "label": "Explosion Range",
                        "value": "3m spherical radius"
                    },
                    {
                        "label": "Crosshair Spread Radius (at 10m)",
                        "value": "Start with a spread radius of 0.2m, which reduces to 0.1m after 10 shots, and further decreases to 0.05m after 20 shots"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "12.5 rounds per second"
                    },
                    {
                        "label": "Ammo",
                        "value": "200"
                    },
                    {
                        "label": "Turret Health",
                        "value": "600"
                    },
                    {
                        "label": "Cooldown",
                        "value": "20s"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/3806a440-7ae1-4a86-8b75-09c34be080fd.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Scourge Grenade",
                "description": "Throw a smoke grenade forward to obscure enemy vision and leap backward",
                "key": "Right Click",
                "icon": "static/heroes/abilities/the-punisher-6-scourge-grenade.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Projectile with an arced trajectory"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "40 m/s"
                    },
                    {
                        "label": "Range",
                        "value": "5m spherical radius"
                    },
                    {
                        "label": "Damage",
                        "value": "45"
                    },
                    {
                        "label": "Backward Jump Distance",
                        "value": "9m"
                    },
                    {
                        "label": "Cooldown",
                        "value": "8s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Create a temporary smokescreen that obstructs vision"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/d9b61f83-54c3-42e7-9ac1-aadb46562237.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Warrior's Gaze",
                "description": "Retain vision of enemies that disappear from view for a short duration",
                "key": "Passive",
                "icon": "static/heroes/abilities/the-punisher-7-warrior-s-gaze.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Retain vision of enemies that disappear from view for a short duration"
                    },
                    {
                        "label": "Range",
                        "value": "30m spherical radius"
                    },
                    {
                        "label": "Duration",
                        "value": "3s"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/c121a9dc-8597-45f7-8495-4dea1b7c043b.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "CUTTING-EDGE TECH",
                "description": "The Punisher upgrades Black Widow's arsenal, adding a Pulse Mode to her Red Room Rifle. While the ability is active, using Straight Shooter fires a pulse beam that deals piercing damage",
                "key": "Passive",
                "icon": "static/heroes/abilities/the-punisher-8-cutting-edge-tech.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "+25 Max Health, +5% Damage Boost"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250530/91bfb861-f201-4aa4-b40e-88860849e6a5.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "JUSTICE SENSE",
                "description": "Daredevil shares the location of his Sonic Pursuit target with The Punisher. At the same time, The Punisher can launch a devil-infused shock grenade to damage and blind enemies",
                "key": "C",
                "icon": "static/heroes/abilities/the-punisher-9-justice-sense.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "C"
                    },
                    {
                        "label": "Casting",
                        "value": "Projectile with an arced trajectory"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "40 m/s"
                    },
                    {
                        "label": "Range",
                        "value": "5m spherical radius"
                    },
                    {
                        "label": "Damage",
                        "value": "45"
                    },
                    {
                        "label": "Cooldown",
                        "value": "15s"
                    },
                    {
                        "label": "Blind Effect Duration",
                        "value": "1.5s"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20251011/6d08d915-d30d-4aad-9203-9055f7efab8c.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Ancient Judgement",
                "description": "The Punisher rides atop Devil Dinosaur, restricting him to only Adjudication/Deliverance and Scourge Grenade while disabling other abilities. While mounted, Devil Dinosaur absorbs a portion of all damage inflicted on The Punisher",
                "key": "X",
                "icon": "static/heroes/abilities/the-punisher-10-ancient-judgement.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "X"
                    },
                    {
                        "label": "Damage Reduction",
                        "value": "25%"
                    },
                    {
                        "label": "Conversion Ratio",
                        "value": "50%"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260518/c3b4a2ac-36b7-4335-a08e-3af594773db7.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "300"
            },
            {
                "label": "Movement Speed",
                "value": "6 m/s"
            }
        ],
        "forms": [
            "THE PUNISHER"
        ]
    },
    "the-thing": {
        "nickname": "THE THING",
        "realName": "BEN GRIMM",
        "roles": [
            "VANGUARD"
        ],
        "intro": "Benjamin J. Grimm is unquestionably the rock star of any team he's on. Always at the forefront of the fight, the Thing shields his allies with his unbreakable form, selflessly fending off any harm that comes their way.",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Rocky Jab",
                "description": "Rapidly punch forward",
                "key": "Left Click",
                "icon": "static/heroes/abilities/the-thing-1-rocky-jab.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast Spell Field"
                    },
                    {
                        "label": "Damage",
                        "value": "Double strike, 40 per hit"
                    },
                    {
                        "label": "Attack Range",
                        "value": "4m"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "Double strike 0.33s between attacks, 1s between sets."
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20250220/274bfd5f-02b6-4513-a80e-3f7685dc8556.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Stone Haymaker",
                "description": "Deliver a devastating Heavy Blow. Can Knock Down flying enemies.",
                "key": "Right Click",
                "icon": "static/heroes/abilities/the-thing-2-stone-haymaker.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast Spell Field"
                    },
                    {
                        "label": "Damage",
                        "value": "55+10% of enemies' max Health per hit"
                    },
                    {
                        "label": "Attack Range",
                        "value": "8m"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Move forward 3 meters while punching; gain Bonus Health equal to damage dealt (up to 100); once hit, this ability can knock down flying enemies to the ground"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250220/745e0798-e37f-431b-82d5-bc3d29f97d9b.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Yancy Street Charge",
                "description": "Continuously charge forward, launching up enemies and leaving behind a zone at the final position that prevents the use of mobility abilities",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/the-thing-3-yancy-street-charge.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Movement Boost",
                        "value": "100%"
                    },
                    {
                        "label": "Duration",
                        "value": "5s"
                    },
                    {
                        "label": "Damage",
                        "value": "Charge: 30; ground slam: 20; immobilization zone: 15 per/s"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "Ground slam: 8m radius, 2.5m high cylindrical spell field. Immobilization zone: 8m radius, 4m high cylindrical spell field"
                    },
                    {
                        "label": "Cooldown",
                        "value": "10s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Gain 200 Bonus Health during skill activation"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250220/824cffd2-00d5-43a7-8e88-3c72d432ca92.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Embattled Leap",
                "description": "Jump toward an ally and apply damage reduction to yourself and allies within the landing area",
                "key": "E",
                "icon": "static/heroes/abilities/the-thing-4-embattled-leap.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Targeted"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "20m"
                    },
                    {
                        "label": "Cooldown",
                        "value": "Basic Cooldown 3s, with a charge of 10s per use"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Apply a 20% damage reduction effect to self and 20% damage reduction to all allies within 5m of his landing point for 3s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250220/59664e33-bdbf-4243-b93a-7583f1712cad.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Battle Blitz",
                "description": "Jump toward an enemy and apply Vulnerability to enemies within the landing area",
                "key": "F",
                "icon": "static/heroes/abilities/the-thing-5-battle-blitz.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "CASTING",
                        "value": "Targeted"
                    },
                    {
                        "label": "MAXIMUM DISTANCE",
                        "value": "20m"
                    },
                    {
                        "label": "COOLDOWN",
                        "value": "Basic Cooldown 3s, with a charge of 10s per use, shares the same Cooldown with the E Key ability"
                    },
                    {
                        "label": "SPECIAL EFFECT",
                        "value": "Apply a 20% Vulnerability to all enemies within 5m of his landing point for 3s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20251104/22edee34-cf90-486d-9f16-4959ca72aec6.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Clobberin' Time",
                "description": "Use immense power to launch up all enemies in front of the Thing into the air",
                "key": "Q",
                "icon": "static/heroes/abilities/the-thing-6-clobberin-time.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "2800"
                    },
                    {
                        "label": "Range",
                        "value": "Step spell field: 3m high, 10m wide, advancing 2m every 0.1 seconds, up to a maximum of 18m"
                    },
                    {
                        "label": "Damage",
                        "value": "100"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Stun duration 2.5s"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250220/27486433-769b-4aec-ba7b-d7da3cabd52f.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Unyielding Will",
                "description": "Immune to launch-up, knock-back, and other displacement effects",
                "key": "PASSIVE",
                "icon": "static/heroes/abilities/the-thing-7-unyielding-will.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "PASSIVE"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Immune to launch-up, knock-back, and other displacement effects"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20250220/3898e125-f9bf-4d44-8b4d-9aeec6873187.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Cosmic Fastball",
                "description": "Wolverine and The Thing can interact with each other. Once both parties confirm, The Thing can lift Wolverine and press the key to hurl him forward",
                "key": "Z",
                "icon": "static/heroes/abilities/the-thing-8-cosmic-fastball.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Z"
                    },
                    {
                        "label": "Casting",
                        "value": "Targeted"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "20m"
                    },
                    {
                        "label": "Cooldown",
                        "value": "3s when not thrown, 15s when thrown"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://nie.res.netease.com/r/pic/20241205/c290e460-174c-412b-b05e-a28a3c60219b.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "GAMMA CHARGE",
                "description": "Hulk charges Black Panther and The Thing with gamma radiation. When Black Panther's health is low, he gains a gamma shield, becoming Unstoppable and blocking attacks. The Thing gains Gamma Gauntlets, boosting Damage and range of his Rocky Jab and Stone Haymaker. Dealing damage with these attacks grants Bonus Health, and maximum Bonus Health cap is increased",
                "key": "C",
                "icon": "static/heroes/abilities/the-thing-9-gamma-charge.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "C"
                    },
                    {
                        "label": "Cooldown",
                        "value": "25s"
                    },
                    {
                        "label": "Ability Duration",
                        "value": "8s"
                    },
                    {
                        "label": "Left Click Spell Field Max Distance",
                        "value": "5m"
                    },
                    {
                        "label": "Left Click Spell Field Damage",
                        "value": "45"
                    },
                    {
                        "label": "Right Click Spell Field Max Distance",
                        "value": "9m"
                    },
                    {
                        "label": "Right Click Spell Field Damage",
                        "value": "60+11% of enemy's maximum health"
                    },
                    {
                        "label": "Max Bonus Health",
                        "value": "120"
                    },
                    {
                        "label": "Damage/Health Conversion",
                        "value": "1"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260213/b18fc9a2-fa11-4a9d-8c0c-266b5fb5d79b.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Flying Thing",
                "description": "Human Torch can lift The Thing into the air and slam him down, dealing damage, launching enemies, and creating a zone that disables mobility abilities",
                "key": "X",
                "icon": "static/heroes/abilities/the-thing-10-flying-thing.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "X"
                    },
                    {
                        "label": "Cooldown",
                        "value": "Successfully interacted: 30s; fail to interact: 3s"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "20m"
                    },
                    {
                        "label": "Flight Speed",
                        "value": "15m/s"
                    },
                    {
                        "label": "Slam Down Initial Horizontal Velocity",
                        "value": "15m/s"
                    },
                    {
                        "label": "Maximum Flight Duration",
                        "value": "8s"
                    },
                    {
                        "label": "Damage",
                        "value": "Launch-up spell field causes 30 damage; mobility abilities disabling spell field causes 15 damage per second"
                    },
                    {
                        "label": "Launch Up Range",
                        "value": "A cylindrical spell field with a radius of 8m and a height of 1m"
                    },
                    {
                        "label": "Mobility Abilities Disabling Range",
                        "value": "A cylindrical spell field with a radius of 8m and a height of 8m"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250730/7048ff41-7f0a-4cff-8469-49b1e18160cf.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "750"
            },
            {
                "label": "Movement Speed",
                "value": "6m/s"
            }
        ],
        "forms": [
            "THE THING"
        ]
    },
    "thor": {
        "nickname": "THOR",
        "realName": "THOR ODINSON",
        "roles": [
            "VANGUARD"
        ],
        "intro": "The son of Odin taps into his divine power to call forth thunder and lightning, raining down relentless fury upon his enemies. With his mighty hammer Mjolnir in hand, Thor effortlessly asserts his dominance on the field of combat.",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Mjolnir Bash",
                "description": "Wield Mjolnir to strike enemies. When Awakened, Thor can launch lightning arc waves to deal damage",
                "key": "Left Click",
                "icon": "static/heroes/abilities/thor-1-mjolnir-bash.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast Spell Field"
                    },
                    {
                        "label": "Range",
                        "value": "4m"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "0.6s"
                    },
                    {
                        "label": "Damage",
                        "value": "45"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/5767ff16-bdb0-4e38-be05-f86ae73aef7e.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "God of Thunder",
                "description": "Soar upwards and smite the ground after charging for a duration, inflicting damage on enemies within range",
                "key": "Q",
                "icon": "static/heroes/abilities/thor-2-god-of-thunder.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "A persistent spell field that generates a one-time spell field upon expiration"
                    },
                    {
                        "label": "Range",
                        "value": "The sustained spell field is cylindrical, measuring 8m in radius and 20m in height, whereas the one-time spell field has an 8m spherical radius"
                    },
                    {
                        "label": "Height",
                        "value": "9m"
                    },
                    {
                        "label": "Duration",
                        "value": "1.5s"
                    },
                    {
                        "label": "Damage",
                        "value": "The sustained spell field lasts for 0.5s, dealing 40 damage, while the one-time spell field deals 220 damage"
                    },
                    {
                        "label": "Special Effect",
                        "value": "After Ultimate Ability lands, Stun surrounding enemies for 1s"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "3100"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/68c2df37-4e4b-48be-af36-22a545b1cb8d.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Storm Surge",
                "description": "Hold to spin Mjolnir before dashing forward and knocking back enemies",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/thor-3-storm-surge.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Casting",
                        "value": "Charged Dash"
                    },
                    {
                        "label": "Maximum Charge Time",
                        "value": "2s"
                    },
                    {
                        "label": "Dash Distance",
                        "value": "No charge: 10m; Full charge: 20m. When carrying an enemy, the ranges are 6m with no charge and 13m with full"
                    },
                    {
                        "label": "Damage",
                        "value": "No Charge Damage: 40; Full Charge Damage: 60"
                    },
                    {
                        "label": "Thorforce Cost",
                        "value": "1"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/b18044b4-d344-4400-95aa-1db27f994c9c.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Lightning Realm",
                "description": "Summon lightning that restores Thorforce based on the number of hit enemies",
                "key": "E",
                "icon": "static/heroes/abilities/thor-4-lightning-realm.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Persistent Spell Field"
                    },
                    {
                        "label": "Range",
                        "value": "5m spherical radius"
                    },
                    {
                        "label": "Maximum Duration",
                        "value": "4s"
                    },
                    {
                        "label": "Damage",
                        "value": "Deal 40 damage when enemies cross the boundaries"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "For each enemy within the spell area, 1 point of Thorforce is restored. Enemies that cross the boundary will be Slowed by 30%, Enemies that cross the boundary will receive an additional debuff that restricts aerial abilities for 2s."
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/37d0dc4d-ca68-48f0-8e5a-d7511b05b02e.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Awakening Rune",
                "description": "Consume Thorforce to enter the Awakened state, granting Bonus Health and enhancing Mjolnir Bash",
                "key": "F",
                "icon": "static/heroes/abilities/thor-5-awakening-rune.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Casting",
                        "value": "Ability Enhancement"
                    },
                    {
                        "label": "Key (Enhanced)",
                        "value": "Left Click"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "60 m/s"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "The first three stages last for 0.4s each, while the fourth stage lasts for 0.8s"
                    },
                    {
                        "label": "Range",
                        "value": "3m spherical radius"
                    },
                    {
                        "label": "Duration",
                        "value": "5s"
                    },
                    {
                        "label": "Damage",
                        "value": "Projectile Damage: 70, Spell Field Damage: 15 per second"
                    },
                    {
                        "label": "Max Shield Duration",
                        "value": "2.5s"
                    },
                    {
                        "label": "Thorforce Cost",
                        "value": "3"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Inflict damage over time on nearby enemies; After casting Awakening Rune, you can manually cancel the Awakened state after a brief delay. At the end of the Awakened state, Thor restores 1 point of Thunderforce."
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/77bc01c1-2967-4660-a899-87a8b6c3efe5.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Hammer Throw",
                "description": "Throw Mjolnir forward which then returns",
                "key": "Right Click",
                "icon": "static/heroes/abilities/thor-6-hammer-throw.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Launch a single-target projectile that returns after a delayed hit"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "The projectile travels outward at a speed of 60m per second and returns at a speed of 80m per second"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "24m"
                    },
                    {
                        "label": "Damage",
                        "value": "Outward Projectile Damage: 45; Returning Projectile Damage: 20"
                    },
                    {
                        "label": "Cooldown",
                        "value": "6s"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "No"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Hits grant 50 Bonus Health (only triggers once per throw, even if hitting multiple enemies)"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/06301e2b-a041-47cb-bf81-009ef24c3a3d.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Thorforce",
                "description": "Consume Thorforce to gain Bonus Health. Landing Mjolnir Bash on an enemy instantly recharges Thorforce",
                "key": "Passive",
                "icon": "static/heroes/abilities/thor-7-thorforce.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Maximum Thorforce",
                        "value": "3"
                    },
                    {
                        "label": "Thorforce Recovery Speed",
                        "value": "5s per Thorforce"
                    },
                    {
                        "label": "Bonus Health Per Thorforce",
                        "value": "Each point of Thorforce consumed grants 50 Bonus Health, while abilities that consume 3 points of Thorforce grant 150 Bonus Health"
                    },
                    {
                        "label": "Bonus Max Health",
                        "value": "150"
                    },
                    {
                        "label": "Mjolnir Bash Energy Recovery Per Thorforce",
                        "value": "5s"
                    },
                    {
                        "label": "Thorforce Consumption Cooldown",
                        "value": "1.5s"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/78caf91d-ecd4-431c-9e43-31558f4e5fa9.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "THUNDERSTRIKE PIKE",
                "description": "Angela shares fragments of her Ichors with Thor, empowering him to hurl a Thunder Spear that restores Thorforce for each enemy struck. Afterward, Thor can leap to the spear's explosion point, dealing a second wave of damage to all enemies within range",
                "key": "C",
                "icon": "static/heroes/abilities/thor-8-thunderstrike-pike.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "C"
                    },
                    {
                        "label": "Cooldown",
                        "value": "30s"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "80m/s"
                    },
                    {
                        "label": "Projectile Damage",
                        "value": "25"
                    },
                    {
                        "label": "Projectile-Generated Spell Field Range",
                        "value": "5m"
                    },
                    {
                        "label": "Projectile-Generated Spell Field Damage",
                        "value": "30"
                    },
                    {
                        "label": "Hit Ground Spell Field Range",
                        "value": "5m"
                    },
                    {
                        "label": "Hit Ground Spell Field Damage",
                        "value": "45"
                    },
                    {
                        "label": "Hit Ground Maximum Distance",
                        "value": "30m"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250912/f3f25383-cb85-43c1-9479-e4d60a8dfcb7.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "600"
            },
            {
                "label": "Movement Speed",
                "value": "6.5 m/s"
            }
        ],
        "forms": [
            "Thor"
        ]
    },
    "ultron": {
        "nickname": "ULTRON",
        "realName": "ULTRON",
        "roles": [
            "STRATEGIST"
        ],
        "intro": "The Pinnacle of artificial lifeforms, Ultron is programmed to learn and adapt in ways beyond human capability. He can summon an army of automated drones that obey his every command, arising his chances of victory exponentially.",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "ENCEPHALO-RAY",
                "description": "Unleash a burning energy beam",
                "key": "Left Click",
                "icon": "static/heroes/abilities/ultron-1-encephalo-ray.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "First constant beam; Second single-cast cylindrical spell field"
                    },
                    {
                        "label": "Ammo",
                        "value": "6"
                    },
                    {
                        "label": "Damage",
                        "value": "First beam 6 rounds in 0.5s, 12 per hit; second single-cast spell field 75 per hit"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 20m, decreasing to 75% at 30m"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "1.58s per round"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20250529/71627fa8-a6b2-4c24-b4f3-8cf7f0a195d3.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "IMPERATIVE: FIREWALL",
                "description": "Deploy drones to an ally marked by Imperative: Patch, granting them increased Speed and Damage. Additionally, all allies within range of you and the chosen teammate receive Bonus Health.",
                "key": "Right Click",
                "icon": "static/heroes/abilities/ultron-2-imperative-firewall.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Instant Cast"
                    },
                    {
                        "label": "Bonus Health to Ultron",
                        "value": "65"
                    },
                    {
                        "label": "Bonus Health to allies near Ultron and the drones",
                        "value": "50"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    },
                    {
                        "label": "Range",
                        "value": "8m spherical radius spell field"
                    },
                    {
                        "label": "Bonus Health Falloff Begins at",
                        "value": "3s"
                    },
                    {
                        "label": "Bonus Health Falloff Speed",
                        "value": "40/s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Grant bonus health to Ultron and Allies within range, centered around Ultron and the drones; the selected ally gains a 20% Movement Speed and 10% Damage boost"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250529/da4eebd7-8dfc-406f-adaf-d02ea613d493.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "IMPERATIVE: PATCH",
                "description": "Command up to 2 giant drones to follow 2 allies, constantly healing allies within its radius, with more healing for the designated allies.",
                "key": "E",
                "icon": "static/heroes/abilities/ultron-3-imperative-patch.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Targeted"
                    },
                    {
                        "label": "Target Distance",
                        "value": "25m"
                    },
                    {
                        "label": "Healing Amount to the Targeted ally",
                        "value": "35/s"
                    },
                    {
                        "label": "Healing Amount to other allies within range",
                        "value": "30/s"
                    },
                    {
                        "label": "Drone Healing Range",
                        "value": "8m spherical radius spell field"
                    },
                    {
                        "label": "Maximum Vision",
                        "value": "30m"
                    },
                    {
                        "label": "Max Tolerance Duration out of Sight",
                        "value": "5s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Imperative: Patch can deploy up to 2 drones, allowing support for two allies at once"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250529/dd94b605-3f0c-4bfc-9fc5-c16ac7b53da2.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "DYNAMIC FLIGHT",
                "description": "Fly quickly in the direction of movement and then enter an Accelerated state",
                "key": "Shift",
                "icon": "static/heroes/abilities/ultron-4-dynamic-flight.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Shift"
                    },
                    {
                        "label": "Casting",
                        "value": "Dash"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Dynamic Flight can trigger a one-time dash followed by an constant accelerated effect."
                    },
                    {
                        "label": "Dash Direction",
                        "value": "Reticle direction combined with key input"
                    },
                    {
                        "label": "Cooldown",
                        "value": "8s"
                    },
                    {
                        "label": "Dash Distance",
                        "value": "12m"
                    },
                    {
                        "label": "Accelerate Duration",
                        "value": "6s"
                    },
                    {
                        "label": "Movement Boost",
                        "value": "40%"
                    },
                    {
                        "label": "Bonus Health (Self)",
                        "value": "50"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20250529/720ff240-78c6-49fa-92ba-fa695e6b0635.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "RAGE OF ULTRON",
                "description": "Summon Ultron Drones to fire Encephalo-Rays, damaging enemies or healing allies",
                "key": "Q",
                "icon": "static/heroes/abilities/ultron-5-rage-of-ultron.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Straight-line projectile that generates a spell field upon impact."
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "120m/s"
                    },
                    {
                        "label": "Beam Damage",
                        "value": "Ultron's Encephalo-Rays 18, Drone's Encephalo-Rays 12"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Starts at 1.5m after Encephalo-Rays explode, with a max falloff to 50% at 3m"
                    },
                    {
                        "label": "Beam Healing Amount",
                        "value": "40"
                    },
                    {
                        "label": "Total Ray Amount",
                        "value": "5"
                    },
                    {
                        "label": "Ray Amount per Shot",
                        "value": "5"
                    },
                    {
                        "label": "Fire Interval Between Shots",
                        "value": "0.2s"
                    },
                    {
                        "label": "Ultimate Total Fire Rounds",
                        "value": "5 rounds"
                    },
                    {
                        "label": "Fire Interval Between Rounds",
                        "value": "0.5s"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "3m spherical radius spell field"
                    },
                    {
                        "label": "Duration",
                        "value": "9s"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "4300"
                    },
                    {
                        "label": "Ultimate Self-healing",
                        "value": "50/s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Within the ultimate duration, Ultron grants an Unstoppable effect; Deals 125% damage to Bonus Health"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250529/4768132e-a560-432e-aa8b-b7fc01d321d9.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "NANO RAY",
                "description": "When Iron Man, Ultron and Squirrel Girl team up, Ultron's Encephalo-Ray upgrades to Nano-Ray, firing a beam that pierces through all characters, dealing continuous damage to foes while healing allies; Squirrel Girl gains the Squirrel Missile ability. She directs a squirrel to ride Iron Man's nanotech glove as a homing missile. Upon hit, the squirrel flees just before a fiery explosion!",
                "key": "C",
                "icon": "static/heroes/abilities/ultron-6-nano-ray.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "C"
                    },
                    {
                        "label": "Casting",
                        "value": "Channeled"
                    },
                    {
                        "label": "Ammo",
                        "value": "Infinite"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "No"
                    },
                    {
                        "label": "Range",
                        "value": "2.5m radius, infinite length cylindrical spell field"
                    },
                    {
                        "label": "Damage",
                        "value": "70/s"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 20m, decreasing to 75% at 30m"
                    },
                    {
                        "label": "Heal",
                        "value": "85/s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "30s"
                    },
                    {
                        "label": "Spell Field Duration",
                        "value": "8s"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250531/0f93894e-5849-474d-b022-c098ba2647f0.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "250"
            },
            {
                "label": "Movement Speed",
                "value": "6m/s"
            }
        ],
        "forms": [
            "Ultron"
        ]
    },
    "venom": {
        "nickname": "VENOM",
        "realName": "EDWARD \"EDDIE\" BROCK",
        "roles": [
            "VANGUARD"
        ],
        "intro": "Using his symbiote-enhanced body as the perfect living weapon, Eddie Brock and his alien ally stand ever-ready to unleash vicious attacks upon anyone he deems an enemy. Those ensnared by Venom's tentacles have no choice but to surrender to this insatiable predator.",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Dark Predation",
                "description": "Unleash tentacles forward to attack enemies",
                "key": "Left Click",
                "icon": "static/heroes/abilities/venom-1-dark-predation.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Quad-cast delayed spell field"
                    },
                    {
                        "label": "Range",
                        "value": "15m"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "0.9s, with a 0.1s interval between each tendril"
                    },
                    {
                        "label": "Damage",
                        "value": "20"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "Yes"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/bc30fb5a-7d0a-4acb-9cc7-68d9ce23471f.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Feast of the Abyss",
                "description": "Burrow underground for free movement. After a duration or by left-clicking, devour enemies above to deal damage based on the enemy's current health and generate equivalent Bonus Health. Devoured enemies suffer Reduced Healing",
                "key": "Q",
                "icon": "static/heroes/abilities/venom-2-feast-of-the-abyss.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Single-cast spell field that surrounds the caster"
                    },
                    {
                        "label": "Movement Boost",
                        "value": "80%"
                    },
                    {
                        "label": "Range",
                        "value": "7m spherical radius"
                    },
                    {
                        "label": "Maximum Duration",
                        "value": "4s"
                    },
                    {
                        "label": "Damage",
                        "value": "Inflict damage equal to 50% of the target's health, followed by an additional 50 damage"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "2500"
                    },
                    {
                        "label": "Special Effect",
                        "value": "130% of damage dealt is converted into Bonus Health"
                    },
                    {
                        "label": "HEALING REDUCTION PROPORTION",
                        "value": "30%"
                    },
                    {
                        "label": "HEALING REDUCTION DURATION",
                        "value": "4s"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/8d6946a4-fdcd-4260-a36b-4d6367c22910.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Venom Swing",
                "description": "Launch webbing forward, allowing for a singular swing in the desired direction",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/venom-3-venom-swing.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Casting",
                        "value": "Dash"
                    },
                    {
                        "label": "Maximum Webbing Length",
                        "value": "30m"
                    },
                    {
                        "label": "Cooldown",
                        "value": "8s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/e3d5d3b0-9605-4bdd-8e7d-5b10a96f6fdc.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Symbiotic Resilience",
                "description": "Generate Bonus Health against damage. The lower Venom's Health, the greater the Bonus Health generated",
                "key": "E",
                "icon": "static/heroes/abilities/venom-4-symbiotic-resilience.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Instant Cast"
                    },
                    {
                        "label": "Cooldown",
                        "value": "15s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Grant 100 Bonus Health and convert 120% of lost Health into Bonus Health"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/6cbe943b-e6aa-46d3-9c54-bff3d7264fcc.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Frenzied Arrival",
                "description": "Dash to the target location from a certain height. Upon landing, damage nearby enemies, launching them up toward the landing point",
                "key": "F",
                "icon": "static/heroes/abilities/venom-5-frenzied-arrival.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "F"
                    },
                    {
                        "label": "Casting",
                        "value": "Targeted"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "40m"
                    },
                    {
                        "label": "Minimum Distance",
                        "value": "3m"
                    },
                    {
                        "label": "Range",
                        "value": "6m spherical radius"
                    },
                    {
                        "label": "Damage",
                        "value": "65 damage, with damage falloff starting at 2m from the center of the spell field and decreasing to 40% at 6m"
                    },
                    {
                        "label": "Cooldown",
                        "value": "8s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Knocks enemies inward, with an inward knockback angle of 75°"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/bd5d9e69-ca07-465d-aafa-c7225d6a6f7f.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Cellular Corrosion",
                "description": "Unleash tentacles to Slow enemies within reach. Enemies unable to break free in time will suffer damage",
                "key": "Right Click",
                "icon": "static/heroes/abilities/venom-6-cellular-corrosion.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Spell field that surrounds the caster"
                    },
                    {
                        "label": "Range",
                        "value": "8m spherical radius"
                    },
                    {
                        "label": "Damage",
                        "value": "The spell field deals 5 damage, increasing to 80 damage if the target remains in the area for a duration"
                    },
                    {
                        "label": "CoolDown",
                        "value": "8s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Tendrils apply a 25% Slow on the target and take 3s to inflict damage. If the distance from Venom exceeds 11m, the tendrils will detach"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/67d47ae7-0b50-42ec-98d4-b704e68e8c0d.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Alien Biology",
                "description": "Press Space to wall crawl, and while crawling, left-click to sprint",
                "key": "Space",
                "icon": "static/heroes/abilities/venom-7-alien-biology.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Space"
                    },
                    {
                        "label": "Wall-Crawling Speed",
                        "value": "3 m/s"
                    },
                    {
                        "label": "Sprinting Speed",
                        "value": "9 m/s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/5ac60cab-09a4-4f2a-8236-75b82ed43c39.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "HEALING TENDRILS",
                "description": "Venom shares his symbiotes with Jeff and Hela. Jeff's Guardian of the Deep links with nearby allies, providing continuous healing. When the effect ends, it releases a powerful healing burst, converting any excess into Bonus Health. Hela's Hel Tendrils unleash a symbiotic Hel Sphere. Upon hit, it pulls nearby enemies toward the impact point and links them, slowing enemies that try to escape.",
                "key": "Passive",
                "icon": "static/heroes/abilities/venom-8-healing-tendrils.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "+150 Max Health"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250531/1ad044d0-1743-4ae9-8a7c-1cd92bef69a1.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "675"
            },
            {
                "label": "Movement Speed",
                "value": "6 m/s"
            }
        ],
        "forms": [
            "VENOM"
        ]
    },
    "white-fox": {
        "nickname": "WHITE FOX",
        "realName": "AMI HAN",
        "roles": [
            "STRATEGIST"
        ],
        "intro": "Ami Han, the last of the legendary Kumiho, can summon her ancestral Nine-Tailed Power to fortify herself and heal her allies on the battlefield. As the calm and capable Director of Tiger Division, she is any team's unwavering backbone, no matter the foe.",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "YEOWOO GUSEUL",
                "description": "Fire a Fox Marble forward that bounces off terrain or heroes, then homes in on nearby heroes. It damages enemies, heals allies, and restores Spirit Tail energy",
                "key": "Left Click",
                "icon": "static/heroes/abilities/white-fox-1-yeowoo-guseul.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "120m/s"
                    },
                    {
                        "label": "Bounce Projectile Speed",
                        "value": "80m/s"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "35m"
                    },
                    {
                        "label": "Bounce Projectile Max Distance",
                        "value": "6m"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "Direct hit: 50 per round; bounce hit: 35 per round"
                    },
                    {
                        "label": "Damage",
                        "value": "Direct hit: 40 per round; bounce hit: 25 per round"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "0.45s per round"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20260320/c58d434c-4789-4937-961d-d27e5a1f80ef.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "CLAW STRIKE",
                "description": "While Awakened, slash forward with a flurry of attacks",
                "key": "Left Click",
                "icon": "static/heroes/abilities/white-fox-2-claw-strike.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "0.45s per use"
                    },
                    {
                        "label": "Damage",
                        "value": "35 per hit"
                    },
                    {
                        "label": "Attack Range",
                        "value": "4m"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20260320/e738e469-d755-4bf3-93ae-0b5a252443ca.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "SPECTRAL SURGE",
                "description": "Consume one Spirit Tail to send a spectral fox forward. It heals and grants invulnerability to allies it passes through, damages and Charms enemies, forcing foes to move toward White Fox",
                "key": "Right Click",
                "icon": "static/heroes/abilities/white-fox-3-spectral-surge.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "60m/s"
                    },
                    {
                        "label": "Damage/Healing Radius",
                        "value": "3m"
                    },
                    {
                        "label": "Charm/Invincibility Radius",
                        "value": "0.6m"
                    },
                    {
                        "label": "Damage",
                        "value": "65"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "65"
                    },
                    {
                        "label": "Cooldown",
                        "value": "6s"
                    },
                    {
                        "label": "Charm Duration",
                        "value": "0.4s"
                    },
                    {
                        "label": "Allies' Invincibility Duration",
                        "value": "0.4s"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "35m"
                    },
                    {
                        "label": "Self Healing Amount",
                        "value": "50"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260320/19bc9c00-28b2-4cb5-810c-183a9635f49b.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "FOX FORM AWAKENING",
                "description": "Enter Awakened state, transforming Spirit Tails into physical tails. While active, continuously drain Spirit Tail energy and heal nearby allies. Striking enemies provides additional area healing",
                "key": "E",
                "icon": "static/heroes/abilities/white-fox-4-fox-form-awakening.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Cooldown",
                        "value": "15s"
                    },
                    {
                        "label": "Attack Generated Healing Spell Field Range",
                        "value": "10m radius spherical spell field"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "35 per hit"
                    },
                    {
                        "label": "Healing Spell Field That Surrounds the Caster",
                        "value": "10m radius spherical spell field"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "25/s"
                    },
                    {
                        "label": "Ability Duration",
                        "value": "Transform 3 tails: 9s; 2 tails: 8s; 1 tail: 7s"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260320/72a48398-8002-4dfa-9056-24f73c76bc01.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "SPIRIT SANCTUARY",
                "description": "Teleport to a chosen ally, instantly healing allies in the area while generating a shield",
                "key": "Shift",
                "icon": "static/heroes/abilities/white-fox-5-spirit-sanctuary.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Shift"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    },
                    {
                        "label": "Summon Health",
                        "value": "200"
                    },
                    {
                        "label": "One-time Healing Amount",
                        "value": "50"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "30m"
                    },
                    {
                        "label": "Healing Spell Field Range",
                        "value": "5m radius spherical spell field"
                    },
                    {
                        "label": "MAXIMUM DURATION FOR SUMMONS",
                        "value": "5s"
                    },
                    {
                        "label": "Special Effect",
                        "value": "While the shield is active, it provides 20/s Healing Over Time to allies (including White Fox) within the shield's range"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260320/a69660c4-0140-4d93-b09e-88695bef6c4b.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "TAIL SWEEP",
                "description": "While Awakened, sweep forward tails to launch up hit enemies",
                "key": "Right Click",
                "icon": "static/heroes/abilities/white-fox-6-tail-sweep.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Cooldown",
                        "value": "3s"
                    },
                    {
                        "label": "Attack Range",
                        "value": "5m"
                    },
                    {
                        "label": "DAMAGE",
                        "value": "50"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260320/5c67a6c1-758c-467c-a4de-62f8fcf8ac11.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Predatory Pounce",
                "description": "While Awakened, dash forward. Hit an enemy to slow them, enabling a second dash that knocks back enemies",
                "key": "Shift",
                "icon": "static/heroes/abilities/white-fox-7-predatory-pounce.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Shift"
                    },
                    {
                        "label": "Cooldown",
                        "value": "6s"
                    },
                    {
                        "label": "Dash Duration",
                        "value": "10m"
                    },
                    {
                        "label": "Damage",
                        "value": "40"
                    },
                    {
                        "label": "Predatory Pounce Second Unleash",
                        "value": ""
                    },
                    {
                        "label": "Key",
                        "value": "Shift"
                    },
                    {
                        "label": "Cooldown",
                        "value": "6s"
                    },
                    {
                        "label": "Dash Duration",
                        "value": "15m"
                    },
                    {
                        "label": "Damage",
                        "value": "40"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260320/5f574241-b3e7-46e1-83c5-658beb3885c9.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "KUMIHO UNLEASHED",
                "description": "Manifest the full Nine-Tailed Fox form and continuously heal nearby allies. Cannot receive healing effects from others while in this form",
                "key": "Q",
                "icon": "static/heroes/abilities/white-fox-8-kumiho-unleashed.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "4800"
                    },
                    {
                        "label": "Maximum Health",
                        "value": "900"
                    },
                    {
                        "label": "Continuous Healing Spell Field Range",
                        "value": "10m radius spherical spell field"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "85/s"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260320/b089d7a9-c6dd-46d3-a000-4c0954353ad4.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "SPIRIT FOX WARD",
                "description": "White Fox grants Luna Snow a spirit fox for protection. Luna can activate it for a burst of speed and fire it forward, healing allies in its path while applying Charm to enemies",
                "key": "Passive",
                "icon": "static/heroes/abilities/white-fox-9-spirit-fox-ward.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Team-Up Bonus",
                        "value": "10% Healing Boost"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260320/4e7caa04-0fb0-4310-87b4-4754473e6016.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "NINE-TAILED AURA",
                "description": "Black Cat shares her luck with her allies. When White Fox embraces her newfound fortune, she unleashestracking Spirit Tails to grant Healing and Speed to allies, while damaging and Slowing foes. When Captain America enjoys his luck, his shield's block radius expands and allows him to aim deflectedProjectiles directly toward his target",
                "key": "C",
                "icon": "static/heroes/abilities/white-fox-10-nine-tailed-aura.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "C"
                    },
                    {
                        "label": "Cooldown",
                        "value": "20"
                    },
                    {
                        "label": "Range",
                        "value": "10m spherical radius spell field"
                    },
                    {
                        "label": "Movement Boost",
                        "value": "30% for 2s"
                    },
                    {
                        "label": "Slow Effect",
                        "value": "30% for 2s"
                    },
                    {
                        "label": "One-Time Healing",
                        "value": "60"
                    },
                    {
                        "label": "One-Time Damage",
                        "value": "40"
                    },
                    {
                        "label": "Passive Energy Recover",
                        "value": "1"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260416/dba9f061-232b-4cca-8797-cf61c520201e.png"
            },
            {
                "typeCode": "1",
                "category": "attack",
                "name": "NINEFOLD SLAM",
                "description": "In Kumiho Form, slam the ground, causing an explosive shockwave. Hitting enemies or summons grants One-Time Healing to self and nearby allies",
                "key": "Left Click",
                "icon": "static/heroes/abilities/white-fox-11-ninefold-slam.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Max Attack Range",
                        "value": "5m"
                    },
                    {
                        "label": "Damage",
                        "value": "50 per hit"
                    },
                    {
                        "label": "Explosion Damage",
                        "value": "50 per hit"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "1 per second"
                    },
                    {
                        "label": "Attack Generated Healing Spell Field Range",
                        "value": "10m radius spherical spell field"
                    },
                    {
                        "label": "Explosion Spell Field Range",
                        "value": "6m radius spherical spell field"
                    },
                    {
                        "label": "Healing Amount",
                        "value": "100 per hit"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20260320/246d56d8-a7ff-40e7-ace5-01c0fd4b9a66.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "BLESSED BY THE NINE",
                "description": "In Kumiho Form, select an ally to grant Continuous Healing, Unstoppable, and Life-Steal for a short time",
                "key": "Right Click",
                "icon": "static/heroes/abilities/white-fox-12-blessed-by-the-nine.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Maximum Select Distance",
                        "value": "50m"
                    },
                    {
                        "label": "Healing Over Time Amount",
                        "value": "40/s"
                    },
                    {
                        "label": "Unstoppable State Duration",
                        "value": "3s"
                    },
                    {
                        "label": "Life-steal Ratio",
                        "value": "0.25"
                    },
                    {
                        "label": "Cooldown",
                        "value": "2s"
                    }
                ],
                "displayCategory": "Defensive / Survival Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20260320/36acf930-5edb-4ccb-b782-333bc20b2050.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "275"
            },
            {
                "label": "Movement Speed",
                "value": "600"
            }
        ],
        "forms": [
            "White Fox"
        ]
    },
    "winter-soldier": {
        "nickname": "WINTER SOLDIER",
        "realName": "JAMES BUCHANAN \"BUCKY\" BARNES",
        "roles": [
            "DUELIST"
        ],
        "intro": "Terrifying experiments turned him into a brainwashed assassin, but now James Buchanan \"Bucky\" Barnes is in control of his own fate once again. With his enhanced mechanical arm, the Winter Soldier is primed to deliver earth-shattering blows to any foe in his path!",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Roterstern",
                "description": "Fire explosive rounds with his blaster, Roterstern, damaging the target hit and enemies behind them.",
                "key": "Left Click",
                "icon": "static/heroes/abilities/winter-soldier-1-roterstern.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Straight-line projectile that generates a spell field upon impact"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "180 m/s"
                    },
                    {
                        "label": "Projectile Damage",
                        "value": "80"
                    },
                    {
                        "label": "Range",
                        "value": "Cone-shaped spell field with a 5m radius and an apex angle of 90°"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "45"
                    },
                    {
                        "label": "Damage Falloff",
                        "value": "Falloff begins at 20m, decreasing to 70% at 40m"
                    },
                    {
                        "label": "Fire Rate",
                        "value": "2.5 rounds per second"
                    },
                    {
                        "label": "Ammo",
                        "value": "3"
                    },
                    {
                        "label": "Critical Hit",
                        "value": "Projectile: Yes; Spell Field: No"
                    },
                    {
                        "label": "Special Mechanic",
                        "value": "Enemies that take damage from the projectile will no longer receive damage from the spell field"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/c394a786-61e2-4311-af38-ddbb77fb0c17.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Kraken Impact",
                "description": "Leap high, then dash forward and slam down with the bionic arm, dealing damage to enemies in range, marking them for Culling. Marked enemies will perish instantly if their health falls below a certain threshold, recharging the bionic arm for another Kraken Impact within a short period",
                "key": "Q",
                "icon": "static/heroes/abilities/winter-soldier-2-kraken-impact.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Casting",
                        "value": "Spherical Spell Field"
                    },
                    {
                        "label": "Range",
                        "value": "5m spherical radius"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "70"
                    },
                    {
                        "label": "Culling Duration",
                        "value": "5s"
                    },
                    {
                        "label": "Culling Threshold",
                        "value": "20% Health"
                    },
                    {
                        "label": "Next Kraken Impact After A Culling",
                        "value": "8s"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "3100"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/a53ce147-45d7-472a-b01d-27c0824f21e0.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Trooper's Fist",
                "description": "Dash forward, seizing enemies along the path and launching up enemies at the end of the dash",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/winter-soldier-3-trooper-s-fist.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Casting",
                        "value": "Movement-based damage ability"
                    },
                    {
                        "label": "Average Speed",
                        "value": "30 m/s"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "9m"
                    },
                    {
                        "label": "Seize Damage",
                        "value": "25"
                    },
                    {
                        "label": "Range",
                        "value": "Length: 4.5m, Width: 4.5m, Height: 2m"
                    },
                    {
                        "label": "Knockback Damage",
                        "value": "65"
                    },
                    {
                        "label": "Cooldown",
                        "value": "10s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/239b4e01-33ed-4f71-afd9-845810e96b8e.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Tainted Voltage",
                "description": "Charge up and launch a powerful electrical punch with the bionic arm in the target direction, dealing damage to enemies within range and Slowing them. This ability can Knock Down flying heroes",
                "key": "E",
                "icon": "static/heroes/abilities/winter-soldier-4-tainted-voltage.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Casting",
                        "value": "Projectile that fires in a straight trajectory"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "100 m/s"
                    },
                    {
                        "label": "Damage",
                        "value": "55"
                    },
                    {
                        "label": "Slow Rate",
                        "value": "-35%"
                    },
                    {
                        "label": "Slow Duration",
                        "value": "2s"
                    },
                    {
                        "label": "Special Mechanic",
                        "value": "Projectiles pierce through enemies"
                    },
                    {
                        "label": "Cooldown",
                        "value": "5s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/65cf216c-9ad1-4a8e-9e2c-d7f1c2a9964c.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Bionic Hook",
                "description": "Charge up and launch a hook with his bionic arm, reeling in the first target hit and enemies lurking behind",
                "key": "Right Click",
                "icon": "static/heroes/abilities/winter-soldier-5-bionic-hook.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Straight-line projectile that generates a spell field upon impact"
                    },
                    {
                        "label": "Projectile Speed",
                        "value": "80 m/s"
                    },
                    {
                        "label": "Charge Time",
                        "value": "0.5s - 4s"
                    },
                    {
                        "label": "Range",
                        "value": "The projectile can travel up to 10m with a 0.5s charge. As the charge time increases, it can reach a maximum distance of 20m with a 1s charge"
                    },
                    {
                        "label": "Projectile Damage",
                        "value": "15"
                    },
                    {
                        "label": "Range",
                        "value": "Cone-shaped spell field with a 4.5m radius and an apex angle of 80°"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "20"
                    },
                    {
                        "label": "Cooldown",
                        "value": "15s"
                    }
                ],
                "displayCategory": "Offensive / Control Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/4173fa58-8641-47f9-9ee5-b63472fe074e.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Ceaseless Charge",
                "description": "Roterstern reloads automatically while the bionic arm is in action, granting Bonus Health to the Winter Soldier",
                "key": "Passive",
                "icon": "static/heroes/abilities/winter-soldier-6-ceaseless-charge.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Bonus Health (Self)",
                        "value": "40 (Bionic Hook & Tainted Voltage), 50 (Trooper's Fist, Kraken Impact)"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20241120/55a1b572-78dd-47c3-8006-5b26e8d8813a.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Stellar Impact",
                "description": "Inspired by Captain America's resolve, Winter Soldier can leap to the aid of a designated ally, slamming the ground with his mechanical arm to damage nearby foes and grant Bonus Health to allies within range. Captain America and Winter Soldier can interact with each other once both parties confirm. The duo then collides and unleashes a shockwave that damages and slows enemies",
                "key": "C",
                "icon": "static/heroes/abilities/winter-soldier-7-stellar-impact.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "C"
                    },
                    {
                        "label": "Damage",
                        "value": "70"
                    },
                    {
                        "label": "Range",
                        "value": "8m spherical radius"
                    },
                    {
                        "label": "Clash Damage",
                        "value": "80"
                    },
                    {
                        "label": "Clash Damage Range",
                        "value": "10m spherical radius"
                    },
                    {
                        "label": "Special Effect",
                        "value": "Stellar Impact also triggers the Ceaseless Charge passive effect"
                    },
                    {
                        "label": "Bonus Health (Self)",
                        "value": "30"
                    },
                    {
                        "label": "Bonus Health (Ally)",
                        "value": "50"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250410/c34a6f5c-8be1-4bcb-a0f0-f5572a64e6e9.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "275"
            },
            {
                "label": "Movement Speed",
                "value": "6 m/s"
            }
        ],
        "forms": [
            "WINTER SOLDIER"
        ]
    },
    "wolverine": {
        "nickname": "WOLVERINE",
        "realName": "LOGAN",
        "roles": [
            "DUELIST"
        ],
        "intro": "Thanks to his regenerative healing factor and berserker rage, the centuries-old Logan can fight through the worst pain to go claw-to-claw with any foe. The Wolverine stands ready to shred through all obstacles in his way with his Adamantium claws.",
        "abilities": [
            {
                "typeCode": "1",
                "category": "attack",
                "name": "Savage Claw",
                "description": "Slash with Adamantium claws for a Claw Strike. Unleashing Feral Leap will enhance it to Berserk Claw Strike for a brief period",
                "key": "Left Click",
                "icon": "static/heroes/abilities/wolverine-1-savage-claw.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Left Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Melee"
                    },
                    {
                        "label": "Base Damage",
                        "value": "15 damage per strike"
                    },
                    {
                        "label": "Percentage Damage",
                        "value": "Deal damage equal to 1.5% of the target's Max Health, with an extra 0.057% damage for each point of Rage"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "3.5m"
                    },
                    {
                        "label": "Attack Interval",
                        "value": "The first three strikes have an interval of 0.27s between them, while the fourth strike has a 0.84s interval from the third strike"
                    }
                ],
                "displayCategory": "Weapon / Primary Attack",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/97b1d4c6-7ea2-43f2-b528-5ea88904853f.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Last Stand",
                "description": "Knock enemies ahead airborne and spiral through the air, sweeping up enemies along the path and delivering a devastating impact at the landing point",
                "key": "Q",
                "icon": "static/heroes/abilities/wolverine-2-last-stand.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Q"
                    },
                    {
                        "label": "Knockback Range",
                        "value": "8m spherical radius"
                    },
                    {
                        "label": "Knockback Damage",
                        "value": "50"
                    },
                    {
                        "label": "Snatching Damage Over Time",
                        "value": "20/s"
                    },
                    {
                        "label": "Impact Range",
                        "value": "8m spherical radius"
                    },
                    {
                        "label": "Impact Base Damage",
                        "value": "50"
                    },
                    {
                        "label": "Impact Percentage Damage",
                        "value": "Deal damage equal to 10% of the target's Max Health, with an extra 0.3% damage for each point of Rage"
                    },
                    {
                        "label": "Knockdown Time",
                        "value": "0.75s"
                    },
                    {
                        "label": "Energy Cost",
                        "value": "2800"
                    }
                ],
                "displayCategory": "Ultimate Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/6900d5e2-7074-4c28-a424-4015ad9780a8.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Feral Leap",
                "description": "Leap like an animal to snatch the first enemy upon impact and Smash them to the ground. Unleashing this ability will enhance his normal attack to Berserk Claw Strike for a brief period",
                "key": "SHIFT",
                "icon": "static/heroes/abilities/wolverine-3-feral-leap.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "SHIFT"
                    },
                    {
                        "label": "Snatch Damage",
                        "value": "35"
                    },
                    {
                        "label": "Smash Damage",
                        "value": "35"
                    },
                    {
                        "label": "Knockdown Duration",
                        "value": "0.75s"
                    },
                    {
                        "label": "Berserk Claw Strike Duration",
                        "value": "5s"
                    },
                    {
                        "label": "Berserk Claw Strike Base Damage",
                        "value": "6 damage per strike"
                    },
                    {
                        "label": "Berserk Claw Strike Percentage Damage",
                        "value": "Deal damage equal to 1% of the target's Max Health, with an extra 0.035% damage for each point of Rage"
                    },
                    {
                        "label": "Berserk Claw Strike Maximum Distance",
                        "value": "3.5m"
                    },
                    {
                        "label": "Berserk Claw Strike Attack Interval",
                        "value": "5.88 strikes per second"
                    },
                    {
                        "label": "Cooldown",
                        "value": "12s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/e88c7523-3fab-4cfb-a954-080c5824f0fe.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Undying Animal",
                "description": "Unleash a fierce howl to briefly reduce incoming damage",
                "key": "E",
                "icon": "static/heroes/abilities/wolverine-4-undying-animal.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "E"
                    },
                    {
                        "label": "Duration",
                        "value": "5s"
                    },
                    {
                        "label": "Damage Reduction",
                        "value": "40%"
                    },
                    {
                        "label": "Cooldown",
                        "value": "16s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/15a76d54-520c-447a-b8f1-2ab0a488faac.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Vicious Rampage",
                "description": "Dash forward and unleash a Claw Strike",
                "key": "Right Click",
                "icon": "static/heroes/abilities/wolverine-5-vicious-rampage.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Right Click"
                    },
                    {
                        "label": "Casting",
                        "value": "Movement-based damage ability"
                    },
                    {
                        "label": "Average Speed",
                        "value": "44m/s"
                    },
                    {
                        "label": "Maximum Distance",
                        "value": "7.5m"
                    },
                    {
                        "label": "Range",
                        "value": "3m"
                    },
                    {
                        "label": "Base Damage",
                        "value": "15 damage per strike"
                    },
                    {
                        "label": "Percentage Damage",
                        "value": "Deal damage equal to 1.5% of the target's Max Health, with an extra 0.057% damage for each point of Rage"
                    },
                    {
                        "label": "Cooldown",
                        "value": "3s"
                    }
                ],
                "displayCategory": "Mobility Skill",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/a015b659-87d4-4569-a870-4af03347ecb3.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Regenerative Healing Factor",
                "description": "Begin to heal and rise with a hefty Bonus Health, shaking off all debuffs. After a brief moment, any remaining Bonus Health morphs into a one-off heal, zeroing out his Rage. Assists in KOs reduce this cooldown",
                "key": "Passive",
                "icon": "static/heroes/abilities/wolverine-6-regenerative-healing-factor.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Bonus Health",
                        "value": "150 - 300 (Damage increases with Rage)"
                    },
                    {
                        "label": "Bonus Health Duration",
                        "value": "3s"
                    },
                    {
                        "label": "Bonus Health/Healing Conversion",
                        "value": "1"
                    },
                    {
                        "label": "Cooldown Reduction Per KO Engaged",
                        "value": "10s"
                    },
                    {
                        "label": "Cooldown",
                        "value": "90s"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/031e30b1-f8d7-4be1-9a03-b758bdddc6be.png"
            },
            {
                "typeCode": "2",
                "category": "ability",
                "name": "Berserker Rage",
                "description": "Rage builds when Wolverine attacks or takes hits, boosting the damage of his Claw Strikes and the Bonus Health from his regenerative healing factor",
                "key": "Passive",
                "icon": "static/heroes/abilities/wolverine-7-berserker-rage.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Passive"
                    },
                    {
                        "label": "Max Rage",
                        "value": "100"
                    },
                    {
                        "label": "Rage Per Savage Claw Hit",
                        "value": "10"
                    },
                    {
                        "label": "Rage Per Vicious Rampage Hit",
                        "value": "15"
                    },
                    {
                        "label": "Rage Per Feral Leap Snatch",
                        "value": "10"
                    },
                    {
                        "label": "Rage Per Berserk Claw Strike Hit",
                        "value": "5"
                    },
                    {
                        "label": "Rage Per Last Stand Knockback",
                        "value": "25"
                    },
                    {
                        "label": "Rage Per Hit Taken",
                        "value": "5"
                    },
                    {
                        "label": "Rage Gain From Taking Hits",
                        "value": "2 per second"
                    }
                ],
                "displayCategory": "Passive / Trait",
                "officialIcon": "https://r.res.easebar.com/pic/20241205/e97de2d3-6f28-4619-80cd-59da00931e8b.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Phoenix Warrior",
                "description": "Wolverine and Hulk can interact with each other. Once both parties confirm, Hulk can lift Wolverine and press the key to hurl him forwardJean Grey imbues Wolverine with the awe-inspiring Phoenix Force. With this power, Wolverine's Feral Leap transforms into Phoenix Warrior. While active, he is enveloped in Phoenix flames that continuously scorch him and nearby enemies, dealing Percentage Damage. In this state, Wolverine's abilities gain Lifesteal when inflicting damage",
                "key": "Shift",
                "icon": "static/heroes/abilities/wolverine-8-phoenix-warrior.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "Shift"
                    },
                    {
                        "label": "Cooldown",
                        "value": "15s"
                    },
                    {
                        "label": "Spell Field Range",
                        "value": "3m spherical radius spell field"
                    },
                    {
                        "label": "Spell Field Damage",
                        "value": "Deal damage equals to target's 1% Maximum Health per second"
                    },
                    {
                        "label": "Lifesteal Proportion",
                        "value": "0.33"
                    },
                    {
                        "label": "Snatch Damage",
                        "value": "35"
                    },
                    {
                        "label": "Smash Damage",
                        "value": "35"
                    },
                    {
                        "label": "Knockdown Duration",
                        "value": "0.75s"
                    },
                    {
                        "label": "Berserk Claw Strike Duration",
                        "value": "5s"
                    },
                    {
                        "label": "Berserk Claw Strike Base Damage",
                        "value": "6 damage per strike"
                    },
                    {
                        "label": "Berserk Claw Strike Percentage Damage",
                        "value": "Deal damage equal to 1% of the target's Max Health, with an extra 0.035% damage for each point of Rage."
                    },
                    {
                        "label": "Berserk Claw Strike Maximum Distance",
                        "value": "3.5m"
                    },
                    {
                        "label": "Berserk Claw Strike Attack Interval",
                        "value": "5.88 strikes per second"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20250712/052fd724-4a96-47a3-97d7-fef8ac9056ac.png"
            },
            {
                "typeCode": "3",
                "category": "team-up",
                "name": "Kinetic Claws",
                "description": "Cyclops supercharges Wolverine's claws, extending his attack range. While active, Wolverine's Vicious Rampage is replaced with Kinetic Claws, granting him a brief forward lunge that unleashes a flurry of slashes around him",
                "key": "X",
                "icon": "static/heroes/abilities/wolverine-9-kinetic-claws.png",
                "params": [
                    {
                        "label": "Key",
                        "value": "X"
                    },
                    {
                        "label": "Ability Cooldown",
                        "value": "20s"
                    },
                    {
                        "label": "Ability Duration",
                        "value": "8s"
                    },
                    {
                        "label": "Attack Range Bonus:",
                        "value": "1m"
                    },
                    {
                        "label": "Kinetic Claws Cooldown",
                        "value": "3s"
                    },
                    {
                        "label": "Kinetic Claws Damage Tick Rate:",
                        "value": "0.1s"
                    },
                    {
                        "label": "Kinetic Claws Damage:",
                        "value": "5 + 0.01% Max HP per Rage point"
                    },
                    {
                        "label": "Kinetic Claws Duration:",
                        "value": "1.5s"
                    }
                ],
                "displayCategory": "Team-Up Ability",
                "officialIcon": "https://r.res.easebar.com/pic/20260611/163cb861-6d98-42a9-8101-c0fa96a4c48f.png"
            }
        ],
        "stats": [
            {
                "label": "Health",
                "value": "350"
            },
            {
                "label": "Movement Speed",
                "value": "7m/s"
            }
        ],
        "forms": [
            "Wolverine"
        ]
    }
};
