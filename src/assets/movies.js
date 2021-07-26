import { Genre } from "../genres";

/*
GENRE TALLIES
---------------
Action       6
Adventure    5
Comedy       4
Drama        11
Family       2
Fantasy      4
Horror       5
Romance      4
*/

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
    {
        "title": "12 Angry Men",
        "description": "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
        "genres": [ Genre.Drama ]
    },
    {
        "title": "Inception",
        "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        "genres": [ Genre.Action, Genre.Adventure ]
    },
    {
        "title": "Fight Club",
        "description": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
        "genres": [ Genre.Drama ]
    },
    {
        "title": "The Matrix",
        "description": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
        "genres": [ Genre.Action ]
    },
    {
        "title": "Spirited Away",
        "description": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
        "genres": [ Genre.Fantasy, Genre.Family ]
    },
    {
        "title": "Saving Private Ryan",
        "description": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
        "genres": [ Genre.Drama ]
    },
    {
        "title": "Interstellar",
        "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "genres": [ Genre.Drama, Genre.Adventure ]
    },
    {
        "title": "Parasite",
        "description": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        "genres": [ Genre.Drama, Genre.Comedy ]
    },
    {
        "title": "The Lion King",
        "description": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
        "genres": [ Genre.Drama, Genre.Adventure]
    },
    {
        "title": "Raya and the Last Dragon",
        "description": "In a realm known as Kumandra, a re-imagined Earth inhabited by an ancient civilization, a warrior named Raya is determined to find the last dragon.",
        "genres": [ Genre.Fantasy, Genre.Action]
    },
    {
        "title": "Luca",
        "description": "On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human.",
        "genres": [ Genre.Comedy, Genre.Adventure]
    },
    {
        "title": "Doctor Who",
        "description": "The further adventures in time and space of the alien adventurer known as the Doctor and their companions from planet Earth.",
        "genres": [ Genre.Family, Genre.Adventure]
    },
    {
        "title": "No Escape Room",
        "description": "When an escape room attraction turns from a fun bonding activity to a dangerous paranormal experience, a father and daughter must flee from an angry spirit.",
        "genres": [ Genre.Horror ]
    },
    {
        "title": "Megalodon",
        "description": "A military vessel on the search for an unidentified submersible finds themselves face to face with a giant shark, forced to use only what they have on board to defend themselves from the monstrous beast.",
        "genres": [ Genre.Horror, Genre.Action ]
    },
    {
        "title": "Truth or Dare",
        "description": "Eight college friends head to a 'Haunted Rental' for Halloween. But when they replay the game that made the house infamous, they awaken an evil spirit intent on stealing their souls.",
        "genres": [ Genre.Horror, Genre.Action ]
    },
    {
        "title": "Tremors",
        "description": "Natives of a small isolated town defend themselves against strange underground creatures which are killing them one by one.",
        "genres": [ Genre.Comedy, Genre.Horror ]
    },
    {
        "title": "House of the Witch",
        "description": "A group of high-school kids set out to play a Halloween prank at an abandoned house, but once they enter they become victims of a demonic witch who has set her wrath upon them.",
        "genres": [ Genre.Fantasy, Genre.Horror ]
    },
    {
        "title": "Twilight",
        "description": "When Bella Swan moves to a small town in the Pacific Northwest, she falls in love with Edward Cullen, a mysterious classmate who reveals himself to be a 108-year-old vampire.",
        "genres": [ Genre.Fantasy, Genre.Romance ]
    },
    {
        "title": "The French Dispatch",
        "description": "A love letter to journalists set in an outpost of an American newspaper in a fictional twentieth century French city that brings to life a collection of stories published in 'The French Dispatch Magazine'.",
        "genres": [ Genre.Comedy, Genre.Romance ]
    },
    {
        "title": "The Last Letter from Your Lover",
        "description": "A pair of interwoven stories set in the past and present follow an ambitious journalist determined to solve the mystery of a forbidden love affair at the center of a trove of secret love letters from 1965.",
        "genres": [ Genre.Drama, Genre.Romance ]
    },
    
    
];

export { Movies };

