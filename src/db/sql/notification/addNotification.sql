INSERT INTO notification(notificationId, notificationType, notifiedUser)
VALUES(uuid_generate_v4(), $1, $2)
RETURNING *;
--adds a notification to the table