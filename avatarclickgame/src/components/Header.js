import React from "react";
import "../styles/Header.css";

// const styles = {
//   headerStyle: {
//     background: "red"
//   },
//   headingStyle: {
//     fontSize: 100
//   }
// };

// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">CLICK AN IMAGE TO BEGIN!</h1>
    <p className="lead">Click an image to earn points, but don't click on the same image!</p>
  </div>
</div>
  );
}

export default Header;
