import MainPage from "../pages/MainPage";
import TodoPage from "../pages/TodoPage";

export const routes = [
  { path: "/", element: <MainPage /> },
  { path: "/todo", element: <TodoPage /> },
];
