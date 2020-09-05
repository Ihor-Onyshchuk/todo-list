import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({isAuth}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow mb-4 pl-3 py-1">
      <NavLink to="/">
         <h1>ToDo list</h1>
      </NavLink>
      {isAuth ? (
        <NavLink to="/logout" className="tasksLink">
          Logout
        </NavLink>
      ) : (
        <div className="navbar-nav ml-auto mr-5">
          <NavLink to="/sign-in" className="btn btn-outline-secondary ml-2" role="button">
              Signin
          </NavLink>
          <NavLink to="/sign-up" className="btn btn-outline-secondary ml-2" role="button">
              Signup
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Nav;