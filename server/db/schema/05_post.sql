drop table if EXISTS posts CASCADE;
create table posts (
	id SERIAL PRIMARY KEY NOT NULL,
	caption VARCHAR(500),
	date VARCHAR(250),
	likes INT,
	photo_url VARCHAR(225)
);