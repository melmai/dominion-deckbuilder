
export const options = [
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
        label: 'At least 1 card that allows drawing >2 cards'
    },
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
    /* {
        name: 'treasure', // TREASURES (int)
        key: 'treasure',
        label: 'At least 1 Treasure Card'
    }, {
        name: 'no-treasure',
        key: 'no-treasure',
        label: 'No Treasure Cards'
    }, */
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
    /* {
        name: 'attack-immunity',    // IMMUNITY (dom, noc)
        key: 'attack-immunity',
        label: 'If Attack Card, include Immunity',
    }, */
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
    {
        name: 'trash',
        key: 'trash',
        label: 'At least 1 card with trash ability',
    },
];

export const dominion = [ // immunity
    {
        name: 'attack-immunity', // IMMUNITY (dom, noc)
        key: 'attack-immunity',
        label: 'If Attack Card, include Immunity',
    },
];

export const intrigue = [ // treasure
    {
        name: 'treasure', // TREASURES (int)
        key: 'treasure',
        label: 'At least 1 Treasure Card'
    }, {
        name: 'no-treasure',
        key: 'no-treasure',
        label: 'No Treasure Cards'
    },
];

export const adventures = [];
export const nocturne = [];