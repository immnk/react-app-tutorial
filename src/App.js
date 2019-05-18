import React, { useState } from 'react';
import Button from './Button/Button';
import Display from './Display/Display';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);
  
  return (
    <div>
      <Button onClickEvent={incrementCounter} increment={1}/>
      <Button onClickEvent={incrementCounter} increment={5}/>
      <Button onClickEvent={incrementCounter} increment={10}/>
      <Display message={counter}/>
    </div>
  );
}

export default App;
