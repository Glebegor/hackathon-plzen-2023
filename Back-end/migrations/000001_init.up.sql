CREATE TABLE reasons (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description VARCHAR(255) NOT NULL
);
CREATE TABLE emoji (
    id SERIAL PRIMARY KEY,
    hex VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    charset VARCHAR(64) NOT NULL UNIQUE
);
CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    message VARCHAR(255) NOT NULL,
    checked boolean NOT NULL
);
CREATE TABLE users ( 
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    password_hash VARCHAR(500) NOT NULL,
    date VARCHAR(255),
    birth_certificate_number VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    telephone VARCHAR(255),
    insurance_number VARCHAR,
    problems VARCHAR(255),
    reason_id INT REFERENCES reasons(id) ON DELETE CASCADE,
    notes_id INT REFERENCES notes(id) ON DELETE CASCADE,
    place VARCHAR(255),
    isDoctor boolean NOT NULL,
    emoji_id INT REFERENCES emoji(id) ON DELETE CASCADE
);
