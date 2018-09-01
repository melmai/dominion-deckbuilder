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
        let deck = [];

        do {
            const index = Math.round(Math.random() * (cards.length - 1));
            const card = cards[index];
            if (!deck.includes(card)) deck.push(card);
        } while (deck.length < 10)

        this.setState({ deck: deck, showFilters: false });
        return deck;
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