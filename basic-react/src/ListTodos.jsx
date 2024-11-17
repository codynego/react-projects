import React from 'react'

export const ListTodos = ({todos}) => {
  return (
    <div>
        {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
        ))}
    </div>
  )
}
