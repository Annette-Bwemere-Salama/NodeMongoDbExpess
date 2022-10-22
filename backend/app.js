const express = require('express');

const app = express();


app.use((req, res, next) => {
    console.log('Requête reçue !');
    next();
});

app.use((req, res, next) => {
    res.status(201);
    next();
});



app.use((req, res, next) => {
    res.json({ message: 'Votre réquete à ete bien réussie' });
    next()
});


app.use((req, res, next) => {
    console.log('Fait Avec Annette');
})


module.exports = app;