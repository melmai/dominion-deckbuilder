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
        this.findBigDraw = this.findBigDraw.bind(this);

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
    createDeck(options) {
        let cards = this.props.cards;

        let bigDraw = this.findBigDraw(cards);
        console.log(bigDraw);

        // create array of 10 unique cards
        let deck = this.drawCards(10, cards);

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
    findBigDraw(array) {
        let bigDraw = [];
        array.forEach(card => {
            if (!card.abilities || !card.abilities.card) return;
            if (card.abilities.card > 1) bigDraw.push(card); 
        });
        return bigDraw;
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