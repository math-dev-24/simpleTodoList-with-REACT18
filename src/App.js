import AddTodo from "./components/addTodo";
import TodoList from "./components/todoList";
import {useReducer} from "react";
import SwitchMode from "./components/switchMode";
import todoReducer from "./reducers/todo.reducer";


export default function App() {
    const [state, dispatch] = useReducer(todoReducer, {todoList :[]})

    function addTodo(content){
        dispatch({
            type: "ADD_TODO",
            content
        })
    }
    function deleteTodo(id){
        dispatch({
            type: "DELETE_TODO",
            id
        })
    }
    function toggleDoneTodo(id){
        dispatch({
            type: 'TOGGLE_TODO',
            id
        })
    }
    function toggleEditTodo(id){
        dispatch({
            type: 'TOGGLE_EDIT_TODO',
            id
        })
    }
    function editTodoById(id, content){
        dispatch({
            type: 'EDIT_TODO',
            id,
            content
        })
    }
    function selectTodoList(id){
        dispatch({
            type: 'SELECT_TODO',
            id
        })
    }

    return (
        <>
            <div className="card p-10 bg-slate-200 dark:bg-slate-900 dark:text-white">
                <div className="container m-auto bg-white dark:bg-slate-700 p-5 rounded-xl drop-shadow">
                    <SwitchMode />
                    <h1 className="text-2xl text-center font-bold p-10">Todolist</h1>
                    <AddTodo addTodo={addTodo}/>
                    <TodoList todoList={state.todoList}
                              deleteTodo={deleteTodo}
                              toggleDoneTodo={toggleDoneTodo}
                              toggleEditTodo={toggleEditTodo}
                              editTodoById={editTodoById}
                              selectTodo={selectTodoList}/>
                </div>
            </div>
        </>
    );
}
