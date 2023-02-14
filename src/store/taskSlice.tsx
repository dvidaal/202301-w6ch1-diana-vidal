import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TasksStructure } from "../types";

const initialTask: TasksStructure = [
  { id: 1, isDone: false, name: "Entender lo que me pregunta Mario del BEM" },
  { id: 2, isDone: false, name: "Entender un 10% de lo que programo" },
  {
    id: 3,
    isDone: false,
    name: "Ver la luz del sol cuando termine el bootcamp",
  },
  { id: 4, isDone: false, name: "Comer muchos conitos" },
];

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
