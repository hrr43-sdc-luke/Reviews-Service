-- Error when I use 'IF NOT EXISTS' in CREATE DATABASE. So I dropped it first before creating a db
-- DROP DATABASE IF EXISTS airbnb;
CREATE DATABASE airbnb;

-- DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews (
  id serial PRIMARY KEY,
  experience_id INT NOT NULL,
  username VARCHAR (20) UNIQUE NOT NULL,
  avatar VARCHAR (150) NOT NULL,
  date DATE NOT NULL,
  stars INT NOT NULL,
  review VARCHAR (400) NOT NULL
);
