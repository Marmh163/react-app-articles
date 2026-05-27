import useFetch from "../../components/Hooks/useFetch"
import Loading from '../../components/loading/Loading'

function Posts(){
    
    const [posts, isPending] = useFetch('http://localhost:5000/posts')
    return(
        <div>
            {isPending ? (
                <Loading />
                ) : (
                posts.map(post =>(
                <div key={post.id}>
                    <hr />
                    <p><b>{post.id}</b> -{post.title}</p>
                </div>

            ))
            )}
        </div>

    )
}
export default Posts