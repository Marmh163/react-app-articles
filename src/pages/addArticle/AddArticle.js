import { useState } from "react"
import Swal from "sweetalert2"

function AddArticle() {

    const [image, setImage] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [writter, setWritter] = useState("")
    const [category, setCategory] = useState("")
    const [readingTime, setReadingTime] = useState(0)

    const handleSubmit = async () => {
        const newArticle={
            image,
            title,
            description,
            writter,
            category,
            readingTime: Number(readingTime)
        }
        const response = await fetch('http://localhost:5000/articles', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newArticle)
        
        })
        const data = await response.json()
        console.log(data)

        Swal.fire({
            icon: "text",
            title: "مقاله با موفقیت اضافه شد",
            confirmButtonText: "باشه"
        })
        
        setImage("")
        setTitle("")
        setDescription("")
        setWritter("")
        setCategory("")
        setReadingTime(0)
    }

    return (
        <div className="container mt-5" dir="rtl">

            <h1 className="mb-4">افزودن مقاله</h1>

            <div className="mb-3">
                <label className="form-label">آدرس عکس</label>
                <input
                    type="text"
                    className="form-control"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
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
                <label className="form-label">دسته‌بندی</label>
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

            <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
            >
                افزودن مقاله
            </button>

        </div>
    )
}

export default AddArticle