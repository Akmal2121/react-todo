import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeToDoAction } from "../store/todoReducer";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();
  const deleteTodo = (elem) => {
    dispatch(removeToDoAction(elem));
  };
  const [checkbox, setCheckbox] = useState(todo.completed);
  return (
    <li className="li-todo">
      <p>id:{index}</p>
      <p>Text:{todo.title}</p>
      <input
        type="checkbox"
        checked={checkbox}
        onChange={() => setCheckbox(!checkbox)}
      />
      <button onClick={() => deleteTodo(todo)}>Удалить</button>
    </li>
  );
};

export default TodoItem;
