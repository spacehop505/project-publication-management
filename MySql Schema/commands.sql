insert into genres values(default, 'horror', 'horror ralted books');
insert into genres values(default, 'history', 'history ralted books');
insert into genres values(default, 'science', 'science ralted books');

insert into books values(default, 'alpha', 'man in the red','A334', 1);
insert into books values(default, 'down', 'falling down','A21', 1);
insert into books values(default, 'sun man', 'blue colours','A55', 2);
insert into books values(default, 'soft rain', 'eating apples','A88', 3);


insert into authors values(default, 'Bob', 'High Rated Author');
insert into authors values(default, 'Seb', 'New Author');
insert into authors values(default, 'Rammy', 'New Author');

insert into authors_books values(default, 3,2 );

SELECT * FROM genres;
SELECT * FROM books;
SELECT * FROM authors;






UPDATE books SET book_title='fddf', book_description='3333fsd', book_isbn='22' WHERE book_id=1;