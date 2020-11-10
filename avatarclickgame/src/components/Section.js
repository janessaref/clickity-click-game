import React from "react";
import "../styles/Section.css";

// const styles = {
//   sectionStyles: {
//     background: "orange"
//   }
// };

function Section() {
  return (
      <div className = "container">
        <div className="row">
            <div className="col-md"><img src="/images/aang.jpeg" className="picture" alt="aang"/></div>
            <div className="col-md"><img src="/images/zuko.png" className="picture" alt="zuko"/></div>
            <div className="col-md"><img src="/images/katara.png" className="picture" alt="katara"/></div>
            <div className="col-md"><img src="/images/toph.png" className="picture" alt="toph"/></div>
        </div>
        <div className="row">
            <div className="col-sm-3"><img src="/images/aang.jpeg" className="picture" alt="aang"/></div>
            <div className="col-sm-3"><img src="/images/zuko.webp" className="picture" alt="zuko"/></div>
            <div className="col-sm-3"><img src="/images/katara.png" className="picture" alt="katara"/></div>
            <div className="col-sm-3"><img src="/images/toph.png" className="picture" alt="toph"/></div>
        </div>
        <div className="row">
            <div className="col-sm-3"><img src="/images/aang.jpeg" className="picture" alt="aang"/></div>
            <div className="col-sm-3"><img src="/images/zuko.webp" className="picture" alt="zuko"/></div>
            <div className="col-sm-3"><img src="/images/katara.png" className="picture" alt="katara"/></div>
            <div className="col-sm-3"><img src="/images/toph.png" className="picture" alt="toph"/></div>
        </div>
    </div>
  );
}

export default Section;
