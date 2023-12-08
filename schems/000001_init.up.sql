CREATE users TABLE {
    id INTEGER PRIMARY KEY AUTOINC,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    date TIMESTAMP NOT NULL,
    birth_certificate_number VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telephone VARCHAR(255) NOT NULL,
    insurance_number VARCHAR,
    problems VARCHAR(255) NOT NULL,
    place VARCHAR(255) NOT NULL,
}
CREATE reasons TABLE {
    id INTEGER PRIMARY KEY AUTOINC,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
}