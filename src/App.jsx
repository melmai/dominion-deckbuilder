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
            showBoxes: true,
            showCards: false,
            setID: 0,
            cardID: 0
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

    toggleBox(box) {
        const boxes = this.state.boxes;
        let boxExists = boxes.includes(box);
        if (!boxExists) {
            boxes.filter(item => item !== box);
        } else {
            boxes.push(box);
        }
        this.setState({ boxes: boxes });
    }
  
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Dominion Deck Builder</h1>
                </header>
                { this.state.showBoxes ? <BoxContainer showCards={ this.showBoxCards } toggleBox={ this.toggleBox } /> : <Deck /> }
            </div>
        );
    }
}

export default App;
