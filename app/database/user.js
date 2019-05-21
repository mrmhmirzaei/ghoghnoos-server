const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    types = {
        string: { type: String, default: null },
        number: { type: Number, default: 0 },
        boolean: { type: Boolean, default: false },
        array: { type: Array, default: [] }
    },
    table = new Schema({
        name: {
            first: types.string,
            last: types.string
        },
        phone: {
            number: types.string,
            token: types.string,
            expire: types.number
        },
        location: {
            city: types.string,
            address: types.string,
            phone: types.string,
            code: types.string
        },
        info: {
            nationalCode: types.string,
        },
        trainee: {
            status: types.boolean,
            homeless: types.boolean,
            parrent: {
                who: { type: String, default: null },
                phone: { type: String, default: null }
            }
        },
        programmer: {
            status: types.boolean,
            languages: types.array,
            parts: types.array
        },
        designer: {
            status: types.boolean
        }
    });


module.exports = mongoose.model('user', table);