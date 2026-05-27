import { useEffect , memo } from "react"

function Count({text , count}) {
    useEffect(()=>{
            console.log(`${text} Rendered`)
    })
    return(
        <h3>{text} - {count}</h3>
    )
}

export default memo(Count)