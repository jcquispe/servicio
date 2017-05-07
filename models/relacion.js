var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var relacionSchema = new Schema({ 
 ci_chofer: { type: Number },
 placa_vehiculo: { type: String },
 codigo_sindicato: {type: String},
 codigo_nfc: {type: String},
 anulado: {type: Boolean},
 fecha_registro: {type: Date},
 fecha_modificado: {type: Date}
});

module.exports = mongoose.model('Relacion', relacionSchema);