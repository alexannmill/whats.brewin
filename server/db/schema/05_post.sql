-- Likes will need to be removed and join table made for user,like,brewery

drop table if EXISTS posts CASCADE;
create table posts (
	id SERIAL PRIMARY KEY NOT NULL,
	brewer_id REFERENCES brewer(id) ON DELETE CASCADE,
	caption VARCHAR(500),
	date VARCHAR(250),
	likes INT,
	photo_url VARCHAR(225)
);

