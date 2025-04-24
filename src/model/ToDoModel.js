export default class ToDoModel {
    constructor(toDoList = []) {
        this.toDoList = toDoList;
    }

    getToDos() {
        return this.toDoList;
    }

    getCopy() {
        return new ToDoModel(this.getToDos());
    }

    //Filters for todo list all/completed/active
    getFilterdToDos(filter) {
        if (filter === "all")
            return this.toDoList;

        if (filter === "completed")
            return this.toDoList.filter(element => element.completed === true)


        if (filter === "active")
            return this.toDoList.filter(element => element.completed === false)
    }

    isEmpty() {
        return this.toDoList.length === 0;
    }

    getCountActiveToDo() {
        let count = 0;
        this.toDoList.forEach(item => !item.completed ? count++ : count);
        return count;
    }

    getCountCompletedToDo() {
        let count = 0;
        this.toDoList.forEach(item => item.completed ? count++ : count);
        return count;
    }

}