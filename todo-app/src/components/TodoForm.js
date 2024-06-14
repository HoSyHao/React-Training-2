import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todosSlice';

export const TodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (value) {
      dispatch(addTodo(value));
      setValue("");
    }
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input 
        type="text" 
        className='todo-input' 
        value={value}
        placeholder='What is the task today?' 
        onChange={(e) => setValue(e.target.value)} 
      />
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  );
};
