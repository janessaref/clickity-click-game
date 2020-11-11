import React from "react";
import "../styles/Navbar.css";

// const styles = {
//   navbarStyle: {
//     background: "green",
//     justifyContent: "flex-end"
//   }
// };

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-sm fixed-top navbar-light"> 
            <a className="navbar-brand" href="/">Click Game: Avatar</a>
        <div className="navbar-collapse" id="navbarText">
            <div className="navbar-nav mx-auto">
            <span className="navbar-text mt-2 h3 message">{props.message}
            </span>
            </div> 
                <div className="nav-item mr-2">Score: {props.score}
                </div>
                <div>|
                </div>
                <div className="nav-item ml-2 mr-2">Top Score: {props.highscore}
                </div>
            </div>
        
</nav>
  );
}

export default Navbar;
