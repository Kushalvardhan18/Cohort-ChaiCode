import { useEffect, useState } from "react"
export function App() {
    const [message,setMessage]=useState("Loading.......") // [var,fn]

    useEffect( ()=>{
        fetch(`http://localhost:3000/api`).then((res)=>res.json)
        .then((data)=>setMessage(data.message))
        .catch(()=>setMessage("Failed to load"))
    } ,[])

    // let anotherMessage  // cannot change in react -- react doesnt allow it to change.
    return (
        <div>
            <h1>Welcome to Chaicode</h1>
            <p>Serving hot chai with react</p>
            <h2>{message}</h2>
        </div>
    )
}