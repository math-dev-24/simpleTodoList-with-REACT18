import {useContext} from "react";
import {todoDispatcherContext} from "../context/todo.context";

export default function Todo({todo}){
    const dispatch = useContext(todoDispatcherContext)

    return(
        <>
            <li
                onClick={(e) => {dispatch({type: "SELECT_TODO",id: todo.id})}}
                className={`flex items-center content-center p-2 border border-orange-400 my-2 rounded drop-shadow transition duration-300 ${todo.done && 'bg-green-300 dark:bg-green-900'} ${todo.selected && 'bg-yellow-200 dark:bg-yellow-600'}`}>
                <div className="flex-1 font-bold">
                    {todo.content}
                </div>
                <button onClick={(e) => {e.stopPropagation();
                    dispatch({type: 'TOGGLE_EDIT_TODO',id: todo.id})}}
                        className="p-2 hover:text-orange-500"><i className="fa-solid fa-pen-to-square"></i></button>
                <button onClick={(e) => {e.stopPropagation();
                    dispatch({type: 'TOGGLE_TODO',id: todo.id})}}
                        className="p-2 hover:text-green-600"><i className="fa-solid fa-square-check"></i></button>
                <button
                    onClick={(e) => {e.stopPropagation();
                        dispatch({type: "DELETE_TODO",id: todo.id})}}
                    className="p-2 hover:text-red-600"><i className="fa-solid fa-trash"></i></button>
            </li>
        </>
    )
}