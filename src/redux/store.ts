import { configureStore } from '@reduxjs/toolkit';
import addTodoReducer from './features/addTodo/todoSlice';
import rmTodoReducer from './features/addTodo/todoSlice'; // Import the todosSlice reducer

export const store = configureStore({
  reducer: {
    addtodo: addTodoReducer,
    todos: rmTodoReducer, // Include the todosSlice reducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
