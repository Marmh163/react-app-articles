import { useEffect } from "react"
import useFetch from "../../components/Hooks/useFetch"
import Loading from '../../components/loading/Loading'

function Users(){
    
    const [users, isPending] = useFetch('http://localhost:5000/users')
    useEffect(()=>{
        console.log('posts rendered' , users , isPending)
    })
    return(
        <div>
            {isPending ? (
                <Loading />
                ) : (
                users.map(user =>(
                <div key={user.id}>
                    <hr />
                    <p><b>{user.id}</b> -{user.title}</p>
                </div>

            ))
            )}
        </div>

    )
}
export default Users