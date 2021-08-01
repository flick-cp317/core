DELETE FROM notification WHERE notificationId=$1 AND notifiedUser=$2 RETURNING *;
