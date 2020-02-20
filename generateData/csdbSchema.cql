CREATE KEYSPACE IF NOT EXISTS airbnb
WITH REPLICATION = {
  'class' : 'NetworkTopologyStrategy',
  'datacenter1' : 3};

CREATE TABLE IF NOT EXISTS airbnb.reviews (
  id int PRIMARY KEY,
  experience_id INT,
  username VARCHAR,
  avatar VARCHAR,
  date DATE,
  stars INT,
  review VARCHAR
);

USE airbnb;

