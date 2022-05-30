const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'passiflorio@gmail.com',
        pass: 'passiflorio123'
    }
});

let correos = ['tomasgarciagonzalo@gmail.com'];

const send = async(asunto, contenido, correos) => {
    const mailOptions = {
        from: 'passiflorio@gmail.com',
        to: correos,
        subject: asunto,
        html: contenido
    }

    transporter.sendMail(mailOptions, (err, info) => {
        console.log(info.messageId);
    });
}

app.listen(3000, () => console.log("Servidor activo http://localhost:3000"));

app.use("/assets", express.static(`${__dirname}/assets`));

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/aboutMe.html`)
});

app.get("/contacto", (req, res) => {
    res.sendFile(`${__dirname}/contacto.html`)
});

app.get("/proyectos", (req, res) => {
    res.sendFile(`${__dirname}/proyectos.html`)
});