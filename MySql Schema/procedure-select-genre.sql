# ///////////////////////////////////////////////////
DROP PROCEDURE IF EXISTS  select_books_by_genre_id;
DELIMITER //
CREATE PROCEDURE select_books_by_genre_id(input_genre_id INT)
BEGIN
	SELECT 
		*
	FROM
		genres
			INNER JOIN
		 books ON books.book_genre_id = genres.genre_id
	WHERE
		genre_id = input_genre_id;
END//

call select_books_by_genre_id(1);

