import { useState } from "react"

// type Task = string

interface IInputForm {
    addTodo: AddFunction
}

const InputForm:React.FC<IInputForm> = ({ addTodo }) => {
    // const [task, setTask] = useState<Task>("")
    const [task, setTask] = useState("")
  
    const handleClick = () => {
        addTodo(task)
        setTask("")
    }

  return (
    <div className="input-form">
      <input
        className="input-task"
        placeholder="Enter the todo..."
        type="text"
        value={task}
        maxLength={40}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="btn-hover btn-color"
        type="submit"
        onClick={handleClick}
        disabled={!task}
      >
        Add New Todo
      </button>
    </div>
  )
}

export default InputForm