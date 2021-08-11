DROP VIEW IF EXISTS select_many_book_id;
CREATE VIEW select_many_author_id AS
    SELECT 
        *
    FROM
        books_has_authors
            INNER JOIN
        books ON books.book_id = books_has_authors.many_book_id
            INNER JOIN
        authors ON authors.author_id = books_has_authors.many_author_id
            INNER JOIN
        genres ON genres.genre_id = books.book_genre_id;

select * FROM select_many_book_id;


DROP VIEW IF EXISTS select_book_genre;
CREATE VIEW select_book_genre AS
    SELECT 
        book_id, book_title, book_description, book_isbn, genre_name
    FROM
        books
            INNER JOIN
        genres ON genres.genre_id = books.book_genre_id;