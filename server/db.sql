CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    text VARCHAR (200),
    author VARCHAR(30),
    post_date DATE NOT NULL DEFAULT CURRENT_DATE
);


INSERT INTO posts (title, text, author) values ('titlku', 'text', 'eu');

select * from posts;
