import React from 'react';

const Button = (props) => {
    return(
        <button className="btn" type="button" onClick={(e) => props.onClick(e)}>{props.value}</button>
    );
}

export default Button;