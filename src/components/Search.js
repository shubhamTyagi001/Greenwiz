import React, { useState } from 'react'
//import{useState} from "react"
import{FaSearch} from 'react-icons/fa'

function Search() {
    const[input,setInput] = useState("");
    const submit = (e)=>{
        e.preventDefault();
    }
  return (
    <div>
        <FaSearch></FaSearch>
    <form onSubmit={submit}>
        <input onChange={(e)=>setInput(e.target.value)} type= "text"  value={input}/>

    </form>
    </div>
  )
}

export default Search