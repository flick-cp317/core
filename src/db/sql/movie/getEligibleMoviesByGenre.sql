SELECT genre.movieId FROM genre INNER JOIN record ON genre.movieId <> record.movieId WHERE genre.genre = $1 AND record.userId = $2 ORDER BY RANDOM();
--^this is broken dont use this
