import React from 'react';
import './Display.css';

function Display(props) {
    return (
        <div>{props.message}</div>
    );
}

export default Display;