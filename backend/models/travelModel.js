const mongoose = require('mongoose');

const travelSchema = new mongoose.Schema({
    title: { type: String, required: true },
    story: { type: String, required: true },
    visitedLocation: { type: [String], default: []},
    isFavourite: { type: Boolean, default: false },
    userId: {type: mongoose.Schema.ObjectId, ref: 'User', required: true},
    imageUrl: { type: String, required: true },
    visitedDate: { type: Date, required: true }
}, { timestamps: true });

const Travel = mongoose.model('Travel', travelSchema);

module.exports = Travel;