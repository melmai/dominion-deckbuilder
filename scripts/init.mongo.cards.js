// script to import records to db (07-25-18)
let db = new Mongo().getDB('dominion');
db.cards.remove({});

db.cards.insertMany([ 
{
    "_id": 1,
    "name": "Baron",
    "cost": 4,
    "class": ["Action"],
    "abilities": {
        "buy": 1
    },
    "text": "You may discard an Estate for +4 Money. If you don't, gain an Estate.",
    "box": "Intrigue2",
    "strategy": {
        "addAction": 0,
        "addBuy": 1,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 1,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 2,
    "name": "Bridge",
    "cost": 4,
    "class": ["Action"],
    "abilities": {
        "money": 1,
        "buy": 1
    },
    "text": "This turn, cards (everywhere) cost 1 less, but not less than 0.",
    "box": "Intrigue2",
    "strategy": {
        "addAction": 0,
        "addBuy": 1,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 3,
    "name": "Conspirator",
    "cost": 4,
    "class": ["Action"],
    "abilities": {
        "money": 2
    },
    "text": "If you've played 3 or more actions this turn (counting this), +1 Card and +1 Action.",
    "box": "Intrigue2",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 4,
    "name": "Courtier",
    "cost": 5,
    "class": ["Action"],
    "text": "Reveal a card from your hand. For each type it has (Action, Attack, etc.), choose one: +1 Action; or +1 Buy; or +3 Money; or gain a Gold. The choices must be different.",
    "box": "Intrigue2",
    "strategy": {
        "addAction": 1,
        "addBuy": 1,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 1,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 5,
    "name": "Courtyard",
    "cost": 2,
    "class": ["Action"],
    "abilities": {
        "card": 3
    },
    "text": "Put a card from your hand onto your deck.",
    "box": "Intrigue2",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 1,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 6,
    "name": "Diplomat",
    "cost": 4,
    "class": ["Action", "Reaction"],
    "abilities": {
        "card": 2
    },
    "text": "If you have 5 or fewer cards in hand (after drawing), +2 Actions. // When another player plays an Attack card, you may first reveal this from a hand of 5 or more cards, to draw 2 cards then discard 3.",
    "box": "Intrigue2",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 1,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 7,
    "name": "Ironworks",
    "cost": 4,
    "class": ["Action"],
    "text": "Gain a card costing up to 4. If the gained card is an... Action card, +1 Action; Treasure card, +1 Money; Victory card, +1 Card.",
    "box": "Intrigue2",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 1,
        "gainTreasure": 1,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 8,
    "name": "Lurker",
    "cost": 2,
    "class": ["Action"],
    "abilities": {
        "action": 1
    },
    "text": "Choose one: Trash an Action card from the Supply; or gain an Action card from the trash.",
    "box": "Intrigue2",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 1,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 9,
    "name": "Masquerade",
    "cost": 3,
    "class": ["Action"],
    "abilities": {
        "card": 2
    },
    "text": "Each player with any cards in hand passes one to the next such player to their left, at once. Then you may trash a card from your hand.",
    "box": "Intrigue2",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 1,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 1
    }
},
{
    "_id": 11,
    "name": "Mill",
    "cost": 4,
    "class": ["Action", "Victory"],
    "abilities": {
        "action": 1,
        "card": 1
    },
    "text": "You may discard 2 cards for +2 Money.",
    "box": "Intrigue2",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 12,
    "name": "Mining Village",
    "cost": 4,
    "class": ["Action"],
    "abilities": {
        "action": 2,
        "card": 1
    },
    "text": "You may trash this for +2 Money.",
    "box": "Intrigue2",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 13,
    "name": "Minion",
    "cost": 5,
    "class": ["Action", "Attack"],
    "abilities": {
        "action": 1
    },
    "text": "Choose one: +2 Money; or discard your hand, +4 Cards, and each other player with at least 5 cards in hand discards their hand and draws 4 cards.",
    "box": "Intrigue2",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 1,
        "curse": 0,
        "filter": 1,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 14,
    "name": "Patrol",
    "cost": 5,
    "class": ["Action"],
    "abilities": {
        "card": 3
    },
    "text": "Reveal the top 4 cards of your deck. Put the Victory cards and Curses into your hand. Put the rest back in any order.",
    "box": "Intrigue2",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 1,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 15,
    "name": "Pawn",
    "cost": 2,
    "class": ["Action"],
    "abilities": {
        "card": 1,
        "action": 1,
        "buy": 1,
        "money": 1
    },
    "text": "Choose two: +1 Card; +1 Action; +1 Buy; +1 Money. The choices must be different.",
    "box": "Intrigue2",
    "strategy": {
        "addAction": 1,
        "addBuy": 1,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 16,
    "name": "Secret Passage",
    "cost": 4,
    "class": ["Action"],
    "abilities": {
        "card": 2,
        "action": 1
    },
    "text": "Take a card from your hand and put it anywhere in your deck.",
    "box": "Intrigue2",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 1,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 17,
    "name": "Shanty Town",
    "cost": 3,
    "class": ["Action"],
    "abilities": {
        "action": 2
    },
    "text": "Reveal your hand. If you have no Action cards in hand, +2 Cards.",
    "box": "Intrigue2",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 18,
    "name": "Steward",
    "cost": 3,
    "class": ["Action"],
    "abilities": {
        "cards": 2,
        "money": 2
    },
    "text": "Choose one: +2 Cards; or +2 Money; or trash 2 cards from your hand.",
    "box": "Intrigue2",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 1,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 1
    }
},
{
    "_id": 19,
    "name": "Swindler",
    "cost": 3,
    "class": ["Action", "Attack"],
    "abilities": {
        "money": 2
    },
    "text": "Each other player trashes the top card of their deck and gains a card with the same cost that you choose.",
    "box": "Intrigue2",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 20,
    "name": "Torturer",
    "cost": 5,
    "class": ["Action", "Attack"],
    "abilities": {
        "card": 3
    },
    "text": "Each other player either discards 2 cards or gains a Curse to their hand, their choice. (They may pick an option they can't do.",
    "box": "Intrigue2",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 1,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 21,
    "name": "Trading Post",
    "cost": 5,
    "class": ["Action"],
    "text": "Trash 2 cards from your hand. If you did, gain a Silver to your hand.",
    "box": "Intrigue2",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 1,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 1,
        "immunity": 0,
        "trash": 1
    }
},
{
    "_id": 22,
    "name": "Upgrade",
    "cost": 5,
    "class": ["Action"],
    "abilities": {
        "card": 1,
        "action": 1
    },
    "text": "Trash a card from your hand. Gain a card costing exactly 1 more than it.",
    "box": "Intrigue2",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 1,
        "draw": 1,
        "gainCard": 1,
        "gainTreasure": 1,
        "immunity": 0,
        "trash": 1
    }
},
{
    "_id": 23,
    "name": "Wishing Well",
    "cost": 3,
    "class": ["Action"],
    "abilities": {
        "card": 1,
        "action": 1
    },
    "text": "Name a card, then reveal the top card of your deck. If you named it, put it into your hand.",
    "box": "Intrigue2",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 24,
    "name": "Nobles",
    "cost": 6,
    "class": ["Action", "Victory"],
    "abilities": {
        "card": 3,
        "action": 2
    },
    "box": "Intrigue2",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 25,
    "name": "Harem",
    "cost": 6,
    "class": ["Treasure", "Victory"],
    "abilities": {
        "money": 2
    },
    "box": "Intrigue2",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 26,
    "name": "Duke",
    "cost": 5,
    "class": ["Victory"],
    "text": "Worth 1 VP per Duchy you have.",
    "box": "Intrigue2",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 27,
    "name": "Amulet",
    "cost": 3,
    "class": ["Action", "Duration"],
    "text": "Now and at the start of your next turn, choose one: +1 Money; or trash a card from your hand; or gain a silver.",
    "box": "Adventures",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 1,
        "immunity": 0,
        "trash": 1
    }
},
{
    "_id": 28,
    "name": "Artificer",
    "cost": 5,
    "class": ["Action"],
    "abilities": {
        "card": 1,
        "action": 1,
        "money": 1
    },
    "text": "Discard any number of cards. You may gain a card onto your deck costing exactly 1 per card discarded.",
    "box": "Adventures",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 1,
        "gainTreasure": 1,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 29,
    "name": "Bridge Troll",
    "cost": 5,
    "class": ["Action", "Attack", "Duration"],
    "text": "Each other player takes their -1 token. Now and at the start of your next turn: +1 Buy. // While this is in play, cards cost 1 less on your turns, but not less than 0.",
    "box": "Adventures",
    "strategy": {
        "addAction": 0,
        "addBuy": 1,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 30,
    "name": "Caravan Guard",
    "cost": 3,
    "class": ["Action", "Duration", "Reaction"],
    "abilities": {
        "card": 1,
        "action": 1
    },
    "text": "At the start of your next turn, +1 Money. // When another player plays an Attack card, you may first play this from your hand. +1 Action has no effect if it is not your turn.",
    "box": "Adventures",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 31,
    "name": "Coin of the Realm",
    "cost": 2,
    "class": ["Treasure", "Reserve"],
    "abilities": {
        "money": 1
    },
    "text": "When you play this, put it on your Tavern mat. Directly after you finish playing an Action card, you may call this, for +2 Actions.",
    "box": "Adventures",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 32,
    "name": "Distant Lands",
    "cost": 5,
    "class": ["Action", "Reserve", "Victory"],
    "text": "Put this on your Tavern mat. Worth 4 VP if on your Tavern mat at the end of the game. (Otherwise, worth 0).",
    "box": "Adventures",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 33,
    "name": "Dungeon",
    "cost": 3,
    "class": ["Action", "Duration"],
    "abilities": {
        "action": 1
    },
    "text": "Now and at the start of your next turn: +2 Cards then discard 2 cards.",
    "box": "Adventures",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 1,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 34,
    "name": "Duplicate",
    "cost": 4,
    "class": ["Action", "Reserve"],
    "text": "Put this on your Tavern mat. When you gain a card costing up to 6, you may call this, to gain a copy of that card.",
    "box": "Adventures",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 1,
        "gainTreasure": 1,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 35,
    "name": "Gear",
    "cost": 3,
    "class": ["Action", "Duration"],
    "abilities": {
        "card": 2
    },
    "text": "Set aside up to 2 cards from your hand face down (under this). At the start of your next turn, put them into your hand.",
    "box": "Adventures",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 1,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 36,
    "name": "Giant",
    "cost": 5,
    "class": ["Action", "Attack"],
    "text": "Turn your Journey token over (it starts face up). Then, if it's face down, +1 Money. If it's face up, +5 Money, and each other player reveals the top card of their deck, trashes it if it costs from 3-6, and otherwise discards it and gains a Curse.",
    "box": "Adventures",
    "journeyToken": 1,
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 1,
        "curse": 1,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 37,
    "name": "Guide",
    "cost": 3,
    "class": ["Action", "Reserve"],
    "abilities": {
        "card": 1,
        "action": 1
    },
    "text": "Put this on your tavern mat. At the start of your turn, you may call this, to discard your hand and draw 5 cards.",
    "box": "Adventures",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 1,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 38,
    "name": "Haunted Woods",
    "cost": 5,
    "class": ["Action", "Attack", "Duration"],
    "text": "Until your next turn, when any other player buys a card, they put their hand onto their deck in any order. At the start of your next turn: +3 Cards.",
    "box": "Adventures",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 39,
    "name": "Hireling",
    "cost": 6,
    "class": ["Action", "Duration"],
    "text": "At the start of each of your turns for the rest of the game: +1 Card (this stays in play.)",
    "box": "Adventures",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 40,
    "name": "Lost City",
    "cost": 5,
    "class": ["Action"],
    "abilities": {
        "card": 2,
        "action": 2
    },
    "text": "When you gain this, each other player draws a card.",
    "box": "Adventures",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 41,
    "name": "Magpie",
    "cost": 4,
    "class": ["Action"],
    "abilities": {
        "card": 1,
        "action": 1
    },
    "text": "Reveal the top card of your deck. If it's a Treasure, put it into your hand. If it's an Action or Victory card, gain a Magpie.",
    "box": "Adventures",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 1,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 42,
    "name": "Page",
    "cost": 2,
    "class": ["Action", "Traveller"],
    "abilities": {
        "card": 1,
        "action": 1
    },
    "text": "When you discard this from play, you may exchange it for a Treasure Hunter.",
    "box": "Adventures",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 1,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 43,
    "name": "Messenger",
    "cost": 4,
    "class": ["Action"],
    "abilities": {
        "buy": 1,
        "money": 2
    },
    "text": "You may put your deck into your discard pile. When this is your first buy in a turn, gain a card costing up to 4 and each other player gains a copy of it.",
    "box": "Adventures",
    "strategy": {
        "addAction": 0,
        "addBuy": 1,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 1,
        "gainTreasure": 1,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 44,
    "name": "Miser",
    "cost": 4,
    "class": ["Action"],
    "text": "Choose one: put a Copper from your hand onto your Tavern mat; or +1 Money per Copper on your Tavern mat.",
    "box": "Adventures",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 45,
    "name": "Port",
    "cost": 4,
    "class": ["Action"],
    "abilities": {
        "card": 1,
        "action": 2
    },
    "text": "When you buy this, gain another Port.",
    "box": "Adventures",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 1,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 46,
    "name": "Ranger",
    "cost": 4,
    "class": ["Action"],
    "abilities": {
        "buy": 1
    },
    "text": "Turn your Journey token over (it starts face up). Then, if it's face up, +5 Cards.",
    "box": "Adventures",
    "journeyToken": 1,
    "strategy": {
        "addAction": 0,
        "addBuy": 1,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 47,
    "name": "Rat Catcher",
    "cost": 2,
    "class": ["Action", "Reserve"],
    "abilities": {
        "card": 1,
        "action": 1
    },
    "text": "Put this on your Tavern mat. At the start of your turn, you may call this, to trash a card from your hand.",
    "box": "Adventures",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 1
    }
},
{
    "_id": 48,
    "name": "Raze",
    "cost": 2,
    "class": ["Action"],
    "abilities": {
        "action": 1
    },
    "text": "Trash this or a card from your hand. Look at one card from the top of your deck per 1 the trashed card costs. Put one of them into your hand and discard the rest.",
    "box": "Adventures",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 1,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 1
    }
},
{
    "_id": 49,
    "name": "Relic",
    "cost": 5,
    "class": ["Treasure", "Attack"],
    "abilities": {
        "money": 2
    },
    "text": "When you play this, each other player puts their -1 Card token on their deck.",
    "box": "Adventures",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 50,
    "name": "Royal Carriage",
    "cost": 5,
    "class": ["Action", "Reserve"],
    "abilities": {
        "action": 1
    },
    "text": "Put this on your Tavern mat. Directly after you finish playing an Action card, if it's still in play, you may call this, to replay that Action.",
    "box": "Adventures",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 51,
    "name": "Storyteller",
    "cost": 5,
    "class": ["Action"],
    "abilities": {
        "action": 1,
        "money": 1
    },
    "text": "Play up to 3 Treasures from your hand. Then pay all of your money (including the one from this) and draw a card per 1 you paid.",
    "box": "Adventures",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 52,
    "name": "Swamp Hag",
    "cost": 5,
    "class": ["Action", "Attack", "Duration"],
    "text": "Until your next turn, when any other player buys a card, they gain a Curse. At the start of your next turn: +3 Money.",
    "box": "Adventures",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 1,
        "curse": 1,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 53,
    "name": "Transmogrify",
    "cost": 4,
    "class": ["Action", "Reserve"],
    "abilities": {
        "action": 1
    },
    "text": "Put this on your Tavern mat. At the start of your turn, you may call this, to trash a card from your hand, and gain a card to your hand costing up to 1 more than it.",
    "box": "Adventures",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 1,
        "gainTreasure": 1,
        "immunity": 0,
        "trash": 1
    }
},
{
    "_id": 54,
    "name": "Treasure Trove",
    "cost": 5,
    "class": ["Treasure"],
    "abilities": {
        "money": 2
    },
    "text": "When you play this, gain a Gold and a Copper.",
    "box": "Adventures",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 1,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 55,
    "name": "Wine Merchant",
    "cost": 5,
    "class": ["Action", "Reserve"],
    "abilities": {
        "money": 4,
        "buy": 1
    },
    "text": "Put this on your Tavern mat. At the end of your Buy phase, if you have at least 2 unspent, you may discard this from your Tavern mat.",
    "box": "Adventures",
    "strategy": {
        "addAction": 0,
        "addBuy": 1,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 56,
    "name": "Peasant",
    "cost": 2,
    "class": ["Action", "Traveller"],
    "abilities": {
        "money": 1,
        "buy": 1
    },
    "text": "When you discard this from play, you may exchange it for a Soldier.",
    "box": "Adventures",
    "strategy": {
        "addAction": 0,
        "addBuy": 1,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 1,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 57,
    "name": "Artisan",
    "cost": 6,
    "class": ["Action"],
    "text": "Gain a card to your hand costing up to 5. Put a card from your hand onto your deck.",
    "box": "Dominion2",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 1,
        "gainTreasure": 1,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 58,
    "name": "Bandit",
    "cost": 5,
    "class": ["Action", "Attack"],
    "text": "Gain a Gold. Each other player reveals the top 2 cards of their deck, trashes a revealed Treasure other than Copper, and discards the rest.",
    "box": "Dominion2",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 1,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 59,
    "name": "Bureaucrat",
    "cost": 4,
    "class": ["Action", "Attack"],
    "text": "Gain a Silver onto your deck. Each other player reveals a Victory card from their hand and puts it onto their deck (or reveals a hand with no Victory cards).",
    "box": "Dominion2",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 1,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 60,
    "name": "Cellar",
    "cost": 2,
    "class": ["Action"],
    "abilities": {
        "action": 1
    },
    "text": "Discard any number of cards, then draw that many.",
    "box": "Dominion2",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 1,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 61,
    "name": "Chapel",
    "cost": 2,
    "class": ["Action"],
    "text": "Trash up to 4 cards from your hand.",
    "box": "Dominion2",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 1,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 1
    }
},
{
    "_id": 62,
    "name": "Council Room",
    "cost": 5,
    "class": ["Action"],
    "abilities": {
        "card": 4,
        "buy": 1
    },
    "text": "Each other player draws a card.",
    "box": "Dominion2",
    "strategy": {
        "addAction": 0,
        "addBuy": 1,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 63,
    "name": "Festival",
    "cost": 5,
    "class": ["Action"],
    "abilities": {
        "action": 2,
        "buy": 1,
        "money": 2
    },
    "box": "Dominion2",
    "strategy": {
        "addAction": 1,
        "addBuy": 1,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 64,
    "name": "Harbinger",
    "cost": 3,
    "class": ["Action"],
    "abilities": {
        "card": 1,
        "action": 1
    },
    "text": "Look through your discard pile. You may put a card from it onto your deck.",
    "box": "Dominion2",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 1,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 65,
    "name": "Laboratory",
    "cost": 5,
    "class": ["Action"],
    "abilities": {
        "card": 2,
        "action": 1
    },
    "box": "Dominion2",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 66,
    "name": "Library",
    "cost": 5,
    "class": ["Action"],
    "text": "Draw until you have 7 cards in hand, skipping any Action cards you choose to; set those aside, discarding them afterwards.",
    "box": "Dominion2",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 1,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 67,
    "name": "Market",
    "cost": 5,
    "class": ["Action"],
    "abilities": {
        "card": 1,
        "action": 1,
        "buy": 1,
        "money": 1
    },
    "box": "Dominion2",
    "strategy": {
        "addAction": 1,
        "addBuy": 1,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 68,
    "name": "Merchant",
    "cost": 3,
    "class": ["Action"],
    "abilities": {
        "card": 1,
        "action": 1
    },
    "text": "The first time you play a Silver this turn, +1 Money.",
    "box": "Dominion2",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 69,
    "name": "Militia",
    "cost": 4,
    "class": ["Action", "Attack"],
    "abilities": {
        "money": 2
    },
    "text": "Each other player discards down to 3 cards in hand.",
    "box": "Dominion2",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 70,
    "name": "Mine",
    "cost": 5,
    "class": ["Action"],
    "text": "You may trash a Treasure from your hand. Gain a Treasure to your hand costing up to 3 more than it.",
    "box": "Dominion2",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 1,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 1,
        "immunity": 0,
    }
},
{
    "_id": 71,
    "name": "Moat",
    "cost": 2,
    "class": ["Action", "Reaction"],
    "abilities": {
        "card": 2
    },
    "text": "When another player plays an Attack card, you may first reveal this from your hand to be unaffected by it.",
    "box": "Dominion2",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 1,
        "trash": 0
    }
},
{
    "_id": 72,
    "name": "Moneylender",
    "cost": 4,
    "class": ["Action"],
    "text": "You may trash a Copper from your hand for +3 Money.",
    "box": "Dominion2",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 1,
        "curse": 0,
        "filter": 1,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
    }
},
{
    "_id": 73,
    "name": "Poacher",
    "cost": 4,
    "class": ["Action"],
    "abilities": {
        "card": 1,
        "action": 1,
        "money": 1
    },
    "text": "Discard a card per empty Supply pile",
    "box": "Dominion2",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 74,
    "name": "Remodel",
    "cost": 4,
    "class": ["Action"],
    "text": "Trash a card from your hand. Gain a card costing up to 2 more than it.",
    "box": "Dominion2",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 1,
        "draw": 0,
        "gainCard": 1,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 1
    }
},
{
    "_id": 75,
    "name": "Sentry",
    "cost": 5,
    "class": ["Action"],
    "abilities": {
        "card": 1,
        "action": 1
    },
    "text": "Look at the top 2 cards of your deck. Trash and/or discard any number of them. Put the rest back on top in any order.",
    "box": "Dominion2",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 1,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 1
    }
},
{
    "_id": 76,
    "name": "Smithy",
    "cost": 4,
    "class": ["Action"],
    "abilities": {
        "card": 3
    },
    "box": "Dominion2",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 77,
    "name": "Throne Room",
    "cost": 4,
    "class": ["Action"],
    "text": "You may play an Action card from your hand twice.",
    "box": "Dominion2",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 78,
    "name": "Vassal",
    "cost": 3,
    "class": ["Action"],
    "abilities": {
        "money": 2
    },
    "text": "Discard the top card of your deck. If it's an Action card, you may play it.",
    "box": "Dominion2",    
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 79,
    "name": "Village",
    "cost": 3,
    "class": ["Action"],
    "abilities": {
        "card": 1,
        "action": 2
    },
    "box": "Dominion2",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 80,
    "name": "Witch",
    "cost": 5,
    "class": ["Action", "Attack"],
    "abilities": {
        "card": 2
    },
    "text": "Each other player gains a Curse.",
    "box": "Dominion2",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 1,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 81,
    "name": "Workshop",
    "cost": 3,
    "class": ["Action"],
    "text": "Gain a card costing up to 4.",
    "box": "Dominion2",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 1,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 82,
    "name": "Gardens",
    "cost": 4,
    "class": ["Victory"],
    "text": "Worth 1 VP per 10 cards you have (round down).",
    "box": "Dominion2",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 83,
    "name": "Bard",
    "cost": 4,
    "class": ["Action", "Fate"],
    "abilities": {
        "money": 2
    },
    "text": "Receive a Boon.",
    "box": "Nocturne",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 84,
    "name": "Blessed Village",
    "cost": 4,
    "class": ["Action", "Fate"],
    "abilities": {
        "card": 1,
        "action": 2
    },
    "text": "When you gain this, take a Boon. Receive it now or at the start of your next turn.",
    "box": "Nocturne",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 85,
    "name": "Changeling",
    "cost": 3,
    "class": ["Night"],
    "text": "Trash this. Gain a copy of a card you have in play. // In games using this, when you gain a card costing 3 or more, you may exchange it for a Changeling.",
    "box": "Nocturne",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 1,
        "gainTreasure": 1,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 86,
    "name": "Cobbler",
    "cost": 5,
    "class": ["Night", "Duration"],
    "text": "At the start of your next turn, gain a card to your hand costing up to 4.",
    "box": "Nocturne",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 1,
        "gainTreasure": 1,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 87,
    "name": "Conclave",
    "cost": 4,
    "class": ["Action"],
    "abilities": {
        "money": 2
    },
    "text": "You may play an Action card from your hand that you don't have a copy of in play. If you do, +1 Action.",
    "box": "Nocturne",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 88,
    "name": "Crypt",
    "cost": 5,
    "class": ["Night", "Duration"],
    "text": "Set aside any number of Treasures you have in play, face down (under this). While any remain, at the start of each of your turns, put one of them into your hand.",
    "box": "Nocturne",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 89,
    "name": "Cursed Village",
    "cost": 5,
    "class": ["Action", "Doom"],
    "abilities": {
        "action": 2
    },
    "text": "Draw until you have 6 cards in hand. // When you gain this, receive a hex.",
    "box": "Nocturne",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 90,
    "name": "Den of Sin",
    "cost": 5,
    "class": ["Night", "Duration"],
    "text": "At the start of your next turn, +2 Cards. // This is gained to your hand (instead of your discard pile).",
    "box": "Nocturne",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 91,
    "name": "Devil's Workshop",
    "cost": 4,
    "class": ["Night"],
    "text": "If the number of cards you've gained this turn is: 2+, gain an Imp from its pile; 1, gain a card costing up to 4; 0, gain a Gold.",
    "box": "Nocturne",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 1,
        "gainTreasure": 1,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 92,
    "name": "Druid",
    "cost": 2,
    "class": ["Action", "Fate"],
    "abilities": {
        "buy": 1
    },
    "text": "Receive one of the set-aside Boons (leaving it there). // Setup: Set aside the top 3 Boons face up.",
    "box": "Nocturne",
    "strategy": {
        "addAction": 0,
        "addBuy": 1,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 94,
    "name": "Exorcist",
    "cost": 4,
    "class": ["Night"],
    "text": "Trash a card from your hand. Gain a cheaper Spirit from one of the Spirit piles.",
    "box": "Nocturne",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 1,
        "draw": 0,
        "gainCard": 1,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 1
    }
},
{
    "_id": 95,
    "name": "Faithful Hound",
    "cost": 2,
    "class": ["Action", "Reaction"],
    "abilities": {
        "card": 2
    },
    "text": "When you discard this other than during Clean-up, you may set it aside, and put it into your hand at the end of the turn.",
    "box": "Nocturne",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 96,
    "name": "Fool",
    "cost": 3,
    "class": ["Action", "Fate"],
    "text": "If you aren't the player with Lost in the Woods, take it, take 3 Boons, and receive the Boons in any order.",
    "heirloom": "Lucky Coin",
    "box": "Nocturne",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 97,
    "name": "Ghost Town",
    "cost": 3,
    "class": ["Night", "Duration"],
    "text": "At the start of your next turn, +1 Card and +1 Action. // This is gained to your hand (instead of your discard pile).",
    "box": "Nocturne",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 98,
    "name": "Guardian",
    "cost": 2,
    "class": ["Night", "Duration"],
    "text": "Until your next turn, when another player plays an Attack card, it doesn't affect you. At the start of your next turn, +1 Money. // This is gained to your hand (instead of your discard pile).",
    "immunity": 1,
    "box": "Nocturne",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 1,
        "trash": 0
    }
},
{
    "_id": 99,
    "name": "Idol",
    "cost": 5,
    "class": ["Treasure", "Attack", "Fate"],
    "abilities": {
        "money": 2
    },
    "text": "When you play this, if you then have an odd number of Idols in play, receive a Boon; If an even number, each other player gains a Curse.",
    "box": "Nocturne",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 1,
        "curse": 1,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 100,
    "name": "Leprechaun",
    "cost": 3,
    "class": ["Action", "Doom"],
    "text": "Gain a Gold. If you have exactly 7 cards in play, gain a Wish from its pile. Otherwise, receive a Hex.",
    "box": "Nocturne",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 1,
        "gainTreasure": 1,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 101,
    "name": "Monastery",
    "cost": 2,
    "class": ["Night"],
    "text": "For each card you've gained this turn, you may trash a card from your hand or a Copper you have in play.",
    "box": "Nocturne",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 1,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 1
    }
},
{
    "_id": 102,
    "name": "Necromancer",
    "cost": 4,
    "class": ["Action"],
    "text": "Play a face up, non-Duration Action card from the trash, leaving it there and turning it face down for the turn. // Setup: put the 3 Zombies into the trash.",
    "linkedCard": "Zombies",
    "box": "Nocturne",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 103,
    "name": "Night Watchmen",
    "cost": 3,
    "class": ["Night"],
    "text": "Look at the top 5 cards of your deck, discard any number, and put the rest back in any order. // This is gained to your hand (instead of your discard pile).",
    "box": "Nocturne",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 1,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 104,
    "name": "Pixie",
    "cost": 2,
    "class": ["Action", "Fate"],
    "abilities": {
        "card": 1,
        "action": 1
    },
    "text": "Discard the top Boon. You may trash this to receive that Boon twice.",
    "heirloom": "Goat",
    "box": "Nocturne",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 105,
    "name": "Pooka",
    "cost": 5,
    "class": ["Action"],
    "text": "You may trash a Treasure other than Cursed Gold from your hand, for +4 Cards.",
    "heirloom": "Cursed Gold",
    "box": "Nocturne",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 1,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
    }
},
{
    "_id": 106,
    "name": "Raider",
    "cost": 6,
    "class": ["Night", "Duration", "Attack"],
    "text": "Each other player with 5 or more cards in hand discards a copy of a card you have in play (or reveals they can't). At the start of your next turn, +3 Money.",
    "box": "Nocturne",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 107,
    "name": "Sacred Grove",
    "cost": 5,
    "class": ["Action", "Fate"],
    "abilities": {
        "buy": 1,
        "money": 3
    },
    "text": "Receive a Boon. If it doesn't give +1 Money, each other player may receive it.",
    "box": "Nocturne",
    "strategy": {
        "addAction": 0,
        "addBuy": 1,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 108,
    "name": "Secret Cave",
    "cost": 3,
    "class": ["Action", "Duration"],
    "abilities": {
        "card": 1,
        "action": 1
    },
    "text": "You may discard 3 cards. If you did, then at the start of your next turn, +3 Money.",
    "heirloom": "Magic Lamp",
    "box": "Nocturne",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 109,
    "name": "Shepherd",
    "cost": 4,
    "class": ["Action"],
    "abilities": {
        "action": 1
    },
    "text": "Discard any number of Victory cards, revealing them. +2 Cards per card discarded.",
    "heirloom": "Pasture",
    "box": "Nocturne",
    "strategy": {
        "addAction": 1,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 1,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 110,
    "name": "Skulk",
    "cost": 4,
    "class": ["Action", "Attack", "Doom"],
    "abilities": {
        "buy": 1
    },
    "text": "Each other player receives the next Hex. // When you gain this, gain a Gold.",
    "box": "Nocturne",
    "strategy": {
        "addAction": 0,
        "addBuy": 1,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 1,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 111,
    "name": "Tormentor",
    "cost": 5,
    "class": ["Action", "Attack", "Doom"],
    "abilities": {
        "money": 2
    },
    "text": "If you have no other cards in play, gain an Imp from its pile. Otherwise, each other player receives the next Hex.",
    "linkedCard": "Imp",
    "box": "Nocturne",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 1,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 112,
    "name": "Tracker",
    "cost": 2,
    "class": ["Action", "Fate"],
    "abilities": {
        "money": 1
    },
    "text": "Receive a Boon. // While this is in play, when you gain a card, you may put that card onto your deck.",
    "heirloom": "Pouch",
    "box": "Nocturne",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 1,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 113,
    "name": "Tragic Hero",
    "cost": 5,
    "class": ["Action"],
    "abilities": {
        "card": 3,
        "buy": 1
    },
    "text": "If you have 8 or more cards in hand (after drawing), trash this and gain a Treasure.",
    "box": "Nocturne",
    "strategy": {
        "addAction": 0,
        "addBuy": 1,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 1,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 114,
    "name": "Vampire",
    "cost": 5,
    "class": ["Night", "Attack", "Doom"],
    "text": "Each other player receives the next Hex. Gain a card costing up to 5 other than a Vampire. Exchange this for a Bat.",
    "linkedCard": "Bat",
    "box": "Nocturne",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 0,
        "gainCard": 1,
        "gainTreasure": 1,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 115,
    "name": "Werewolf",
    "cost": 5,
    "class": ["Action", "Night", "Attack", "Doom"],
    "text": "If it's your Night phase, each other player receives the next Hex. Otherwise, +3 Cards.",
    "box": "Nocturne",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 0,
        "draw": 1,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 0
    }
},
{
    "_id": 116,
    "name": "Cemetery",
    "cost": 4,
    "class": ["Victory"],
    "text": "When you gain this, trash up to 4 cards from your hand.",
    "heirloom": "Haunted Mirror",
    "box": "Nocturne",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 0,
        "filter": 1,
        "draw": 0,
        "gainCard": 0,
        "gainTreasure": 0,
        "immunity": 0,
        "trash": 1
    }
},
{
    "_id": 117,
    "name": "Replace",
    "cost": 5,
    "class": ["Action", "Attack"],
    "text": "Trash a card from your hand. Gain a card costing up to 2 more than it. If the gained card is an Action or Treasure, put it onto your deck; if it's a Victory card, each other player gains a Curse.",
    "box": "Intrigue2",
    "strategy": {
        "addAction": 0,
        "addBuy": 0,
        "addMoney": 0,
        "curse": 1,
        "filter": 1,
        "draw": 0,
        "gainCard": 1,
        "gainTreasure": 1,
        "immunity": 0,
        "trash": 1
    }
}
]);

db.cards.createIndex({ name: 1 });
db.cards.createIndex({ class: 1 });
db.cards.createIndex({ text: 1 });
db.cards.createIndex({ box: 1 });