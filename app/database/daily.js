const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    types = {
        string: { type: String, default: null },
        number: { type: Number, default: 0 },
        boolean: { type: Boolean, default: false },
        array: { type: Array, default: [] }
    },
    table = new Schema({
        user: { type: Schema.Types.ObjectId, ref: 'user' },
        date: {
            year: types.string,
            month: types.string,
            day: types.string
        },
        time: {
            from: {
                hour: types.string,
                minute: types.string,
            },
            to: {
                hour: types.string,
                minute: types.string,
            }
        },
        actions: types.array,
        files: types.array,
        marks
    });


module.exports = mongoose.model('daily', table);