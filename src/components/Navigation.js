import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/navigation.scss";

export class navigation extends Component {
  render() {
    return (
      <nav>
        <ul className="nav">
          <li className="nav-list">
            <NavLink
              to="/"
              className="nav-list--item"
              activeClassName="nav-list--home"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink
              to="/Education"
              className="nav-list--item"
              activeClassName="nav-list--active"
            >
              Education
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink
              to="/Experience"
              className="nav-list--item"
              activeClassName="nav-list--active"
            >
              Experience
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink
              to="/Projects"
              className="nav-list--item"
              activeClassName="nav-list--active"
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default navigation;
