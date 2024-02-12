/* import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js"; */


const firebaseConfig = {
    apiKey: "AIzaSyBAsPy0-NOe_VgdLgQmWecLk0lz5hfkqvM",
    authDomain: "freelancelex-d2f93.firebaseapp.com",
    projectId: "freelancelex-d2f93",
    storageBucket: "freelancelex-d2f93.appspot.com",
    messagingSenderId: "309162826540",
    appId: "1:309162826540:web:4efa32a77960a11b04aa89"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
var formulario = document.getElementById('Formu');
const savePregunta = (nombre, telefono, mail, mensaje) =>
    db.collection("Pregunta").doc().set({
        nombre,
        telefono,
        mail,
        mensaje
    })
formulario.addEventListener("submit", async(e) => {
    e.preventDefault();
    const nombre = formulario["Nombre"];
    const telefono = formulario["Telefono"];
    const mail = formulario["Mail"];
    const mensaje = formulario["Mensaje"];
    await savePregunta(nombre.value, telefono.value, mail.value, mensaje.value);
    nombre.focus();
    formulario();
})