const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    types = {
        string: { type: String, default: null },
        number: { type: Number, default: 0 },
        boolean: { type: Boolean, default: false },
        array: { type: Array, default: [] }
    },
    table = new Schema({
        admin: { type: Schema.Types.ObjectId, ref: 'admin' }
    });


module.exports = mongoose.model('mark', table);