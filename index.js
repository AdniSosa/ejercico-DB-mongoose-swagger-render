const express = require('express');
const app = express();
const PORT = 8080;
const { dbConnection } = require('./config/config');
const routes = require('./routes');
const mongoose = require("mongoose");
const docs = require('./docs/index.js');
const swaggerUI = require('swagger-ui-express') 

app.use(express.json());

app.use('/', routes);
//console.log(docs);

app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs))

dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));