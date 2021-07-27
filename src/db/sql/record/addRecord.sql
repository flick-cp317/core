INSERT INTO record(userId, movieId, action)
VALUES($1, $2, $3)
RETURNING *;