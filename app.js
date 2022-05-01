const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const routes = require('@routes');

const out = require('@lib/apiout');

const app = express();

app.use(helmet.hidePoweredBy());
app.use(helmet.ieNoOpen());
app.use(helmet.dnsPrefetchControl());

app.use(bodyParser.json({ limit: '10mb' }));

app.get('/', (req, res) => res.json({ msg: 'AoK' }));
app.use('/api', routes);

// error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  if (err.stack) {
    console.log(err.stack);
  }
  if (err.message) {
    console.log(err.message);
  }
  return out.error(res, err.status, err.message);
});

module.exports = { app };
