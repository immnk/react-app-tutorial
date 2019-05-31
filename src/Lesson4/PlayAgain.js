import React from 'react';

const PlayAgain = props => (
    <div className="game-done">
        <button onClick={props.onClick}>Play Again</button>
    </div>
);

export default PlayAgain;
// Same as doing exports.PlayAgain = PlayAgain
// Same as doing export default PlayAgain

// Imagine this statment present to understand exports
// exports = module.exports = {}
// Example
// exports.function1 = {}
// exports.function2 = {}
// is same as 
// module.exports ={function1: {}, function2: {}}