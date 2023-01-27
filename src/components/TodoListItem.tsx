
const TodoListItem:React.FC<IlistItem> = ( {item, toggleTodo, deleteTodo} ) => {
    return (
        <li>
            {item.isDone ? <p className='checked' onClick={() => toggleTodo(item)}>{item.task}</p>
            :<p onClick={() => toggleTodo(item)}>{item.task}</p>}
            <span className="task-icons" onClick={() => deleteTodo(item.id)}>✖️</span>
        </li>
    )
}

export default TodoListItem