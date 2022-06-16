import {useState} from "react";
import "./App.scss";
import Todo from "./components/Todo/Todo";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  return (
    <>
      <TodoList />
      <input type="text" />
      <button>Add todo</button>
      <button>clear</button>
    </>
  );
};

export default App;
