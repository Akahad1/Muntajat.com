import { useEffect } from "react"
import { useState } from "react"

const useAdmin =email=>{
    const [isAdmin,setIsAdmin]=useState(false)
    const [isAdminLoading,setIsadminLoading]=useState(true)
    useEffect(()=>{
        fetch(`http://localhost:5000/users/admin/${email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setIsAdmin(data.IsAdmin)
            setIsadminLoading(false)
        })
    },[email])
    return [isAdmin,isAdminLoading]

}
export default useAdmin;