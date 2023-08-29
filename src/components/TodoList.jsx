import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodosThunk } from "./store/actions/todo-actions";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {

  const { items = [] } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosThunk());
  }, []);

  
  return (
    <>
      <h2 style={{textAlign: 'center', color: 'purple'}}>All: {items.length}</h2>
      {/* <h2 style={{textAlign: 'center', color: 'green'}}>Completed: </h2>
      <h2 style={{textAlign: 'center', color: 'red'}}>Uncompleted: </h2> */}
      <ul style={{marginLeft: '370px'}}>
        {items.map((todo) => (
          <TodoItem key={todo.id} {...todo}/>
        ))}
      </ul>
    </>
  );
};
