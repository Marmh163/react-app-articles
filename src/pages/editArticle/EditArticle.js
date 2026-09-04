import { useParams } from "react-router-dom"
import useFetch from "../../components/Hooks/useFetch"
import Loading from "../../components/loading/Loading"



function EditArticle(){
    const { articleID } = useParams()
    const [ article, isPending, error]=useFetch(`http://localhost:5000/articles/${articleID}`)
    console.log(article)
    if(isPending){
        return <Loading />
    }
    if(error) {
        return <h1>خطا در دریافت اطلاعات</h1>
    }
    return(
        <div className="container mt-5">
            <h1>ویرایش مقاله</h1>
            <p>{article.title}
            </p>
        </div>
    )

    
}
export default EditArticle