import { memo, useEffect, useMemo } from "react"

import { useState } from "react";

function FilteredUser({users}){
    useEffect( ()=>{
        console.log('Filtered user Rendered')
    })
    return(
        <ul>
            {useMemo( () => {
                return users.filter(user => {
                    console.log('filter run')
                    return user.name.includes('sa')
                })
                .map(user => (
                    <h3 key={user.id}><li>{user.id} - {user.name}</li></h3>
                ))
            }, [users])}
        </ul>

    )
}

export default memo(FilteredUser)

