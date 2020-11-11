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
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<a className="navbar-brand" href="/">Click Game</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
  <div className="navbar-nav">
    {/* <a className="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a> */}
    <div className="nav-item nav-link text-white">Score:{props.score}</div>
    {/* <div>/</div> */}
    <div className="nav-item nav-link text-white">Top Score:{props.highscore}</div>
  </div>
</div>
</nav>
  );
}

export default Navbar;
