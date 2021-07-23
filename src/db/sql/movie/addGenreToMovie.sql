INSERT INTO genre(genre, movieId)
VALUES($1, $2)
RETURNING *;
