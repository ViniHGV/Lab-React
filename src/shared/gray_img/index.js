import React, { Fragment } from "react";
import Planets from "./index";

const Planet = (props) => {
    return (
        <div onClick={() => props.ClickPlanet(props.name)}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <img src={props.img_url} className="Img" ></img>
        </div>
    )
}

export default Planet;