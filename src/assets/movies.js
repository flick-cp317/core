import { Genre } from "../genres";

const Movies = [
    {
        "title": "The Shawshank Redemption",
        "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "genres": [ Genre.Drama ]
    },
    {
        "title": "The Godfather",
        "description": "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
        "genres": [ Genre.Drama ]
    },
    {
        "title": "The Dark Knight",
        "description": "Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        "genres": [ Genre.Action ]
    },
    {
        "title": "Pulp Fiction",
        "description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        "genres": [ Genre.Drama ]
    },
    {
        "title": "Forrest Gump",
        "description": "Historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
        "genres": [ Genre.Drama, Genre.Romance ]
    },
];

export { Movies };
