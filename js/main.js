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
                To: 'alexisgabruiel.lu@gmail.com',
                From: "alexisgabruiel.lu@gmail.com",
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
        }
    })
    /* import nodemailer from 'nodemailer'; */
    /* const nodemailer = ("nodemailer");

    const transporter = nodemailer.createTransport({
        host: "smtp.resend.com",
        port: 465,
        secure: true, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: "resend",
            pass: "re_5akKiyHA_4xm37V8UHyiFZvgXBU6jZ9Tz", //Aqui va la ApiKey de resent generada
        },
    });

    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: '"Lex Luna 👻" <alexisgabriel.lu@gmail.com>', // sender address
            to: "alexisgabriel.lu@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    }

    main().catch(console.error); */