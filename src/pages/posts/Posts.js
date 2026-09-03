import "./Posts.css"
import useFetch from "../../components/Hooks/useFetch"
import Loading from '../../components/loading/Loading'
import ArticleItem from "../../components/article/ArticleItem"
import { useState } from "react"

function Posts(){
    const[page , setPage] = useState(1)
    const [search , setSearch] = useState("")
    const [searchQuery , setSearchQuery] = useState("")
    const [posts, isPending] = useFetch(`http://localhost:5000/articles?page=${page}&limit=5&search=${searchQuery}`)
    console.log(posts)
    return (
    <div className="container">
        <div className="mb-4 d-flex gap-2">
            <input
                type="text"
                className="form-control"
                placeholder="جستجوی مقاله ..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button 
                type="button"
                className="btn btn-primary mt-2 search-btn" 
                onClick={() => {
                    console.log("search:" , search)
                    setSearchQuery(search)
                    }}>Search
            </button>
        </div>

        <div className="row">
            {isPending ? (
                <Loading />
            ) : (
                posts.articles.map(post => (
                    <ArticleItem
                        key={post._id}
                        article={post}
                    />
                ))
            )}
        </div>

        <div className="mt-4 text-center">
            <button 
                className="btn btn-secondary me-2"
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                >Previous
            </button>
            {Array.from({ length: posts?.totalPages || 0 }, (_, index) => (
            <button
                key={index + 1} 
                className={`btn me-2 ${page === index + 1 ? "btn-dark" : "btn-primary"}`}
                onClick={() => setPage(index + 1)}
            >{index + 1}</button>
            ))}
            <button 
                className="btn btn-secondary me-2"
                onClick={() => setPage(page + 1)}
                disabled={page === posts?.totalPages}
                >Next
            </button>
        </div>

    </div>
)
}
export default Posts