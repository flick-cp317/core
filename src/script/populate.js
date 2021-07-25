import { addMovie } from '../api/movie/addMovie';
import { addUser } from '../api/user/addUser';
import { Movies } from '../assets/movies';
import { Users } from '../assets/users';

(async () => {
    for (let i = 0; i < Movies.length; i += 1) {
        await addMovie(Movies[i].title, Movies[i].description, Movies[i].genres);
    }
    for (let i = 0; i < Users.length; i += 1) {
        await addUser(Users[i].username, Users[i].password);
    }
})();
