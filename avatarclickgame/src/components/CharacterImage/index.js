import React from "react";
import "./style.css";

function CharacterImages(props) {
  return (
        <div className="row">
            <div className="col-md">
                <img alt={props.name} src={props.image} onClick={props.clickHandler} data-name={props.name}/>
            </div>
        </div>
  );
}

export default CharacterImages;
