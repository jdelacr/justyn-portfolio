import React, { Component } from "react";
import "../styles/components/card.scss";

export class Preview extends React.Component {
  render() {
    return (
      <a href={this.props.link} className="card-center">
        Preview
      </a>
    );
  }
}

export class Code extends React.Component {
  render() {
    return (
      <a href={this.props.link} className="card-center">
        Code
      </a>
    );
  }
}

export class Card extends Component {
  render() {
    let hasPreview = false;
    let hasCode = false;
    if (this.props.preview != null) {
      hasPreview = true;
    }
    if (this.props.code != null) {
      hasCode = true;
    }

    return (
      <div className="card">
        <div className="card--body">
          <div className="card--thumbnail">
            <img
              className="card--img"
              src={
                this.props.image != null
                  ? require(`../assets/${this.props.image}.jpg`).default
                  : require(`../assets/default_card_image.png`).default
              }
              alt={this.props.alt}
            />
          </div>
          <div className="card--info">
            <h1 className="card--hed">
              {this.props.title != null ? this.props.title : "No Title"}
            </h1>
            <div className="card--text">
              <p>
                {this.props.info != null ? this.props.info : "No Information."}
              </p>
            </div>
            <div className="card--link">
              {hasPreview ? <Preview link={this.props.preview} /> : ""}
              {hasCode ? <Code link={this.props.code} /> : ""}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
