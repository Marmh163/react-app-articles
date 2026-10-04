

import { BrowserRouter , Routes , Route} from "react-router-dom";
import Users from "./pages/users/Users";
import Todos from "./pages/todos/Todos";
import Posts from "./pages/posts/Posts";
import Home from  "./pages/home/Home";
import Article from "./pages/article/Article"
import EditArticle from "./pages/editArticle/EditArticle"
import AddArticle from "./pages/addArticle/AddArticle";
import About from "./pages/about/About"
import Navbar from "./components/navBar/MyNavBar"
import Footer from "./components/Footer/Footer"
import Login from "./pages/login/Login"
import { AuthProvider } from "./context/AuthContext"

function App(){
    return(
        <AuthProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/posts' element={<Posts />} />
                    <Route path='/todos' element={<Todos />} />
                    <Route path='/users' element={<Users />} />
                    <Route path='/articles/:articleID' element={<Article />} />
                    <Route path='/articles/edit/:articleID' element={<EditArticle />} />
                    <Route path='/articles/add' element={<AddArticle />} />
                    <Route path='about' element={<About />} />
                    <Route path='login' element={<Login />} />        
                </Routes>
                <Footer />
            </BrowserRouter>
        </AuthProvider>
    )
}
export default App