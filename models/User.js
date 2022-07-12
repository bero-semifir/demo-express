const mongoose = require('mongoose');

// Schema Mongoose pour atténuer le coté Schemaless de MongoDB
const schema = {
    _id:        { type: String },
    lastname:   { type: String,  required: true },
    firstname:  { type: String,  required: true },
    birthdate:  { type: Date,    required: false },
}

// Création du schema (validation d'une entitée)
const UserSchema = new mongoose.Schema(schema);

// Création du model (permet d'exposer les entitées dans mongo)
const User = mongoose.model('User', UserSchema);

// Export du model
module.exports = User;
