import "./ToDoRow.css"
import {useToDoDispatch} from "./ToDoContext";
import ToDoRemoveButton from "./ToDoRemoveButton";
import {useState} from "react";

export default function ToDoRow({toDo}) {
    const [text, setText] = useState(toDo.text);
    const [editing, setEditing] = useState(false);
    const [mouseOn, setMouseOn] = useState(false);
    const dispatch = useToDoDispatch();
    let JSXClass = "todo-row";
    JSXClass = toDo.completed ? JSXClass + " completed" : JSXClass;
    return (
        <li className={JSXClass}
            key={toDo.id}
            onClick={() => dispatch({
                type: 'toggle',
                toDo: {...toDo},
            })}
            onDoubleClick={() => setEditing(true)}
            onMouseOver={() => setMouseOn(true)}
            onMouseOut={() => setMouseOn(false)}
        >
            {editing ? (
                <input
                    autoFocus
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter")
                        {
                            dispatch({
                                type: 'todo-changed',
                                toDo: toDo,
                                newText: e.target.value,
                            });
                        setEditing(false);}}}
                    onBlur={(e) => {
                        dispatch({
                            type: 'todo-changed',
                            toDo: toDo,
                            newText: e.target.value,
                        });
                        setEditing(false);}}
                />
            ) : (
                <span>{toDo.text}</span>
            )}
            {mouseOn && <ToDoRemoveButton toDoId={toDo.id}/>}
        </li>
    );
}
