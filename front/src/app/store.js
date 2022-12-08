import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todoReducer";
import userSlice from "../features/userReducer"

export const store = configureStore({
    reducer: {
        todoSlice,
        userSlice
    }
})