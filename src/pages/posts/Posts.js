import useFetch from "../../components/Hooks/useFetch"
import Loading from '../../components/loading/Loading'

function Posts(){
    
    const [posts, isPending] = useFetch('http://localhost:5000/articles')
    console.log(posts)
    return(
        <div>
            {isPending ? (
                <Loading />
                ) : (
                posts.articles.map(post =>(
                <div key={post.id}>
                    <hr />
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <p>نویسنده :{post.writter}</p>
                    <p>دسته بندی :{post.category}</p>
                    <p>زمان مطالعه :{post.readingTime}</p>
                    {/* <p><b>{post.id}</b> -{post.title}</p> */}
                </div>

            ))
            )}
        </div>

    )
}
export default Posts