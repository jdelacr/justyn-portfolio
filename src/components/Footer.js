import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/footer.scss";

export class footer extends Component {
  render() {
    return (
      <footer>
        <div></div>
        <div>
          {" "}
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Education">Education</NavLink>
            </li>
            <li>
              <NavLink to="/Experience">Experience</NavLink>
            </li>
            <li>
              <NavLink to="/Projects">Projects</NavLink>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default footer;
