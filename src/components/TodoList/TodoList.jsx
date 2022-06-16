import React from "react";

const TodoList = ({todos, deleteTodo}) => {
  return (
    <div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <div className="todo">
            <li key={index}> {todo} </li>

            <button className="delete-button" onClick={deleteTodo}>
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
