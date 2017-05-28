var mongoose = require('mongoose');
var Autorizado = mongoose.model('autorizado');

//GET - Devuelve todos
exports.findAll = function(req, res) {
 Autorizado.find(function(err, autorizados) {
 if(err) {
 	return res.send(500, err.message);
 }
 console.log('GET /autorizados')
 res.status(200).jsonp(autorizados);
 });
};

//GET - Devuelve solo uno
exports.findById = function(req, res) {
 Autorizado.findById(req.params.id, function(err, autorizados) {
 if(err) {
 	return res.send(500, err.message);
 }
 console.log('GET /autorizados/' + req.params.id);
 res.status(200).jsonp(autorizados);
 });
};

//POST - Inserta un registro
exports.add = function(req, res) {
  console.log('POST /autorizados');
  console.log(req.body);
	var autorizado = new Autorizado({
			numero_usuario: req.body.numero,
		  token_autorizado: req.body.token,
      estado: req.body.estado,
		  anulado: false,
		  fecha_registro: new Date(),
		  fecha_modificado: null
  });
  autorizado.save(function(err, autorizado) {
  	if(err) 
 			return res.send(500, err.message);
  	res.status(200).jsonp(autorizado);
  });
};

//PUT - Modifica un registro existente
exports.update = function(req, res) {
	console.log('PUT /autorizados/'+req.params.id);
	console.log(req.body);
 Autorizado.findById(req.params.id, function(err, autorizado) {
	 autorizado.numero_usuario = req.body.numero;
	 autorizado.token_autorizado = req.body.token;
   autorizado.estado = req.body.estado;
	 autorizado.anulado = req.body.anulado;
	 autorizado.fecha_modificado = new Date();

	 autorizado.save(function(err) {
		 if(err) {
		 	return res.send(500, err.message);
		 }
		 res.status(200).jsonp(autorizado);
 	 });
 });
};

