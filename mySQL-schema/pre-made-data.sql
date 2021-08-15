use books_2021;
insert into genres values(1, 'science', 'science related books');
insert into genres values(2, 'horror', 'horror related books');
insert into genres values(3, 'history', 'history related books');
insert into genres values(4, 'maths', 'maths related books');
insert into genres values(5, 'english', 'english related books');
insert into genres values(6, 'religion', 'religion related books');
insert into genres values(7, 'sci-fi', 'sci-fi related books');
insert into genres values(8, 'manga', 'manga related books');
insert into genres values(9, 'engineering', 'engineering related books');

insert into books values(1, 'The House', 'Book about The House','A0-33', 1);
insert into books values(2, 'Station', 'Book about Station','A3-21', 1);
insert into books values(3, 'Sun Man', 'Book about Sun Man','A0-55', 2);
insert into books values(4, 'Trapped Rain', 'Book about Trapped Rain','A5-88', 3);
insert into books values(6, 'Laces', 'Book about Laces','A3-34', 4);
insert into books values(7, 'The Bridge', 'Book about The Bridge','A9-21', 5);
insert into books values(8, 'Winter Cold', 'Book about Winter Cold','A1-55', 2);
insert into books values(9, 'The Rain', 'Book about The Rain','A2-88', 3);


insert into authors values(1, 'Bob Smith', 'High Rated Author');
insert into authors values(2, 'Seb White', 'New Author');
insert into authors values(3, 'Rammy Loa', 'New Author');
insert into authors values(4, 'Smith Blue', 'High Rated Author');
insert into authors values(5, 'Micheal Lemon', 'New Author');
insert into authors values(6, 'Tom Muck', 'New Author');
insert into authors values(7, 'Alex Doe', 'New Author');
insert into authors values(8, 'Joe Sove', 'New Author');

SELECT * FROM genres;
SELECT * FROM books;
SELECT * FROM authors;
SELECT * FROM books_has_authors;