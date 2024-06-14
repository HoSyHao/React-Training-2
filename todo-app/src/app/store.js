import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../features/modal/modalSlice';
import todosReducer from '../features/todos/todosSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    todos: todosReducer,
  },
});

export default store;
