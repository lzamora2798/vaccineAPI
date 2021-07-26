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
    lugar : {
        type: String,
        require : false ,
        default : 'ESPOL',
    },
    fecha_vac : {
        type:Date,
        default:new Date("2021-08-10T14:44:56.289Z"),
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