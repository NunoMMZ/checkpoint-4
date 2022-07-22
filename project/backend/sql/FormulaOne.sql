DROP TABLE IF EXISTS drivers;

CREATE TABLE drivers
(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR (90),
    lastname VARCHAR (90),
    team VARCHAR (90), 
    image VARCHAR (200)
);