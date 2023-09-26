import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <h1 className ="bg-green-400 , text-black p-4 rounded xxl mb-4" > All Time Great</h1>

    <Card username="Dhoni" btnText= "Captain/WicketKeeper" img= "https://i.pinimg.com/1200x/a0/ae/9e/a0ae9e75d9282709ce048c0870b818d2.jpg"/>
    
    <br/>

    <Card username= "Kohli" btnText= "Batsman" img= "https://mir-s3-cdn-cf.behance.net/project_modules/hd/9ce14c127620309.61456f2483b89.jpg" />




    
  

     
     
    </>
  )
}

export default App
