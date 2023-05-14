import Todo from "./todo";
import EditTodo from "./editTodo";

export default function TodoList({todoList, deleteTodo, toggleDoneTodo, toggleEditTodo, editTodoById, selectTodo}){
    return(
        <>
            <h3 className="text-2xl font-bold">TodoList</h3>
            {
                todoList.length ?
                    (<ul>
                        {todoList.map(todo =>
                            todo.edit ?
                                (<EditTodo key={todo.id} todo={todo} editTodoById={(content) => editTodoById(todo.id, content)} />)
                            :
                            <Todo key={todo.id}
                                  todo={todo}
                                  selectTodo={() => selectTodo(todo.id)}
                                  deleteTodo={() => deleteTodo(todo.id)}
                                  toggleDoneTodo={() => toggleDoneTodo(todo.id)}
                                  toggleEditTodo={() => toggleEditTodo(todo.id)}
                            />)
                        }
                    </ul>)
                    : (<p>Aucune todo pour le moment</p>)
            }
        </>
    )
}