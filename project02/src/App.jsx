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
const removeValue=()=>{
  if(count>0){
    setCount(count-1)
  }
 else if(count==0){
  return true

 }
 else{
  return false;
 }
}
  return (
    <>
     
      <h1> Project 02 on React</h1>
      <button onClick={addValue}>Add values {count} </button>
      <br />
      <button onClick ={removeValue}>Remove values {count} </button>
      <p>footer: {count}</p>
      
      
    </>
  )
}

export default App
