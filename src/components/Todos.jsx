import React from 'react';
import { useSelector } from 'react-redux';

function Todos() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  return (
    <div>
      <h1>Todos</h1>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
}

export default Todos;
