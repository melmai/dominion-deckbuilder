const mongoose = require('mongoose');
const credentials = require('../credentials');
mongoose.connect(credentials.mongo.development.connectionString);

const conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));

const mySchema = mongoose.Schema({
    id: Number,
    name: {
        type: String,
        required: true
    },
    cost: Number,
    class: [String],
    abilities: {
        buy: Number,
        card: Number,
        action: Number,
        money: Number,
        trash: Number
    },
    text: String,
    reactionText: String,
    upgrade: Boolean,
    box: String,
    extraSetup: String
});

module.exports = mongoose.model('Card', mySchema);