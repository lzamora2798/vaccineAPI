const mongoose = require('mongoose');

const PersonSchema = mongoose.Schema({
    nombre : {
        type: String,
        require : true 
    },
    edad : {
        type: String,
        require : true 
    },
    cedula : {
        type: String,
        require : true,
        unique:true,
    },
    date:{
        type:Date,
        default:Date.now,
    }
});

module.exports = mongoose.model('Person',PersonSchema);