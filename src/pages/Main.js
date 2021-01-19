import React, { Component } from "react";
import {
  Container,
  Segment,
  Header,
  Image,
  Icon,
  Grid,
  Divider,
} from "semantic-ui-react";
import Profile from "../assets/Profile.jpg";
import BGvid from "../assets/bg-video.mp4";
import "../styles/pages/Main.scss";

/* export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="profile">
          <img src={Profile} className="profile__img" alt="Profile" />
        </div>
        <div>
          <h2>Hi, my name is Jan Justyn</h2>
          <h1>Building websites is my passion</h1>
          <h3>
            A Frontend Developer in VA.
            <br /> I specialize in UI/UX Development, Responsive Web
            Design,&nbsp;
            <wbr />
            and Web development
          </h3>
          <div>
            <a href="https://www.linkedin.com/in/janjustyn/">
              <button className="btn">
                Connect <span className="btn-text">with me!</span>
                <span className="btn-arr">&rarr;</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export class About extends React.Component {
  render() {
    return (
      <div className="about">
        <h1 className="about--hed">About me</h1>
        <p className="about--info">
          I am a tech savvy person who is excited about technologies. My hobbies
          include building and learning computers, digital drawings, basketball,
          and cars. I graduated in George Mason University in 2020 and earned my
          bachelors in Information Technology.
        </p>
      </div>
    );
  }
}

export class Skills extends React.Component {
  render() {
    return (
      <div className="skill">
        <h1 className="skill--hed">SKILLS</h1>
        <ul className="skill--list">
          <li className="skill--list--item">HTML</li>
          <li className="skill--list--item">CSS</li>
          <li className="skill--list--item">Javascript</li>
          <li className="skill--list--item">PHP</li>
          <li className="skill--list--item">React.js</li>
          <li className="skill--list--item">Vue.js</li>
          <li className="skill--list--item">JQuery</li>
          <li className="skill--list--item">Wordpress</li>
          <li className="skill--list--item">Node.js</li>
          <li className="skill--list--item">Bootstrap</li>
          <li className="skill--list--item">Git</li>
          <li className="skill--list--item">Github</li>
        </ul>
      </div>
    );
  }
} */

export class About extends Component {
  render() {
    return (
      <>
        <Divider horizontal>
          <Header as="h1" content="About Me" />
        </Divider>
        <Segment basic>
          <Container text>
            <p>
              I am a tech savvy person who is excited about technologies. I love
              building websites and even though I primarily focus on Front-end,
              I can also go Full-stack development when needed. My hobbies
              include building and learning computers, digital drawings,
              basketball, and cars. I graduated in George Mason University in
              2020 and earned my bachelors in Information Technology.
            </p>
          </Container>
        </Segment>
      </>
    );
  }
}

export class Skills extends Component {
  render() {
    return (
      <>
        <Divider horizontal>
          <Header as="h1" content="Skills" />
        </Divider>
        <Grid columns={3} doubling>
          <Grid.Column>
            <Segment basic textAlign="center">
              <Icon name="html5" className="skills--icon" />
              <p>HTML5</p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment basic textAlign="center">
              <Icon name="css3" className="skills--icon" />
              <p>CSS</p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment basic textAlign="center">
              <Icon name="js square" className="skills--icon" />
              <p>Javascript</p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment basic textAlign="center">
              <Icon name="react" className="skills--icon" />
              <p>React</p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment basic textAlign="center">
              <Icon name="php" className="skills--icon" />
              <p>PHP</p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment basic textAlign="center">
              <Icon name="vuejs" className="skills--icon" />
              <p>Vue</p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment basic textAlign="center">
              <Icon name="sass" className="skills--icon" />
              <p>Sass</p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment basic textAlign="center">
              <Icon name="wordpress" className="skills--icon" />
              <p>Wordpress</p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment basic textAlign="center">
              <Icon name="npm" className="skills--icon" />
              <p>NPM</p>
            </Segment>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}
export class Hero extends Component {
  render() {
    return (
      <div>
        <Segment vertical textAlign="center" className="main--hero">
          <video
            src={BGvid}
            autoPlay
            loop
            playsInline
            muted
            className="main--bgvid"
          />
          <Container text className="main--hero--about">
            <Image
              src={Profile}
              circular
              size="medium"
              centered
              className="main--header"
            />
            <Header
              as="h1"
              content="Hi, my name is Jan Justyn Dela Cruz"
              inverted
            />
            <Header as="h2" content="Building website is my passion" inverted />
            <Header
              as="h3"
              content="A Frontend developer in Virginia"
              inverted
            />
            <Header
              as="h3"
              content="I specialize in UI/UX Development, Responsive Web
            Design,&nbsp; and Web development"
              inverted
            />
          </Container>
        </Segment>
      </div>
    );
  }
}
export class Main extends Component {
  render() {
    return (
      <div className="main" id="Main">
        <Hero />
        <About />
        <Skills />
      </div>
    );
  }
}

export default Main;
