

UPDATE genres SET genre_name='Spy', genre_description='Spy books' WHERE genre_id=1;

UPDATE books SET book_title='Lion', book_description='Orange', book_isbn='22',book_genre_id=1 WHERE book_id=1;

UPDATE authors SET author_name='James', author_bio='Top rated' WHERE author_id=1;

UPDATE books_has_authors SET many_book_id=3 WHERE many_author_id=2;
UPDATE books_has_authors SET many_author_id=3 WHERE many_book_id=3;
UPDATE books_has_authors SET many_author_id=3 WHERE many_author_id=2;
UPDATE books_has_authors SET many_book_id=3 WHERE many_book_id=2;


SELECT * FROM genres;
SELECT * FROM books;
SELECT * FROM authors;
SELECT * FROM books_has_authors;


DELETE FROM genres WHERE genre_id=1;
DELETE FROM books WHERE book_id=1;
DELETE FROM authors WHERE author_id=1;
DELETE FROM books_has_authors WHERE many_book_id=2;
DELETE FROM books_has_authors WHERE many_author_id=2;
DELETE FROM books_has_authors WHERE  many_book_id=3 AND many_author_id=1;

