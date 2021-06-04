import React, { useState } from 'react';
import './Todo.css';

const Todo = ({ todo }) => {
  const [isDone, setIsDone] = useState(false);

  return (
    <div
      onClick={() => setIsDone(!isDone)}
      className={isDone ? 'done' : 'not-done'}
    >
      {todo}
    </div>
  );
};

export default Todo;
