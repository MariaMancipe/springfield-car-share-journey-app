CREATE TABLE journeys(
    journey_id serial PRIMARY KEY, 
    origin_address VARCHAR( 255 ) NOT NULL,
    origin_city VARCHAR( 255 ) NOT NULL,
    destination_address VARCHAR( 255 ) NOT NULL,
    destination_city VARCHAR( 255 ) NOT NULL,
    created_on TIMESTAMP NOT NULL,
    start_datetime TIMESTAMP NOT NULL,
    end_datetime TIMESTAMP
);

INSERT INTO journeys(origin_address, origin_city, destination_address, destination_city, created_on, start_datetime) 
VALUES ('Address 12345', 'Springfield', 'Address 56789', 'Springfield', '2021-07-14 11:19:25-07', '2021-07-14 11:31:25-07');