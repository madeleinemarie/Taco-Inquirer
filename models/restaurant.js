const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const reviewSchema = require('./review')

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    neighborhood: {
        type: String
    },
    tacos: [{type: Schema.Types.ObjectId, ref: 'Taco'}]
});

module.exports = mongoose.model('Restaurant', restaurantSchema);