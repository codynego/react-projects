import './App.css';
import React, { useEffect } from 'react'
import CurrencyRow from './CurrencyRow'

const BASE_URl = 'https://v2.jokeapi.dev/categories'

function App() {

  useEffect(() => {
    fetch(BASE_URl)
      .then(res => {
        //res.json
        console.log(res.json())
      })
      .then(data => {
        console.log(data)
        console.log("hello")
      })

  }, [])
  return (
    <>
      <main>
        <h1>Convert</h1>
          <CurrencyRow />
        <div className="equals">=</div>
        <CurrencyRow />
      </main>
    </>
  );
}

export default App;
