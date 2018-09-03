import React, { Component } from 'react';
import { dominion } from './config/checkboxes';
import Checkbox from './basic/Checkbox';
import Result from './Result';
import Button from './basic/Button';

const Filter = (props) => (
    <form className="filter__container">
        {dominion.map(item => (
            <label key={item.key}>
                <Checkbox name={item.name} checked={props.checked.get(item.name)} onChange={props.handleCheckboxChange} />
                {item.label}
            </label>
        ))}
    </form>
);

class DeckBuilder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            deck: [],
            showFilters: true,
            checked: new Map()
        }
        
        this.createDeck = this.createDeck.bind(this);
        this.toggleFilters = this.toggleFilters.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.findCardsByClass = this.findCardsByClass.bind(this);
        this.removeCardsByClass = this.removeCardsByClass.bind(this);
        this.findCardsByStrategy = this.findCardsByStrategy.bind(this);
        this.removeCardsByStrategy = this.removeCardsByStrategy.bind(this);
        this.drawCards = this.drawCards.bind(this);
        this.findCardsByAbility = this.findCardsByAbility.bind(this);

    }

    handleCheckboxChange(event) {
        const target = event.target;
        const name = target.name;
        const isChecked = target.checked;
        this.setState(prevState => ({ checked: prevState.checked.set(name, isChecked) }));
    }

    toggleFilters() {
        this.setState(prevState => ({ showFilters: !prevState.showFilters }));
    }

    // creates deck from setCards array (no filters)
    createDeck() {
        let cards = this.props.cards; // all cards
        const options = this.state.checked; // map
        let deck = [];

        // card classes
        const categories = ['Attack', 'Reaction', 'Victory', 'Treasure', 'Traveller', 'Fate', 'Doom', 'Night', 'Duration', 'Reserve'];
        categories.forEach(category => {
            const type = category.toLowerCase(); // options are lowercase strings
            if (!options.get(type)) return;
            const cardsByType = this.findCardsByClass(cards, category);
            const card = this.drawCards(1, cardsByType);
            deck = deck.concat(card);
        });

        // draw remaining cards and add to deck array
        let remainder = this.drawCards((10 - deck.length), cards);
        deck = deck.concat(remainder);
        this.setState({ deck: deck, showFilters: false });
        return deck;
    }    

    // draw unique cards -- param: # cards to draw, array of cards
    drawCards(number, cards) {
        let deck = [];
        do {
            const index = Math.round(Math.random() * (cards.length - 1));
            const card = cards[index];
            if (!deck.includes(card)) deck.push(card);
        } while (deck.length < number)
        return deck;
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
            if (card.abilities.card > number) cards.push(card); 
        });
        return cards;
    }

    render() {
        let result = (this.state.deck.length > 0) ? <Result cards={this.state.deck} /> : 'Select Filters and/or Expansions';
        let filter = this.state.showFilters ? <Filter boxes={this.props.boxes} checked={this.state.checked} handleCheckboxChange={this.handleCheckboxChange} /> : null;
        
        return (
            <section className="setup__container">
                <Button className="btn btn__create_deck" onClick={this.createDeck}>Create Deck</Button>
                <Button className="btn btn__toggle_filters" onClick={this.toggleFilters}>{this.state.showFilters ? 'Hide Filters' : 'Show Filters'}</Button>
                {filter}
                {result}
            </section>           
        );
    }
}

export default DeckBuilder;