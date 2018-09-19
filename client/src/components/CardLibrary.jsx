import React, { Component } from 'react';
import Deck from './Deck';

class CardLibrary extends Component {
    constructor(props) {
        super(props);

        this.state = { cardID: 0 }
        
    }    
    
    render() {
        const boxes = this.props.boxes;
        const showAll = boxes.length === 0 ? true : false;
        const dominion2 = showAll || boxes.includes('Dominion2') ? <Deck cards={this.props.dominion2} /> : null;
        const intrigue2 = showAll || boxes.includes('Intrigue2') ? <Deck cards={this.props.intrigue2} /> : null;
        const adventures = showAll || boxes.includes('Adventures')? <Deck cards={this.props.adventures} /> : null;
        const nocturne = showAll || boxes.includes('Nocturne') ? <Deck cards={this.props.nocturne} /> : null;
        
        return (
            <section className="card-library">
                {dominion2}
                {intrigue2}
                {adventures}
                {nocturne}
            </section>
        );
    }
}

export default CardLibrary;
