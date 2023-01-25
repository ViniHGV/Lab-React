import React from "react";
import GrayImg from "../../shared/gray-img";

const Planet = (props) => {
    return(
        <>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            
            <GrayImg 
            img_url='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Mercury_in_color_c1000_700_430.png/220px-Mercury_in_color_c1000_700_430.png'
            />

        </>
    )
}

export default Planet;