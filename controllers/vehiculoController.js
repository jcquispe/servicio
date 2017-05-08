var mongoose = require('mongoose');
var Vehiculo = mongoose.model('vehiculo');

//GET - Devuelve todos
exports.findAll = function(req, res) {
 Vehiculo.find(function(err, vehiculos) {
 if(err) {
 	return res.send(500, err.message);
 }
 console.log('GET /vehiculos')
 res.status(200).jsonp(vehiculos);
 });
};

//GET - Devuelve solo uno
exports.findById = function(req, res) {
 Vehiculo.findById(req.params.id, function(err, vehiculos) {
 if(err) {
 	return res.send(500, err.message);
 }
 console.log('GET /vehiculos/' + req.params.id);
 res.status(200).jsonp(vehiculos);
 });
};

//POST - Inserta un registro
exports.add = function(req, res) {
  console.log('POST /vehiculos');
  console.log(req.body);
	
  var placaV = req.body.placa;
  var marcaV = req.body.marca;
  var modeloV = req.body.modelo;
  var colorV = req.body.color;
  var vehiculo = new Vehiculo({
		  placa: placaV.toUpperCase(),
		  marca: marcaV.toUpperCase(),
		  modelo: modeloV.toUpperCase(),
		  gestion: req.body.gestion,
		  color: colorV.toUpperCase(),
		  descripcion: req.body.descripcion,
      chasis: req.body.chasis,
		  anulado: false,
		  fecha_registro: new Date(),
		  fecha_modificado: null
  });
  vehiculo.save(function(err, vehiculo) {
  	if(err) 
 			return res.send(500, err.message);
  	res.status(200).jsonp(vehiculo);
  });
};

//PUT - Modifica un registro existente
exports.update = function(req, res) {
	console.log('PUT /vehiculos/'+req.params.id);
	console.log(req.body);
	var placaV = req.body.placa;
  var marcaV = req.body.marca;
  var modeloV = req.body.modelo;
  var colorV = req.body.color;
 Vehiculo.findById(req.params.id, function(err, vehiculo) {
	 vehiculo.placa = placaV.toUpperCase();
	 vehiculo.marca = marcaV.toUpperCase();
	 vehiculo.modelo = modeloV.toUpperCase();
	 vehiculo.gestion = req.body.gestion;
	 vehiculo.color = colorV.toUpperCase();
   vehiculo.descripcion = req.body.descripcion;
   vehiculo.chasis = req.body.chasis;
	 vehiculo.anulado = req.body.anulado;
	 vehiculo.fecha_modificado = new Date();

	 vehiculo.save(function(err) {
		 if(err) {
		 	return res.send(500, err.message);
		 }
		 res.status(200).jsonp(vehiculo);
 	 });
 });
};

