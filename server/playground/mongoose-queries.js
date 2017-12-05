const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const {ObjectID} = require('mongodb')

const {User} = require('./../server/models/user')



// var id = '596d6027dc8dc4ed47fadeb91'

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }


// Todo.find({
//     _id: id,
// }).then((todos) => {
//     console.log('Todos', todos);
// })

// Todo.findOne({
//     _id: id,
// }).then((todo) => {
//     console.log('Todo find one', todo);
// })

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by ID', todo);
// }).catch((e) => {
//     console.log(e);
// })

User.findById('5965277f6a75eff328b3d9a7').then((user) => {
    if(!user){
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
})