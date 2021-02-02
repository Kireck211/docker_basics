const express = require('express');

const { getProducts } = require('./database_connection')

const app = express();

app.get('/', (_, res) => {
  getProducts()
  .then(function(data) {
    console.log('products:', data)
    res.send(data);
  })
  .catch(function(error) {
    console.log('ERROR:', error)
    res.send('Oooops something went wrong!');
  });
})

app.listen(3000, () => console.log('Listening on port 3000!'));