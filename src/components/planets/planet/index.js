import React from "react";
import GrayImg from "../../shared/gray-img";
import DescriptionWithLink from "../../shared/description";

const Planet = (props) => {
    return(
        <>
            <h2>{props.title}</h2>
            <DescriptionWithLink description = {props.description}
                link = {props.link}
            />
            <GrayImg 
            img_url={props.img_url}
            />
            

        </>
    )
}

export default Planet;