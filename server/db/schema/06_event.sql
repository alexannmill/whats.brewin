drop table if EXISTS events CASCADE;
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
