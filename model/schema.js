const mongo = require("mongoose");
const { Schema } = mongo;

const userSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    Telefone: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        require: true,
        // default: Date.call
    },
    image:{
        type: String,
        required: true
    },
    created: {
        type: Date,
        required: true,
        default: Date.now
    }
});
// const infoSchema = new Schema({
//     nome: {
//         type: String,
//         required: true
//     },
//     Date: {
//         type: Date,
//         require: true,
//         default: Date
//     },
//     completed: {
//         type: Boolean,
//         require: true
//     },
//     created: {
//         type: Date,
//         require: true,
//         default: Date.now
//     }
    
// })


module.exports = mongo.model('User',userSchema);