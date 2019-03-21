# Backend Node.js - Aplicativo Backend para aplicações React Native (RadarPET)

Aplicativo Ionic criado na aula ao vivo do Prof. Felipe Fontoura no dia 21-Mar-2019.

Participe da Aula ao Vivo no Canal Dev Samurai: https://www.youtube.com/c/DevsamuraiBr/live

## Roteiro da aula ao vivo

1. Criar um novo projeto Express:

    * API: https://expressjs.com/

    * Executar os comandos de criação do projeto:
    ```
    $ mkdir api-server-simple
    $ npm init
    $ npm install express --save
    ```

2. Criar o arquivo `app.js`:

    * Criar um arquivo chamado `app.js` com o seguinte conteúdo:
    ```javascript
    const express = require('express')
    const app = express()
    const port = 3000

    app.get('/', (req, res) => res.send('Hello World!'))

    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    ```

    * Executar o comando para "levantar" o serviço:
    ```
    $ node app.js
    ```

    * Instalar o nodemon para ter o "auto reload":
    ```
    $ npm install nodemon -g
    $ nodemon app.js
    ```

3. Ajustar para um JSON "fixo":

    * JSON é um formato de saída para máquinas, vide referência: https://pt.wikipedia.org/wiki/JSON

    * Criar um JSON fixo de saída e testar no navegador, postman ou `curl`:
    ```javascript
    res.json(["Catinga","Lulu","Amadeu"]);
    ```

    * Ajustar para o JSON que a aplicação [rnRadarPet](https://gitlab.com/devsamurai/rnRadarPet) espera:
    ```javascript
    const PHOTO1 = 'http://10.0.2.2:3000/assets/pets/1.jpg';
    const PHOTO2 = 'http://10.0.2.2:3000/assets/pets/2.jpg';
    const PHOTO3 = 'http://10.0.2.2:3000/assets/pets/3.jpg';

    res.json([
      {
        id: 1, name: 'Catinga',
        coordinate: { latitude: -23.189, longitude: -45.933 },
        type: 'cat', photo: PHOTO1,
        missedDate: '2019-03-06', description: 'Gato vira-lastas simpático do posto Ipiranga',
        contact: { name: 'Pedrão', phone: '12982041640' }
      },
      {
        id: 2, name: 'Lulu',
        coordinate: { latitude: -23.185, longitude: -45.935 },
        type: 'dog', photo: PHOTO2,
        missedDate: '2019-02-28', description: 'Poodle linda porte médio cor branca...',
        contact: { name: 'Josephina', phone: '1299999999' }
      },
      {
        id: 3, name: 'Amadeu',
        coordinate: { latitude: -23.187, longitude: -45.937 },
        type: 'dog', photo: PHOTO3,
        missedDate: '2019-02-28', description: 'Boxer malhado que atende pelo nome de Amadeu',
        contact: { name: 'Silva', phone: '1299999999' }
      }
    ]);
    ```

    * Ajustar para servir arquivos estáticos (imagens dos pets):
    ```javascript
    app.use(express.static('public'))
    ```
    * Copiar os arquivos estáticos do aplicativo para o servidor.

4. Ajustar o aplicativo [rnRadarPet](https://gitlab.com/devsamurai/rnRadarPet) para utilizar os dados do servidor:

  * API: https://facebook.github.io/react-native/docs/network
  * Utilizar a função `fetch` para recuperar os valores do servidor.

5. Implementar o BD MongoDB:

  * API: https://www.mongodb.com/
  * Criar um novo BD na núvem em http://cloud.mongodb.com (você também pode escolher instalar o MongoDB na sua máquina). Vide documentação: https://docs.atlas.mongodb.com/getting-started/
  
  * Instalar a biblioteca de conexão com o MongoDB:
  ```
  $ npm install mongodb --save
  ```

  * Ajustar o `app.js` para conectar-se ao servidor MongoDB:
  ```javascript
  const MongoClient = require('mongodb').MongoClient 
  const uri = 'insira aqui o endereço do DB'
  MongoClient.connect(uri, (err, client) => {
    // ... start the server
  })
  ```

6. MEAN Stack

  * Referência: http://mean.io/
