import { Link } from "react-router-dom"
import { useContext } from "react"
import AuthContext from "../../context/AuthContext"

function Navbar() {
    const { currentUser , logout } = useContext(AuthContext)
    return(
        <nav className = "navbar navbar-expand-lg bg-dark navbar-dark  ms-auto" dir="rtl">
            <div className="container">

                <div className="navbar-nav" dir="rtl">
                    <Link className="nav-link" to="/">خانه</Link>
                    <Link className="nav-link" to="/posts">مقالات</Link>
                    <Link className="nav-link" to="/articles/add">افزودن مقاله</Link>
                    <Link className="nav-link" to="/about">درباره ما</Link>
                </div>

                {currentUser ? (
                    <div className="d-flex align-items-center gap-2">
                        <span className="text-white">
                            سلام {currentUser.name} 👋
                        </span>
                        <button
                            onClick={logout}
                            className="btn btn-outline-light btn-sm">
                            خروج
                        </button>

                        
                    </div>
                ) : (
            
            <div className="d-flex align-items-center gap-2">
                <Link
                    to="/login"
                    className="btn btn-outline-light btn-sm">
                    ورود
                </Link>

                <Link
                    to="/register"
                    className="btn btn-outline-light btn-sm">
                    ثبت نام
                </Link>
            </div>
                )}

            </div>
        </nav>
    )
}
export default Navbar
