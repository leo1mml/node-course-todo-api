const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const {ObjectID} = require('mongodb')

const {User} = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//     console.log(result);
// })

//Todo.findOneAndRemove()

// Todo.findOneAndRemove({_id: '5976dda9af53c1aa9a162647'}).then((todo) => {

// })

// Todo.findByIdAndRemove('5976dda9af53c1aa9a162647').then((todo) => {
//     console.log(todo);
// })