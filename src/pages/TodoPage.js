import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { url } from "../API/Api";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";
import { getToDoAction } from "../store/todoReducer";

const TodoPage = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    dispatch(getToDoAction(data));
    console.log(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Страница задач</h1>
      <ToDoForm />
      <ToDoList todos={todos} />
    </div>
  );
};

export default TodoPage;
