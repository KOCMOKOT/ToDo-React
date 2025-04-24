import {useToDoDispatch} from "./ToDoContext";
import "./ToDoRemoveButton.css"

export default function ToDoRemoveButton({toDoId}) {
    const dispatch = useToDoDispatch();
    return(
        <button className="todo-remove-button"
                onClick={() => {
                    dispatch({
                        type: 'todo_remove',
                        toDo: {id: toDoId},
                    })
                }}
        >X</button>
    );
}
