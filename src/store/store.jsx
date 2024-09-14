import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./reducers/TodoReducer";

export const store = configureStore({
  reducer: {
    TodoReducer: TodoReducer,
  },
});
