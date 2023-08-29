import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  // const { items = [] } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

const item = [
  {
    id: 'e1',
    title: 'Mock Todo',
    date: "23-08-2023"
  }
]

  return (
    <ul>
      {items.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
