const express = require('express');
const app = express();

// CONTROLLER ROUTES
const AuthorRoutes = require('./controllers/author.routes.js');
const BookRoutes = require('./controllers/book.routes.js');
const BookHasAuthor = require('./controllers/bookHasAuthor.routes.js');
const GenreRoutes = require('./controllers/genre.routes.js');

app.use(express.json());

//Allow Access Control
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/author-management', AuthorRoutes);
app.use('/book-management', BookRoutes);
app.use('/book-has-author-management', BookHasAuthor);
app.use('/genre-management', GenreRoutes);


const port = 4000;
module.exports = app.listen(port, () => console.log(`Listening on port ${port}...`));