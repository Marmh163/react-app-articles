import { useState , useEffect } from "react";

function useFetch(url){
    const [datas, setDatas] = useState(null);
    const [isPending , setIsPending] = useState(true)

    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((datas) => {
          setDatas(datas)
          setIsPending(false)
        })
        .catch( err => console.log(err))
    }, []);

    return [datas , isPending]
}
export default useFetch