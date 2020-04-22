import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Students</h1>
    <div>
      <NavLink to="/" activeClassName="is-active" exact={true}>
        All Students
      </NavLink>
    </div>
    <div>
      <NavLink color="blue" to="/create" activeClassName="is-active">
        Create Student
      </NavLink>
    </div>
  </header>
);

export default Header;
