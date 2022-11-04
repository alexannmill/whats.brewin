DROP TABLE IF EXISTS favorites CASCADE;
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