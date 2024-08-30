import { useState } from "react";
import { Todo } from "./todo";
  
interface Props {
    todo: Todo,
    countTodo: Function
    removeTodo: Function,
}

export default function TodoTask({todo, removeTodo, countTodo}: Props){
    const [complete, setComplete] = useState<boolean>(todo.completed);
// toggle checked unchecked
    const toggleCompleteTodo = () => {
        setComplete(!complete);
        todo.completed = !todo.completed;
            countTodo(todo);
    }

    return (
        <li className="list">
            <input type="checkbox" onClick={toggleCompleteTodo}/>
            <p className={[ complete ? 'checked' : ''].join(' ')}>{todo.description}</p>
             <button type="button" onClick={()=>{removeTodo(todo)}}>Remove</button>

        </li>
    )
}
  