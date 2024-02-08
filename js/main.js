const firebaseConfig = {
    apiKey: "AIzaSyCoCqY_p8z0tkJEdyxeaUkvp6zCUrmR5Eg",
    authDomain: "lex-free.firebaseapp.com",
    projectId: "lex-free",
    storageBucket: "lex-free.appspot.com",
    messagingSenderId: "722811007630",
    appId: "1:722811007630:web:e7d24ee5eb1ed6ebc4cfdf"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

var formulario = document.getElementById('formulario');
const saveCliente = (nombre, telefono, mail, mensaje) =>
    db.collection("Cliente").doc().set({
        nombre,
        telefono,
        mail,
        mensaje
    })

// Initialize Firebase
/* const app = initializeApp(firebaseConfig); */


/* // function fueEnviado() {
//     alert("El formulario a sido enviado exitosamente");
// }
//Variables
const nombreImput = document.querySelector("#nombre");
const telefonoImput = document.querySelector("#telefono");
const emailImput = document.querySelector("#email");
const mensajeImput = document.querySelector("#mensaje");
const btnEnviar = document.querySelector(".boton--primario");
const formulario = document.querySelector(".formulario");
const datos = {
        nombre: "",
        telefono: "",
        email: "",
        mensaje: ""
    }
    //añadimos a los cuadros de texto leer texto
nombreImput.addEventListener("input", leerTexto);
telefonoImput.addEventListener("input", leerTexto);
emailImput.addEventListener("input", leerTexto);
mensajeImput.addEventListener("input", leerTexto);

// funcion que lee texto con id
function leerTexto(e) {
    datos[e.target.id] = e.target.value;
    console.log(datos);
}
// funcion submit
formulario.addEventListener("submit", function(e) {
        e.preventDefault();
        console.log("Enviando Formulario");
        const { nombre, email, mensaje } = datos;
        if (nombre === "" || telefono === "" || email === "" || mensaje === "") {
            mostrarError("Debe llenar todos los campos");
            return;
        }
        mostrarMensaje("los campos se han enviado correctamente");


        console.log(nombre, " ", telefono, "", email, " ", mensaje);
    })
    // funcion que mustra mensaje
function mostrarError(mensaje) {
    const error = document.createElement("p")
    error.textContent = mensaje;
    console.log(error);
    error.classList.add("error");
    formulario.appendChild(error);
    setTimeout(() => {
        error.remove();
    }, 3000);
}



function mostrarMensaje(mensaje) {
    const alerta = document.createElement("p")
    alerta.textContent = mensaje;
    // console.log(correcto);
    alerta.classList.add("correcto");
    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 3000);
} */