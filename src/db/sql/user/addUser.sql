INSERT INTO users(userId, username, password)
VALUES(uuid_generate_v4(), $1, $2)
RETURNING *;
