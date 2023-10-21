import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
        document.title=`Muntajat.com- ${title}`

    },[title])
    return [title]
}
export default useTitle;