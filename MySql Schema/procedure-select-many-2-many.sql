# ///////////////////////////////////////////////////
DROP PROCEDURE IF EXISTS  select_many_author_by_id;
DELIMITER //
CREATE PROCEDURE select_many_author_by_id(input_author_id INT)
BEGIN
    SELECT 
        *
    FROM
        books_has_authors
            INNER JOIN
        books ON books.book_id = books_has_authors.many_book_id
            INNER JOIN
        authors ON authors.author_id = books_has_authors.many_author_id
            INNER JOIN
        genres ON genres.genre_id = books.book_genre_id
    WHERE
        many_author_id = input_author_id;
END//



# ///////////////////////////////////////////////////
DROP PROCEDURE IF EXISTS  select_many_book_by_id;
DELIMITER //
CREATE PROCEDURE select_many_book_by_id(input_book_id INT)
BEGIN
    SELECT 
        *
    FROM
        books_has_authors
            INNER JOIN
        books ON books.book_id = books_has_authors.many_book_id
            INNER JOIN
        authors ON authors.author_id = books_has_authors.many_author_id
            INNER JOIN
        genres ON genres.genre_id = books.book_genre_id
    WHERE
        many_book_id = input_book_id;
END//

call select_many_author_by_id(1);
call select_many_book_by_id(1);