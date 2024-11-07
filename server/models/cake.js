const mongoose = require('mongoose');

const cakeSchema = new mongoose.Schema({
    style: {
        type: String,
        required: true
    },
    cakeFlavour:{
        type: String,
        required: true
    },
    frostingFlavour: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }

     
});

module.exports = mongoose.model('Cake', cakeSchema);