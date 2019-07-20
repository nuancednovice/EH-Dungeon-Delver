export default [
  {
    name: 'swarm of rats',
    level: 1,
    health: 1,
    mana: 0,
    armor: 1,
    armorDurability: 2,
    attack: 1,
    gold: 2,
    weakness: 'fire',
    specials: [
      {
        effect: 'damage',
        damage: 2,
        cost: 1,
        chance: 45,
        message: '* >> Enemy *name* engulfs your body dealing *damage* damage'
      }
    ]
  },
  {
    name: 'kobold',
    level: 1,
    health: 1,
    mana: 0,
    armor: 0,
    armorDurability: 0,
    attack: 1,
    gold: 3
  },
  {
    name: 'goblin',
    level: 1,
    health: 2,
    mana: 0,
    armor: 0,
    armorDurability: 0,
    attack: 2,
    gold: 3,
    weakness: 'fire'
  },
  {
    name: 'skeleton',
    level: 1,
    health: 2,
    mana: 4,
    armor: 2,
    armorDurability: 1,
    attack: 2,
    gold: 3,
    resistance: 'poison',
    specials: [
      {
        effect: 'damage',
        damage: 2,
        chance: 40,
        message: '* >> Enemy *name* flings a bone at you dealing *damage* damage'
      },
      {
        effect: 'damage',
        damage: 3,
        cost: 2,
        chance: 20,
        message: '* >> Enemy *name* releases a sense of death giving you <div class="tm-c-log__keyword">poison</div>'
      }
    ]
  }
];
