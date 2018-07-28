
import React, { Component } from 'react';

class Box extends Component {
    constructor(props) {
        super(props);
        
        // bind events
        this.onClick = this.onClick.bind(this);
    }
    
    onClick(e){
        e.preventDefault();
        this.toggleBox();
    }

    render() {
        return (
            <div className="box">
                {this.props.name}
            </div>
        );
    }
}

export default Box;