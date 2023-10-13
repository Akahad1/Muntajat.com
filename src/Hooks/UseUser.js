import { useEffect } from "react"
import { useState } from "react"

const UseUser =email=>{
    const [isUser,setUser]=useState(true)
    const [isadminLoding,setadminLoding]=useState(true)
    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/users/user/${email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data.isUser)
            setUser(data.isUser)
            
            setadminLoding(false)
        })
        }
    },[email])
    return [isUser,setadminLoding]
}
export default UseUser;