import React from "react";

const Todo = ({todo, setTodo, addTodo}) => {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        name="todo"
        value={todo}
        placeholder="Add your task here"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button className="add-button" onClick={addTodo}>
        Add
      </button>
    </div>
  );
};

export default Todo;
