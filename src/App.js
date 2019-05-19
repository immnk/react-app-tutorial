import React, { useState } from 'react';
import Lesson1 from './Lesson1/Lesson1';
import Lesson2 from './Lesson2/Lesson2';
import Lesson3 from './Lesson3/Lesson3';
import Lesson31 from './Lesson3.1/Lesson3.1';
import './App.css';

function App() {
  const [lessonNumber, setLesson] = useState(4);
  const changeLesson = (lessonNumber) => setLesson(lessonNumber);
  return (
    <div>
      <h1>React Apps built as per lessons</h1>
      <code>Click on the lesson to move between</code>
      <ul className="menu">
        <li><button className="button" onClick={()=> changeLesson(1)}>Lesson 1</button></li>
        <li><button className="button" onClick={()=> changeLesson(2)}>Lesson 2</button></li>
        <li><button className="button" onClick={()=> changeLesson(3)}>Lesson 3</button></li>
        <li><button className="button" onClick={()=> changeLesson(4)}>Lesson 3.1</button></li>
      </ul>
      { lessonNumber === 1 ? <Lesson1 /> : null }
      { lessonNumber === 2 ? <Lesson2 precision={7}/> : null }
      { lessonNumber === 3 ? <Lesson3 title="Welcome to GitHub Cards App"/> : null }
      { lessonNumber === 4 ? <Lesson31 title="Welcome to GitHub Cards App with functions"/> : null }
    </div>
  );
}

export default App;