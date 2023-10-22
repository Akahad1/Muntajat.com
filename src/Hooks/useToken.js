// import { useEffect, useState } from "react"

// const useToken=email=>{
//     const [token,setToken]=useState('')
//     useEffect(()=>{
//         fetch(`https://muntajat-com-server-cve15m39y-akahad1.vercel.app/jwt?email=${email}`,)
//         .then(res=>res.json())
//         .then(data=>{
//             if(data.muntajatToken){
//                 localStorage.setItem('muntajatToken',data.token)
//                setToken(data.token)
//                console.log(data)

//             }
//         })
//     },[email])
//     return [token]
// }

// export default useToken;