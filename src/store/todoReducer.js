const ADDTODO = "ADDTODO";
const REMOVETODO = "REMOVETODO";
const GETTODOS = "GETTODOS";
const defaultState = {
  todos: [],
};
export const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADDTODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVETODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload.id;
        }),
      };
    case GETTODOS:
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };
    default:
      return state;
  }
};

export const addToDoAction = (payload) => {
  return {
    type: ADDTODO,
    payload,
  };
};
export const removeToDoAction = (payload) => {
  return {
    type: REMOVETODO,
    payload,
  };
};
export const getToDoAction = (payload) => {
  return {
    type: GETTODOS,
    payload,
  };
};
