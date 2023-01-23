import React, {Fragment} from "react";
import GraImg from "../../shared/gray_img";


const showMsg = () => {
    alert('Meu primeiro evento')
}

const Planets = () => {
    return (
        <div>
            <GraImg name = "Mercurio"/>
            <GraImg description="Mercúrio é o menor planeta do Sistema Solar e o mais próximo do Sol. Sua órbita ao redor do Sol leva 87,97 dias terrestres, o mais curto de todos os planetas do Sol. É nomeado após o deus romano Mercurius, deus do comércio, mensageiro dos deuses e mediador entre deuses e mortais, correspondendo ao deus grego Hermes."/>
           <GraImg img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/600px-Mercury_in_color_-_Prockter07-edit1.jpg" />
          <hr/>
           <GraImg name = "Vénus"/>
            <GraImg description="Vénus ou Vênus é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite."/>
           <GraImg img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg/280px-PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg" />        
           <br/>
           <button type="button" class="btn btn-primary" href='https://blog.betrybe.com/react/'onClick={showMsg}>Evento</button>
        </div>
    )
}

export default Planets;