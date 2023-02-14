import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TasksStructure } from "../types";

const initialTask: TasksStructure = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialTask,
  reducers: {
    toggleTask: (currentTask, action: PayloadAction<number>) =>
      currentTask.map((tasks) => ({
        ...tasks,
        isDone: tasks.id === action.payload ? !tasks.isDone : tasks.isDone,
      })),
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { toggleTask: toggleTaskActionCreator } = tasksSlice.actions;
