import { useState } from 'react'
import './App.css'
import { Counter } from './Counter'
import { TodoList } from './TodoList'
import { ListTodos } from './ListTodos'
import { Profile } from './Profile'
import { FetchDataEffects } from './useEffects/fetchDataEffects'


function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])
  const [profileInfo, setProfileInfo] = useState({"name": "nego", "age": 10})

  return (
    <div>
      {/* <Counter/> */}
      {/* <TodoList setTodos={setTodos} todos={todos}/>
      <ListTodos/> */}

      {/* <Profile setProfileInfo={setProfileInfo} profileInfo={profileInfo}/> */}

      <FetchDataEffects/>
    </div>

  )
}

export default App
