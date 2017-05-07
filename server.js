var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require("method-override");
var app = express();

//Coneccion a la base de datos
mongoose.connect('mongodb://localhost/univalle', function(err, res) {
 if(err) throw err;
 console.log('Conectado a la base de datos');
});

//Definimos carpeta de acceso publico
app.use(express.static('public'));

// Middlewares
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 
app.use(methodOverride());

//Importar los modelos y controladores
var choferModel = require('./models/chofer')(app, mongoose);
var choferController = require('./controllers/choferController');

//Definimos la ruta del proyecto
var router = express.Router();
app.use(router);

//Definimos la ruta del API
var api = express.Router();

api.route('/choferes') 
 .get(choferController.findAll)
 .post(choferController.add);

api.route('/choferes/:id') 
 .get(choferController.findById)
 .put(choferController.update);

app.use('/api', api);

//Iniciar el servidor
app.listen(3000, function() {
 console.log("Servidor corriendo en http://localhost:3000");
});
