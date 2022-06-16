import {useState} from "react";
import "./App.scss";
import Todo from "./components/Todo/Todo";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>My Todos</h1>
      <Todo todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList todos={todos} remove={deleteTodo} />
    </div>
  );
};

export default App;
