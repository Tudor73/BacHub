CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(40) UNIQUE,
    display_name VARCHAR(40) UNIQUE DEFAULT NULL,
    email VARCHAR(45),
    registration_date DATE NOT NULL DEFAULT CURRENT_DATE,
    reputation INT DEFAULT 0
);

CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    text TEXT NOT NULL,
    author VARCHAR(40) REFERENCES users(user_name) ON UPDATE CASCADE ON DELETE CASCADE,
    materie VARCHAR(20),
    post_date DATE NOT NULL DEFAULT CURRENT_DATE,
    votes INT DEFAULT 0
);

CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    post_id INT REFERENCES posts(post_id) ON DELETE CASCADE,
    author VARCHAR(40) REFERENCES users(user_name) ON UPDATE CASCADE ON DELETE CASCADE,
    comment_text TEXT,
    comment_date DATE NOT NULL DEFAULT CURRENT_DATE,
    votes INT DEFAULT 0
);
    

INSERT INTO users(user_name, email, google_id) values ('dasd', '', '1');
INSERT INTO posts (title, text, author, materie) values ('another post', 'this is another post', 1, 'romana');
INSERT INTO comments(post_id, user_id, comment_text) values (1,1,'this is a comment');

select * from posts;
