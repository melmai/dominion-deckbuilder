import React, { Component } from 'react';
import Box from './Box';

// BoxContainer contains Box components 
class BoxContainer extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div className="box-container">
                <div className="boxes">
                    <Box name="Dominion2" toggleBox={ this.props.toggleBox } />
                    <Box name="Intrigue2" toggleBox={ this.props.toggleBox } />
                    <Box name="Adventures" toggleBox={ this.props.toggleBox} />
                    <Box name="Nocturne" toggleBox={ this.props.toggleBox } />
                </div>
            </div>  
        );
    }
}

export default BoxContainer;