import React from "react";


const DescriptionWithLink = (props) =>  {
    return(
        <>
            <p>{props.description}</p>
            <a type="button" class="btn btn-primary" href={props.link}>Saiba mais sobre o planeta !</a>
        </>
    )
}

export default DescriptionWithLink;