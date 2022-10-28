DROP TABLE IF EXISTS breweries CASCADE;
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
)