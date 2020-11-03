import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/navigation.scss";

export class navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li className="nav-list">
            <NavLink to="/" className="nav-list__item">
              Home
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/Education" className="nav-list__item">
              Education
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/Experience" className="nav-list__item">
              Experience
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/Projects" className="nav-list__item">
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default navigation;
