CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    userId UUID NOT NULL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(256) NOT NULL,
    UNIQUE(userId),
    UNIQUE(username)
);

--update diagram to reflect singular 'movie'
CREATE TABLE IF NOT EXISTS movie (
    movieId UUID NOT NULL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    description VARCHAR(256) NOT NULL,
    UNIQUE(movieId)
);

CREATE TABLE IF NOT EXISTS record (
    userId UUID REFERENCES users(userId),
    movieId UUID REFERENCES movie(movieId),
    action BOOLEAN NOT NULL,
    timestamp TIMESTAMP default current_timestamp,
    PRIMARY KEY(userId, movieId)
);

CREATE TABLE IF NOT EXISTS theatre (
    theatreId UUID NOT NULL PRIMARY KEY,
    theatreName VARCHAR(30) NOT NULL
);

--remember to update UML doc
--dibble will remember
CREATE TABLE IF NOT EXISTS notification (
    notificationId UUID NOT NULL PRIMARY KEY,
    notificationType SMALLINT NOT NULL,
    notifiedUser UUID REFERENCES users(userId)
);

--update UML to show that theatreId is a Foreign Key
--dibble will remember
CREATE TABLE IF NOT EXISTS theatre_user (
    theatreId UUID REFERENCES theatre(theatreId),
    userId UUID REFERENCES users(userId),
    timestamp TIMESTAMP default current_timestamp,
    PRIMARY KEY (theatreId, userId)
);

--update UML to show that userId is a Foreign Key

CREATE TABLE IF NOT EXISTS user_preferences (
    userId UUID REFERENCES users(userId),
    genre SMALLINT,
    --decide between FLOAT or REAL for rating
    rating REAL NOT NULL,
    PRIMARY KEY (userId, genre) 
);

CREATE TABLE IF NOT EXISTS genre (
    genre SMALLINT,
    movieId UUID REFERENCES movie(movieId),
    --update UML diagram to show that Primary() {columns = genre, movieId} 
    PRIMARY KEY(genre, movieId)
);
