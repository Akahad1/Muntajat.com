// import { useEffect, useState } from "react"

// const useToken=email=>{
//     const [token,setToken]=useState('')
//     useEffect(()=>{
//         fetch(`http://localhost:5000/jwt?email=${email}`,)
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