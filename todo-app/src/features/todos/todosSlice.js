// src/features/todos/todosSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: uuidv4(), task: action.payload, completed: false, isEditing: false });
    },
    toggleComplete: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.isEditing = !todo.isEditing;
      }
    },
    editTask: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.task = action.payload.task;
        todo.isEditing = false;
      }
    }
  }
});

export const { addTodo, toggleComplete, deleteTodo, editTodo, editTask } = todosSlice.actions;
export default todosSlice.reducer;
