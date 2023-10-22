import { useEffect, useState } from "react"

const useSellar=email=>{
    const [IsSellar,setIsSellar]=useState('')
    const [IsSellarLoading,setIsSellarLoading]=useState(true)
    useEffect(()=>{
        fetch(`https://muntajat-com-server-cve15m39y-akahad1.vercel.app/users/sellar/${email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setIsSellar(data.IsSellar)
            setIsSellarLoading(false)
        })
    },[email])
    return [IsSellar,IsSellarLoading]
}
export default useSellar;