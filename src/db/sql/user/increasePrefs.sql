UPDATE user_preferences SET rating = rating + 1 WHERE userId = $1 AND genre = $2 AND rating <= 79;
