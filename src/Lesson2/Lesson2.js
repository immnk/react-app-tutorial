import React from 'react';
import './Lesson2.css';

function Lesson2({precision}) {
    const circle = {
        radius : 2,
        label: 'Label X'
    };

    const circleArea = ({radius}, {precision = 2} = {}) => (Math.PI * radius * radius).toFixed(precision);

    const arrayDestructing = [10, 23, 56, 78];
    const [firstValue, , thirdValue] = arrayDestructing;
    const [, ...restOfItems] = arrayDestructing;

    const person = {
        firstName: 'Mani',
        spouse: 'Aradhana',
        temp1: 1,
        temp2: 2
    };

    const {temp1, temp2, details} = person;

    return (
        <div className="lesson2">
            <h3>Lesson 2</h3>
            <pre>{circleArea(circle, {precision: precision})}</pre>
            <pre>Array Destructuring: { firstValue } { thirdValue } </pre>
            <pre>Rest operator: { restOfItems }</pre>
            <pre>{temp1} {temp2} {details}</pre>
        </div>
    );
}

export default Lesson2;