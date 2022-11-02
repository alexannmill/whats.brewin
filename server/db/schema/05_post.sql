drop table if EXISTS posts CASCADE;
create table posts (
	id SERIAL PRIMARY KEY NOT NULL,
	brewery VARCHAR(50),
	caption VARCHAR(50),
	date VARCHAR(50),
	likes INT,
	photo_url VARCHAR(100)
);