SELECT * FROM notification WHERE notificationId = $1 AND notifiedUser = $2;
--Get a specific notification for a user