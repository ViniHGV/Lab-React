import React from "react";


const DescriptionWithLink = (props) =>  {
    return(
        <>
            <p>{props.description}</p>
            <div class="d-grid gap-2">
                <a type="button" class="btn btn-primary" href={props.link}>Saiba mais sobre o planeta !</a>
            </div>
           
        </>
    )
}

export default DescriptionWithLink;