import React, { Component } from "react";
import { CardGroup, Divider, Header, Segment } from "semantic-ui-react";
import "../styles/pages/Project.scss";

const work = [
  {
    href: "https://cen.acs.org/sections/periodic-table-quiz.html",
    header: "C&EN Periodic Table",
    meta: "American Chemical Society",
    description:
      "A web based game in C&EN featuring the use op Vue.js frontend and Firebase backend.",
    target: "_blank",
  },
  {
    href: "https://support.peta.org/page/22628/donate/1?mode=DEMO&locale=en-US",
    header: "PETA Donor Scroll Concept",
    meta: "4Site Interactive Studios",
    description:
      "A scrolling concept that views the donors name in the donation page.",
    target: "_blank",
  },
  {
    href: "https://github.com/jdelacr/PETA",
    header: "PETA Currency Conversion",
    meta: "4Site Interactive Studios",
    description:
      "A dropdown input that displays the converted currencies. Uses PHP as a backend and Javascript as the frontend.",
    target: "_blank",
  },
];

const projects = [
  {
    href: "https://jdelacr-react-blog.vercel.app/",
    header: "React Blog",
    meta: "React.js",
    description:
      "A website blog using Next.js for the purpose of posting my learning progress of React.js.",
    target: "_blank",
  },
  {
    href: "https://justyn-react-apps.netlify.app/",
    header: "React Applications",
    meta: "React.js",
    description:
      "A React website containing all of the applications I have developed using React.js. Each apps ranges from small to large based project.",
    target: "_blank",
  },
  {
    href: "https://jdelacr.github.io/App-Projects-Vue/",
    header: "Vue Applications",
    meta: "Vue.js",
    description:
      "A Vue.js website containing all of the applications I have developed using Vue.js. Each apps ranges from small to large based project.",
    target: "_blank",
  },
];

export class Projects extends Component {
  render() {
    return (
      /* 
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
      </div> */
      <Segment basic id="Projects">
        <Divider horizontal>
          <Header as="h1" content="Projects" />
        </Divider>
        <Header as="h2" content="Work" textAlign="center" />
        <CardGroup centered items={work} />
        <Header as="h2" content="Projects" textAlign="center" />
        <CardGroup centered items={projects} />
      </Segment>
    );
  }
}

export default Projects;
