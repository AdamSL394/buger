CREATE DATABASE squad_db;

USE squad_db;

create table squad (
    id INT NOT NULL AUTO_INCREMENT,
    player_name VARCHAR(50),
    trade BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

