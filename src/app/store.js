import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from "../components/todoListSlice.js";

export const store = configureStore({
    reducer:{
        todo: todoListReducer
    }
})