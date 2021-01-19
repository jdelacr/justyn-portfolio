import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Main from "../pages/Main";
import Experience from "../pages/Experience";
import Education from "../pages/Education";
import Projects from "../pages/Projects";

function Layout() {
  return (
    <>
      <Navigation />
      <Main />
      <Experience />
      <Projects />
      <Education />
      <Footer />
    </>
  );
}

export default Layout;
