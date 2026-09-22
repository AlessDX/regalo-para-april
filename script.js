/* =================================
   ELEMENTOS
================================= */

const inicio =
    document.getElementById("inicio");

const jardin =
    document.getElementById("jardin");

const cartaSeccion =
    document.getElementById("cartaSeccion");

const mensajesSeccion =
    document.getElementById("mensajesSeccion");

const final =
    document.getElementById("final");

const secreto =
    document.getElementById("secreto");


const botonInicio =
    document.getElementById("botonInicio");

const botonCarta =
    document.getElementById("botonCarta");

const botonContinuar =
    document.getElementById("botonContinuar");

const botonMensaje =
    document.getElementById("botonMensaje");

const botonSecreto =
    document.getElementById("botonSecreto");


const sobre =
    document.getElementById("sobre");

const instruccion =
    document.getElementById("instruccion");


/* =================================
   MOSTRAR SECCIÓN
================================= */

function mostrarSeccion(seccion) {

    inicio.style.display = "none";

    jardin.style.display = "none";

    cartaSeccion.style.display = "none";

    mensajesSeccion.style.display = "none";

    final.style.display = "none";

    secreto.style.display = "none";


    seccion.style.display = "flex";

}


/* =================================
   PRIMER BOTÓN
================================= */

botonInicio.addEventListener(
    "click",
    function () {

        inicio.style.display =
            "none";

        jardin.style.display =
            "block";

        crearFlores();

        crearBrillos();

    }
);


/* =================================
   CREAR FLORES
================================= */

function crearFlores() {

    const contenedor =
        document.getElementById(
            "flores"
        );

    contenedor.innerHTML = "";


    const flores = [
        "🌻",
        "🌼",
        "🌻",
        "🌼",
        "🌻",
        "🌼",
        "🌻",
        "🌼",
        "🌻",
        "🌼",
        "🌻",
        "🌼",
        "🌻",
        "🌼",
        "🌻",
        "🌼",
        "🌻",
        "🌼"
    ];


    flores.forEach(
        function (flor, index) {

            const elemento =
                document.createElement(
                    "div"
                );


            elemento.className =
                "flor";


            elemento.textContent =
                flor;


            const posiciones = [
                [8, 25],
                [22, 15],
                [40, 25],
                [60, 18],
                [78, 28],
                [90, 15],
                [15, 48],
                [32, 42],
                [52, 50],
                [72, 44],
                [87, 52],
                [5, 70],
                [25, 75],
                [45, 68],
                [65, 75],
                [82, 68],
                [15, 88],
                [75, 88]
            ];


            elemento.style.left =
                posiciones[index][0] + "%";


            elemento.style.top =
                posiciones[index][1] + "%";


            elemento.style.animationDelay =
                (index * 0.15) + "s";


            contenedor.appendChild(
                elemento
            );

        }
    );

}


/* =================================
   BRILLOS
================================= */

function crearBrillos() {

    const contenedor =
        document.getElementById(
            "brillosJardin"
        );


    for (
        let i = 0;
        i < 18;
        i++
    ) {

        const brillo =
            document.createElement(
                "span"
            );


        brillo.textContent =
            "✨";


        brillo.style.position =
            "absolute";


        brillo.style.left =
            Math.random() * 95 + "%";


        brillo.style.top =
            Math.random() * 90 + "%";


        brillo.style.fontSize =
            (10 + Math.random() * 15)
            + "px";


        brillo.style.opacity =
            0.3 +
            Math.random() * 0.7;


        brillo.style.animation =
            "latido " +
            (1.5 + Math.random() * 2)
            + "s infinite";


        contenedor.appendChild(
            brillo
        );

    }

}


/* =================================
   IR A LA CARTA
================================= */

botonCarta.addEventListener(
    "click",
    function () {

        jardin.style.display =
            "none";

        cartaSeccion.style.display =
            "block";

        window.scrollTo(
            0,
            0
        );

    }
);


/* =================================
   ABRIR SOBRE
================================= */

sobre.addEventListener(
    "click",
    function (evento) {

        /*
        Si el usuario toca el botón
        de continuar, no cerramos
        el sobre.
        */

        if (
            evento.target ===
            botonContinuar
        ) {

            return;

        }


        sobre.classList.toggle(
            "abierto"
        );


        if (
            sobre.classList.contains(
                "abierto"
            )
        ) {

            instruccion.textContent =
                "La preparé especialmente para ti... 💛";


            botonContinuar.classList.add(
                "visible"
            );

        } else {

            instruccion.textContent =
                "Toca el sobre para abrirlo 💌";


            botonContinuar.classList.remove(
                "visible"
            );

        }

    }
);


/* =================================
   CONTINUAR DESDE CARTA
================================= */

botonContinuar.addEventListener(
    "click",
    function (evento) {

        evento.stopPropagation();


        cartaSeccion.style.display =
            "none";


        mensajesSeccion.style.display =
            "flex";


        mensajeActual = 0;


        mostrarMensaje();

    }
);


/* =================================
   MENSAJES
================================= */

const mensajes = [

    "Me gusta la forma en que haces especiales incluso los momentos más simples. 💛",

    "Hay personas que llegan y simplemente hacen que todo se sienta un poquito mejor.",

    "Tu sonrisa tiene una manera muy bonita de quedarse en la memoria. 🌻",

    "Espero que nunca olvides lo especial que eres.",

    "Si pudiera guardar algunos momentos para siempre, definitivamente guardaría los momentos contigo.",

    "Y este pequeño jardín es solamente una forma de decirte: gracias por ser tú. 💛"

];


let mensajeActual = 0;


const mensajeGrande =
    document.getElementById(
        "mensajeGrande"
    );


const contador =
    document.getElementById(
        "contador"
    );


function mostrarMensaje() {

    mensajeGrande.style.animation =
        "none";


    void mensajeGrande.offsetWidth;


    mensajeGrande.style.animation =
        "aparecer 0.8s";


    mensajeGrande.textContent =
        mensajes[mensajeActual];


    contador.textContent =
        (mensajeActual + 1)
        + " / "
        + mensajes.length;

}


botonMensaje.addEventListener(
    "click",
    function () {

        mensajeActual++;


        if (
            mensajeActual >=
            mensajes.length
        ) {

            mensajesSeccion.style.display =
                "none";


            final.style.display =
                "block";


            comenzarFinal();


            return;

        }


        mostrarMensaje();

    }
);


/* =================================
   FINAL
================================= */

function comenzarFinal() {

    crearPetalos();

    crearFloresFinales();

}


/* =================================
   PETALOS / CORAZONES
================================= */

function crearPetalos() {

    const contenedor =
        document.getElementById(
            "petalos"
        );


    setInterval(
        function () {

            const corazon =
                document.createElement(
                    "div"
                );


            corazon.className =
                "corazonCaido";


            corazon.textContent =
                Math.random() > 0.4
                    ? "💛"
                    : "✨";


            corazon.style.left =
                Math.random() * 100 + "%";


            corazon.style.fontSize =
                (12 + Math.random() * 14)
                + "px";


            corazon.style.animationDuration =
                (4 + Math.random() * 4)
                + "s";


            contenedor.appendChild(
                corazon
            );


            setTimeout(
                function () {

                    corazon.remove();

                },
                8000
            );


        },
        350
    );

}


/* =================================
   FLORES FINALES
================================= */

function crearFloresFinales() {

    const contenedor =
        document.getElementById(
            "floresFinales"
        );


    contenedor.innerHTML =
        "🌻 🌼 🌻 🌼 🌻";

}


/* =================================
   SORPRESA FINAL
================================= */

botonSecreto.addEventListener(
    "click",
    function () {

        final.style.display =
            "none";


        secreto.style.display =
            "flex";


        crearCorazonesSecretos();

        window.scrollTo(
            0,
            0
        );

    }
);


/* =================================
   CORAZONES SECRETOS
================================= */

function crearCorazonesSecretos() {

    const contenedor =
        document.getElementById(
            "corazonesSecretos"
        );


    setInterval(
        function () {

            const corazon =
                document.createElement(
                    "div"
                );


            corazon.className =
                "corazonSecreto";


            corazon.textContent =
                Math.random() > 0.5
                    ? "💛"
                    : "✨";


            corazon.style.left =
                Math.random() * 100 + "%";


            corazon.style.animationDuration =
                (4 + Math.random() * 3)
                + "s";


            contenedor.appendChild(
                corazon
            );


            setTimeout(
                function () {

                    corazon.remove();

                },
                7000
            );


        },
        500
    );

}