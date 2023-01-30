import React from "react";

const FormPlanet = () => {
    return (
        <>
            <form>
                <div class="mb-3">
                    <label for="namePlanet" class="form-label">Nome do planeta</label>
                    <input type="text" class="form-control" id="namePlanet"/>
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Descrição do planeta</label>
                    <input type="text" class="form-control" id="description"/>
                </div>
                <button type="submit" class="btn btn-success">Adicionar Planeta</button>
            </form>
        </>
    )
}

export default FormPlanet;