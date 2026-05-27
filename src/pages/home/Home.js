import { Link } from "react-router-dom";

function Home(){
    return(
        <ul>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to='/todos'>Todos</Link></li>
        </ul>
    )
}

export default Home