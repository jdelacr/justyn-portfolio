import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Layout from "./Layout/Layout";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Main from "./pages/Main";
import Projects from "./pages/Projects";

export class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/education" component={Education} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
