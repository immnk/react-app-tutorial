import React, { useState } from 'react';
import Button from './Button/Button';
import Display from './Display/Display';
import './Lesson1.css';

function Lesson1() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);
  
  return (
    <div className="lesson1">
      <Button onClickEvent={incrementCounter} increment={1}/>
      <Button onClickEvent={incrementCounter} increment={5}/>
      <Button onClickEvent={incrementCounter} increment={10}/>
      <Display message={counter}/>
    </div>
  );
}

export default Lesson1;
