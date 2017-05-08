var mongoose = require('mongoose');
var Sindicato = mongoose.model('sindicato');

//GET - Devuelve todos
exports.findAll = function(req, res) {
 Sindicato.find(function(err, sindicatos) {
 if(err) {
 	return res.send(500, err.message);
 }
 console.log('GET /sindicatos')
 res.status(200).jsonp(sindicatos);
 });
};

//GET - Devuelve solo uno
exports.findById = function(req, res) {
 Sindicato.findById(req.params.id, function(err, sindicatos) {
 if(err) {
 	return res.send(500, err.message);
 }
 console.log('GET /sindicatos/' + req.params.id);
 res.status(200).jsonp(sindicatos);
 });
};

//POST - Inserta un registro
exports.add = function(req, res) {
  console.log('POST /sindicatos');
  console.log(req.body);
	
  var codigoV = req.body.codigo;
  var nombreV = req.body.nombre;
  var direccionV = req.body.direccion;
  var sindicato = new Sindicato({
		  codigo: codigoV.toUpperCase(),
		  nombre: nombreV.toUpperCase(),
		  fecha_fundacion: req.body.fundacion,
		  telefono: req.body.telefono,
		  direccion: direccionV.toUpperCase(),
		  anulado: false,
		  fecha_registro: new Date(),
		  fecha_modificado: null
  });
  sindicato.save(function(err, sindicato) {
  	if(err) 
 			return res.send(500, err.message);
  	res.status(200).jsonp(sindicato);
  });
};

//PUT - Modifica un registro existente
exports.update = function(req, res) {
	console.log('PUT /sindicatos/'+req.params.id);
	console.log(req.body);
	var codigoV = req.body.codigo;
  var nombreV = req.body.nombre;
  var direccionV = req.body.direccion;
 Sindicato.findById(req.params.id, function(err, sindicato) {
	 sindicato.codigo = codigoV.toUpperCase();
	 sindicato.nombre = nombreV.toUpperCase();
	 sindicato.fecha_fundacion = req.body.fundacion;
	 sindicato.telefono = req.body.telefono;
	 sindicato.direccion = direccionV.toUpperCase();
	 sindicato.anulado = req.body.anulado;
	 sindicato.fecha_modificado = new Date();

	 sindicato.save(function(err) {
		 if(err) {
		 	return res.send(500, err.message);
		 }
		 res.status(200).jsonp(sindicato);
 	 });
 });
};

