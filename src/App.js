import './App.css';
import AppHeader from './view/AppHeader';
import EditableToDoList from "./view/ToDo/EditableToDoList";
import AppFooter from './view/AppFooter';
import ToDoModel from "./model/ToDoModel";

function App() {
  return (
    <div className="App">
        <AppHeader />
        <EditableToDoList toDoModel={new ToDoModel()} />
        <AppFooter/>
    </div>
  );
}

export default App;
