import React, { Component } from "react";
import "../styles/pages/Experience.scss";

export class Experience extends Component {
  render() {
    return (
      <div className="experience">
        <div className="experience-item experience-align--right">
          <div className="experience-custom"></div>
          <div className="experience-date">
            <p>Date</p>
          </div>
          <div className="experience-info">
            <div>
              <h1>4Site Interactive Studios</h1>
              <h3>Junior Web Developer</h3>
              <h4>Jul 2020 - Oct 2020</h4>
            </div>
            <div>
              <ul className="experience-info--list">
                <li className="experience-info--list--item">
                  Developed resposnive website themes for nonprofit clients
                  using Wordpress and Drupal.
                </li>
                <li className="experience-info--list--item">
                  Create and maintain code documentaion and technical.
                  specifications
                </li>
                <li className="experience-info--list--item">
                  Collaborated with the internal creative and technical teams.
                </li>
                <li className="experience-info--list--item">
                  Record effort and progress in 3rd party project management
                  tools.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="experience-item experience-align--left">
          <div className="experience-custom"></div>
          <div className="experience-date">
            <p>Date</p>
          </div>
          <div className="experience-info">
            <div>
              <h1>American Chemical Society</h1>
              <h3>Web Design Intern</h3>
              <h4>May 2019 - Aug 2019</h4>
            </div>
            <div>
              <ul className="experience-info--list">
                <li className="experience-info--list--item">
                  Collaborated with web deisgners and developers to refine and
                  the user experience for C&EN Readers.
                </li>
                <li className="experience-info--list--item">
                  Developed wireframes, mocups, and preliminary web deisgns taht
                  can be reviewed by editors and designers.
                </li>
                <li className="experience-info--list--item">
                  Aligned the design direction and improve the page load times
                  of the C&EN content online.
                </li>
                <li className="experience-info--list--item">
                  Developed and tested periodic table element quiz for
                  International Year of the Periodic Table.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
