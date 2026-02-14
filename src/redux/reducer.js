import { createReducer } from "@reduxjs/toolkit";
import { addTask, deleteTask, toggleComplete, setStatusFilter } from "./action";
import { StatusFilters } from "./costant";

const initialState = {
  tasks: [],
  filter: StatusFilters.all,
};

export const tasksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      state.tasks.push(action.payload);
    })
    .addCase(deleteTask, (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    })
    .addCase(toggleComplete, (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
      }
    })
    .addCase(setStatusFilter, (state, action) => {
      state.filter = action.payload.value;
    });
});