import React from 'react';

// BoxContainer contains Box components 
const BoxContainer = (props) => (
    <section className="box__selector">
        {props.children}
    </section>  
);
    
export default BoxContainer;