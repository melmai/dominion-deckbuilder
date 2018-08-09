
import React, { Component } from 'react';

class Box extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: false
        }
        
        // bind events
        this.onClick = this.onClick.bind(this);
        this.toggleSelected = this.toggleSelected.bind(this);
    }

    toggleSelected() {
        this.setState(prevState => ({
            selected: !prevState.selected
        }));
    }
    
    // toggles selection of box on user click
    onClick(e) {
        e.preventDefault();
        const box = this.props.name;
        this.props.toggleBox(box);
        this.toggleSelected();
    }

    render() {
        const className = this.state.selected ? 'box__container-selected' : 'box__container';
        return (
            <div className={className} onClick={this.onClick}>
                <p className="box__text">{this.props.label}</p>
            </div>
        );
    }
}

export default Box;