import { useState } from 'react'
import './App.css'
import Pcomponent from './Components/Pcomponent';
function App() {
  console.log("The app component renders");
  const [count, setCount]=useState(0);
  return (
    <>
      <p>Hello World</p>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>Incr</button>
      <Pcomponent/>
    </>
  )
}

export default App
