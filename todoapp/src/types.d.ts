interface TodoType {
    id: string | number;
    task: string;
    isDone: boolean;
}

interface ITodoList {
    todos: TodoType[]
    toggleTodo:ToggleFunction
}

interface IlistItem {
    item: TodoType
    toggleTodo: ToggleFunction
}

type AddFunction = (text:string) => void;

type ToggleFunction = (item:TodoType) => void;