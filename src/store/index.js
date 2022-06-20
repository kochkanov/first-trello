import { uiSlice } from "./reducers/uiSlice";
import { configureStore } from "@reduxjs/toolkit";
import { titleSlice } from './reducers/titleSlice';


export const store = configureStore({
    reducer:{
        home: uiSlice.reducer,
        title:titleSlice.reducer,
    }
})