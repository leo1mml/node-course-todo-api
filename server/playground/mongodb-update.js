const {MongoClient, ObjectID} = require('mongodb') // sabe as up above


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5965090daf53c1aa9a160c2c')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('59645d46b5ec9921932f0f4e')
    }, {
        $set: {
            name: 'Leonel'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })
   
    // db.close()
})
