import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo, editTodo } from '../features/todos/todosSlice';
import { openModal, closeModal } from '../features/modal/modalSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(task.id));
    dispatch(closeModal());
  };

  return (
    <div className='Todo'>
      <p onClick={() => dispatch(toggleComplete(task.id))} className={`${task.completed ? "completed" : "incompleted"}`}>
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} className='edit-icon' onClick={() => dispatch(editTodo(task.id))} />
        <FontAwesomeIcon icon={faTrash} className='delete-icon' onClick={() => dispatch(openModal({
          message: 'Are you sure you want to delete this task?',
          taskName: task.task,
          onConfirm: handleDelete
        }))} />
      </div>
    </div>
  );
};
