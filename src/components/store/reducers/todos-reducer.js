import { TODOS_ACTIONS_TYPE } from "../actions/todo-actions";

const initialState = {
  items: [
    {
      title: "Static Todo",
      id: "someId",
      date: "23-08-2023",
      completed: false,
    },
  ],
  test: "Hello from Todos reducer!",
};

export const todosReducer = (state = initialState, action) => {
  if (action.type === TODOS_ACTIONS_TYPE.GET_TODOS_SUCCESS) {
    const transformedTodos = Object.entries(action.payload).map(
      ([key, todo]) => {
        return { ...todo, id: key };
      }
    );

    return {
      ...state,
      items: transformedTodos,
    };
  }
  if (action.type === "UPDATE_TODO") {
    const transformedTodos = state.items.map((todo) => {
      if (todo.id === action.payload.id) {
        todo.title = action.payload.title;
      }
      return todo;
    });
    return {
      ...state,
      items: transformedTodos,
    };
  }
  return state;
};
