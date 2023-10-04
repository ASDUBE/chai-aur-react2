import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'

import Login from './components/Login'
import Profile from './components/Profile'



function App() {
  const [count, setCount] = useState(0)

  return (

<UserContextProvider>
<h1 >Welocome To Tripord</h1> 

<Login />
<Profile />

</UserContextProvider>

  
  )
}

export default App
