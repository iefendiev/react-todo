import React from 'react';
import Todo from '../Todo/Todo';
import './Todos.css';
import cross from '../../assets/cross.png';

const Todos = ({ todos, removeItem }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todos.indexOf(todo)}>
          <div>
            <Todo todo={todo} />
          </div>
          <img
            className="li-button"
            // arrow function halinde: basıldığı zaman çalışıyor sadece
            onClick={() => removeItem(todo)}
            src={cross}
            alt="cross-sign"
          ></img>
        </li>
      ))}
    </ul>
  );
};

export default Todos;
