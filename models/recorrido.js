var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recorridoSchema = new Schema({ 
 codigo_nfc: { type: String },
 numero_usuario: {type: Number},
 hora_inicio: {type: Date},
 lat_inicio: {type: String},
 long_inicio: {type: String},
 hora_fin: { type: Date },
 lat_fin: {type: String},
 long_fin: {type: String},
 estado: {type: String, enum: ['A', 'C']},
 anulado: {type: Boolean},
 fecha_registro: {type: Date},
 fecha_modificado: {type: Date}
});

module.exports = mongoose.model('Recorrido', recorridoSchema);