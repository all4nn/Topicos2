const mongoose = require("mongoose");

const ClienteModelSchema = new mongoose.Schema({
    cpf: String,
    fidelidade: Boolean,
    nome: String,
    telefone: String

});


module.exports = mongoose.model('Cliente', ClienteModelSchema);