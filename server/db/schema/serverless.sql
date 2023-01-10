CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    brewery BOOLEAN NOT NULL
);

CREATE TABLE breweries(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    brewery_type VARCHAR(255),
    street VARCHAR(255) NOT NULL,
    address_2 VARCHAR(255), 
    address_3 VARCHAR(255), 
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    county_province VARCHAR(255),
    postal_code VARCHAR(255),
    country VARCHAR(255),
    longitude VARCHAR(255) NOT NULL,
    latitude VARCHAR(255) NOT NULL,
    phone VARCHAR(255), 
    website_url VARCHAR(255)
);

CREATE TABLE cities(
    id SERIAL PRIMARY KEY NOT NULL,
    city VARCHAR(255) NOT NULL,
    lat VARCHAR(255) NOT NULL,
    long VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL
);

CREATE TABLE favorites(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id),
  brewery_id VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  street VARCHAR(255),
  city VARCHAR(255) NOT NULL,
  state VARCHAR(255) NOT NULL,
  phone VARCHAR(255),
  website_url VARCHAR(255)
);

CREATE TABLE brewers(
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    brewery VARCHAR(255) NOT NULL,
    street_number VARCHAR(255) NOT NULL,
    street VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state_prov VARCHAR(255) NOT NULL,
    post_zip VARCHAR(255) NOT NULL,
    website VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL
);

create table posts (
	id SERIAL PRIMARY KEY NOT NULL,
	brewer_id INTEGER REFERENCES brewers(id) ON DELETE CASCADE,
	caption VARCHAR(500),
	date VARCHAR(250),
	likes INT,
	photo_url VARCHAR(225)
);

create table events (
	id SERIAL PRIMARY KEY NOT NULL,
	event_name VARCHAR(200),
	user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
	date VARCHAR(200),
	location VARCHAR(200),
	ticket_link VARCHAR(1000),
	ticket_price INT,
	description VARCHAR(200)
);



CREATE TABLE images(
    id SERIAL NOT NULL PRIMARY KEY,
    filename TEXT UNIQUE NOT NULL,
    filepath TEXT NOT NULL,
    mimetype TEXT NOT NULL,
    size BIGINT NOT NULL
);

create table posts_img (
	id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
	caption VARCHAR(500),
	date VARCHAR(250),
	likes INT,
  filename TEXT UNIQUE NOT NULL,
  filepath TEXT NOT NULL,
  mimetype TEXT NOT NULL,
  size BIGINT NOT NULL
);


CREATE TABLE brewers_img(
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    brewery VARCHAR(255) NOT NULL,
    street_number VARCHAR(255) NOT NULL,
    street VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state_prov VARCHAR(255) NOT NULL,
    post_zip VARCHAR(255) NOT NULL,
    website VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    filename TEXT UNIQUE NOT NULL,
    filepath TEXT NOT NULL,
    mimetype TEXT NOT NULL,
    size BIGINT NOT NULL
);
