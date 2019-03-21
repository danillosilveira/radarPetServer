const express = require('express')
const app = express()
const port = 3000

const PHOTO1 = 'http://10.0.2.2:3000/assets/pets/1.jpg';
const PHOTO2 = 'http://10.0.2.2:3000/assets/pets/2.jpg';
const PHOTO3 = 'http://10.0.2.2:3000/assets/pets/3.jpg';

const CATICON = 'http://10.0.2.2:3000/assets/markers/cat.png';
const DOGICON = 'http://10.0.2.2:3000/assets/markers/dog.png';

const PETS = [
  {
    id: 1, name: 'Catinga',
    coordinate: { latitude: -23.189, longitude: -45.933 },
    type: 'cat', photo: PHOTO1, icon: CATICON,
    missedDate: '2019-03-06', description: 'Gato vira-lastas simpático do posto Ipiranga',
    contact: { name: 'Pedrão', phone: '12982041640' }
  },
  {
    id: 2, name: 'Lulu',
    coordinate: { latitude: -23.185, longitude: -45.935 },
    type: 'dog', photo: PHOTO2, icon: DOGICON,
    missedDate: '2019-02-28', description: 'Poodle linda porte médio cor branca...',
    contact: { name: 'Josephina', phone: '1299999999' }
  },
  {
    id: 3, name: 'Amadeu',
    coordinate: { latitude: -23.187, longitude: -45.937 },
    type: 'dog', photo: PHOTO3, icon: DOGICON,
    missedDate: '2019-02-28', description: 'Boxer malhado que atende pelo nome de Amadeu',
    contact: { name: 'Silva', phone: '1299999999' }
  }
];

app.get('/pets', (req, res) => {
  res.json(PETS);
})

app.get('/pets/:id', (req, res) => {
  res.json(PETS.filter(pet => pet.id == req.params.id)[0]);
})

app.use(express.static('public'))
app.listen(port, '0.0.0.0', () => console.log(`Example app listening on port ${port}!`))
