import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openModal, closeModal } from '../features/modal/modalSlice';
import { editTask } from '../features/todos/todosSlice';

export const EditTodoForm = ({ task }) => {
  const [value, setValue] = useState(task.task);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(editTask({ task: value, id: task.id }));
    dispatch(closeModal());
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(openModal({
      message: `Are you sure you want to update the task "${task.task}" to "${value}" ?`,
      onConfirm: handleUpdate
    }));
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input 
        type="text" 
        className='todo-input' 
        value={value}
        placeholder='Update Task' 
        onChange={(e) => setValue(e.target.value)} 
      />
      <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  );
};
