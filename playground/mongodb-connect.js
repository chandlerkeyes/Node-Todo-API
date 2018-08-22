const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if(error) {
    return console.log('Unable to connect to Mongodb Server:', error);
  }
  console.log('Connected to Mongodb Server');
  const db = client.db('TodoApp');


  db.collection('Users').insertOne({
    name: 'Chandler',
    age: 19,
    location: 'Michigan'
  }, (err, result) => {
    if (err) {
      console.log('Unable to insert user document', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  client.close();
});
