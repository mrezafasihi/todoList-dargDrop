import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="min-h-screen bg-blue-600 flex  flex-col px-[20%] py-[2%]">
      <TodoList />
    </div>
  );
}

export default App;
