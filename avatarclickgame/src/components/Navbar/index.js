import React from "react";
import "./style.css";

// passing in our message, score and highscore props
function Navbar({message, score, highscore}) {
  return (
    <nav className="navbar navbar-expand-sm fixed-top navbar-light"> 
      <a className="navbar-brand" id="avatarMain" href="/">Click Game: Avatar</a>
        <div className="navbar-collapse" id="navbarText">
          <div className="navbar-nav mx-auto">
            <span className="navbar-text mt-2 h3 message" id="messageDisplay">{message}</span>
          </div> 
          <div className="nav-item mr-2" id="currentScore">Score: {score}</div>
          <div className="divider">|</div>
          <div className="nav-item ml-2 mr-2" id="highScore">Top Score: {highscore}</div>
        </div>     
    </nav>
  );
};

export default Navbar;
