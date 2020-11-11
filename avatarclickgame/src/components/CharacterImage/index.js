import React from "react";
// import "./style.css";

function CharacterImages(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt={props.object.name}
          src={props.object.image}
        />
      </div>
      <div className="content">
      </div>
    </div>
  );
}

export default CharacterImages;
