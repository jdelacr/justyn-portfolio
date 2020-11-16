import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/footer.scss";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";

export class footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-logo">
          <div>
            <Logo fill="white" />
          </div>
        </div>
        <div className="footer-nav">
          <h1 className="footer-nav--hed">Sitemap</h1>
          <ul className="footer-list">
            <li className="footer-list--item">
              <NavLink to="/" className="footer-list--link">
                Home
              </NavLink>
            </li>
            <li className="footer-list--item">
              <NavLink to="/Education" className="footer-list--link">
                Education
              </NavLink>
            </li>
            <li className="footer-list--item">
              <NavLink to="/Experience" className="footer-list--link">
                Experience
              </NavLink>
            </li>
            <li className="footer-list--item">
              <NavLink to="/Projects" className="footer-list--link">
                Projects
              </NavLink>
            </li>
          </ul>
          <div className="footer-social">
            <ul className="footer-social-list">
              <li className="footer-social-list--item">
                <a href="https://www.linkedin.com/in/janjustyn/">
                  <LinkedInIcon className="footer-social--icon" />
                </a>
              </li>
              <li className="footer-social-list--item">
                <a href="mailto:delacruz.janjustyn@gmail.com">
                  <EmailIcon className="footer-social--icon" />
                </a>
              </li>
              <li className="footer-social-list--item">
                <a href="https://github.com/jdelacr">
                  <GitHubIcon className="footer-social--icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default footer;
