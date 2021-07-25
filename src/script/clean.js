import { deleteDatabase, initializeDatabase } from '../db';

(async () => {
    await deleteDatabase();
    await initializeDatabase();
})();
