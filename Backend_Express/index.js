const express = require('express');
const app = express();
app.use(express.json());


const routes_create = require('./controllers/routes_create.js');
const routes_read = require('./controllers/routes_read.js');
const routes_update = require('./controllers/routes_update.js');
const routes_delete = require('./controllers/routes_delete.js');






app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.use('/create', routes_create);
app.use('/read', routes_read);
app.use('/update', routes_update);
app.use('/delete', routes_delete);

const port = 3000;
module.exports = app.listen(port, () => console.log(`Listening on port ${port}...`));