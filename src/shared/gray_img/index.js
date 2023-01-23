import React, { Fragment } from "react";
import Planets from "./index";

const GraImg = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <img src={props.img_url} className="Img"></img>
        </div>
    )
}

export default GraImg;