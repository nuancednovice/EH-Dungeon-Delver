export default [
  {
    armor: 1,
    attack: 1,
    gold: 2,
    health: 1,
    level: 1,
    mana: 0,
    name: 'swarm of rats',
    specials: [
      {
        chance: 0.45,
        cost: 1,
        damage: 2,
        effect: 'damage',
        message: '* >> Enemy *name* engulfs your body dealing *damage* damage',
      },
    ],
    weakness: 'fire',
  },
  {
    armor: 0,
    attack: 1,
    gold: 3,
    health: 1,
    level: 1,
    mana: 0,
    name: 'kobold',
  },
  {
    armor: 0,
    attack: 2,
    gold: 3,
    health: 2,
    level: 1,
    mana: 0,
    name: 'goblin',
    weakness: 'fire',
  },
  {
    armor: 2,
    attack: 2,
    gold: 3,
    health: 2,
    level: 1,
    mana: 4,
    name: 'skeleton',
    resistance: 'poison',
    specials: [
      {
        chance: 0.4,
        damage: 2,
        effect: 'damage',
        message: '* >> Enemy *name* flings a bone at you dealing *damage* damage',
      },
      {
        chance: 0.2,
        cost: 2,
        damage: 3,
        effect: 'damage',
        message:
          '* >> Enemy *name* releases a sense of death giving you <div class="tm-c-log__keyword">poison</div>',
      },
    ],
  },
];
