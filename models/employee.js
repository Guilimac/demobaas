const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let employeeSchema = new Schema({
    name: String,
    photoUrl:String,
    birthDate: Date,
    handle: String,
    schedule: [{
        dayOfWeek: Number,
        hour: Date,
        timeout: Number
    }]
})

module.exports = mongoose.model('employee', employeeSchema);