import React from "react";
import GrayImg from "../../shared/gray-img";

const Planet = (props) => {
    return(
        <>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            
            <GrayImg 
            img_url={props.img_url}
            />

        </>
    )
}

export default Planet;