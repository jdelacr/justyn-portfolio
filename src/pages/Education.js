import React, { Component } from "react";
import "../styles/pages/Education.scss";
import GMU from "../assets/George_Mason_University_logo.svg";
import NOVA from "../assets/Northern_Virginia_Community_College_logo.svg";

export class Education extends Component {
  render() {
    return (
      <div className="education">
        <div className="gmu">
          <div className="gmu--logo">
            <img src={GMU} alt="gmu--logo" className="gmu--img" />
          </div>
          <div className="gmu--info">
            <div className="gmu--text">
              <h1>George Mason University</h1>
              <h2>Information Technology</h2>
              <h3>Bachelors of Science</h3>
              <h4>2017-2020</h4>
            </div>
            <div className="gmu--website">
              <a
                href="https://www2.gmu.edu/"
                className="gmu--link"
                target="_blank"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>
        <div className="nova">
          <div className="nova--logo">
            <img src={NOVA} alt="gmu--logo" className="nova--img" />
          </div>
          <div className="nova--info">
            <div className="nova--text">
              <h1>Northern Virginia Community College</h1>
              <h2>Applied Computer Science</h2>
              <h3>Associates</h3>
              <h4>2013-2016</h4>
            </div>
            <div className="nova--website">
              <a
                href="https://www.nvcc.edu/"
                className="nova--link"
                target="_blank"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
