import useFetch from "../../components/Hooks/useFetch"
import Loading from '../../components/loading/Loading'

function Todos(){
    
    const [todos, isPending] = useFetch(`${process.env.REACT_APP_API_URL}/todos`)
    return(
        <div>
            {isPending ? (
                <Loading />
                ) : (
                todos.map(todo =>(
                <div key={todo.id}>
                    <hr />
                    <p><b>{todo.id}</b> -{todo.title}</p>
                </div>

            ))
            )}
        </div>

    )
}
export default Todos