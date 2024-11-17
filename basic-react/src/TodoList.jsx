import React from 'react'
import { useState } from 'react'

export const TodoList = ({todos, setTodos}) => {
    const [value, setValue] = useState("")
    
    const handleAddTodo = (e) => {
        const newTodo = [...todos, value]
        setValue("")
        setTodos(newTodo)
    }
  return (
    <div>
        <h1>TodoList</h1>
        <input type="text" placeholder="enter your todo" onChange={(e) => {setValue(e.target.value)}} value={value}/>
        <button onClick={handleAddTodo}>Add</button>
    </div>
  )
}
