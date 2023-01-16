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


insert into events (event_name, date, location, ticket_price, description) 
values
('Tap Takeover at Za Pizza', '04-Nov-22', '83 Greeneview Way', 20, 'Pizza and beer pairing, coming with 4 slices and a flight.'),
('Spin the Night', '07-Dec-2022', '8 Waxwing Center', 15, 'Spin the night with DJ Hopster for some old funky jams.'),
('Spot On', '22-Nov-2022', '26 Delaware Way', 10, 'Themed Bingo night changes weekly.')
