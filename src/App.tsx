import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@reduxjs/toolkit/query'
import { Todo, addTodo, deleteTodo } from './Slice/todo'

function App() {
  const [value, setValue] = useState("")
  const todo = useSelector((state: RootState) => state.todo.todo)

  const dispatch = useDispatch()

  function saveTodo() {
  const newObj: Todo = {
    id: Date.now(),
    text: value
  }
  dispatch(addTodo(newObj))
  }

  return (
    <>
 <div>
  <div>
  <input onChange={(e) => setValue(e.target.value)}
    value={value}
    type="text" /> 
    <button onClick={saveTodo} >click</button>
  </div>
  <ul>
    {
      todo.map((el, idx ) => (
        <li key={idx}>{el.text} <button onClick={() => {dispatch(deleteTodo(el.id))}}>delete</button></li>
      ))
    }
  </ul>
 </div>
    </>
  )
}

export default App
