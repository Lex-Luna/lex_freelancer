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