INSERT INTO user_preferences(userId, genre, rating)
VALUES($1, $2, 50.0)
RETURNING *;