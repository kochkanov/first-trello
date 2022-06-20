import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  homeIsVisible: false,
  listIsVisible:false,
  
};

export const uiSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    toggle(state) {
      state.homeIsVisible = !state.homeIsVisible;
    },
toggleList(state){
  state.listIsVisible = !state.listIsVisible
},


  },
});


export const uiActions = uiSlice.actions;
export default uiSlice;



// addItems(state,action){
//   state.mainTitle.find((i)=>i.id===action.payload.id).items.push({
//       toDoItem:action.payload.toDoItem,toDoId:action.payload.toDoId
//   })