import React from 'react';
import numbers from './images/bot.png';
import './componentes.css';

function Componente() {
    return (
        <>
            <div className='cabecera'> -</div>
            <div className='header'> <h1> ¡Descubre si adivinas el número correcto!</h1>
                <p>Elige un número del 1 al 10</p>
                <div className='imagen'> <img src={numbers}></img></div>
            </div>


        </>
    );

}

export default Componente;