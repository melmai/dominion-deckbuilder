import React from 'react';

const Button = (props) => {
    return(
        <button className={props.className} type="button" onClick={(e) => props.onClick(e)}>{props.children}</button>
    );
}

export default Button;