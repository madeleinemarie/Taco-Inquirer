const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tacoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
})

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    neighborhood: {
        type: String
    },
    tacos: [tacoSchema]
});

module.exports = mongoose.model('Restaurant', restaurantSchema);