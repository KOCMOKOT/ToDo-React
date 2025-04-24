import "./ToDoListBarFilterButtons.css"
import {useToDoDispatch, useToDoListFilter} from "./ToDoContext";

export default function ToDoListBarFilterButtons() {
    const toDoFilter = useToDoListFilter();
    const dispatch = useToDoDispatch();

    return (
        <div className="todo-list-bar-filter-buttons">
            <button className={toDoFilter === "all" && "chosen"}
                    value="all"
                    onClick={(e) => {dispatch({
                        type: "list-filter-changed",
                        new_filter: e.target.value,
                    })}}>
                All
            </button>
            <span> | </span>
            <button className={toDoFilter === "completed" && "chosen"}
                    value="completed"
                    onClick={(e) => {dispatch({
                        type: "list-filter-changed",
                        new_filter: e.target.value,
                    })}}>
                Completed
            </button>
            <span> | </span>
            <button className={toDoFilter === "active" && "chosen"}
                    value="active"
                    onClick={(e) => {dispatch({
                        type: "list-filter-changed",
                        new_filter: e.target.value,
                    })}}>
                Active
            </button>
        </div>
    );
}