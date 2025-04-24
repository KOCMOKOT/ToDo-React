import ToDoList from "./ToDoList";
import ToDoListBar from "./ToDoListBar";
import ToDoAddBar from "./ToDoAddBar";
import {ToDoProvider} from "./ToDoContext";

export default function EditableToDoList({toDoModel}) {
    return (
        <ToDoProvider initialToDoModel={toDoModel}>
            <ToDoAddBar />
            <div className="editable-todo-list">
                <ToDoList />
                <ToDoListBar />
            </div>
        </ToDoProvider>
    );
}
