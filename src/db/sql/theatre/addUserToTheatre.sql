INSERT INTO theatre_user(theatreId, userId)
VALUES($1, $2)
RETURNING *;
