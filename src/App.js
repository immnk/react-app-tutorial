import React, { useState } from 'react';
import Lesson1 from './Lesson1/Lesson1';
import Lesson2 from './Lesson2/Lesson2';
import './App.css';

function App() {
  const [lessonNumber, setLesson] = useState(2);
  const changeLesson = (lessonNumber) => setLesson(lessonNumber);
  return (
    <div>
      <h1>React Apps built as per lessons</h1>
      <code>Click on the lesson to move between</code>
      <ul className="menu">
        <li><button onClick={()=> changeLesson(1)}>Lesson 1</button></li>
        <li><button onClick={()=> changeLesson(2)}>Lesson 2</button></li>
      </ul>
      { lessonNumber === 1 ? <Lesson1 /> : null }
      { lessonNumber === 2 ? <Lesson2 precision={7}/> : null }
    </div>
  );
}

export default App;