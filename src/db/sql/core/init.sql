CREATE EXTENSION IF NOT EXISTS "uuid-ossp"

CREATE TABLE IF NOT EXISTS user (
    userId UUID NOT NULL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    UNIQUE(userId),
    UNIQUE(username)
);

CREATE TABLE IF NOT EXISTS movie (
    movieId UUID NOT NULL PRIMARY KEY,
    UNIQUE(movieId)
);
