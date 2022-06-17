import React from "react";
import ToDoCard from "../../components/ToDoCard/ToDoCard";
import "./TodoList.scss";

const TodoList = ({todoArray, handleCompleted, handleRemoveItem}) => {
  const todoCardsJSX = todoArray.map((todo, index) => {
    return <ToDoCard key={index} todo={todo} index={index} handleCompleted={handleCompleted} handleRemoveItem={handleRemoveItem} />;
  });

  return <div>{todoCardsJSX}</div>;
};

export default TodoList;
