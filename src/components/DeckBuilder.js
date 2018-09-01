import React, { Component } from 'react';
import Filter from './Filter';
import Result from './Result';
import Button from './basic/Button';

class DeckBuilder extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        let result = (this.props.cards.length > 0) ? <Result cards={this.props.cards} /> : 'Select Filters and/or Expansions';
        let filter = this.props.showFilters ? <Filter boxes={this.props.boxes} /> : null;
        
        return (
            <section className="setup__container">
                <Button className="btn btn__toggle_filters" onClick={this.props.toggleFilters}>{this.props.showFilters ? 'Hide Filters' : 'Show Filters'}</Button>
                {filter}
                {result}
            </section>           
        );
    }
}

export default DeckBuilder;