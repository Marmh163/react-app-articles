import { useParams } from "react-router-dom"
import useFetch from "../../components/Hooks/useFetch"
import Loading from "../../components/loading/Loading"
import { useState, useEffect } from "react"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"



function EditArticle(){
    const { articleID } = useParams()
    const [ article, isPending, error]=useFetch(`http://localhost:5000/articles/${articleID}`)
    console.log(article)
    const [image, setImage] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [writter, setWritter] = useState("")
    const [category, setCategory] = useState("")
    const [readingTime, setReadingTime] = useState(0)
    const navigate = useNavigate()
    useEffect(() => {
        if(article){
            setTitle(article.title)
            setDescription(article.description)
            setWritter(article.writter)
            setCategory(article.category)
            setReadingTime(article.readingTime)
            setImage(article.image)
        }
    }, [article])

    const handleSubmit = async () => {
        const response = await fetch(`http://localhost:5000/articles/${articleID}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type" : "application/json"
                },

                body:JSON.stringify({
                    image,
                    title, 
                    description, 
                    writter, 
                    category, 
                    readingTime:Number(readingTime)
                })
            }
        )
        const data = await response.json()
        if(response.ok) {
            await Swal.fire({
                icon: "success",
                title: "موفق",
                text: "تغییرات با موفقیت ذخیره شد"
            })
            navigate(`/articles/${articleID}`)
        }else {
            Swal.fire({
                icon:"error",
                title:"خطا",
                text: data.message || "ذخیره تغییرات انجام نشد"
            })
        }

        
        console.log(data)
    }
    
    if(isPending){
        return <Loading />
    }
    if(error) {
        return <h1>خطا در دریافت اطلاعات</h1>

    }
    return(
        <div className="container mt-5" dir="rtl">
            <h1>ویرایش مقاله</h1>

            <div className="mb-3">
                <label className="form-label">عکس مقاله</label>
                <div>
                    <img
                        src={image}
                        alt={title}
                        style={{width:"300px"}} />
                </div>
            </div>

            <div className="mt-3">
                <label className="form-label">آدرس عکس</label>
                <input
                    type="text"
                    className="form-control"
                    value={image}
                    onChange={(e) => {
                        setImage(e.target.value)
                    }}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">عنوان مقاله</label>
                <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            

            <div className="mb-3">
                <label className="form-label">توضیحات مقاله</label>
                <textarea
                    className="form-control"
                    rows="6"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">نویسنده</label>
                <input
                    type="text"
                    className="form-control"
                    value={writter}
                    onChange={(e) => setWritter(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">دسته بندی</label>
                <input
                    type="text"
                    className="form-control"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">زمان مطالعه</label>
                <input
                    type="number"
                    className="form-control"
                    value={readingTime}
                    onChange={(e) => setReadingTime(e.target.value)}
                />
            </div>

            <div className="mt-4">
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                >
                    دخیره تغییرات
                </button>
            </div>


        </div>
    )
}
export default EditArticle