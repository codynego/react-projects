import React from 'react'
import { AddTodo } from './addTodo'
// import useEffect
import { useEffect } from 'react'
import { TodoItem } from './todoItem'


let dummyTodoData = [
    {
        "id": 1,
        "task": "Task 1",
        "completed": false
    },
    {
        "id": 2,
        "task": "Task 2",
        "completed": false
    },
    {
        "id": 3,
        "task": "Task 3",
        "completed": false
    }
    ]

export const TodoList = () => {
    const [todos, setTodos] = React.useState(dummyTodoData)
    console.log(todos)
  return (
    <div>
        <AddTodo  setTodos={setTodos} todos={todos} />
        <ul>
            {todos.map((todo, index) => (
                <TodoItem item={todo} key={index}/>
            ))}
        </ul>
    </div>
  )
}
