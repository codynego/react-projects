import React from 'react'

export const TodoItem = ({item, key}) => {
  return (
    <li key={key} className='item'>{item.task}</li>
  )
}
