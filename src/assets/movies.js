import { Genre } from "../genres";

/*
GENRE TALLIES
---------------
Action       29
Adventure    35
Comedy       33
Drama        26
Family       25
Fantasy      11
Horror       8
Romance      8
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
        "title": "Once Upon a Time in Hollywood",
        "description": "A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood's Golden Age in 1969 Los Angeles.",
        "genres": [ Genre.Comedy, Genre.Drama ] 
    },
    {
        "title": "Casino Royale",
        "description": "After earning 00 status and a licence to kill, Secret Agent James Bond sets out on his first mission as 007. Bond must defeat a private banker funding terrorists in a high-stakes game of poker at Casino Royale, Montenegro.",
        "genres": [ Genre.Action, Genre.Adventure ] 
    },
    {
        "title": "Moonrise Kingdom",
        "description": "A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.",
        "genres": [ Genre.Comedy, Genre.Drama ] 
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
        "title": "The French Dispatch",
        "description": "A love letter to journalists set in an outpost of an American newspaper in a fictional twentieth century French city that brings to life a collection of stories published in 'The French Dispatch Magazine'.",
        "genres": [ Genre.Comedy, Genre.Romance ]
    },
    {
        "title": "The Last Letter from Your Lover",
        "description": "A pair of interwoven stories set in the past and present follow an ambitious journalist determined to solve the mystery of a forbidden love affair at the center of a trove of secret love letters from 1965.",
        "genres": [ Genre.Drama, Genre.Romance ]
    },
    {
        "title": "Space Jam: A New Legacy",
        "description": "A rogue artificial intelligence kidnaps the son of famed basketball player LeBron James, who then has to work with Bugs Bunny to win a basketball game.",
        "genres": [ Genre.Family, Genre.Comedy ]
    },
    {
        "title": "The Boss Baby: Family Business",
        "description": "The Templeton brothers have become adults and drifted away from each other, but a new boss baby with a cutting-edge approach is about to bring them together again - and inspire a new family business.",
        "genres": [ Genre.Adventure, Genre.Family ]
    },
    {
        "title": "Dellamorte Dellamore",
        "description": "A cemetery man must kill the dead a second time when they become zombies.",
        "genres": [ Genre.Comedy, Genre.Horror ]
    },
    {
        "title": "Black Widow",
        "description": "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
        "genres": [ Genre.Action, Genre.Adventure ]
    },
    {
        "title": "Snake Eyes",
        "description": "A G.I. Joe spin-off centered around the character of Snake Eyes.",
        "genres": [ Genre.Action, Genre.Adventure ]
    },
    {
        "title": "Gunpowder Milkshake",
        "description": "Three generations of women fight back against those who could take everything from them.",
        "genres": [ Genre.Action, Genre.Adventure ]
    },
    {
        "title": "The Forever Purge",
        "description": "All the rules are broken as a sect of lawless marauders decides that the annual Purge does not stop at daybreak and instead should never end.",
        "genres": [ Genre.Action, Genre.Horror ]
    },
    {
        "title": "The Tomorrow War",
        "description": "A family man is drafted to fight in a future war where the fate of humanity relies on his ability to confront the past.",
        "genres": [ Genre.Action, Genre.Adventure ]
    },
    {
        "title": "The Suicide Squad",
        "description": "Supervillains join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
        "genres": [ Genre.Action, Genre.Adventure ]
    },
    {
        "title": "F9: The Fast Saga",
        "description": "Cipher enlists the help of Jakob, Dom's younger brother to take revenge on Dom and his team.",
        "genres": [ Genre.Action, Genre.Adventure ]
    },
    {
        "title": "The Flash",
        "description": "After being struck by lightning, Barry Allen wakes up from his coma to discover he's been given the power of super speed, becoming the next Flash, fighting crime in Central City.",
        "genres": [ Genre.Action, Genre.Adventure ]
    },
    {
        "title": "Wrath of Man",
        "description": "The plot follows H, a cold and mysterious character working at a cash truck company responsible for moving hundreds of millions of dollars around Los Angeles each week.",
        "genres": [ Genre.Action, Genre.Drama ]
    },
    {
        "title": "Tenet",
        "description": "A Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
        "genres": [ Genre.Action, Genre.Drama ]
    },
    {
        "title": "Avengers: Endgame",
        "description": "With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        "genres": [ Genre.Action, Genre.Adventure ]
    },
    {
        "title": "Avatar",
        "description": "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "genres": [ Genre.Action, Genre.Adventure ]
    },
    {
        "title": "Black Panther",
        "description": "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
        "genres": [ Genre.Action, Genre.Adventure ]
    },
    {
        "title": "Jurassic World",
        "description": "A new theme park, built on the original site of Jurassic Park, creates a genetically modified hybrid dinosaur, the Indominus Rex, which escapes containment and goes on a killing spree.",
        "genres": [ Genre.Action, Genre.Adventure ]
    },
    {
        "title": "Incredibles 2",
        "description": "The Incredibles family takes on a new mission which involves a change in family roles: Bob Parr (Mr. Incredible) must manage the house while his wife Helen (Elastigirl) goes out to save the world.",
        "genres": [ Genre.Action, Genre.Family ]
    },
    {
        "title": "Captain Marvel",
        "description": "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
        "genres": [ Genre.Action, Genre.Adventure ]
    },
    {
        "title": "The Hunger Games: Catching Fire",
        "description": "Katniss Everdeen and Peeta Mellark become targets of the Capitol after their victory in the 74th Hunger Games sparks a rebellion in the Districts of Panem.",
        "genres": [ Genre.Action, Genre.Adventure ]
    },
    {
        "title": "Pirates of the Caribbean: Dead Man's Chest",
        "description": "Jack Sparrow races to recover the heart of Davy Jones to avoid enslaving his soul to Jones' service, as other friends and foes seek the heart for their own agenda as well.",
        "genres": [ Genre.Action, Genre.Adventure ]
    },
    {
        "title": "Dune",
        "description": "A Duke's son leads desert warriors against the galactic emperor and his father's evil nemesis when they assassinate his father and free their desert world from the emperor's rule.",
        "genres": [ Genre.Adventure, Genre.Action ]
    },
    {
        "title": "The Green Knight",
        "description": "A fantasy re-telling of the medieval story of Sir Gawain and the Green Knight.",
        "genres": [ Genre.Adventure, Genre.Drama ]
    },
    {
        "title": "Jaws",
        "description": "When a killer shark unleashes chaos on a beach community, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.",
        "genres": [ Genre.Adventure, Genre.Drama ]
    },
    {
        "title": "Inglourious Basterds",
        "description": "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
        "genres": [ Genre.Adventure, Genre.Drama ]
    },
    {
        "title": "American Psycho",
        "description": "A wealthy New York City investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies.",
        "genres": [ Genre.Comedy, Genre.Drama ]
    },
    {
        "title": "Almost Famous",
        "description": "A high-school boy is given the chance to write a story for Rolling Stone Magazine about an up-and-coming rock band as he accompanies them on their concert tour.",
        "genres": [ Genre.Comedy, Genre.Adventure ]
    },
    {
        "title": "JoJo Rabbit",
        "description": "A young boy in Hitler's army finds out his mother is hiding a Jewish girl in their home.",
        "genres": [ Genre.Comedy, Genre.Drama ]
    },
    {
        "title": "Green Book",
        "description": "A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on a tour of venues through the 1960s American South.",
        "genres": [ Genre.Comedy, Genre.Drama ]
    },
    {
        "title": "Deadpool",
        "description": "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
        "genres": [ Genre.Comedy, Genre.Action ]
    },
    {
        "title": "Austin Powers: International Man of Mystery ",
        "description": "A world-class playboy and part-time secret agent from the 1960s emerges after thirty years in a cryogenic state to battle with his nemesis Dr. Evil.",
        "genres": [ Genre.Comedy, Genre.Adventure ]
    },
    {
        "title": "Just Go with It",
        "description": "On a weekend trip to Hawaii, a plastic surgeon convinces his loyal assistant to pose as his soon-to-be-divorced wife in order to cover up a careless lie he told to his much-younger girlfriend.",
        "genres": [ Genre.Comedy, Genre.Romance ]
    },
    {
        "title": "Mean Girls",
        "description": "Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.",
        "genres": [ Genre.Comedy]
    },
    {
        "title": "Dazed and Confused",
        "description": "The adventures of high school and junior high students on the last day of school in May 1976.",
        "genres": [ Genre.Comedy]
    },
    {
        "title": "Deadpool 2",
        "description": "Foul-mouthed mutant mercenary Wade Wilson (a.k.a. Deadpool) assembles a team of fellow mutant rogues to protect a young boy with supernatural abilities from the brutal, time-traveling cyborg Cable.",
        "genres": [ Genre.Comedy, Genre.Action ]
    },
    {
        "title": "Legally Blonde",
        "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
        "genres": [ Genre.Comedy, Genre.Romance ]
    },
    {
        "title": "Crazy Rich Asians",
        "description": "This contemporary romantic comedy, based on a global bestseller, follows native New Yorker Rachel Chu to Singapore to meet her boyfriend's family.",
        "genres": [ Genre.Comedy, Genre.Romance ]
    },
    {
        "title": "Fast Times at Ridgemont High",
        "description": "A group of Southern California high school students are enjoying their most important subjects: sex, drugs, and rock n' roll.",
        "genres": [ Genre.Comedy, Genre.Drama ]
    },
    {
        "title": "American Pie",
        "description": "Four teenage boys enter a pact to lose their virginity by prom night.",
        "genres": [ Genre.Comedy ]
    },
    {
        "title": "Pretty Woman",
        "description": "A man in a legal but hurtful business needs an escort for some social events, and hires a beautiful prostitute he meets... only to fall in love.",
        "genres": [ Genre.Comedy, Genre.Romance ]
    },
    {
        "title": "Baywatch",
        "description": "Devoted lifeguard Mitch Buchannon butts heads with a brash new recruit, as they uncover a criminal plot that threatens the future of the bay.",
        "genres": [ Genre.Comedy, Genre.Action ]
    },
    {
        "title": "Pitch Perfect",
        "description": "Beca, a freshman at Barden University, is cajoled into joining The Bellas, her school's all-girls singing group.",
        "genres": [ Genre.Comedy, Genre.Romance ]
    },
    {
        "title": "Palm Springs",
        "description": "Stuck in a time loop, two wedding guests develop a budding romance while living the same day over and over again.",
        "genres": [ Genre.Comedy, Genre.Fantasy ]
    },
    {
        "title": "We're the Millers",
        "description": "A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.",
        "genres": [ Genre.Comedy, Genre.Adventure ]
    },
    {
        "title": "Midsommar",
        "description": "What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.",
        "genres": [ Genre.Drama, Genre.Horror ]
    },
    {
        "title": "Twilight",
        "description": "When Bella Swan moves to a small town in the Pacific Northwest, she falls in love with Edward Cullen, a mysterious classmate who reveals himself to be a 108-year-old vampire.",
        "genres": [ Genre.Drama, Genre.Fantasy ]
    },
    {
        "title": "Promising Young Woman",
        "description": "A young woman, traumatized by a tragic event in her past, seeks out vengeance against those who crossed her path.",
        "genres": [ Genre.Drama ]
    },
    {
        "title": "Harry Potter and the Sorcerer's Stone",
        "description": "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
        "genres": [ Genre.Family, Genre.Fantasy ]
    },
    {
        "title": "Soul",
        "description": "After landing the gig of a lifetime, a New York jazz pianist suddenly finds himself trapped in a strange land between Earth and the afterlife.",
        "genres": [ Genre.Family, Genre.Comedy ]
    },
    {
        "title": "The Croods: A New Age",
        "description": "The prehistoric family the Croods are challenged by a rival family the Bettermans, who claim to be better and more evolved.",
        "genres": [ Genre.Family, Genre.Comedy ]
    },
    {
        "title": "The Sandlot",
        "description": "In the summer of 1962, a new kid in town is taken under the wing of a young baseball prodigy and his rowdy team, resulting in many adventures.",
        "genres": [ Genre.Family, Genre.Comedy ]
    },
    {
        "title": "Harry Potter and the Goblet of Fire",
        "description": "Harry Potter finds himself competing in a hazardous tournament between rival schools of magic, but he is distracted by recurring nightmares.",
        "genres": [ Genre.Family, Genre.Fantasy ]
    },
    {
        "title": "Harry Potter and the Chamber of Secrets",
        "description": "An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed.",
        "genres": [ Genre.Family, Genre.Fantasy ]
    },
    {
        "title": "Spirited Away",
        "description": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
        "genres": [ Genre.Family, Genre.Adventure ]
    },
    {
        "title": "Hotel Transylvania: Transformania",
        "description": "Drac's Pack is back, like you've never seen them before in the final chapter of 'Hotel Transylvania'.",
        "genres": [ Genre.Family, Genre.Adventure ]
    },
    {
        "title": "Tom and Jerry",
        "description": "A chaotic battle ensues between Jerry Mouse, who has taken refuge in the Royal Gate Hotel, and Tom Cat, who is hired to drive him away before the day of a big wedding arrives.",
        "genres": [ Genre.Family, Genre.Comedy ]
    },
    {
        "title": "Moana",
        "description": "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right.",
        "genres": [ Genre.Family, Genre.Adventure ]
    },
    {
        "title": "The Princess Bride",
        "description": "A young boy's grandfather reads him the story of a farmboy-turned-pirate who encounters numerous obstacles, enemies and allies in his quest to be reunited with his true love.",
        "genres": [ Genre.Family, Genre.Fantasy ]
    },
    {
        "title": "Stardust",
        "description": "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm.",
        "genres": [ Genre.Family, Genre.Fantasy ]
    },
    {
        "title": "Cars",
        "description": "A hot-shot race-car named Lightning McQueen gets waylaid in Radiator Springs, where he finds the true meaning of friendship and family.",
        "genres": [ Genre.Family, Genre.Comedy ]
    },
    {
        "title": "Harry Potter and the Prisoner of Azkaban",
        "description": "Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study.",
        "genres": [ Genre.Family, Genre.Fantasy ]
    },
    {
        "title": "Kung Fu Panda",
        "description": "The Dragon Warrior has to clash against the savage Tai Lung as China's fate hangs in the balance.",
        "genres": [ Genre.Family, Genre.Adventure ]
    },
    {
        "title": "The Karate Kid",
        "description": "A martial arts master agrees to teach karate to a bullied teenager.",
        "genres": [ Genre.Family, Genre.Drama ]
    },
    {
        "title": "Coco",
        "description": "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
        "genres": [ Genre.Family, Genre.Adventure ]
    },
    {
        "title": "Scooby-Doo",
        "description": "After an acrimonious break up, the Mystery Inc. gang are individually brought to an island resort to investigate strange goings on.",
        "genres": [ Genre.Family, Genre.Comedy ]
    },
    {
        "title": "Jumanji",
        "description": "When two kids find and play a magical board game, they release a man trapped in it for decades - and a host of dangers that can only be stopped by finishing the game.",
        "genres": [ Genre.Family, Genre.Adventure ]
    },
    {
        "title": "Zootopia",
        "description": "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy.",
        "genres": [ Genre.Family, Genre.Adventure ]
    },
    {
        "title": "Harry Potter and the Order of the Phoenix",
        "description": "With their warning about Lord Voldemort's return scoffed at, Harry and Dumbledore are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts.",
        "genres": [ Genre.Family, Genre.Fantasy ]
    },
    
];

export { Movies };

