import React, { Component } from "react";
import Card from "../components/Card";
import "../styles/pages/Project.scss";

export class Projects extends Component {
  render() {
    return (
      <div className="project">
        <h1>Work Projects</h1>
        <div className="project--work">
          <Card
            image="periodic_element"
            title="Periodic Table"
            info="A web based game in C&EN featuring the use of Vue.js and Firebase."
          />
          <Card
            title="Donor Scroll Concept"
            info="A concept that scrolls through the list of donators on the donation page of PETA."
          />
          <Card
            title="PETA Currency Conversion"
            info="A feature that caches the daily rates for currency using PHP and JQuery to append the dropdown and information box in the donation page."
          />
        </div>
        <h1>Learning Projects</h1>
        <div className="project--learning">
          <Card
            title="React"
            info="Lists of large/small projects on learning React.js"
          />
          <Card
            title="Vue"
            info="Lists of large/small projects on learning Vue.js"
          />
          <Card title="PHP" info="Lists of large/small projects on PHP" />
        </div>
      </div>
    );
  }
}

export default Projects;
