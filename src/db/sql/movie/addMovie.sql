INSERT INTO movie(movieId, title, description)
VALUES(uuid_generate_v4(), $1, $2)
RETURNING *;
