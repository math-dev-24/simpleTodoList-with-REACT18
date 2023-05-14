import {useContext, useState} from "react";
import {todoDispatcherContext} from "../context/todo.context";

export default function AddTodo(){
    const [value, setValue] = useState('')
    const dispatch = useContext(todoDispatcherContext)

    function updateValue(e){
        const inpValue = e.target.value
        setValue(inpValue)
    }

    function handleKeyDown(e){
        if (e.key === 'Enter' && value.length){
            dispatch({
                type: "ADD_TODO",
                content: value
            })
        }
    }
    function handleClick(){
        dispatch({
            type: "ADD_TODO",
            content: value
        })
    }

    return(
        <div className="flex flex-col content-center items-center mb-20">
            <input onKeyDown={handleKeyDown} onInput={updateValue} type="text" placeholder="Ajouter une toto" className="p-2 border-orange-600 dark:text-black dark:bg-slate-200 border outline-0 w-2/4 m-auto rounded"/>
            <button onClick={handleClick} className="m-2 p-2 px-10 rounded bg-orange-600 dark:bg-orange-700 hover:dark:bg-orange-600 text-white hover:scale-x-110 transition duration-300 hover:drop-shadow-lg">Ajouter</button>
        </div>
    )
}