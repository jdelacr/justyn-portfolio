import React, { Component } from "react";
import Card from "../components/Card";

export class Projects extends Component {
  render() {
    return (
      <div>
        <Card image="periodic_element" title="Periodic Table" />
        <div>
          <div className="card">
            <div className="card--body">
              <div className="card--thumbnail">Project Thumbnail</div>
              <h1 className="card--hed">React</h1>
              <div className="card--info"></div>
            </div>
          </div>
          <div className="card">
            <div className="card--body">
              <div className="card--thumbnail">Project Thumbnail</div>
              <h1 className="card--hed">Vue</h1>
              <div className="card--info"></div>
            </div>
          </div>
          <div className="card">
            <div className="card--body">
              <div className="card--thumbnail">Project Thumbnail</div>
              <h1 className="card--hed">PHP</h1>
              <div className="card--info"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
