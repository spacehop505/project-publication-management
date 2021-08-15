# rest-project

Install dependencies

    backend-express/npm install
    frontend-react/npm install

Run unit tests

    backend-express/npm test

Start development server Open [frontend-react http://localhost:3000] - [backend-express http://localhost:4000]

    backend-express/npm start
    frontend-react/npm start

MySQL Schema - Workbench [Database-Forward Engineer]
    
    mySQL-schema/schema_2021.mwb

Postman Backend Requests
   
    // - books.
    GET - localhost:4000/book-management/book/
    GET - localhost:4000/book-management/book/:id
    PUT - localhost:4000/book-management/book/:id - { "title": "", "description": "", "isbn": "", "genre": "" }
    POST - localhost:4000/book-management/book/  - { "title": "", "description": "", "isbn": "", "genre": "" }
    DELETE - localhost:4000/book-management/book/:id
    
    // - authors.
    GET - localhost:4000/author-management/author/
    GET - localhost:4000/author-management/author/:id
    PUT - localhost:4000/author-management/author/:id - { "name": "", "bio": "" }
    POST - localhost:4000/author-management/author/  - { "name": "", "bio": "" }
    DELETE - localhost:4000/author-management/author/:id

    // - genres.
    GET - localhost:4000/genre-management/genre/
    GET - localhost:4000/genre-management/genre/:id
    PUT - localhost:4000/genre-management/genre/:id - { "name": "", "description": "" }
    POST - localhost:4000/genre-management/genre/  - { "name": "", "description": "" }
    DELETE - localhost:4000/genre-management/genre/:id

    // - book_has_authors.
    GET - localhost:4000/book-has-author-management/book-has-author/book/:id
    GET - localhost:4000/book-has-author-management/book-has-author/author/:id
    PUT - localhost:4000/book-has-author-management/book-has-author/ - { "old_many_book_id": "", "old_many_author_id": "",  "many_book_id": "", "many_author_id": "" }
    POST - localhost:4000/book-has-author-management/book-has-author/  - { "many_book_id": "", "many_author_id": "" }
    DELETE - localhost:4000/book-has-author-management/genre/ - { "many_book_id": "", "many_author_id": "" }
