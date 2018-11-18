import React, { Component } from "react";
import logo from "../../Assets/logo.png";
import "../../App.css";

class Hero extends Component {
  render() {
    return (
      <div className="Hero section">
        <div className="container">
          <div className="logoContainer">
            <img src={logo} alt="#" />
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
