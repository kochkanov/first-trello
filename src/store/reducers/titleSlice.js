import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainTitle: [], 
  items: [],
  add: false,
  myEmail: "mahmud@gmail.com",
  myPassword: 190192 + "m",
};

export const titleSlice = createSlice({
  name: "title",
  initialState,
  reducers: {
    addTitle(state, action) {
      const titleDate = {
        title: action.payload.title,
        id: action.payload.id,
        itemsTitle:[],
      };
      state.mainTitle.push(titleDate);
    },
    openLittleCart(state) {
      state.add = !state.add;
    },
    addItems:(state, action)=> {
     state.mainTitle.find((i) => i.id === action.payload.id).itemsTitle.push({
          toDoItem: action.payload.toDoItem,
          toDoId: action.payload.toDoId,
        });

    },
     
    
  },
});

export const formActions = titleSlice.actions;
export default titleSlice;
