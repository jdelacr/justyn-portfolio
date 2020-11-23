import React, { Component } from "react";
import "../styles/components/card.scss";

export class Card extends Component {
  render() {
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
              <a href="#">Preview</a> <a href="#">Code</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
