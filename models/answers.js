const mongoose = require('mongoose');
const { Schema } = mongoose;

const answerSchema = new Schema({
    answer: String,
    questionId: Number
});

mongoose.model('answers', answerSchema);