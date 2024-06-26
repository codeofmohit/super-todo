import { createSlice } from "@reduxjs/toolkit";
import { taskListType } from "../../types";
import { loadFromLs } from "../../utils/localStorageHelper";

const initialState: taskListType = [];

const paginatedTasks = createSlice({
  name: "paginatedItems",
  initialState: initialState,
  reducers: {
    pg_checkLsForTasks: () => {
      const list = loadFromLs();
      if (list && list.length > 0) {
        return [...list];
      }
    },
    paginateTasks: (_state, action) => {
      return [...action.payload];
    },
    pg_addTask: (state, action) => {
      state.push(action.payload);
    },
    pg_markTaskDone: (state, action) => {
      const { id, flag } = action.payload;
      const taskToUpdate = state.find((each) => {
        return each && each.id === id;
      });
      if (taskToUpdate) {
        taskToUpdate.isCompleted = flag;
      }
    },
    pg_updateTask: (state, action) => {
      const { task, id } = action.payload;
      const taskToUpdate = state.find((each) => {
        return each && each.id === id;
      });
      if (taskToUpdate) {
        taskToUpdate.task = task;
      }
    },
    pg_deleteTask: (state, action) => {
      const { id } = action.payload;
      const taskToDelete: any = state.find((each) => {
        return each && each.id === id;
      });
      const indexOfToBeDeletedItem = state.indexOf(taskToDelete);
      state.splice(indexOfToBeDeletedItem, 1);
    },
  },
});

export default paginatedTasks.reducer;
export const {
  paginateTasks,
  pg_markTaskDone,
  pg_updateTask,
  pg_deleteTask,
  pg_addTask,
  pg_checkLsForTasks,
} = paginatedTasks.actions;
