var mongoose = require('mongoose');
var Relacion = mongoose.model('relacion');

//GET - Devuelve todos
exports.findAll = function(req, res) {
 Relacion.find(function(err, relaciones) {
 if(err) {
 	return res.send(500, err.message);
 }
 console.log('GET /relaciones')
 res.status(200).jsonp(relaciones);
 });
};

//GET - Devuelve solo uno
exports.findById = function(req, res) {
 Relacion.findById(req.params.id, function(err, relaciones) {
 if(err) {
 	return res.send(500, err.message);
 }
 console.log('GET /relaciones/' + req.params.id);
 res.status(200).jsonp(relaciones);
 });
};

//POST - Inserta un registro
exports.add = function(req, res) {
  console.log('POST /relaciones');
  console.log(req.body);
	var relacion = new Relacion({
		  ci_chofer: req.body.chofer,
		  placa_vehiculo: req.body.vehiculo,
		  codigo_sindicato: req.body.sindicato,
		  codigo_nfc: req.body.nfc,
		  anulado: false,
		  fecha_registro: new Date(),
		  fecha_modificado: null
  });
  relacion.save(function(err, relacion) {
  	if(err) 
 			return res.send(500, err.message);
  	res.status(200).jsonp(relacion);
  });
};

//PUT - Modifica un registro existente
exports.update = function(req, res) {
	console.log('PUT /relaciones/'+req.params.id);
	console.log(req.body);
 Relacion.findById(req.params.id, function(err, relacion) {
	 relacion.ci_chofer = req.body.chofer;
	 relacion.placa_vehiculo = req.body.placa;
	 relacion.codigo_sindicato = req.body.sindicato;
	 relacion.codigo_nfc = req.body.nfc;
	 relacion.anulado = req.body.anulado;
	 relacion.fecha_modificado = new Date();

	 relacion.save(function(err) {
		 if(err) {
		 	return res.send(500, err.message);
		 }
		 res.status(200).jsonp(relacion);
 	 });
 });
};

