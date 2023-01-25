import React from "react";
import Planet from "./planet";

const Planets = () => {
    return (
        <>
            <h1>Planet List</h1>
            <Planet
            title="Mercurio"
            description=" é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar."
            img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Mercury_in_color_c1000_700_430.png/220px-Mercury_in_color_c1000_700_430.png"
            />
        </>
    )
}

export default Planets;