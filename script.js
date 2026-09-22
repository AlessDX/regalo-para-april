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

const botonContinuar =
    document.getElementById("botonContinuar");

const mensajesSeccion =
    document.getElementById("mensajesSeccion");

const mensajeGrande =
    document.getElementById("mensajeGrande");

const botonMensaje =
    document.getElementById("botonMensaje");

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

    }
);



// =================================
// CREAR FLORES DEL JARDÍN
// =================================

function crearFlores() {

    for (
        let i = 0;
        i < 15;
        i++
    ) {

        const flor =
            document.createElement("div");

        flor.classList.add("flor");

        flor.textContent =
            "🌻";

        flor.style.left =
            Math.random() * 85 + "%";

        flor.style.bottom =
            Math.random() * 10 + "%";

        flor.style.animationDelay =
            Math.random() * 2 + "s";

        const tamaño =
            40 + Math.random() * 30;

        flor.style.fontSize =
            tamaño + "px";

        flores.appendChild(flor);

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

    }
);



// =================================
// CONTINUAR DESDE LA CARTA
// =================================

botonContinuar.addEventListener(
    "click",
    function () {

        cartaSeccion.style.display =
            "none";

        mensajesSeccion.style.display =
            "block";

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
// CREAR MUCHAS FLORES
// =================================

function crearFloresFinales() {

    for (
        let i = 0;
        i < 35;
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
            30 + Math.random() * 35 + "px";

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
        350
    );

}



function crearPetalo() {

    const petalo =
        document.createElement("div");

    petalo.classList.add(
        "petalo"
    );

    petalo.textContent =
        "💛";

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

    }
);