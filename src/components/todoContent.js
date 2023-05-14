import SwitchMode from "./switchMode";
import AddTodo from "./addTodo";
import TodoList from "./todoList";

export default function TodoContent(){

    return(
        <div className="card p-10 bg-slate-200 dark:bg-slate-900 dark:text-white">
            <div className="container m-auto bg-white dark:bg-slate-700 p-5 rounded-xl drop-shadow">
                <SwitchMode />
                <h1 className="text-2xl text-center font-bold p-10">Todolist</h1>
                <AddTodo />
                <TodoList/>
            </div>
        </div>
    )
}