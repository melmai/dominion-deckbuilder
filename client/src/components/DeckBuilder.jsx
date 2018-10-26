import React, { Component } from 'react';
import { globalAbilities, immunity, curse, reaction } from './config/checkboxes';
import Result from './Result';
import Filter from './Filter';
import Deck from './Deck';
import Button from './basic/Button';

class DeckBuilder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            deck: [],
            showFilters: true,
            checked: new Map(),
            selected: new Map()
        }
        
        this.createDeck = this.createDeck.bind(this);
        this.toggleFilters = this.toggleFilters.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.findCardsByClass = this.findCardsByClass.bind(this);
        this.removeCardsByClass = this.removeCardsByClass.bind(this);
        this.findCardsByStrategy = this.findCardsByStrategy.bind(this);
        this.removeCardsByStrategy = this.removeCardsByStrategy.bind(this);
        this.drawCards = this.drawCards.bind(this);
        this.findCardsByAbility = this.findCardsByAbility.bind(this);
        this.removeCard = this.removeCard.bind(this);
        this.drawUnique = this.drawUnique.bind(this);
        this.pickCard = this.pickCard.bind(this);
        this.getOptions = this.getOptions.bind(this);
    }

    handleCheckboxChange(event) {
        const target = event.target, name = target.name, isChecked = target.checked;
        this.setState(prevState => ({ checked: prevState.checked.set(name, isChecked) }));
    }

    handleRadioChange(event, value) {
        const target = event.target, name = target.name, selected = this.state.selected;
        this.setState({ selected: selected.set(name, value) });    
    }

    toggleFilters() {
        this.setState(prevState => ({ showFilters: !prevState.showFilters }));
    }

    // creates deck from setCards array (no filters)
    createDeck() {
        let cards = this.props.cards; // all cards
        const options = this.state.checked; // map
        console.log(options);
        let deck = [];

        // add or exclude cards by class
        const categories = ['Attack', 'Reaction', 'Victory', 'Treasure', 'Traveller', 'Fate', 'Doom', 'Night', 'Duration', 'Reserve'];
        categories.forEach(category => {
            const include = category.toLowerCase(), // include >1 card by class
                  exclude = `no-${include}`, // exclude cards by class
                  cardsByType = this.findCardsByClass(cards, category); // all cards of category

            if (options.get(include)) { // if type required, find and add card
                const card = this.drawCards(1, cardsByType, deck);
                deck = deck.concat(card); 
            } else if (options.get(exclude)) {
                cards = this.removeCardsByClass(cards, category);
            } else {
                return;
            }
        });

        // filter cards by curse preferences
        const cursesExist = this.findCardsByStrategy(deck, 'curse').length > 0 ? true : false;
        const curses = this.findCardsByStrategy(cards, 'curse');
        if (options.get('curses') && !cursesExist) {
            const curse = this.drawUnique(curses, deck);
            deck.push(curse);
        } else if (options.get('no-curses')) {
            cards = this.removeCardsByStrategy(cards, 'curse');
        }

        // filter cards by reaction preferences
        const reactions = [
            'attack-immunity', // if attack card, include immunity
            'attack-reaction', // if attack card, include general rxn
            'no-attack-reaction' // if no attack, no rxn
        ];

        reactions.forEach(reaction => {
            if(!options.get(reaction)) return;
            let attackExists = deck.find(card => card.class.includes('Attack')), // attack card in deck
                rxnExists = deck.find(card => card.class.includes('Reaction')); // rxn in deck
            let card;
            const rxn = this.findCardsByClass(cards, 'Reaction'), // array of rxn cards in supply
                  imm = this.findCardsByStrategy(cards, 'immunity'); // array of immunity cards in supply
            console.log(rxn);

            switch (reaction) {
                case 'attack-immunity':
                    if (attackExists && deck.includes(imm)) return;
                    card = this.drawUnique(imm, deck);
                    deck.push(card);
                    cards = this.removeCard(cards, card._id); 
                    break;
                case 'attack-reaction':
                    if (attackExists && rxnExists) return;
                    card = this.drawUnique(rxn, deck);
                    deck.push(card);
                    cards = this.removeCard(cards, card._id);
                    break;
                case 'no-attack-reaction':
                    if (attackExists && !rxnExists) return;
                    rxn.forEach(card => {
                        cards = this.removeCard(cards, card._id);
                        deck = this.removeCard(deck, card._id);
                    });
                    break;
                default:
                    break;
            }
        });

        // add card by strategy
        const benefits = [
            'actions', // +2 Actions
            'buys', // +1 Buy
            'cards', // +2 Cards
            'trash' // Trash any card
        ];
        benefits.forEach(benefit => {
            if (!options.get(benefit)) return;
            const ability = benefit.substring(0, benefit.length - 1);
            let card;

            if (benefit === 'trash') {
                card = this.pickCard(deck, cards, benefit);
            } else if (benefit === 'buys') {
                card = this.pickCard(deck, cards, ability);
            } else {
                card = this.pickCard(deck, cards, ability, 1);
            }
            if (!card) return; 
            cards = this.removeCard(cards, card._id);
            deck = deck.concat(card);
        });

        // draw remaining cards and add to deck array
        const remainder = this.drawCards((10 - deck.length), cards, deck);
        deck = deck.concat(remainder);
        this.setState({ deck: deck });
        return deck;
    }    

    // pick unique card by ability
    pickCard(deck, cards, ability, number = 0) {
        let exists, supply;
        if (ability === 'trash') {
            exists = this.findCardsByStrategy(deck, ability).length > 0 ? true : false;
            if (!exists) return;
            supply = this.findCardsByStrategy(cards, ability);
        } else {
            exists = this.findCardsByAbility(deck, ability, number).length > 0 ? true : false;
            if (exists) return;
            supply = this.findCardsByAbility(cards, ability, number);
        }
        return this.drawUnique(supply, deck);
    }

    // draw unique card
    drawUnique(cards, deck) {
        let card;
        do {
            card = this.drawCards(1, cards);
        } while (deck.includes(card));
        return card[0];
    }

    // draw unique cards -- param: # cards to draw, array of cards
    drawCards(number, cards, deck = []) {
        let draw = [];
        do {
            const index = Math.round(Math.random() * (cards.length - 1)),
                  card = cards[index];
            if (!draw.includes(card) && !deck.includes(card)) draw.push(card);
        } while (draw.length < number)
        return draw;
    }

    // filter card array by card class/type
    findCardsByClass(array, category) {
        return array.filter(card => card.class.includes(category));
    }
    
    // remove cards by class/type
    removeCardsByClass(array, category) {
        return array.filter(card => !card.class.includes(category));
    }
    
    // filter card array by strategy
    findCardsByStrategy(array, strategy) {
        return array.filter(card => card.strategy[strategy]);
    }
    
    // remove cards by strategy
    removeCardsByStrategy(array, strategy) {
        return array.filter(card => !card.strategy[strategy]);
    }

    // find cards with large draw abilities
    findCardsByAbility(array, ability, number) {
        let cards = [];
        array.forEach(card => {
            if (!card.abilities || !card.abilities[ability]) return;
            if (card.abilities[ability] > number) cards.push(card); 
        });
        return cards;
    }

    // remove card by id
    removeCard(array, id) { 
        return array.filter(card => card._id !== id);
    }

    getOptions(boxes, category) {
        const dom = boxes.includes('Dominion2'),
              int = boxes.includes('Intrigue2'),
              adv = boxes.includes('Adventures'),
              noc = boxes.includes('Nocturne');
        let options;

        switch (category) {
            case 'abilities':
                options = globalAbilities;
                break;

            case 'types':
                options = ['victory', 'attack']; // global classes
                if (boxes.length < 1) {
                    //options = options.concat(treasure, traveller, reserve, night, duration);
                    options = ['Treasure', 'Traveller', 'Reserve', 'Night', 'Duration'];
                } else {
                    if (int || adv || noc) options = options.concat('Treasure');
                    if (adv) options = options.concat('Traveller', 'Reserve');
                    if (noc) options = options.concat('Night');
                    if (adv || noc) options = options.concat('Duration');
                }
                break;

            case 'curse':
                options = curse;
                break;

            case 'reaction':
                options = reaction;
                if (boxes.length < 1 || dom || noc) options = immunity.concat(reaction);
                break;
        
            default:
                break;
        }

        return options; 
    }

    render() {
        let abilities = this.getOptions(this.props.boxes, 'abilities');
        let types = this.getOptions(this.props.boxes, 'types');
        let curse = this.getOptions(this.props.boxes, 'curse');
        let reaction = this.getOptions(this.props.boxes, 'reaction');

        let result = (this.state.deck.length > 0) ? <Result cards={this.state.deck} /> : <Deck />;
        let filter = !this.state.showFilters ? <Filter abilities={abilities} types={types} curse={curse} reaction={reaction} checked={this.state.checked} selected={this.state.selected} handleRadioChange={this.handleRadioChange} handleCheckboxChange={this.handleCheckboxChange} /> : null;
        
        return (
            <section className="setup__container">
                <section className="setup__container--buttons">
                    <Button className="btn btn__create_deck" onClick={this.createDeck}>Create Deck</Button>
                    <span className="chart__card_count"><img className="inline-icon" src="/img/cards.svg" alt="cards" />{this.props.cards.length}</span>
                    <Button className="btn btn__toggle_filters" onClick={this.toggleFilters}>{!this.state.showFilters ? 'Hide Filters' : 'Show Filters'}</Button>
                </section>
                {filter}
                {result}
            </section>           
        );
    }
}

export default DeckBuilder;