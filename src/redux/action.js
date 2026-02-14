import { createAction, nanoid } from "@reduxjs/toolkit";

export const addTask = createAction("tasks/addTask", (text) => {
  return {
    payload: {
      text,
      id: nanoid(),
      completed: false,
    },
  };
});

export const deleteTask = createAction("tasks/deleteTask", (taskId) => {
  return {
    payload: {
      id: taskId,
    },
  };
});

export const toggleComplete = createAction("tasks/toggleComplete", (taskId) => {
  return {
    payload: {
      id: taskId,
    },
  };
});

export const setStatusFilter = createAction("tasks/setStatusFilter", (filter) => {
  return {
    payload: {
      value: filter,
    },
  };
});