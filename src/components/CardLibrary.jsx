import React, { Component } from 'react';
import Deck from './Deck';

class CardLibrary extends Component {
    constructor(props) {
        super(props);

        this.state = { cardID: 0 }
        
    }    
    
    render() {
        return <Deck cards={this.props.cards} />
    }
}

export default CardLibrary;
