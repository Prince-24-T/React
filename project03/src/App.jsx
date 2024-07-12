import { useState  , useMemo} from 'react'



function App() {
 const [color, setColor]= useState("olive")

  return (
   <div className="  w-screen h-screen duration-200  "
   style={{backgroundColor:color}}
   >..
<div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-0">
  <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 b rounded-xl" >
    <button className="outline-none px-4 rounded-lg"
    onClick={()=>setColor('red')}
    style={{backgroundColor:'red'}}
    >Red</button>
      <button className="outline-none px-4 rounded-lg"
       onClick={()=>setColor('green')}
    style={{backgroundColor:'green'}}
    >Green</button>
      <button className="outline-none px-4 rounded-lg"
       onClick={()=>setColor('yellow')}
    style={{backgroundColor:'yellow'}}
    >yellow</button>
      <button className="outline-none px-4 rounded-lg"
    style={{backgroundColor:'black'}}
    onClick={()=>setColor('black')}
    >black</button>
      <button className="outline-none px-4 rounded-lg"
    style={{backgroundColor:'Orange'}}
    onClick={()=>setColor('orange')}
    >Orange</button>
      <button className="outline-none px-4 rounded-lg"
    style={{backgroundColor:'blue'}}
    onClick={()=>setColor('blue')}
    >blue</button>
  </div>
  </div>
   </div>
  )
}


export default App
