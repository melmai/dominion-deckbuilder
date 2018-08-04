import React, { Component } from 'react';
import Box from './Box';

// BoxContainer contains Box components 
class BoxContainer extends Component {    
    render() {
        return (
            <section className="box__container">
                <Box name="Dominion2" toggleBox={this.props.toggleBox} />
                <Box name="Intrigue2" toggleBox={this.props.toggleBox} />
                <Box name="Adventures" toggleBox={this.props.toggleBox} />
                <Box name="Nocturne" toggleBox={this.props.toggleBox} />
            </section>  
        );
    }
}

export default BoxContainer;