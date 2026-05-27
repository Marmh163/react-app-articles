// // // // import { useRef, useState, useMemo, useEffect } from "react"
// // // // import TodoList from "./components/TodoList"
// // // // function App(){
// // // //     const [count , setCount] = useState(0)
// // // //     const [input , setInput] = useState('')
// // // //     const isEven = useMemo(()=>{
// // // //         let i=0;
// // // //         while (i < 4_000_000_000){
// // // //             i++
// // // //         }
// // // //         return count %2 == 0




// // // //     }, [count])
  
// // // //     return(
// // // //         <>
// // // //             {/* <TodoList/> */}
// // // //             <div>
// // // //                 <h1>{count} is {isEven ? 'Zoj' : 'Fard'}</h1>
// // // //                 <button onClick={() => setCount(count + 1)}>Increase</button>
// // // //                 <hr />
// // // //                 <input
// // // //                     type = "text"
// // // //                     value = {input}
// // // //                     onChange={(e) => setInput(e.target.value)} />
// // // //                 <h2>{input}</h2>
// // // //             </div>
            
// // // //         </>

// // // //     )
// // // // }

// // // // export default App

// // import { useEffect, useState } from "react"
// // import FilteredUser from "./components/FilteredUser"
// // function App(){
// //     const [newUser, setNewUser] = useState("")
// //     const [users , setUsers] = useState([])

// //     const addNewUserHandler = () =>{
// //         setUsers([...users , {id : users.length + 1 , name: newUser}])
// //         setNewUser('')

// //     }
// //     useEffect(()=>{
// //         console.log('App component Rendered')
// //     })
// //     return(
// //         <>
// //         <input 
// //             type="text"
// //             value={newUser}
// //             onChange={ (e) => setNewUser (e.target.value)} 
// //         />
// //         <button onClick={addNewUserHandler}>Add New User</button>
// //         <h1>user list:</h1>
// //         <ul>
// //             {users.map(user => (
// //                 <h3 key={user.id}><li>
// //                     {user.id} - {user.name}
// //                 </li></h3>
// //             ))}
// //         </ul>
// //         <hr />
// //         <h1>users includes "sa" :</h1>
// //         <FilteredUser users={users}/>
// //         </>

// //     )
// // }

// // export default App


// import { useCallback, useState } from "react"
// import Count from "./components/Count"
// import Button from "./components/Button"
// import Title from "./components/Title"

// function App(){
//     const [count1, setCount1] = useState(0)
//     const [count2, setCount2] = useState(0)

//     const count1Handler = useCallback(() =>{
//         setCount1(count1+1)
//     },[count1])

//     const count2Handler = useCallback(() =>{
//         setCount2(count2+1)
//     },[count2])


// return(
//     <>
//         <Title />
//         <Count text="count1" count={count1} />
//         <Button text="Increase count1" clickHandler={count1Handler}/>

//         <Count text="count2" count={count2} />
//         <Button text="Increase count2" clickHandler={count2Handler}/>

//     </>

// )

// }

// export default App

import { BrowserRouter , Routes , Route} from "react-router-dom";
import Users from "./pages/users/Users";
import Todos from "./pages/todos/Todos";
import Posts from "./pages/posts/Posts";
import Home from  "./pages/home/Home"
function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/posts' element={<Posts />} />
                <Route path='/todos' element={<Todos />} />
                <Route path='/users' element={<Users />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App