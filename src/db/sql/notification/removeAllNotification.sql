DELETE FROM notification WHERE notifiedUser=$1;
--deletes all notifications from the table for a single user