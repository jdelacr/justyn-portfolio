import React, { Component } from "react";
import "../styles/components/footer.scss";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import {
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  List,
  Segment,
} from "semantic-ui-react";

export class footer extends Component {
  render() {
    return (
      /*       <Segment inverted basic className="footer">
        <Grid container columns={2} relaxed stackable divided inverted>
          <Grid.Column>
            <Segment inverted basic>
              <Logo fill="white" />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment inverted basic textAlign="center">
              <Header as="h2" content="Sitemap" />
              <Divider />
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment> */
      <Segment inverted basic className="footer" vertical>
        <Container textAlign="center" text>
          <Grid columns={4} divided stackable inverted>
            <Grid.Row>
              <Grid.Column>
                <List link inverted>
                  <List.Item as="a" href="#Main">
                    Home
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List link inverted>
                  <List.Item as="a" href="#Experience">
                    Experience
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List link inverted>
                  <List.Item as="a" href="#Projects">
                    Projects
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List link inverted>
                  <List.Item as="a" href="#Education">
                    Education
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Container textAlign="center">
          <Segment inverted basic vertical>
            <List horizontal relaxed inverted>
              <List.Item as="a" href="https://github.com/jdelacr">
                <Icon name="github square" className="footer--social--icons" />
              </List.Item>
              <List.Item as="a" href="https://www.linkedin.com/in/janjustyn/">
                <Icon name="linkedin" className="footer--social--icons" />
              </List.Item>
              <List.Item as="a" href="mailto:delacruz.janjustyn@gmail.com">
                <Icon name="mail" className="footer--social--icons" />
              </List.Item>
            </List>
          </Segment>
        </Container>
        <Divider horizontal inverted>
          <Segment inverted basic className="footer--logo">
            <Logo fill="white" />
          </Segment>
        </Divider>
      </Segment>
    );
  }
}

export default footer;
