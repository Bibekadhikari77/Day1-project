import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  //let counter = 5

  const addValue = () => {
    //counter = counter +1
    setCounter(prevCounter => prevCounter + 1 )
     setCounter(prevCounter => prevCounter + 1 )
     setCounter(prevCounter => prevCounter + 1 )
     setCounter(prevCounter => prevCounter + 1 )
    //console.log("clicked", counter);

  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value {counter} </button><br/>
      <button
      onClick={removeValue}
      >remove Value {counter} </button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
