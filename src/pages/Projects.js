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
            preview="https://cen.acs.org/sections/periodic-table-quiz.html"
          />
          <Card
            title="Donor Scroll Concept"
            info="A concept that scrolls through the list of donators on the donation page of PETA."
            preview="https://support.peta.org/page/22628/donate/1?mode=DEMO&locale=en-US"
          />
          <Card
            title="PETA Currency Conversion"
            info="A feature that caches the daily rates for currency using PHP and JQuery to append the dropdown and information box in the donation page."
            code="https://github.com/jdelacr/PETA"
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
            preview="https://jdelacr.github.io/App-Projects-Vue/"
            code="https://github.com/jdelacr/App-Projects-Vue"
          />
        </div>
      </div>
    );
  }
}

export default Projects;
