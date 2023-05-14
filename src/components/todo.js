export default function Todo({todo, deleteTodo, toggleDoneTodo, toggleEditTodo, selectTodo}){
    return(
        <>
            <li
                onClick={selectTodo}
                className={`flex items-center content-center p-2 border border-orange-400 my-2 rounded drop-shadow transition duration-300 ${todo.done && 'bg-green-300 dark:bg-green-900'} ${todo.selected && 'bg-yellow-200 dark:bg-yellow-600'}`}>
                <div className="flex-1 font-bold">
                    {todo.content}
                </div>
                <button onClick={(e) => {e.stopPropagation(); toggleEditTodo()}} className="p-2 hover:text-orange-500"><i className="fa-solid fa-pen-to-square"></i></button>
                <button onClick={(e) => {e.stopPropagation(); toggleDoneTodo()}} className="p-2 hover:text-green-600"><i className="fa-solid fa-square-check"></i></button>
                <button onClick={(e) => {e.stopPropagation(); deleteTodo()}} className="p-2 hover:text-red-600"><i className="fa-solid fa-trash"></i></button>
            </li>
        </>
    )
}