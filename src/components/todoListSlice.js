import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const todoListSlice = createSlice({
  name: "todo",
  initialState: {
   todoList : [],
  },
  reducers: {
    addTodo: (state, action) => {
        state.todoList = [...state.todoList, {
            id: uuidv4(),
            text: action.payload,
            done: false
        }];
    },
    toggleDone: (state, action) =>{
        const index = state.todoList.findIndex(todo => todo.id === action.payload);
        state.todoList[index].done = !state.todoList[index].done;
    }
  },
});

export const { addTodo, toggleDone } = todoListSlice.actions;
export default todoListSlice.reducer;