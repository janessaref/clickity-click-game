import React from "react";
import "./style.css";

function Navbar(props) {
  return (
  <nav className="navbar navbar-expand-sm fixed-top navbar-light"> 
    <a className="navbar-brand" id="avatarMain" href="/">Click Game: Avatar</a>
      <div className="navbar-collapse" id="navbarText">
        <div className="navbar-nav mx-auto">
          <span className="navbar-text mt-2 h3 message" id="messageDisplay">{props.message}</span>
        </div> 
        <div className="nav-item mr-2" id="currentScore">Score: {props.score}</div>
        <div>|</div>
        <div className="nav-item ml-2 mr-2" id="highScore">Top Score: {props.highscore}</div>
      </div>     
  </nav>
  );
}

export default Navbar;
