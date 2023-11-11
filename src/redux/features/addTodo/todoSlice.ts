import { createSlice, nanoid } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: string;
  text: string;
  completed?: boolean;
}

export interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodoFromText: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: nanoid(),
        text: action.payload,
        completed: false,
      });
    },
    rmTodoAtIndices: (state, action: PayloadAction<number[]>) => {
      // Sort the indexes in descending order so that removing items won't affect the indexes of subsequent items
      const indexesToRemove = action.payload.sort((a, b) => b - a);
      // Remove todos based on indexes
      indexesToRemove.forEach(index => {
        state.todos.splice(index, 1);
      });
    },
    markCompTodoAtIndices: (state, action: PayloadAction<number[]>) => {
      // Sort the indexes in descending order so that removing items won't affect the indexes of subsequent items
      const indexesToComplete = action.payload.sort((a, b) => b - a);
      // Remove todos based on indexes
      indexesToComplete.forEach(index => {
        state.todos[index].completed = true;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodoFromText, rmTodoAtIndices, markCompTodoAtIndices } = todosSlice.actions;

export default todosSlice.reducer;
