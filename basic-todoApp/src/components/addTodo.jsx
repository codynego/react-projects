import React from 'react'

export const AddTodo = ({todos, setTodos}) => {
    const [id, setId] =  React.useState(todos.length)
    const [task, setTask] = React.useState('')
    const [completed, setCompleted] = React.useState(false)
    const handleClick = () => {
        const newTodo = {id, task, completed}
        setTodos([...todos, newTodo])
        console.log(newTodo)
    }
  return (
    <div className="add-todo">
        <input 
        type="text" 
        placeholder="Add a new todo"
        onChange={(e) => setTask(e.target.value)} 
        />
        <button className='btn-primary' onClick={handleClick}>Add</button>
    </div>
  )
}
