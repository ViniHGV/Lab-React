import React from "react";
import Planet from "./planet";

const ClickonPlanet = (title) =>{
    alert(`Clicou no planeta ${title}`)
} 


const Planets = () => {
    return (
        <>

            <h1>Planet List</h1>
            <hr/>
            <Planet title = "Mercurio"
                description = "Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar."
                link = "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
                img_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Mercury_in_color_c1000_700_430.png/220px-Mercury_in_color_c1000_700_430.png"
                ClickonPlanet = {ClickonPlanet}
            />
            <hr/>
            <Planet title = "Vênus"
                description = "Vénus ou Vênus é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite."
                link = "https://pt.wikipedia.org/wiki/V%C3%A9nus_(planeta)"
                img_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg/280px-PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg"
                ClickonPlanet = {ClickonPlanet}
            />
        </>
    )
}

export default Planets;
