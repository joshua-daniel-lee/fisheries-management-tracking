import React, { Component } from "react";
import logo from "../../Assets/logo.png";
import "../../App.css";

class Hero extends Component {
  render() {
    return (
      <div className="Hero section">
        <div className="container">
          <div className="row">
            <div className="col s3 logoContainer">
              <img src={logo} alt="#" />
            </div>
            <div className="col s9">
              <blockquote className="yellow-text flow-text">
                This is a demo for a fisheries managment project tracking
                application. Source code can be found here:{" "}
                <a
                  className="white-text"
                  href="https://github.com/joshualeehawaii/fisheries-management-tracking"
                  target="_blank"
                >
                  Github
                </a>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
