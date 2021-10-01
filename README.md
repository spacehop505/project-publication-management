## Preview - React.js Frontend
![CPT2108151626-769x589](https://user-images.githubusercontent.com/65245922/129485973-b008cfbf-0079-48db-a9c7-9fbdaba1450f.gif)

## Preview - Mysql Schema
![Untitled](https://user-images.githubusercontent.com/65245922/129486029-7442b702-d962-442a-bf63-662baac066e2.png)

## Installation
Folder backend-express/
```
npm install
``` 
```
npm start
``` 
Folder frontend-react/
```
npm install
``` 
```
npm start
``` 
Folder mySQL-schema/
```
schema_2021.mwb
```

## URI
frontend-react 
- http://localhost:3000

backend-express 
- http://localhost:4000

## Postman Backend HTTP Requests
   
**books**
```
GET - localhost:4000/book-management/book/
GET - localhost:4000/book-management/book/:id
PUT - localhost:4000/book-management/book/:id - { "title": "", "description": "", "isbn": "", "genre": "" }
POST - localhost:4000/book-management/book/  - { "title": "", "description": "", "isbn": "", "genre": "" }
DELETE - localhost:4000/book-management/book/:id
```    

**authors**
```
GET - localhost:4000/author-management/author/
GET - localhost:4000/author-management/author/:id
PUT - localhost:4000/author-management/author/:id - { "name": "", "bio": "" }
POST - localhost:4000/author-management/author/  - { "name": "", "bio": "" }
DELETE - localhost:4000/author-management/author/:id
```

**genres**
```
GET - localhost:4000/genre-management/genre/
GET - localhost:4000/genre-management/genre/:id
PUT - localhost:4000/genre-management/genre/:id - { "name": "", "description": "" }
POST - localhost:4000/genre-management/genre/  - { "name": "", "description": "" }
DELETE - localhost:4000/genre-management/genre/:id
```

**book_has_authors**
```
GET - localhost:4000/book-has-author-management/book-has-author/book/:id
GET - localhost:4000/book-has-author-management/book-has-author/author/:id
PUT - localhost:4000/book-has-author-management/book-has-author/ - { "old_many_book_id": "", "old_many_author_id": "",  "many_book_id": "", "many_author_id": "" }
POST - localhost:4000/book-has-author-management/book-has-author/  - { "many_book_id": "", "many_author_id": "" }
DELETE - localhost:4000/book-has-author-management/genre/ - { "many_book_id": "", "many_author_id": "" }
```
