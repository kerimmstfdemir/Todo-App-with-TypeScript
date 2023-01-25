import axios from 'axios';
import { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import TodoList from '../components/TodoList';

const url = "https://63d123e3120b32bbe8f20ce7.mockapi.io/todos"

const Home = () => {
    const [todos, setTodos] = useState<TodoType[]>([])

    const getTodos = async () => {
        try{
            const { data } = await axios.get<TodoType[]>(url)
            console.log(data)
            setTodos(data)
        }catch(error){
            console.log(error);
        }
    }

    const addTodo:AddFunction = async (text) => {
        const newTodo = {
            task: text,
            isDone: false
        }
        try{
            await axios.post(url, newTodo)
            getTodos();
        }catch(error){
            console.log(error);
        }
    }

    const toggleTodo:ToggleFunction = async (item) => {
        try{
            await axios.put(`${url}/${item.id}`, {...item, isDone:!item.isDone})
            getTodos()
        }catch(error){
            console.log(error)
        }
    }

    const deleteTodo:DeleteFunction = async (id) => {
        try{
            await axios.delete(`${url}/${id}`)
            getTodos()
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getTodos();
    }, [])

  return (
    <div className='main'>
      <InputForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default Home