const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const uploadSchema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    country: { type: String, required: true },
    text: { type: String, required: true },
    image: {
        type: String,
        required: false,
    }
});

module.exports = mongoose.model('Upload', uploadSchema);