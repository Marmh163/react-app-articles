import useFetch from "../../components/Hooks/useFetch"
import Loading from '../../components/loading/Loading'
import ArticleItem from "../../components/article/ArticleItem"

function Posts(){
    
    const [posts, isPending] = useFetch('http://localhost:5000/articles')
    console.log(posts)
    return(
        
        <div className="container">
            <div className="row">
            {isPending ? (
                <Loading />
                ) : (
                posts.articles.map(post =>(
                    <ArticleItem key={post._id} article={post} />
            ))
            )}
            </div>
        </div>
    )
}
export default Posts