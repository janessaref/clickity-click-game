import React from "react";
import "./style.css";

// passing in the name, image and clickHandler props
function CharacterImages({name, image, clickHandler}) {
  return (
        <div className="col-md m-2">
            <img alt={name} src={image} onClick={clickHandler} data-name={name}/>
        </div>
  );
};

export default CharacterImages;
