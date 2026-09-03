import { useEffect, useState } from "react"
import Swal from "sweetalert2"

function useFetch(url){
    const [datas , setDatas] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
    fetch(url)
        .then((response) => {
            console.log(response)
            if(!response.ok) {
                const error = new Error(`خطا : ${response.status}`)
                error.status = response.status
                throw error
            }
            return response.json()
        })
        .then((datas) => {
            setDatas(datas)
            setIsPending(false)
        })
        .catch((err) => {
            console.log(err)
            setError(err.message)
            setIsPending(false)

            let message = "ارتباط با سرور برقرار نشد"
            if(err.status === 404){
                message = "موردی پیدا نشد"
            }
            Swal.fire({
                icon: "error",
                title: "خطا",
                text: message
            })
        })
    }, [url])
    return [datas, isPending, error]

    
}

export default useFetch