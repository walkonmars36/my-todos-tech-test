import React, {useState} from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import InputBox from "./components/InputBox/InputBox";
import TodoList from "./container/TodoList/TodoList";

function App() {
  const [todoArray, setTodoArray] = useState([]);
  const [showTodo, setShowTodo] = useState(false);

  const handleInput = (event) => {
    event.preventDefault();
    const todoItem = event.target[0].value;
    if (todoItem.length > 0) {
      const newArr = [...todoArray];
      newArr.push(todoItem);
      setTodoArray(newArr);
      setShowTodo(true);
    } else {
      alert("Please enter a todo item!!!");
    }
    event.target[0].value = "";
  };

  const handleReset = () => {
    setTodoArray([]);
  };

  const handleCompleted = (event) => {
    const targetElement = event.target.nextSibling;

    if (!targetElement.classList.contains("lined")) {
      targetElement.classList.add("lined");
    } else {
      targetElement.classList.remove("lined");
    }
  };

  const handleRemoveItem = (event) => {
    const index = event.target.id;
    const newArr = [...todoArray];
    newArr.splice(index, 1);
    setTodoArray(newArr);
  };

  return (
    <div className="App">
      <Header handleReset={handleReset} />
      <InputBox handleInput={handleInput} />
      {showTodo ? <TodoList todoArray={todoArray} handleCompleted={handleCompleted} handleRemoveItem={handleRemoveItem} /> : <h3>Sorry there aren't any todos yet</h3>}
    </div>
  );
}

export default App;
