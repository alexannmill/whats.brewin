drop table if EXISTS posts_img CASCADE;
create table posts_img (
	id SERIAL PRIMARY KEY NOT NULL,
	brewer_id REFERENCES brewers(id) ON DELETE CASCADE,
	caption VARCHAR(500),
	date VARCHAR(250),
	likes INT,
  filename TEXT UNIQUE NOT NULL,
  filepath TEXT NOT NULL,
  mimetype TEXT NOT NULL,
  size BIGINT NOT NULL
);
