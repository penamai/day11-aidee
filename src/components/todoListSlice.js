import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name: "todo",
  initialState: {
   todoList : []
  },
  reducers: {
    resetTodo: (state, action) => {
      state.todoList = action.payload;
    }
  },
});

export const { resetTodo } = todoListSlice.actions;
export default todoListSlice.reducer;