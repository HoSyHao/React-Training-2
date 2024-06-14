import React from 'react';
import { useSelector } from 'react-redux';
import { TodoForm } from './TodoForm';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
import ConfirmationModal from './ConfirmModal';

export const TodoWrapper = () => {
  const todos = useSelector(state => state.todos);
  const { isOpen, message, taskName, onConfirm } = useSelector(state => state.modal);

  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done!</h1>
      <TodoForm />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm key={index} task={todo} />
        ) : (
          <Todo key={index} task={todo} />
        )
      )}
      {isOpen && <ConfirmationModal message={message} taskName={taskName}  onConfirm={onConfirm} />}
    </div>
  );
};
