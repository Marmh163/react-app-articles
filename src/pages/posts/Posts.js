import "./Posts.css"
import useFetch from "../../components/Hooks/useFetch"
import Loading from '../../components/loading/Loading'
import ArticleItem from "../../components/article/ArticleItem"
import { useState } from "react"

function Posts(){
    const[page , setPage] = useState(1)
    const [search , setSearch] = useState("")
    const [searchQuery , setSearchQuery] = useState("")
    const [category, setCategory] = useState("")
    const [sortBy, setSortBy] = useState("")
    const [sort, setSort] = useState("")
    const [posts, isPending] = useFetch(`http://localhost:5000/articles?page=${page}&limit=10&search=${searchQuery}&category=${category}&sortBy=${sortBy}&sort=${sort}`)
    console.log(posts)

    return (
    <div className="container">
        <h5 className="mb-2">جستجوی مقاله</h5>
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
                    }}>جستجو
            </button>
        </div>

        <h5 className="mb-2">دسته بندی</h5>
        <div className="mb-4">
            <select 
                className="form-select" 
                value={category} 
                onChange={(e) => {
                    setCategory(e.target.value)
                    setPage(1)
                }}
                >
                <option value="">همه دسته بندی ها</option>
                <option value="Programming">Programming</option>
                <option value="AI">AI</option>
                <option value="database">database</option>
            </select>
        </div>

        <div className="mb-4">
            <h5 className="mb-2">مرتب سازی بر اساس</h5>
            <select
                className= "form-select"
                value= {sortBy}
                onChange={(e) => {
                    setSortBy(e.target.value)
                    setPage(1)
                }}
            >
                <option value="">بدون مرتب سازی</option>
                <option value="readingTime">زمان مطالعه</option>
                <option value="title">عنوان</option>
            </select>
        </div>

        <div className="mb-4">
            <h5 className="mb-2">ترتیب</h5>
            <select
                className="form-select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
            >
                <option value="">انتخاب ترتیب</option>
                <option value="asc">کم به زیاد / A تا Z</option>
                <option value="desc">زیاد به کم / Z تا A</option>
            </select>
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
                >قبلی
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
                >بعدی
            </button>
        </div>

    </div>
)
}
export default Posts