import { isTryStatement } from "typescript"

const TodoListItem:React.FC<IlistItem> = ( {item} ) => {
    return (
        <li>
            {item.isDone ? <p className='checked'></p>
            :<p>{item.task}</p>}
            <span className="task-icons" >✖️</span>
        </li>
    )
}

export default TodoListItem