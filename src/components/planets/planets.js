import React, { Fragment } from "react";
import Planets from "./index";

const PlanetsList = () => {
    return (
        <Fragment>
            <div  className="ListPlanets">
                <h3>Lista de planetas</h3>
                <Planets/>
                <Planets/>
            </div>
        </Fragment>
    )
}

export default PlanetsList;