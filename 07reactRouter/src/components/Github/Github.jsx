import React, { useState , useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data= useLoaderData()
  /*const [data, setData] = useState([])
  //useEffect(() => {
   fetch('https://api.github.com/users/hiteshchoudhary')
   .then(response => response.json())
   .then(data => {
    setData(data)

   })
     
    
  }, []) */
  
  return (
    <div className='text-center  m-4 bg-yellow-400 text-black p-4 text-3xl'>Github Followers: {data.followers}
    
    <img src= {data.avatar_url}alt='GPP' width={300}
    
    /> </div>
  )
}

export default Github

export const useInfo = async () => {
  
  const response = await fetch('https://api.github.com/users/ASDUBE')

  return response.json()


}