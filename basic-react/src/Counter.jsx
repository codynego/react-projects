import React from 'react'
import { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }
  return (
    <div>
        <h1>Counter</h1>
        <p>count: {count}</p>
        <button onClick={handleClick}>increment</button>
    </div>
    
  )
}
