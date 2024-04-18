import { createSlice } from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit"

export interface Todo {
  id: number;
  text: string;
}
const initialState = {
todo: []
}

 const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
  addTodo(state, action: PayloadAction<Todo>) {
    state.todo = [...state.todo, action.payload]
  },
  deleteTodo(state, action: PayloadAction<Todo>) {
    state.todo = state.todo.filter(el => el.id != action.payload)
  }
  }
})


export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer
