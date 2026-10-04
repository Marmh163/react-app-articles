import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

function Register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch("http://localhost:5000/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || "ثبت نام انجام نشد")
            }

            await Swal.fire({
                icon: "success",
                title: "ثبت نام موفق",
                text: "حساب کاربری شما با موفقیت ساخته شد"
            })

            navigate("/login")

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "خطا",
                text: error.message
            })
        }
    }

    return (
        <div className="container mt-5" dir="rtl">
            <div className="row justify-content-center">
                <div className="col-md-6">

                    <h2 className="text-center mb-4">ثبت نام</h2>

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label className="form-label">نام</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">ایمیل</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">رمز عبور</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button className="btn btn-dark w-100">
                            ثبت نام
                        </button>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Register