import { Link } from "react-router-dom"
import { useContext } from "react"
import AuthContext from "../../context/AuthContext"

function Navbar() {
    const { currentUser } = useContext(AuthContext)
    console.log(currentUser)
    return(
        <nav className = "navbar navbar-expand-lg bg-dark navbar-dark mb-5">
            <div className = "container">
                {/* <Link className="navbar-brand" to="/posts">مقالات من</Link> */}
                {currentUser && (
                    <span className="text-white mx-3">
                        {currentUser.name} 
                    </span>
                )}
                <div className="navbar-nav"  dir="rtl"> 
                    <Link className="nav-link" to="/">خانه</Link>
                    <Link className="nav-link" to="/posts">مقالات</Link>
                    <Link className="nav-link" to="/articles/add">افزودن مقاله</Link>
                    <Link className="nav-link" to="/about">درباره ما</Link>
                </div>
                
            </div>
        </nav>
    )
}
export default Navbar
