import React from "react";
import "../styles/Header.css";

const styles = {
  background: {
    backgroundImage: "url('../../images/team.jpg')"
  },
};

// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid">
  <div className="container" styles={styles.background}>
    <h1 className="display-4 text-center mt-5">CLICK AN IMAGE TO BEGIN!</h1>
    <p className="lead text-center">Click an image to earn points, but don't click on the same character!</p>
  </div>
</div>
  );
}

export default Header;
