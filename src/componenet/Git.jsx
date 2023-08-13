import React, { useState } from 'react'

const Git = () => {

    const [search , setSearch] = useState("GuptaAman11")
    const [usdata , setUsData]= useState("")

    const  Data =async ()=>{
      try {
        const userResponse = await fetch(`https://api.github.com/users/${search}`)
        const  userData = await userResponse.json()
        setUsData(userData);
        
      }catch(error){
        console.error(error)
      }

    }
  return (
    <div>
      <div>
        <input type='text'></input>
        <button onClick={Data}>search</button>
        <h1>{usdata.avatar_url}</h1>
      </div>
    </div>
  )
}

export default Git

