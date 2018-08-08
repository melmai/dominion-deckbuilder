import React, { Component } from 'react';
import { Deck } from './Deck';

const Result = (props) => {
    const deck = props.cards.length > 0 ? <Deck cards={props.cards} /> : 'No cards';
    return deck;
}

export default Result;
