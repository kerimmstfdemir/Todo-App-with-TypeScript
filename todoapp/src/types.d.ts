interface TodoType {
    id: string | number;
    task: string;
    isDone: boolean;
}

interface ITodoList {
    todos: TodoType[]
    toggleTodo: ToggleFunction
    deleteTodo: DeleteFunction
}

interface IlistItem {
    item: TodoType
    toggleTodo: ToggleFunction
    deleteTodo: DeleteFunction
}

type AddFunction = (text:string) => void;

type ToggleFunction = (item:TodoType) => void;

type DeleteFunction = (id: string | number) => void