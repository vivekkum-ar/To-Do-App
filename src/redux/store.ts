import { configureStore } from '@reduxjs/toolkit';
import addTodoReducer from './features/addTodo/todoSlice';
import rmTodoReducer from './features/addTodo/todoSlice'; // Import the todosSlice reducer
import markTodoReducer from './features/addTodo/todoSlice'; // Import the todosSlice reducer

export const store = configureStore({
  reducer: {
    addtodo: addTodoReducer,
    todos: rmTodoReducer, // Include the todosSlice reducer
    marktodo: markTodoReducer,
  },
});

// Persist the Redux store state to localStorage
store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('reduxState', JSON.stringify(state));
    console.log('State saved to localStorage:', state);
  });
  
  // Action to initialize Redux store state from localStorage
  const initializeStateFromLocalStorage = () => {
    const persistedStateJSON = localStorage.getItem('reduxState');
    if (persistedStateJSON) {
      const persistedState = JSON.parse(persistedStateJSON);
      store.dispatch({ type: 'INITIALIZE_STATE_FROM_LOCAL_STORAGE', payload: persistedState });
      console.log('State initialized from localStorage:', persistedState);
    }
  };
  
  // Initialize Redux store state from localStorage on application startup
  initializeStateFromLocalStorage();
  
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
