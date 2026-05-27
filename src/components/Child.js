import { memo, useEffect } from "react"

function Child(){

    useEffect(() =>{
            console.log("Child Component Rendered")
        })
    
    return(
        <>
            <hr />
            <h1>Child Component</h1>
            <hr />
        </>
    )
}

export default memo(Child)