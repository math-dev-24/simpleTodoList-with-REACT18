import {useState} from "react";

export default function EditTodo({todo, editTodoById}){

    const [editTodo, setEditTodo] = useState(todo.content)

    function handlerEdit(e) {
        setEditTodo(e.target.value)
    }
    return(
        <div className="flex p-2 border border-orange-400 my-2 rounded drop-shadow">
            <input className="outline-0 border border-slate-600 p-1 rounded dark:bg-slate-500" onInput={handlerEdit} type="text" value={editTodo}/>
            <button className="border p-1 rounded border-green-600 bg-green-600 text-white hover:text-green-600 hover:bg-white dark:hover:bg-slate-700 transition duration-300 m-2" onClick={() => editTodoById(editTodo)}>Valider</button>
            <button className="border p-1 rounded border-orange-500 m-2 text-orange-500 hover:text-white hover:bg-orange-600 transition duration-300" onClick={() => editTodoById(todo.content)}>Annuler</button>
        </div>
    )
}