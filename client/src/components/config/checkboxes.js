
export const globalAbilities = [
    {
        name: 'actions',
        key: 'actions',
        label: 'At least 1 card with +2 Actions'
    },
    {
        name: 'buys',
        key: 'buys',
        label: 'At least 1 card with +1 Buys'
    },
    {
        name: 'cards',
        key: 'cards',
        label: 'At least 1 card that draws >2 cards'
    },
    {
        name: 'trash',
        key: 'trash',
        label: 'At least 1 card with trash ability',
    },
];

export const globalClasses = [
    {
        name: 'victory',
        key: 'victory',
        label: 'At least 1 Victory Card'
    },
    {
        name: 'no-victory',
        key: 'no-victory',
        label: 'No Victory Cards'
    },
    {
        name: 'attack',
        key: 'attack',
        label: 'At least 1 Attack Card'
    },
    {
        name: 'no-attack',
        key: 'no-attack',
        label: 'No Attack Cards'
    },
];

export const curse = [ // attack related
    {
        name: 'curses',
        key: 'curses',
        label: 'At least 1 card that gives Curses',
    },
    {
        name: 'no-curses',
        key: 'no-curses',
        label: 'No Curses',
    },
];

export const reaction = [ // reactions
    {
        name: 'attack-reaction',
        key: 'attack-reaction',
        label: 'If Attack Card, include Reaction',
    }, 
    {
        name: 'no-attack-reaction',
        key: 'no-attack-reaction',
        label: 'If no Attack Card, exclude Reactions',
    },
];

export const immunity = [ // immunity
    {
        name: 'attack-immunity', // IMMUNITY (dom, noc)
        key: 'attack-immunity',
        label: 'If Attack Card, include Immunity',
    },
];

export const treasure = [ // treasure
    {
        name: 'treasure', // TREASURES (int)
        key: 'treasure',
        label: 'At least 1 Treasure Card'
    }, 
    {
        name: 'no-treasure',
        key: 'no-treasure',
        label: 'No Treasure Cards'
    },
];

export const traveller = [
    {
        name: 'traveller', // TRAVELLER (adv)
        key: 'traveller',
        label: 'At least 1 Traveller Card'
    }, 
    {
        name: 'no-traveller',
        key: 'no-traveller',
        label: 'No Traveller Cards'
    },
];

export const reserve = [
    {
        name: 'reserve', // RESERVE (adv)
        key: 'reserve',
        label: 'At least 1 Reserve Card'
    }, 
    {
        name: 'no-reserve',
        key: 'no-reserve',
        label: 'No Reserve Cards'
    },
];

export const night = [
    {
        name: 'night', // NIGHT (noc)
        key: 'night',
        label: 'At least 1 Night Card'
    }, {
        name: 'no-night',
        key: 'no-night',
        label: 'No Night Cards'
    },
];

export const duration = [
    {
        name: 'duration', // DURATION (adv, noc)
        key: 'duration',
        label: 'At least 1 Duration Card'
    }, {
        name: 'no-duration',
        key: 'no-duration',
        label: 'No Duration Cards'
    },
];