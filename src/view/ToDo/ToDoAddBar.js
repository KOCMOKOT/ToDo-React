import {useToDoDispatch} from "./ToDoContext";
import './ToDoAddBar.css'

export default function ToDoAddBar() {
    const dispatch = useToDoDispatch();

    return (
        <input
            className="todo-add-bar"
            placeholder="What do you want to do?"
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    dispatch({
                        type: "added",
                        text: e.target.value,
                    })
                    e.target.value = "";
                }
            }}
            onBlur={(e) => {
                dispatch({
                    type: "added",
                    text: e.target.value,
                })
                e.target.value = "";
            }}
        />
    );
}