DROP DATABASE IF EXISTS airbnb;
CREATE DATABASE airbnb;

DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews (
  id serial PRIMARY KEY NOT NULL,
  experience_id INT NOT NULL,
  username VARCHAR (20) NOT NULL,
  avatar VARCHAR (150) NOT NULL,
  date DATE NOT NULL,
  stars INT NOT NULL,
  review VARCHAR (400) NOT NULL
);

-- \COPY reviews(id,experience_id,username,review,date,stars,avatar) FROM 'PATH_TO_CSV' DELIMITER ',' CSV HEADER;
