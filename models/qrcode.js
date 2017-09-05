const mongoose = require('mongoose');
let Schema = mongoose.Schema;

qrSchema = new Schema({
    createdAt: {type:Date, default: Date.now},
    imgPath: String,
    employee: {type: Schema.Types.ObjectId, ref: 'employee'},
    validUntil: Date,
    status: String,
    usedAt: Date
});

module.exports = mongoose.model('qrcode', qrSchema);