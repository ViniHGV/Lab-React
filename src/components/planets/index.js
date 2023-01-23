import React, {Fragment} from "react";
import GraImg from "../../shared/gray_img";

const Planets = () => {
    return (
        <div>
            <hr/>
            <h4>Mercúrio</h4>
            <p>Mercúrio é o menor planeta do Sistema Solar e o mais próximo do Sol. Sua órbita ao redor do Sol leva 87,97 dias terrestres, o mais curto de todos os planetas do Sol. É nomeado após o deus romano Mercurius, deus do comércio, mensageiro dos deuses e mediador entre deuses e mortais, correspondendo ao deus grego Hermes.</p>
           <GraImg img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/600px-Mercury_in_color_-_Prockter07-edit1.jpg" />
        </div>
    )
}

export default Planets;