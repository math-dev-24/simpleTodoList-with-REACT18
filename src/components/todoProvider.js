import {todoDispatcherContext, todoStateContext} from "../context/todo.context";
import todoReducer from "../reducers/todo.reducer";
import {useReducer} from "react";

export default function TodoProvider({children}){

    const [state, dispatch] = useReducer(todoReducer, {todoList :[]})

    return(
        <todoStateContext.Provider value={state}>
            <todoDispatcherContext.Provider value={dispatch}>
                {children}
            </todoDispatcherContext.Provider>
        </todoStateContext.Provider>
    )
}