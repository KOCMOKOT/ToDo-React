import "./ToDoList.css"
import ToDoRow from "./ToDoRow";
import {useToDoListFilter, useToDoModel} from "./ToDoContext";

export default function ToDoList() {
    const toDoModel = useToDoModel();
    const listFilter = useToDoListFilter();

    let toDoListElements = toDoModel.getFilterdToDos(listFilter).map((element) =>
        <ToDoRow toDo={element}/>
    );

    return (
        <ul className="todo-list">
            {toDoListElements}
        </ul>
    );
}
