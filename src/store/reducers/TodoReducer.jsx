import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTask: (state, actions) => {
      state.value = [...state.value, actions.payload];
    },
    deleteTask: (state, actions) => {
      state.value = state.value.filter(
        (item, index) => index !== actions.payload,
      );
    },
    updateTodo: (state, actions) => {
      state.value = state.value.map((item, ind) => {
        if (ind === actions.payload.id) {
          return (item = actions.payload.task);
        } else {
          return item;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { deleteTask, addTask, updateTodo } = counterSlice.actions;

export default counterSlice.reducer;
