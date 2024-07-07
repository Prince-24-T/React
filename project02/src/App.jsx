import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
const addValue=()=>{

  console.log('click me!',count);
 
  setCount(count+1)
}
  return (
    <>
     
      <h1> Project 02 on React</h1>
      <button onClick={addValue}>Add values</button>
      <br />
      <button >Remove values</button>
      
      
    </>
  )
}

export default App
