import { useState } from 'react'


function changeColor(){
  color = {style}
  console.log(color);
}

function App() {
  const [color, setColor] = useState("maroon")

  

  return (
    
    
    <div className= "w-full h-screen duration-200"
    style= {{backgroundColor: color}}  >
      <div className="fixed flex flex-wrap justify-around top-12
      inset-x-0 px-0 py-02">
        <div className='flex flex-wrap justify-center gap-3 shadow-2xl bg-white rounded px-2 py-2'>
        <button /*onClick={() => {setColor('red')}}*/className='px-4 py-02 rounded-full outline-none text-white shadow-lg'
        style= {{backgroundColor: "red"}} >Red</button>
         <button className='px-4 py-02 rounded-full outline-none text-white shadow-lg'
        style= {{backgroundColor: "Green"}} onClick={() => {setColor('green')}} >Green</button>
        <button className='px-4 py-02 rounded-full outline-none text-white shadow-lg'
        style= {{backgroundColor: "Pink"}} onClick={() => {setColor('pink')}} >Pink</button>
        <button className='px-4 py-02 rounded-full outline-none text-white shadow-lg'
        style= {{backgroundColor: "Orange"}} onClick={() => {setColor('orange')}} >Orange</button>
        <button className='px-4 py-02 rounded-full outline-none text-white shadow-lg'
        style= {{backgroundColor: "Blue"}} onClick={() => {setColor('blue')}} >Blue</button>
        <button className='px-4 py-02 rounded-full outline-none text-white shadow-lg'
        style= {{backgroundColor: "purple"}} onClick={() => {setColor('purple')}}>Purple</button>
        <button className='px-4 py-02 rounded-full outline-none text-black shadow-lg'
        style= {{backgroundColor: "yellow"}}>yellow</button>
        </div>

      </div>
    
      </div>
       
        
      

    
    
  )
}

export default App
