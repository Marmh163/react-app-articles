import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Posts from './pages/posts/Posts';
import Users from './pages/users/Users';
import Todos from './pages/todos/Todos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/ >
        <Route path='/posts' element={<Posts />} />
        <Route path='/todos' element={<Todos />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
