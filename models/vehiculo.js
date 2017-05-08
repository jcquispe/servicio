var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var vehiculoSchema = new Schema({ 
 placa: { type: String },
 marca: { type: String },
 modelo: {type: String},
 gestion: {type: Number},
 color: {type: String},
 descripcion: {type: String},
 chasis: { type: String},
 fotografia: {type: String},
 anulado: {type: Boolean},
 fecha_registro: {type: Date},
 fecha_modificado: {type: Date}
});

module.exports = mongoose.model('vehiculo', vehiculoSchema);