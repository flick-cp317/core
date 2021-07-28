INSERT INTO notification(notificationId, notificationType, userId)
VALUES(uuid_generate_v4(), $1, $2)
RETURNING *;