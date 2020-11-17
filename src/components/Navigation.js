import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../styles/components/navigation.scss";
import Home from "@material-ui/icons/Home";
import BusinessIcon from "@material-ui/icons/Business";
import gradudationCap from "@iconify-icons/zmdi/graduation-cap";
import Assignment from "@material-ui/icons/Assignment";

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
              <Home className="nav-list--icon" />
              Home
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink
              to="/Education"
              className="nav-list--item"
              activeClassName="nav-list--active"
            >
              <Icon icon={gradudationCap} className="nav-list--icon" />{" "}
              Education
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink
              to="/Experience"
              className="nav-list--item"
              activeClassName="nav-list--active"
            >
              <BusinessIcon className="nav-list--icon" /> Experience
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink
              to="/Projects"
              className="nav-list--item"
              activeClassName="nav-list--active"
            >
              <Assignment className="nav-list--icon" /> Projects
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default navigation;
