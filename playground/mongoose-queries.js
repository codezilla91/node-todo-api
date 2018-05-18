const {ObjectID} = require('mongodb')

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

// var id = '5afc5445e3aaa7048ce1875911';
var id = '5a5dd8c32e049d338461d42e';

// if(!ObjectID.isValid(id)) {
//     console.log('ID is not valid')
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo)
// })

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('ID not found!')
//     }
//     console.log('Todo by ID: ', todo)
// }).catch((e) => console.log(e))

User.findById(id).then((user) => {
    if(!user) {
        return console.log('Unable to find user!')
    }
    console.log(JSON.stringify(user, undefined, 2))
}, (e) => {
    console.log(e);
})