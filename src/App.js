import TodoProvider from "./components/todoProvider";
import TodoContent from "./components/todoContent";

export default function App() {

    return (
        <TodoProvider>
            <TodoContent />
        </TodoProvider>

    );
}
