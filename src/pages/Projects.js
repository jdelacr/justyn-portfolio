import React, { Component } from "react";
import Card from "../components/Card";
import "../styles/pages/Project.scss";

export class Projects extends Component {
  render() {
    return (
      <div className="project">
        <h1>Work Projects</h1>
        <div className="project--work">
          <Card image="periodic_element" title="Periodic Table" />
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
