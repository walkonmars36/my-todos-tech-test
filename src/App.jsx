import React, {useState} from "react";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {};

  return (
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Complete</button>
    </>
  );
};

export default App;
