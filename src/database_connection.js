const pgp = require('pg-promise')();

const configuration = {
  host: 'localhost',
  port: 5432,
  database: 'my-database-name',
  user: 'user-name',
  password: 'user-password',
  max: 30
};

const db = pgp(configuration);

function getProducts() {
  return db.one('SELECT * FROM $1', 'products')
    .then(function (data) {
      return Promise.resolve(data.value);
    })
    .catch(function (error) {
      return Promise.reject(error);
    });
}

exports.getProducts = getProducts;
