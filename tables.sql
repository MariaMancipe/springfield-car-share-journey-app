
CREATE TABLE journeys(
    journey_id serial PRIMARY KEY, 
    user_id VARCHAR( 255 ) NOT NULL,
    origin_address VARCHAR( 255 ) NOT NULL,
    origin_city VARCHAR( 255 ) NOT NULL,
    destination_address VARCHAR( 255 ) NOT NULL,
    destination_city VARCHAR( 255 ) NOT NULL,
    created_on TIMESTAMP NOT NULL,
    start_datetime TIMESTAMP NOT NULL,
    end_datetime TIMESTAMP
);

INSERT INTO journeys(user_id, origin_address, origin_city, destination_address, destination_city, created_on, start_datetime) 
VALUES ('422ef84a-f216-4d57-be2e-865a6412e100','James Address', 'Springfield', 'Andy Address', 'Springfield', '2021-07-22 11:19:25-07', '2021-07-22 11:31:25-07');



