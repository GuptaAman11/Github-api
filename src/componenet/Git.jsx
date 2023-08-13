import React, { useEffect, useState } from 'react'

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
        <input type='text' onChange={(e)=>setSearch(e.target.value)} ></input>
        <button onClick={Data}>search</button>
        <h1>{usdata.login}</h1>
        <img src={usdata.avatar_url}/>
      </div>
    </div>
  )
}

export default Git

