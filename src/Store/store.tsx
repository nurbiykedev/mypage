import { configureStore } from "@reduxjs/toolkit";
import todo from "../Slice/todo";

const store = configureStore({
  reducer: {
    todo
  }
})


export default store



