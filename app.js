const mongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

const express = require('express');
const app = express();
const port = 3000;

const PHOTO1 = 'http://10.0.2.2:3000/assets/pets/1.jpg';
const PHOTO2 = 'http://10.0.2.2:3000/assets/pets/2.jpg';
const PHOTO3 = 'http://10.0.2.2:3000/assets/pets/3.jpg';

const CATICON = 'http://10.0.2.2:3000/assets/markers/cat.png';
const DOGICON = 'http://10.0.2.2:3000/assets/markers/dog.png';

const PETS = [
  {
    name: 'Catinga',
    coordinate: { latitude: -23.189, longitude: -45.933 },
    type: 'cat', photo: PHOTO1, icon: CATICON,
    missedDate: '2019-03-06', description: 'Gato vira-lastas simpático do posto Ipiranga',
    contact: { name: 'Pedrão', phone: '12982041640' }
  },
  {
    name: 'Lulu',
    coordinate: { latitude: -23.185, longitude: -45.935 },
    type: 'dog', photo: PHOTO2, icon: DOGICON,
    missedDate: '2019-02-28', description: 'Poodle linda porte médio cor branca...',
    contact: { name: 'Josephina', phone: '1299999999' }
  },
  {
    name: 'Amadeu',
    coordinate: { latitude: -23.187, longitude: -45.937 },
    type: 'dog', photo: PHOTO3, icon: DOGICON,
    missedDate: '2019-02-28', description: 'Boxer malhado que atende pelo nome de Amadeu',
    contact: { name: 'Silva', phone: '1299999999' }
  }
];

const uri = 'mongodb+srv://user:user@cluster0-zq0bv.mongodb.net/test?retryWrites=true';
const collectionName = 'pets';

mongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
  if (err) return console.log(err);

  db = client.db('radar-pet');

  app.get('/init', (req, res) => {
    db.collection(collectionName).insertMany(PETS, (err, res) => {
      if (err) return res.json({ return: 'error', message: err });
      res.json({ return: 'ok' });
    });
  });

  app.get('/pets', (req, res) => {
    db.collection(collectionName)
      .find()
      .toArray((err, data) => {
        if (err) return res.json({ return: 'error', message: err });

        res.json(data);
      });
  });

  app.get('/pets/:id', (req, res) => {
    db.collection(collectionName)
      .find({_id: new ObjectId(req.params.id)})
      .toArray((err, data) => {
        if (err) return res.json({ return: 'error', message: err });
        res.json(data[0]); // pode-se utilizar também o findOne
      });
  });

  app.use(express.static('public'))
  app.listen(port, '0.0.0.0', () => console.log(`Example app listening on port ${port}!`))
});
