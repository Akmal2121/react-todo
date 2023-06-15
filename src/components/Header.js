import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <ul>
        <Link to="/">
          <li>Main</li>
        </Link>
        <Link to="todo">
          <li>Todo</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
