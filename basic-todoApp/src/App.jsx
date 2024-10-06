import { useState } from 'react'
import './App.css'
import { Header } from './components/header'
import { TodoList } from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main">
        <Header/>
        <main>
          <TodoList/>
        </main>
      </div>
    </>
  )
}

export default App
