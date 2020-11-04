import React, { Component } from "react";
import Profile from "../assets/Profile.jpg";
import "../styles/pages/Main.scss";

export class Main extends Component {
  render() {
    return (
      <div>
        <div className="profile">
          <img src={Profile} className="profile__img" alt="Profile" />
        </div>
        <div>
          <h2>Hi, my name's Jan Justyn</h2>
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
    );
  }
}

export default Main;
