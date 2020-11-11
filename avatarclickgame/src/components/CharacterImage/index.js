import React from "react";
import "./style.css";

function CharacterImages(props) {
  return (
            <div className="col-md m-2">
                <img alt={props.name} src={props.image} onClick={props.clickHandler} data-name={props.name}/>
            </div>
  );
}

export default CharacterImages;
