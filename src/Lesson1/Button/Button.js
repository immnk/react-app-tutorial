import React from 'react';
import './Button.css';

function Button(props) {
    const handleClick = () => props.onClickEvent(props.increment);
    return (
        <button className="button" onClick={handleClick}>
            +{props.increment}
        </button>
    );
}

export default Button;