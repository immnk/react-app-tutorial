import React from 'react';
import './Display.css';

function Display(props) {
    return (
        <div className="messageBox">{props.message}</div>
    );
}

export default Display;