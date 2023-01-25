interface TodoType {
    id: string | number;
    task: string;
    isDone: boolean;
}

interface ITodoList {
    todos: TodoType[]
}

interface IlistItem {
    item: TodoType
}

type AddFunction = (text:string) => void;