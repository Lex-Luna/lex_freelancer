/* import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js"; */
const firebaseConfig = {
    apiKey: "AIzaSyBt9UbZsYj21ZMyPqckh7pAqZK4_-IVbsE",
    authDomain: "lexfreelancer-a33e7.firebaseapp.com",
    projectId: "lexfreelancer-a33e7",
    storageBucket: "lexfreelancer-a33e7.appspot.com",
    messagingSenderId: "19415787627",
    appId: "1:19415787627:web:a828c571e81a0fe587292e",
    measurementId: "G-J29VLGNRBS"
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
    /* formulario.addEventListener("submit", async(e) => {
            e.preventDefault();
            const nombre = formulario["Nombre"];
            const telefono = formulario["Telefono"];
            const mail = formulario["Mail"];
            const mensaje = formulario["Mensaje"];
            try {
                await savePregunta(nombre.value, telefono.value, mail.value, mensaje.value);
                formulario.reset();
                alert('La información ha sido enviada correctamente');
                nombre.focus();
            } catch (error) {
                alert("No ha sido posible enviar los datos");
            }
        }) */
    // Obtén el botón dropdown
    /* var dropdown = document.querySelector('.dropdown'); */
    // Agrega un evento de clic al botón dropdown
    /* dropdown.addEventListener('click', function(event) {
        // Obtén el contenido del dropdown
        var dropdownContent = this.querySelector('.dropdown-content');
        // Alterna la visibilidad del contenido del dropdown
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    }); */
    // Inicializa el carrusel
    /* $(document).ready(function() {
        $('#carouselExampleSlidesOnly').carousel();
    }); */