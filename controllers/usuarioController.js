var mongoose = require('mongoose');
var Usuario = mongoose.model('usuario');

//GET - Devuelve todos
exports.findAll = function(req, res) {
 Usuario.find(function(err, usuarios) {
 if(err) {
 	return res.send(500, err.message);
 }
 console.log('GET /usuarios')
 res.status(200).jsonp(usuarios);
 });
};

//GET - Devuelve solo uno
exports.findById = function(req, res) {
 Usuario.findById(req.params.id, function(err, usuarios) {
 if(err) {
 	return res.send(500, err.message);
 }
 console.log('GET /usuarios/' + req.params.id);
 res.status(200).jsonp(usuarios);
 });
};

//POST - Inserta un registro
exports.add = function(req, res) {
  console.log('POST /usuarios');
  console.log(req.body);
	var usuario = new Usuario({
			_id: req.body.token,  
			numero_cel: req.body.celular,
			imei_cel: req.body.imei,
		  nombre_usuario: req.body.nombre,
		  anulado: false,
		  fecha_registro: new Date(),
		  fecha_modificado: null
  });
  usuario.save(function(err, usuario) {
  	if(err) 
 			return res.send(500, err.message);
  	res.status(200).jsonp(usuario);
  });
};

//PUT - Modifica un registro existente
exports.update = function(req, res) {
	console.log('PUT /usuarios/'+req.params.id);
	console.log(req.body);
 Usuario.findById(req.params.id, function(err, usuario) {
	 usuario.numero_cel = req.body.celular;
	 usuario.imei_cel = req.body.imei;
	 usuario.nombre_usuario = req.body.nombre;
	 usuario.anulado = req.body.anulado;
	 usuario.fecha_modificado = new Date();

	 usuario.save(function(err) {
		 if(err) {
		 	return res.send(500, err.message);
		 }
		 res.status(200).jsonp(usuario);
 	 });
 });
};

