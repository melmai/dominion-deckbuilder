
import React, { Component } from 'react';

class Box extends Component {
    constructor(props) {
        super(props);
        
        // bind events
        this.onClick = this.onClick.bind(this);
    }
    
    // toggles selection of box on user click
    onClick(e) {
        e.preventDefault();
        const box = this.props.name;
        this.props.toggleBox(box);
    }

    render() {
        return (
            <div className="box" onClick={this.onClick}>
                {this.props.name}
            </div>
        );
    }
}

export default Box;