import './App.css';
import Form from './components/Form/Form';
import Todos from './components/Todos/Todos';
import React, { useState } from 'react';
// import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo && !todos.includes(todo)) {
      setTodos([...todos, todo]);
    }
    setTodo('');
  };

  const removeItem = (todo) => {
    // e.preventDefault();
    const newTodos = todos.filter((item) => item !== todo);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo List!</h1>
      <Form
        todo={todo}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      ></Form>
      <Todos todo={todo} todos={todos} removeItem={removeItem}></Todos>
    </div>
  );
}

export default App;
