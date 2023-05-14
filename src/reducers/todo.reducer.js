export default function todoReducer(state, action){
    switch (action.type){
        case "ADD_TODO":{
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    {
                        id: crypto.randomUUID(),
                        content: action.content,
                        edit: false,
                        done: false,
                        selected: false,
                    },
                ],
            };
        }
        case "DELETE_TODO":{
            return {
                ...state,
                todoList: state.todoList.filter(t => t.id !== action.id)
            }
        }
        case "TOGGLE_TODO":{
            return {
                ...state,
                todoList: state.todoList.map(t => t.id === action.id ? {...t, done: !t.done} : {t})
            }
        }
        case "TOGGLE_EDIT_TODO":{
            return {
                ...state,
                todoList: state.todoList.map(t => t.id === action.id ? {...t, edit: !t.edit} : {t})
            }
        }
        case "EDIT_TODO":{
            return {
                ...state,
                todoList: state.todoList.map(t => t.id === action.id ? {...t, content: action.content, edit: false} : {t})
            }
        }
        case "SELECT_TODO":{
            return {
                ...state,
                todoList: state.todoList.map(t => t.id === action.id ? {...t, selected: true} : {...t, selected: false})
            }
        }
        default: {
            throw new Error("Action inconnue");
        }
    }
}