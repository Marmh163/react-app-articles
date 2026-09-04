import { useParams } from "react-router-dom"
import useFetch from "../../components/Hooks/useFetch"
import Loading from "../../components/loading/Loading"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import "./Article.css"

function Article(){
    const {articleID} = useParams()
    const navigate = useNavigate()
    const [article, isPending , error] = useFetch(`http://localhost:5000/articles/${articleID}`)
    const handleDelete = async () => {
        const result = await Swal.fire({
            title: "آیا مطمئن هستید؟",
            text: "این مقاله حدف خواهد شد",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "بله حدف شود",
            cancelButtonText: "لغو"
        })
        if(!result.isConfirmed){
            return
        }
        const response = await fetch(`http://localhost:5000/articles/${articleID}`,
            {
                method: "DELETE"
            }
        )
        const data = await response.json()
        console.log(data)
        if(response.ok){
            await Swal.fire({
                icon: "success",
                title: "موفق",
                text: "مقاله با موفقیت حدف شد"
            })
            navigate("/posts")
        }
    }

return (
    <div className="container mt-5" dir="rtl">

        {isPending ? (
            <Loading />
        ) : error ? (
            <h1>خطا در دریاقت اطلاعات</h1>
        ) : (
            <div className="row">
                {/* سمت راست */}
                <div className="col-md-5">
                    <div className="card">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="article-detail-image"
                        />
                        <div
                            className="card-body"
                            style={{
                                direction: "rtl",
                                textAlign: "right"
                            }}
                        >
                            <h1 className="card-title">
                                {article.title}
                            </h1>
                            <p>
                                <strong>نویسنده:</strong> {article.writter}
                            </p>
                            <p>
                                <strong>دسته‌بندی:</strong> {article.category}
                            </p>
                            <p>
                                <strong>زمان مطالعه:</strong> {article.readingTime} دقیقه
                            </p>
                            <div className="mt-4">
                                <button 
                                    className="btn btn-primary me-2"
                                    onClick={() => navigate(`/articles/edit/${articleID}`)}
                                >ویرایش</button>
                                <button 
                                    className="btn btn-danger me-2"
                                    onClick={handleDelete}
                                >حذف
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

                {/* سمت چپ */}
                <div className="col-md-7">
                    <div
                        className="card p-4"
                        style={{
                            direction: "rtl",
                            textAlign: "right"
                        }}
                    >
                        <h2 className="mb-4">
                            متن مقاله
                        </h2>
                        <p>
                            {article.description}
                        </p>
                    </div>
                </div>
            </div>
        )}
    </div>
)
}
export default Article