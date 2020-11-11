import React from "react";
import "./style.css";

function CharacterImages(props) {
  return (
    <div class="container">
        <div className="row">
            <div className="col-md">
                <img alt={props.object.name} src={props.object.image}/>
            </div>
        </div>
    </div>
  );
}

export default CharacterImages;
