INSERT INTO theatre(theatreId, theatreName)
VALUES(uuid_generate_v4(), $1)
RETURNING *;
