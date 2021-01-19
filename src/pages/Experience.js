import React, { Component } from "react";
import { Divider, Header, List, Segment } from "semantic-ui-react";
import "../styles/pages/Experience.scss";

export class Experience extends Component {
  render() {
    return (
      <Segment basic inverted id="Experience">
        <Divider horizontal>
          <Header as="h1" content="Experience" inverted />
        </Divider>
        <Segment raised className="experience--segment">
          <Header as="h1" content="4Site Interactive Studios" />
          <Header
            sub
            content="May 2019 - Aug 2019"
            className="experience--date"
          />
          <Divider />
          <Header as="h3" content="Position: Web Design Intern" />
          <List>
            <List.Item>
              <List.Header>Responsibilities: </List.Header>
              <List.List>
                <List.Item>
                  <List.Icon name="right triangle" />
                  <List.Content>
                    <List.Description>
                      Collaborated with web deisgners and developers to refine
                      and the user experience for C&EN Readers.
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="right triangle" />
                  <List.Content>
                    <List.Description>
                      Developed wireframes, mocups, and preliminary web deisgns
                      taht can be reviewed by editors and designers.
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="right triangle" />
                  <List.Content>
                    <List.Description>
                      Aligned the design direction and improve the page load
                      times of the C&EN content online.
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="right triangle" />
                  <List.Content>
                    <List.Description>
                      Developed and tested periodic table element quiz for
                      International Year of the Periodic Table.
                    </List.Description>
                  </List.Content>
                </List.Item>
              </List.List>
            </List.Item>
          </List>
        </Segment>

        <Segment raised className="experience--segment">
          <Header as="h1" content="American Chemical Society" />
          <Header
            sub
            content="Jul 2020 - Oct 2020"
            className="experience--date"
          />
          <Divider />
          <Header as="h3" content="Position: Junior Web Developer" />
          <List>
            <List.Item>
              <List.Header>Responsibilities: </List.Header>
              <List.List>
                <List.Item>
                  <List.Icon name="right triangle" />
                  <List.Content>
                    <List.Description>
                      Developed resposnive website themes for nonprofit clients
                      using Wordpress and Drupal.
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="right triangle" />
                  <List.Content>
                    <List.Description>
                      Create and maintain code documentaion and technical.
                      specifications
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="right triangle" />
                  <List.Content>
                    <List.Description>
                      Collaborated with the internal creative and technical
                      teams.
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="right triangle" />
                  <List.Content>
                    <List.Description>
                      Record effort and progress in 3rd party project management
                      tools.
                    </List.Description>
                  </List.Content>
                </List.Item>
              </List.List>
            </List.Item>
          </List>
        </Segment>
      </Segment>
    );
  }
}

export default Experience;
