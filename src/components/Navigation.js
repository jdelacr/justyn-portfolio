import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import "../styles/components/navigation.scss";

export class Navigation extends Component {
  render() {
    return (
      <>
        <Segment inverted basic className="nav">
          <Menu inverted pointing secondary>
            <Menu.Item name="home" href="#Main" />
            <Menu.Item name="Experience" href="#Experience" />
            <Menu.Item name="Projects" href="#Projects" />
            <Menu.Item name="Education" href="#Education" />
          </Menu>
        </Segment>
      </>
    );
  }
}

export default Navigation;
