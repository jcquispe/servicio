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
//choferes
var choferModel = require('./models/chofer')(app, mongoose);
var choferController = require('./controllers/choferController');
//vehiculos
var vehiculoModel = require('./models/vehiculo')(app, mongoose);
var vehiculoController = require('./controllers/vehiculoController');
//sindicatos
var sindicatoModel = require('./models/sindicato')(app, mongoose);
var sindicatoController = require('./controllers/sindicatoController');
//relaciones
var relacionModel = require('./models/relacion')(app, mongoose);
var relacionController = require('./controllers/relacionController');
//usuarios
var usuarioModel = require('./models/usuario')(app, mongoose);
var usuarioController = require('./controllers/usuarioController');
//autorizados
var autorizadoModel = require('./models/autorizado')(app, mongoose);
var autorizadoController = require('./controllers/autorizadoController');

//Definimos la ruta del proyecto
var router = express.Router();
app.use(router);

//Definimos la ruta del API
var api = express.Router();
//choferes
api.route('/choferes') 
 .get(choferController.findAll)
 .post(choferController.add);

api.route('/choferes/:id') 
 .get(choferController.findById)
 .put(choferController.update);

//vehiculos
api.route('/vehiculos') 
 .get(vehiculoController.findAll)
 .post(vehiculoController.add);

api.route('/vehiculos/:id') 
 .get(vehiculoController.findById)
 .put(vehiculoController.update);

//sindicatos
api.route('/sindicatos') 
 .get(sindicatoController.findAll)
 .post(sindicatoController.add);

api.route('/sindicatos/:id') 
 .get(sindicatoController.findById)
 .put(sindicatoController.update);

//relacion
api.route('/relaciones') 
 .get(relacionController.findAll)
 .post(relacionController.add);

api.route('/relaciones/:id') 
 .get(relacionController.findById)
 .put(relacionController.update);

//usuario
api.route('/usuarios') 
 .get(usuarioController.findAll)
 .post(usuarioController.add);

api.route('/usuarios/:id') 
 .get(usuarioController.findById)
 .put(usuarioController.update);

//autorizado
api.route('/autorizados') 
 .get(autorizadoController.findAll)
 .post(autorizadoController.add);

api.route('/autorizados/:id') 
 .get(autorizadoController.findById)
 .put(autorizadoController.update);

app.use('/api', api);

//Iniciar el servidor
app.listen(8080, function() {
 console.log("Servidor corriendo en http://localhost:8080");
});
