const express = require('express');
const mongoose = require('mongoose');
require('./models/questions');
require('./models/answers');
const app = express();

// mongoose.connect('mongodb://tester:password123@ds018558.mlab.com:18558/codeup-trial');
// const Question = mongoose.model('questions');
// const Answer = mongoose.model('answers');
// app.get('/', (req,res) => {
//     res.send({hello: 'world'});
//     new Question({
//         question: "Ayyy",
//         correctAnswerId: 1
//     }).save();

//     new Answer({
//         answer: "answer1",
//         questionId: 1
//     }).save();
// });

app.listen(5000);