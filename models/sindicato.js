var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sindicatoSchema = new Schema({ 
 codigo: { type: String },
 nombre: { type: String },
 fecha_fundacion: {type: Date},
 logo: {type: String},
 telefono: {type: Number},
 direccion: {type: String},
 anulado: {type: Boolean},
 fecha_registro: {type: Date},
 fecha_modificado: {type: Date}
});

module.exports = mongoose.model('sindicato', sindicatoSchema);