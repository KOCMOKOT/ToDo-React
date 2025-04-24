import "./ToDoListBar.css"
import ToDoListBarFilterButtons from "./ToDoListBarFilterButtons";
import {useToDoDispatch, useToDoModel} from "./ToDoContext";

export default function ToDoListBar() {
    const toDoModel = useToDoModel();
    const dispatch = useToDoDispatch();
    let className = "todo-list-bar";
    className = toDoModel.isEmpty() ? className + " hidden" : className;

    return (
      <div className={className}>
          <span className="todo-list-bar-counter">Count of tasks: {toDoModel.getCountActiveToDo()}</span>
          <ToDoListBarFilterButtons />
          <button className=""
          onClick={() => dispatch({
              type: "clear-completed",
          })}>Clear completed</button>
      </div>
    );
}
