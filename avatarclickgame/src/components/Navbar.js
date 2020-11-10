import React from "react";
import "../styles/Navbar.css";

// const styles = {
//   navbarStyle: {
//     background: "green",
//     justifyContent: "flex-end"
//   }
// };

function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<a className="navbar-brand" href="/">Click Game</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
  <div className="navbar-nav">
    <a className="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
    {/* <a class="nav-item nav-link" href="#">Features</a>
    <a class="nav-item nav-link" href="#">Pricing</a> */}
  </div>
</div>
</nav>
  );
}

export default Navbar;
