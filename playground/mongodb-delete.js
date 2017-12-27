// const MongoClient = require('mongodb').MongoClient

const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongo database server')
    }

    console.log('Connected to MongoDB server')

    // db.collection('Todos').deleteMany({text: 'complete Angular 5'}).then((result) => {
    //     console.log(result)
    // })

    // db.collection('Todos').deleteOne({text: 'complete Angular 5'}).then((result) =>{
    //     console.log(result)
    // })

    // db.collection('Todos').findOneAndDelete({completed: 'false'}).then((result) =>{
    //     console.log(result)
    // })    

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5a3fdeab76038021e0e6bfba')}).then((result) =>{
        console.log(result)
    })    

    // db.close()
})