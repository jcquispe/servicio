var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var choferSchema = new Schema({ 
 ci: { type: Number },
 exp: { type: String },
 nombres: {type: String},
 apellidos: {type: String},
 genero: { type: String, enum: ['M', 'F'] },
 fecha_nacimiento: {type: Date},
 fotografia: {type: String},
 anulado: {type: Boolean},
 fecha_registro: {type: Date},
 fecha_modificado: {type: Date}
});

module.exports = mongoose.model('chofer', choferSchema);