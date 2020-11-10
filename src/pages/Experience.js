import React, { Component } from "react";
import "../styles/pages/Experience.scss";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeperator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";

export class Experience extends Component {
  render() {
    return (
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <div className="experience--date">2020</div>
          </TimelineOppositeContent>
          <TimelineSeperator>
            <TimelineDot color="black">
              <BusinessCenterIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeperator>
          <TimelineContent>
            <div className="experience">
              <div>
                <h1>4Site Interactive Studios</h1>
                <h3>Junior Web Developer</h3>
                <h4>Jul 2020 - Oct 2020</h4>
              </div>
              <div>
                <ul className="experience--list">
                  <li className="experience--list--item">
                    Developed resposnive website themes for nonprofit clients
                    using Wordpress and Drupal.
                  </li>
                  <li className="experience--list--item">
                    Create and maintain code documentaion and technical.
                    specifications
                  </li>
                  <li className="experience--list--item">
                    Collaborated with the internal creative and technical teams.
                  </li>
                  <li className="experience--list--item">
                    Record effort and progress in 3rd party project management
                    tools.
                  </li>
                </ul>
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <div className="experience--date">2019</div>
          </TimelineOppositeContent>
          <TimelineSeperator>
            <TimelineDot color="black">
              <BusinessCenterIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeperator>
          <TimelineContent>
            <div className="experience">
              <div>
                <h1>American Chemical Society</h1>
                <h3>Web Design Intern</h3>
                <h4>May 2019 - Aug 2019</h4>
              </div>
              <div>
                <ul className="experience--list">
                  <li className="experience--list--item">
                    Collaborated with web deisgners and developers to refine and
                    the user experience for C&EN Readers.
                  </li>
                  <li className="experience--list--item">
                    Developed wireframes, mocups, and preliminary web deisgns
                    taht can be reviewed by editors and designers.
                  </li>
                  <li className="experience--list--item">
                    Aligned the design direction and improve the page load times
                    of the C&EN content online.
                  </li>
                  <li className="experience--list--item">
                    Developed and tested periodic table element quiz for
                    International Year of the Periodic Table.
                  </li>
                </ul>
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    );
  }
}

export default Experience;
