import { useState } from "react"
import './TodoList.css'
import TodoItem from "./TodoItem"

function TodoList(){
    const [todos, setTodos] = useState([
        {
            id : 1,
            title : 'task 1'
        },
        {
            id : 2,
            title : 'task 2'
        },
        {
            id : 3,
            title : 'task 3'
        }
        
    ])
    const [newTodo , setNewTodo] = useState("")

    const addTodoHandler =() => {
        setTodos([ ...todos , {id : todos.length + 1 , title : newTodo}])

    }

    const deleteTodo = (todoId) =>{
        let newTodos = todos.filter(todo => todo.id !== todoId)
        setTodos(newTodos)

    }

    
    return(
        <div className="todolistContainer">
            <h1>TodList</h1>
            <hr />
            <div className="addTodoContainer">
                <input onChange={(e) =>{ setNewTodo(e.target.value)}} type="text" />
                <button onClick={addTodoHandler}>Add Todo</button>
            </div>
            

            {todos.map( todo => (
                <TodoItem 
                key={todo.id} 
                {...todo} 
                onRemove={ () => deleteTodo(todo.id)}
                />
            ))}
        </div>

    )
}

export default TodoList