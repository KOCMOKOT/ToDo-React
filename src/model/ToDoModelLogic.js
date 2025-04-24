import ToDoModel from "./ToDoModel";

export function addToDo(model, text) {
    const newToDo = {id: Date.now(), text: text, completed: false};
    const updatedList = [...model.getToDos(), newToDo];
    return new ToDoModel(updatedList);
}

export function toggleToDo(model, id) {
    const updatedList = model.getToDos().map((todo) =>
    todo.id === id ? {...todo, completed: !todo.completed} : todo);
    return new ToDoModel(updatedList);
}

export function clearCompleted(model) {
    const updatedList = model.getToDos().filter(todo => !todo.completed);
    return new ToDoModel(updatedList);
}

export function removeToDo(model, id) {
    const updatedList = model.getToDos().filter(todo => todo.id !== id);
    return new ToDoModel(updatedList);
}

export function changeToDo(model, id, text) {
    let toDoList = model.getToDos();
    toDoList.find(todo => todo.id === id).text = text;
    return new ToDoModel(toDoList);
}