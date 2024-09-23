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

formulario.addEventListener("submit", async(e) => {
    e.preventDefault();
    const nombre = formulario["Nombre"];
    const telefono = formulario["Telefono"];
    const mail = formulario["Mail"];
    const mensaje = formulario["Mensaje"];
    try {

        await savePregunta(nombre.value, telefono.value, mail.value, mensaje.value);
        Email.send({
            SecureToken: "e1248656-4bbb-430e-b57c-aa18f08a51ba",
            To: 'alexisgabriel.lu@gmail.com',
            From: "alexisgabriel.lu@gmail.com",
            Subject: "Test email",
            Body: `Nombre: ${nombre.value}\nTeléfono: ${telefono.value}\nCorreo: ${mail.value}\nMensaje: ${mensaje.value}`

        }).then(
            message => alert(message)
        );
        formulario.reset();
        alert('La información ha sido enviada correctamente');
        nombre.focus();

    } catch (error) {
        alert("No ha sido posible enviar los datos " + error.mensaje);
        console.log(error)
    }
})