import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Main from "./pages/Main";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Nav from "./components/Navigation";
import Footer from "./components/Footer";

export class Pages extends Component {
  render() {
    return (
      <Router>
        <Nav />

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/Education">
            <Education />
          </Route>
          <Route exact path="/Experience">
            <Experience />
          </Route>
          <Route exact path="/Projects">
            <Projects />
          </Route>
        </Switch>

        <Footer />
      </Router>
    );
  }
}

export default Pages;
