const mongoose = require('mongoose');
const credentials = require('../credentials');
mongoose.connect(credentials.mongo.development.connectionString);

const conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));

const mySchema = mongoose.Schema({
    _id: Number,
    name: {
        type: String,
        required: true
    },
    cards: {
        nocturne: [String],
        dominion: [String],
        intrigue: [String],
        adventures: [String],
    }
});

module.exports = mongoose.model('Deck', mySchema);