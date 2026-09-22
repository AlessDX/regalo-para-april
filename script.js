// =================================
// ELEMENTOS
// =================================

const botonComenzar =
    document.getElementById("botonComenzar");

const inicio =
    document.getElementById("inicio");

const jardin =
    document.getElementById("jardin");

const flores =
    document.getElementById("flores");

const botonCarta =
    document.getElementById("botonCarta");

const cartaSeccion =
    document.getElementById("cartaSeccion");

const sobre =
    document.getElementById("sobre");

const instruccion =
    document.getElementById("instruccion");

const botonContinuar =
    document.getElementById("botonContinuar");

const mensajesSeccion =
    document.getElementById("mensajesSeccion");

const mensajeGrande =
    document.getElementById("mensajeGrande");

const botonMensaje =
    document.getElementById("botonMensaje");

const contador =
    document.getElementById("contador");

const final =
    document.getElementById("final");

const petalos =
    document.getElementById("petalos");

const floresFinales =
    document.getElementById("floresFinales");

const botonSecreto =
    document.getElementById("botonSecreto");

const secreto =
    document.getElementById("secreto");



// =================================
// ABRIR REGALO
// =================================

botonComenzar.addEventListener(
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



// =================================
// CREAR FLORES
// =================================

function crearFlores() {

    for (
        let i = 0;
        i < 18;
        i++
    ) {

        const flor =
            document.createElement("div");

        flor.classList.add("flor");

        flor.textContent =
            "🌻";

        flor.style.left =
            Math.random() * 90 + "%";

        flor.style.bottom =
            Math.random() * 12 + "%";

        flor.style.animationDelay =
            Math.random() * 2 + "s";

        const tamaño =
            38 + Math.random() * 35;

        flor.style.fontSize =
            tamaño + "px";

        flores.appendChild(flor);

    }

}



// =================================
// BRILLOS
// =================================

function crearBrillos() {

    const contenedor =
        document.getElementById(
            "brillosJardin"
        );

    for (
        let i = 0;
        i < 25;
        i++
    ) {

        const brillo =
            document.createElement("div");

        brillo.textContent =
            "✨";

        brillo.style.position =
            "absolute";

        brillo.style.left =
            Math.random() * 100 + "%";

        brillo.style.top =
            Math.random() * 90 + "%";

        brillo.style.fontSize =
            10 + Math.random() * 15 + "px";

        brillo.style.opacity =
            0.3 + Math.random() * 0.7;

        brillo.style.animation =
            "aparecerBrillo 2s infinite alternate";

        brillo.style.animationDelay =
            Math.random() * 3 + "s";

        contenedor.appendChild(
            brillo
        );

    }

}



// =================================
// IR A LA CARTA
// =================================

botonCarta.addEventListener(
    "click",
    function () {

        jardin.style.display =
            "none";

        cartaSeccion.style.display =
            "block";

    }
);



// =================================
// ABRIR SOBRE
// =================================

sobre.addEventListener(
    "click",
    function () {

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



// =================================
// CONTINUAR
// =================================

botonContinuar.addEventListener(
    "click",
    function () {

        cartaSeccion.style.display =
            "none";

        mensajesSeccion.style.display =
            "block";

        numeroMensaje = 0;

        mostrarMensaje();

    }
);



// =================================
// MENSAJES
// =================================

const mensajes = [

    "Gracias por llegar a mi vida. 💛",

    "Me encanta compartir momentos contigo.",

    "Tu sonrisa puede cambiar completamente mi día.",

    "Contigo, hasta los momentos más simples se vuelven especiales.",

    "Hay muchas cosas que quizá no digo lo suficiente...",

    "Pero quiero que sepas que eres muy importante para mí.",

    "Y hoy quería recordártelo de una manera diferente. 🌻"

];


let numeroMensaje = 0;



function mostrarMensaje() {

    mensajeGrande.style.animation =
        "none";

    void mensajeGrande.offsetWidth;

    mensajeGrande.style.animation =
        "aparecerMensaje 0.8s ease";

    mensajeGrande.textContent =
        mensajes[numeroMensaje];

    contador.textContent =
        (numeroMensaje + 1)
        + " / "
        + mensajes.length;

}



// =================================
// SIGUIENTE MENSAJE
// =================================

botonMensaje.addEventListener(
    "click",
    function () {

        numeroMensaje++;


        if (
            numeroMensaje >=
            mensajes.length
        ) {

            mostrarFinal();

            return;

        }


        mostrarMensaje();

    }
);



// =================================
// ESCENA FINAL
// =================================

function mostrarFinal() {

    mensajesSeccion.style.display =
        "none";

    final.style.display =
        "block";

    crearFloresFinales();

    iniciarLluviaPetalos();

}



// =================================
// FLORES FINALES
// =================================

function crearFloresFinales() {

    for (
        let i = 0;
        i < 40;
        i++
    ) {

        const flor =
            document.createElement("div");

        flor.classList.add(
            "florFinal"
        );

        flor.textContent =
            "🌻";

        flor.style.left =
            Math.random() * 95 + "%";

        flor.style.fontSize =
            28 + Math.random() * 38 + "px";

        flor.style.animationDelay =
            Math.random() * 3 + "s";

        floresFinales.appendChild(
            flor
        );

    }

}



// =================================
// LLUVIA DE PÉTALOS
// =================================

function iniciarLluviaPetalos() {

    setInterval(
        crearPetalo,
        280
    );

}



function crearPetalo() {

    const petalo =
        document.createElement("div");

    petalo.classList.add(
        "petalo"
    );

    petalo.textContent =
        Math.random() > 0.5
        ? "💛"
        : "✨";

    petalo.style.left =
        Math.random() * 100 + "%";

    petalo.style.animationDuration =
        4 + Math.random() * 5 + "s";

    petalo.style.fontSize =
        12 + Math.random() * 18 + "px";

    petalos.appendChild(
        petalo
    );


    setTimeout(
        function () {

            petalo.remove();

        },
        9000
    );

}



// =================================
// SORPRESA SECRETA
// =================================

botonSecreto.addEventListener(
    "click",
    function () {

        final.style.display =
            "none";

        secreto.style.display =
            "flex";

        lanzarCorazones();

    }
);



// =================================
// CORAZONES FINALES
// =================================

function lanzarCorazones() {

    for (
        let i = 0;
        i < 20;
        i++
    ) {

        const corazon =
            document.createElement("div");

        corazon.textContent =
            "💛";

        corazon.style.position =
            "absolute";

        corazon.style.left =
            Math.random() * 100 + "%";

        corazon.style.bottom =
            "-30px";

        corazon.style.fontSize =
            15 + Math.random() * 25 + "px";

        corazon.style.zIndex =
            "3";

        corazon.style.animation =
            "subirCorazon 4s linear forwards";

        secreto.appendChild(
            corazon
        );


        setTimeout(
            function () {

                corazon.remove();

            },
            4500
        );

    }

}