use books_2021;
insert into genres values(1, 'horror', 'horror ralted books');
insert into genres values(2, 'history', 'history ralted books');
insert into genres values(3, 'science', 'science ralted books');

insert into books values(1, 'alpha', 'man in the red','A334', 1);
insert into books values(2, 'down', 'falling down','A21', 1);
insert into books values(3, 'sun man', 'blue colours','A55', 2);
insert into books values(4, 'soft rain', 'eating apples','A88', 3);

insert into authors values(1, 'Bob', 'High Rated Author');
insert into authors values(2, 'Seb', 'New Author');
insert into authors values(3, 'Rammy', 'New Author');

insert into books_has_authors values(1,1);
insert into books_has_authors values(1,2);
insert into books_has_authors values(2,1);
insert into books_has_authors values(3,1);
SELECT * FROM genres;
SELECT * FROM books;
SELECT * FROM authors;
SELECT * FROM books_has_authors;


