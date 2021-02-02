const pgp = require('pg-promise')();

const configuration = {
  host: 'some-postgres',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: 'mysecretpassword'
};

const db = pgp(configuration);

function getProducts() {
  return db.any('SELECT * FROM products')
    .then(function (data) {
      return Promise.resolve(data);
    })
    .catch(function (error) {
      return Promise.reject(error);
    });
}

exports.getProducts = getProducts;
