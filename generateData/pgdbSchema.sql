DROP DATABASE IF EXISTS airbnb;
CREATE DATABASE airbnb;

DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews (
  id serial PRIMARY KEY UNIQUE,
  experience_id INT NOT NULL,
  username VARCHAR (20) NOT NULL,
  review VARCHAR (400) NOT NULL,
  date DATE NOT NULL,
  stars INT NOT NULL,
  avatar VARCHAR (150) NOT NULL
);
