import './TodoItem.css'
function TodoItem(props){
    return(
        <div className="todoItemContainer">
            <p>{props.title}</p>
            <button onClick={props.onRemove}>Delete Todo</button>
        </div>

    )
}

export default TodoItem