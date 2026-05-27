import { useEffect , memo} from "react"

function Title (){
    useEffect(()=>{
        console.log(`Title rendered`)
    })
    return(
        <h1>Mary mah.ir</h1>
    )
}

export default memo(Title)