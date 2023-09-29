import { useState, useCallback , useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(9);
  const [isNumber ,setIsNumber]= useState(false);
  const [isCharacter ,setIsCharacter] = useState(false);
  const [password, setPassword] = useState(" ");

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=> {
    let pass = " "
    let str = " ASHUTOSH"
    if (isNumber) str+= "0123456789"
    if(isCharacter)str += "!@#$%^&*{}?><_"

    for (let i= 0;i<=length; i++){
     let char = Math.floor(Math.random()* str.length+1)
      pass += str.charAt(char)
    }
      setPassword(pass)
  } , [length, isNumber , isCharacter  ,setPassword])

  const copyToClipboard=useCallback(()=> {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,30);
    window.navigator.clipboard.writeText(password)

  }, [password])

    useEffect(() => {
     passwordGenerator()
    }, [length, isNumber. isCharacter ,passwordGenerator])

  return (
    <>
      
  <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-green-500 bg-gray-800'>
      <h2 className='text-blue text-2xl text-center'>PassWord Generator</h2>
        <div className=" flex shadow rounded-lg overflow-hidden mb-4">
        <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder="Password"
          readOnly 
          ref={passwordRef}
          />

          <button onClick= {copyToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
           </div> 

           <div className='flex text-sm gap-x-2'>
              <div className='flex items-center gap-x-1'> 
                  <input 
                  type="range"
                  min={6}
                  max={25}
                  className='cursor-pointer'
                  onChange={(e)=> {setLength(e.target.value)}}/>
                  <label>Length: {length}</label>              
              </div>

              <div className='flex items-center gap-x-1'>
                <input 
                type="checkbox"
                defaultChecked= {isNumber}
                id="numberInput"
                onChange={() => {
                  setIsNumber((prev)=> !prev )
                }} />
                <label htmlFor='numberInput'>Number</label>

                <div className='flex items-center gap-x-1'>
                  <input 
                  type="checkbox"
                
                  defaultChecked= {isCharacter}
                id="characterInput"
                onChange={() => {
                  setIsCharacter((prev)=> !prev )
                }} />
                <label htmlFor='characterInput'>Character</label>
                </div>

                </div>
              

              </div>
      </div>
         
    </>
  )
}

export default App
