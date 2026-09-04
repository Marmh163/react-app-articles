import { Link } from "react-router-dom"
function Navbar() {
    return(
        <nav className = "navbar navbar-expand-lg bg-dark navbar-dark">
            <div className = "container">
                <Link className="navbar-brand" to="/">مقالات من</Link>
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