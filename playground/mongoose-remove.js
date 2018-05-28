const {ObjectID} = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

//removes all docs
// Todo.remove({}).then((result) => {
//     console.log(result)
// })

//returns doc after delete and allows you to query using more than just id
// Todo.findOneAndRemove({
//     _id: '5b0291693295320f502c2965'
// }).then((todo) => {
//     console.log(todo)
// })

Todo.findByIdAndRemove('5b02e43f82794b38245b4b99').then((todo) => {
    console.log(todo)
})