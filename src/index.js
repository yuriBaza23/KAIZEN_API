'use strict';

const nodemailer = require('nodemailer');
const express = require('express');

var app = express(); 

var remetente = nodemailer.createTransport({
    host: 'smtp.elasticemail.com',
    port: 2525,
    secure: false,
    auth:{
    user: 'yurisbaza@gmail.com',
    pass: 'D79A7BA73032910B2FE0FAFAB234D22E4175' }
});

app.get('/', function(req, res){
    res.json({'Bem vindo a': 'KAIZEN API'})
})

app.post('/sendMail', function(req, res){
    var emailASerEnviado = {
        from: 'yurisbaza@gmail.com',
        to: 'yurisbaza@gmail.com',
        subject: req.body.subject,
        text: req.body.text
    }
    
    remetente.sendMail(emailASerEnviado, function(error, info){
        if(error){
            res.json(error)
        } else {
            res.json({'Email Enviado': info.response})
        }
    })
});

app.listen(process.env.PORT, function () {
    console.log('KAIZEN API');
  });