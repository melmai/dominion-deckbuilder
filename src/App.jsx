import React, { Component } from 'react';
import Deck from './components/Deck';
import BoxContainer from './components/BoxContainer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
    
        // set state
        this.state = {
            boxes: [],
            box: 0,
            showBoxes: true,
            showCards: false
        };

        // bind events
        //this.onClick = this.onClick.bind(this);
    }

    showCards(e) {
        e.preventDefault();
        this.setState({ showBoxes: false, showCards: true });
    }

    showBoxes(e) {
        e.preventDefault();
        this.setState({ showBoxes: true, showCards: false });
    }

    showBoxCards() {
        this.setState({ showBoxes: true, showCards: false });
    }

    addBox(box) {
        const boxes = this.state.boxes;
        boxes.push(box);
        this.setState({ boxes: boxes });
    }
  
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Dominion Deck Builder</h1>
                </header>
                { this.state.showBoxes ? <BoxContainer showCards={ this.showBoxCards } addBox={ this.addBox } /> : <Deck /> }
            </div>
        );
    }
}

export default App;
