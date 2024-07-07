import { useState , useCallback, useEffect , useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  var [length ,setlength] = useState(8);
  var [number , numberAllow]= useState(false);
var [charector, setcharAllow]= useState(false);
var [password , setPassword]= useState("");
var passwordRef=useRef(null);
   var passwordGene= useCallback(()=>{
    var pass="";
    var str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number) str += "0123456789";
    if(charector) str += "@|><?*#";

    for(var i=0;i<length;i++){
     let char= Math.floor(Math.random()*str.length+1);
      pass+= str.charAt(char);
    }
    setPassword(pass)

   },[length,number,charector,setPassword])
  
   useEffect(()=>{
    passwordGene();
   },[length, number,charector,passwordGene])
   var copyPasswordToClipboard= useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
   },[password])
  return (
    <><h1 className="text-4xl text-center text-white">Password Generator</h1>
     <div className="w-full , max-w-md-auto shadow-md
     rounded-lg px-4  my-8 text-orange-500 bg-gray-700"> 
     <div className="flex shadow rounded-lg  overflow-hidden  mb-4">
      <input type="text" value= {password}
      className="outline-none w-full py-1 px-3"
      placeholder="password"
      readOnly
      ref={passwordRef}
      />
      <button onClick={copyPasswordToClipboard}>copy</button>
   
     </div>
     <div className="flex text-sm gap-x-3">
        <div className="flex items-center gap-x-1">
          <input type="range"
          min={6}
          max={50}
          value={length}
          className="cursor-pointer"
          onChange={(e)=>{setlength(e.target.value)}}
           />
           <label >Length:{length}</label>
           </div>
           <div  className="flex text-sm gap-x-3" >
           <input type="checkbox"
          defaultChecked={number}
         id="numberInput"

         
          onChange={()=>{numberAllow((prev)=>!prev)}}
           />
           <label >Number</label>
           </div>
           <div   className="flex text-sm gap-x-3" >
           <input type="checkbox"
          defaultChecked={charector}
         id="charInput"

         
          onChange={()=>{setcharAllow((prev)=>!prev)}}
           />
           <label >Charactor</label>
           </div>
          
        
      </div>
     </div>
    </>
  )
}

export default App
