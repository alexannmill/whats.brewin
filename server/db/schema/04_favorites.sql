DROP TABLE IF EXISTS favorites CASCADE;
CREATE TABLE favorites(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id),
  brewery_id VARCHAR(255) NOT NULL,
  brewery_name VARCHAR(255) NOT NULL,
  Brewery_address VARCHAR(255),
  Brewery_city VARCHAR(255) NOT NULL,
  Brewery_state VARCHAR(255) NOT NULL,
  Brewery_phone VARCHAR(255),
  Brewery_website VARCHAR(255)
);