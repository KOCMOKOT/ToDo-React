import {createContext, useContext, useReducer} from "react";
import {addToDo, changeToDo, clearCompleted, removeToDo, toggleToDo} from "../../model/ToDoModelLogic";

export const ToDoContext = createContext(null);
export const ToDoDispatchContext = createContext(null);

export function useToDoContext() {
    return useContext(ToDoContext);
}

export function useToDoModel() {
    return useToDoContext().toDoModel;
}

export function useToDoListFilter() {
    return useToDoContext().filter;
}

export function useToDoDispatch() {
    return useContext(ToDoDispatchContext);
}

export function ToDoProvider({children, initialToDoModel, initialFilter = "all"}) {
    const [toDoContext, dispatch] = useReducer(
        toDoReducer,
        {
            toDoModel: initialToDoModel,
            filter: initialFilter,
        }
    );


    return (
            <ToDoContext.Provider value={toDoContext}>
                <ToDoDispatchContext.Provider value={dispatch}>
                    {children}
                </ToDoDispatchContext.Provider>
            </ToDoContext.Provider>
    );
}

function toDoReducer(state, action) {
    switch (action.type) {
        case 'added': {
            if (action.text === "")
                return state;
            return {
                ...state,
                toDoModel: addToDo(state.toDoModel, action.text)
            };
        }
        case 'toggle': {
            return {
                ...state,
                toDoModel: toggleToDo(state.toDoModel, action.toDo.id)
            };
        }
        case 'clear-completed': {
            return {
                ...state,
                toDoModel: clearCompleted(state.toDoModel)
            };
        }
        case 'todo_remove': {
            return {
                ...state,
                toDoModel: removeToDo(state.toDoModel, action.toDo.id)
            };
        }
        case 'todo-changed': {
            return {
                ...state,
                toDoModel: changeToDo(state.toDoModel, action.toDo.id, action.newText)
            }
        }
        case 'list-filter-changed': {
            return {
                ...state,
                filter: action.new_filter,
            };
        }
        default: {
            throw Error("unknown action: " + action.type);
        }
    }
}