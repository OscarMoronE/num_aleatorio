import React from "react";
import './componentes.css';
import botsee from './images/botsee.png';
function Juego(props) {
    //codigo js
    let [contador, cambiarNumero] = React.useState(0);
    let [aleatorio, numAleatorio] = React.useState(Math.floor(Math.random() * 11));
    let change;
    function Cambio(event) {
        contador = event.target.value;
        cambiarNumero(contador);
        console.log(contador);
        console.log(aleatorio);
    }

    function Comparar() {
        if (contador == aleatorio) {
            window.Swal.fire({
                icon: "success",
                title: "¡Correcto!",
                text: "Has acertado!",
            });
        } else {
            window.Swal.fire({
                icon: 'error',
                title: '¡Incorrecto!',
                text: 'Inténtalo de nuevo',
            });
            document.body.classList.add("error-background");
            setTimeout(() => {
                document.body.classList.remove("error-background");
            }, 1000);

        }
        numAleatorio(Math.floor(Math.random() * 11));
    }

    function copyEmail(event) {
        event.preventDefault();
        const email = 'moroneoscar@hotmail.com';
        navigator.clipboard.writeText(email).then(function () {
            window.Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Correo copiado en portapapeles",
                showConfirmButton: false,
                timer: 1000
            });
        }).catch(function (error) {
            console.error(error);
        });
    }

    return (
        <>
            <div className="miInput">
                <h4>El número elegido es: {contador}</h4>
                <input onChange={Cambio} type="number" placeholder="0" min={1} max={10} />

                <div onClick={Comparar} className="btnAdivinar"><button>Adivinar <i class="fa-solid fa-robot"></i></button></div>
            </div>

            <div>
                <footer className="piePagina">
                    <div className="grupo-1">
                        <div className="box">
                            <figure>
                                <a href="#">
                                    <img src={botsee} alt="El bot te observa"></img>
                                </a>
                            </figure>
                        </div>
                        <div className="box">
                            <h2 className="tools"><i class="fa-solid fa-code"></i> Herramientas y Tecnologías Utilizadas <i class="fa-solid fa-code"></i> </h2>
                            <p className="justified-text">Este proyecto está desarrollado con React, HTML, CSS y JavaScript, utilizando elementos clave de React como Hooks, Componentes, JSX, Props, state, y Events, junto con otras herramientas del desarrollo web. Implementa una lógica que genera un número aleatorio del lado del computador y recibe un número del 1 al 10 del usuario para compararlos y determinar si coinciden.</p>
                        </div>
                        <div id="box-contacto" className="box">
                            <h2>Contacto</h2>
                            <div className="git">
                                <a href="https://www.linkedin.com/in/oscar-mor%C3%B3n-950680258/" ><i class="fa-brands fa-linkedin"></i></a>
                                <a href="https://github.com/OscarMoronE"><i class="fa-brands fa-square-github"></i></a>
                                <a onClick={copyEmail} href="#"><i class="fa-solid fa-envelope"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="grupo2">
                        <small><i class="fa-regular fa-copyright"></i> 2024 <b>Creado con React <i class="fa-brands fa-react"></i></b></small>
                    </div>
                </footer>
            </div>
        </>
    )
}
export default Juego;