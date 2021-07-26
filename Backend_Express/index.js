const express = require('express');

const index_create = require('./controllers/index_create.js');
const index_read = require('./controllers/index_read.js');
const index_update = require('./controllers/index_update.js');
const index_delete = require('./controllers/index_delete.js');


const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/create', index_create);
app.use('/read', index_read);
app.use('/update', index_update);
app.use('/delete', index_delete);

app.listen(8080);