import React from "react";

const Todo = ({todo}) => {
  return (
    <div>
      <label htmlFor="">
        <input type="checkbox" checked={todo} />
        {todo.name}
      </label>
    </div>
  );
};

export default Todo;
