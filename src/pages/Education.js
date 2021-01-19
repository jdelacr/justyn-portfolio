import React, { Component } from "react";
import "../styles/pages/Education.scss";
import GMU from "../assets/George_Mason_University_logo.svg";
import NOVA from "../assets/Northern_Virginia_Community_College_logo.svg";
import {
  Button,
  Divider,
  Header,
  Icon,
  Item,
  ItemGroup,
  Segment,
} from "semantic-ui-react";

export class Education extends Component {
  render() {
    return (
      <Segment basic id="Education">
        <Divider horizontal>
          {" "}
          <Header as="h1" content="Education" />
        </Divider>
        <ItemGroup divided>
          <Item>
            <Item.Image src={GMU} />
            <Item.Content>
              <Item.Header>George Mason University</Item.Header>
              <Item.Meta>
                <span className="education--year">2017-2020</span>
              </Item.Meta>
              <Item.Description>
                Graduated with Bachelors of Science in Information Technology
                with concentration in Multimedia & Web Development.
              </Item.Description>
              <Item.Extra>
                <Button
                  primary
                  floated="right"
                  as="a"
                  href="https://www2.gmu.edu/"
                  target="_blank"
                  animated="vertical"
                >
                  <Button.Content visible> Visit Site </Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image src={NOVA} />
            <Item.Content>
              <Item.Header>Northern Virginia College</Item.Header>
              <Item.Meta>
                <span className="education--year">2013-2016</span>
              </Item.Meta>
              <Item.Description>
                Graduated with Associates in Applied Computer Science on
                December, 2016.
              </Item.Description>
              <Item.Extra>
                <Button
                  primary
                  floated="right"
                  href="https://www.nvcc.edu/"
                  target="_blank"
                  animated="vertical"
                >
                  <Button.Content visible> Visit Site </Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
        </ItemGroup>
      </Segment>
    );
  }
}

export default Education;
