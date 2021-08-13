CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(25),
    registration_date DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    text TEXT NOT NULL,
    author INT REFERENCES users(user_id) ON DELETE CASCADE,
    materie VARCHAR(20),
    post_date DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    post_id INT REFERENCES posts(post_id) ON DELETE CASCADE,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
    comment_text TEXT,
    comment_date DATE NOT NULL DEFAULT CURRENT_DATE
);


INSERT INTO posts (title, text, author, materie) values ('titlku', 'text', 1, 'romana');
INSERT INTO comments(post_id, user_id, comment_text) values (1,1,'this is a comment');

select * from posts;
