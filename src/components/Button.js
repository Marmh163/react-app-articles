import { useEffect , memo} from "react"

function Button({text , clickHandler}){
    useEffect(()=>{
            console.log(`button ${text} rendered`)
        })
    return(

        <button onClick={clickHandler}>{text}</button>
    )
}
export default memo(Button)