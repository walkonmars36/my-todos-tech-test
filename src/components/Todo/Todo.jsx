import React from "react";

const Todo = ({todo, setTodo, addTodo}) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} />
        {todo.name}
      </label>
    </div>
  );
};

export default Todo;
