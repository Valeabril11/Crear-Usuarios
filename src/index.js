const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const userRoutes = require('./route/userroute.js');

let usuario = {
 nombre:'',
 apellido: ''
};
let respuesta = {
 error: false,
 codigo: 200,
 mensaje: ''
};

app.use(cors());
app.use(userRoutes);
app.use(function(req, res, next) {
 respuesta = {
  error: true, 
  codigo: 404, 
  mensaje: 'URL no encontrada'
 };
 res.status(404).send(respuesta);
});
app.listen(4000, () => {
 console.log("El servidor está inicializado en el puerto 4000");
});