import React, { Component } from 'react';

// BoxContainer contains Box components 
class BoxContainer extends Component {    
    render() {
        return (
            <section className="box__container">
                {this.props.children}
            </section>  
        );
    }
}

export default BoxContainer;