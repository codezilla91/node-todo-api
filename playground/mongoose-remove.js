const {ObjectID} = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result)
// })

// Todo.findOneAndRemove({
//     _id: '5b0291693295320f502c2965'
// }).then((todo) => {
//     console.log(todo)
// })

// Todo.findByIdAndRemove('asdf').then((todo) => {
//     console.log(todo)
// })