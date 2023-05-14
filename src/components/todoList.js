import Todo from "./todo";
import EditTodo from "./editTodo";
import {useContext} from "react";
import {todoStateContext} from "../context/todo.context";

export default function TodoList(){

    const state = useContext(todoStateContext)
    return state.todoList.length ? (
        <ul>
            {state.todoList.map((todo) =>
                todo.edit ? (
                    <EditTodo key={todo.id} todo={todo} />
                ) : (
                    <Todo key={todo.id} todo={todo} />
                )
            )}
        </ul>
    ) : (
        <p>Aucune tâche en cours </p>
    );
}