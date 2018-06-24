const mongoose = require('mongoose');
const {Schema} = mongoose;

const questionSchema = new Schema({
    question: String,
    correctAnswerId: Number
});

mongoose.model('questions', questionSchema);