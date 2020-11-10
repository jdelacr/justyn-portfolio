import React, { Component } from "react";
import Profile from "../assets/Profile.jpg";
import "../styles/pages/Main.scss";

export class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="header">
          <div className="profile">
            <img src={Profile} className="profile__img" alt="Profile" />
          </div>
          <div>
            <h2>Hi, my name is Jan Justyn</h2>
            <h1>Building websites is my passion</h1>
            <h3>
              A Frontend Developer in VA.
              <br /> I specialize in UI/UX Development, Responsive Web
              Design,&nbsp;
              <wbr />
              and Web development
            </h3>
            <div>
              <button>Connect with me!</button>
            </div>
          </div>
        </div>
        <div className="skill">
          <h1>SKILLS</h1>
          <ul className="skill--list">
            <li className="skill--list--item">HTML</li>
            <li className="skill--list--item">CSS</li>
            <li className="skill--list--item">Javascript</li>
            <li className="skill--list--item">PHP</li>
            <li className="skill--list--item">React.js</li>
            <li className="skill--list--item">Vue.js</li>
            <li className="skill--list--item">JQuery</li>
            <li className="skill--list--item">Wordpress</li>
            <li className="skill--list--item">Node.js</li>
            <li className="skill--list--item">Bootstrap</li>
            <li className="skill--list--item">Git</li>
            <li className="skill--list--item">Github</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Main;
