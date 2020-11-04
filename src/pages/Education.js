import React, { Component } from "react";
import "../styles/pages/Education.scss";
import GMU from "../assets/George_Mason_University_logo.svg";
import NOVA from "../assets/Northern_Virginia_Community_College_logo.svg";

export class Education extends Component {
  render() {
    return (
      <div className="education">
        <div className="gmu">
          <div className="gmu__info">
            <h1>George Mason University</h1>
            <h2>Information Technology</h2>
            <h3>Bachelors of Science</h3>
            <h4>2017-2020</h4>
          </div>
          <div className="gmu__logo">
            <img src={GMU} alt="GMU_logo" className="gmu__img" />
          </div>
        </div>
        <div className="nova">
          <div className="nova__logo">
            <img src={NOVA} alt="NOVA_logo" className="nova__img" />
          </div>
          <div className="nova__info">
            <h1>Northern Virginia Community College</h1>
            <h2>Applied Computer Science</h2>
            <h3>Associates</h3>
            <h4>2013-2016</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
