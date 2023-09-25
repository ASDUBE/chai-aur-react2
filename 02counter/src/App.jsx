import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(1000)



  const addValue=() => {
    if (count=== 25000) {
      alert('Target Achieved');
      return;
    }

    setCount(count+1000);

    
  }

  const removeValue=()=> {
    setCount(count-1000);
  }



  return (
    <>
     <h1> Counter App</h1>
     <br/>
     <h2>Total Cash {count}</h2>

     <button onClick={addValue}>Add Cash</button>
     <br/>
    <button onClick={removeValue}>Remove Cash</button>   
    <p>Target : 25000</p>   
    </>
  )
}

export default App
