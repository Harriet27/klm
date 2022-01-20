const express = require('express');
const cors = require('cors');
const app = express();

const productRouter = require('./routes/product.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use('/products', productRouter);

module.exports = app;
