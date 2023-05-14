import AddTodo from "./components/addTodo";
import TodoList from "./components/todoList";
import {useReducer} from "react";
import SwitchMode from "./components/switchMode";
import todoReducer from "./reducers/todo.reducer";
import {todoDispatcherContext, todoStateContext} from "./context/todo.context";


export default function App() {
    const [state, dispatch] = useReducer(todoReducer, {todoList :[]})

    return (
            <todoStateContext.Provider value={state}>
            <todoDispatcherContext.Provider value={dispatch}>
                <div className="card p-10 bg-slate-200 dark:bg-slate-900 dark:text-white">
                    <div className="container m-auto bg-white dark:bg-slate-700 p-5 rounded-xl drop-shadow">
                        <SwitchMode />
                        <h1 className="text-2xl text-center font-bold p-10">Todolist</h1>
                        <AddTodo />
                        <TodoList/>
                    </div>
                </div>
            </todoDispatcherContext.Provider>
            </todoStateContext.Provider>
    );
}
