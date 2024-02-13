import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Todos</h1>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button
            className='ml-3'
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
}

export default Todos;
