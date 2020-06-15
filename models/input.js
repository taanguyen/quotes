const mongoose = require('mongoose');

const inputSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    quote: String
});

module.exports = mongoose.model("Input", inputSchema);