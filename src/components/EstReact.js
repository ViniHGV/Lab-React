import React, { Fragment } from 'react';

const FirstEvent = () => {
    alert('Primeiro evento no React')
}

const Soma = () => {
    let n1 = parseInt(prompt("Digite o primeiro numero:"))
    let n2 = parseInt(prompt("Digite o segundo numero:"))

    return alert(n1+n2)
}

function EstReact(){
    return(
        <Fragment>
            <h1>Estudando React</h1>
            <h2>O que é React ?</h2>
            <p>O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p>
            <div class="d-grid gap-2">
                <a type="button" className="btn btn-primary" href='https://blog.betrybe.com/react/'>Saiba mais !</a>
            </div>
            <hr/>
            <h2>Eventos</h2>
            <div class="d-grid gap-2">
                <a type="button" className="btn btn-primary" onClick={FirstEvent}>Primeiro Evento</a>
                <a type="button" className="btn btn-primary" onClick={Soma}>Evento Soma</a>
            </div>
                

        </Fragment>
    ) 
}

export default EstReact;