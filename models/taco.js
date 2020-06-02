const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tacoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}]
})

module.exports = mongoose.model('Taco', tacoSchema);