import React, { Component } from "react";
import Profile from "../assets/Profile.jpg";
import "../styles/pages/Main.scss";
import "../styles/components/button.scss";

export class Header extends React.Component {
  render() {
    return (
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
            <a href="https://www.linkedin.com/in/janjustyn/">
              <button className="btn">
                Connect <span className="btn-text">with me!</span>
                <span className="btn-arr">&rarr;</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export class About extends React.Component {
  render() {
    return (
      <div className="about">
        <h1 className="about--hed">About me</h1>
        <p className="about--info">
          I am a tech savvy person who is excited about technologies. My hobbies
          include building and learning computers, digital drawings, basketball,
          and cars. I graduated in George Mason University in 2020 and earned my
          bachelors in Information Technology.
        </p>
      </div>
    );
  }
}

export class Skills extends React.Component {
  render() {
    return (
      <div className="skill">
        <h1 className="skill--hed">SKILLS</h1>
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
    );
  }
}

export class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <About />
        <Skills />
      </div>
    );
  }
}

export default Main;
