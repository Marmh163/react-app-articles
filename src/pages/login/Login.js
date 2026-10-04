import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Swal from "sweetalert2"

function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try{
            const response = await fetch("http://localhost:5000/users/login" , 
                {
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    body : JSON.stringify({
                        email,
                        password
                    })
                })

                const data = await response.json()
                if(!response.ok){
                    throw new Error(data.message || "خطا در ورود")
                }

                localStorage.setItem("token" , data.token)

                await Swal.fire({
                    icon: "success",
                    title: "ورود موفق",
                    text: "با موفقیت وارد شدسد",
                    confirmButtonText: "باشه",
                    direction: "rtl"
                })

                navigate("/")
                
        }
         catch(error) {
            Swal.fire({
                icon:"error",
                title: "خطا",
                text: "ایمیل یا رمز عبور اشتباه است",
                confirmButtonText: "باشه",
                direction: "rtl"
            })
        }
    }

    return(
        <div className="container mt-5">
            <div className="row justify-content-center" dir="rtl">
                <div className="col-md-6 col-lg-4">
                    <h2 className="text-center mb-4">ورود</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">
                                ایمیل :
                            </label>
                            <input 
                                type="email" 
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                رمز عبور :
                            </label>
                            <input 
                                type="password" 
                                className="form-control" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">ورود</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login