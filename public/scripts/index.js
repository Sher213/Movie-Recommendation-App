let movieNames = ["The Shawshank Redemption",
"The Godfather",
"The Dark Knight",
"The Godfather Part II",
"12 Angry Men",
"Schindler's List",
"The Lord of the Rings: The Return of the King",
"Pulp Fiction",
"The Lord of the Rings: The Fellowship of the Ring",
"Il buono, il brutto, il cattivo",
"Forrest Gump",
"Fight Club",
"The Lord of the Rings: The Two Towers",
"Inception",
"Star Wars: Episode V - The Empire Strikes Back",
"The Matrix",
"Goodfellas",
"One Flew Over the Cuckoo's Nest",
"Spider-Man: Across the Spider-Verse",
"Se7en",
"It's a Wonderful Life",
"Shichinin no samurai",
"The Silence of the Lambs",
"Interstellar",
"Saving Private Ryan",
"Cidade de Deus",
"La vita è bella",
"The Green Mile",
"Star Wars",
"Terminator 2: Judgment Day",
"Back to the Future",
"Sen to Chihiro no kamikakushi",
"The Pianist",
"Psycho",
"Gisaengchung",
"Gladiator",
"The Lion King",
"Léon",
"American History X",
"The Departed",
"Whiplash",
"The Prestige",
"Oppenheimer",
"The Usual Suspects",
"Hotaru no haka",
"Seppuku",
"Casablanca",
"Intouchables",
"Modern Times",
"Nuovo Cinema Paradiso",
"C'era una volta il West",
"Rear Window",
"Alien",
"City Lights",
"Apocalypse Now",
"Memento",
"Django Unchained",
"Raiders of the Lost Ark",
"WALL·E",
"Das Leben der Anderen",
"Sunset Blvd.",
"Paths of Glory",
"Avengers: Infinity War",
"The Shining",
"The Great Dictator",
"Witness for the Prosecution",
"Spider-Man: Into the Spider-Verse",
"Alien 2",
"The Dark Knight Rises",
"Inglourious Basterds",
"American Beauty",
"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
"Oldeuboi",
"Coco",
"Amadeus",
"Toy Story",
"Das Boot",
"Braveheart",
"Avengers: Endgame",
"Joker",
"Mononoke-hime",
"Good Will Hunting",
"Once Upon a Time in America",
"Kimi no na wa.",
"3 Idiots",
"Tengoku to jigoku",
"Singin' in the Rain",
"Requiem for a Dream",
"Capharnaüm",
"Toy Story 3",
"Idi i smotri",
"Star Wars: Episode VI - Return of the Jedi",
"Eternal Sunshine of the Spotless Mind",
"2001: A Space Odyssey",
"Jagten",
"Reservoir Dogs",
"Ikiru",
"Lawrence of Arabia",
"Citizen Kane",
"M - Eine Stadt sucht einen Mörder",
"The Apartment",
"North by Northwest",
"Vertigo",
"Double Indemnity",
"Le fabuleux destin d'Amélie Poulain",
"Scarface",
"Full Metal Jacket",
"A Clockwork Orange",
"Incendies",
"Heat",
"Hamilton",
"Up",
"To Kill a Mockingbird",
"The Sting",
"Jodaeiye Nader az Simin",
"Indiana Jones and the Last Crusade",
"Metropolis",
"Die Hard",
"L.A. Confidential",
"Taare Zameen Par",
"Ladri di biciclette",
"Snatch",
"Taxi Driver",
"1917",
"Der Untergang",
"Dangal",
"Per qualche dollaro in più",
"Top Gun: Maverick",
"Batman Begins",
"Some Like It Hot",
"The Kid",
"The Wolf of Wall Street",
"The Father",
"Green Book",
"All About Eve",
"Judgment at Nuremberg",
"The Truman Show",
"There Will Be Blood",
"Ran",
"Casino",
"Shutter Island",
"El laberinto del fauno",
"The Sixth Sense",
"Unforgiven",
"Jurassic Park",
"A Beautiful Mind",
"The Treasure of the Sierra Madre",
"Yôjinbô",
"No Country for Old Men",
"Kill Bill: Vol. 1",
"Monty Python and the Holy Grail",
"The Great Escape",
"The Thing",
"Rashômon",
"Finding Nemo",
"The Elephant Man",
"Chinatown",
"Hauru no ugoku shiro",
"Dial M for Murder",
"Gone with the Wind",
"V for Vendetta",
"Raging Bull",
"Spider-Man: No Way Home",
"Lock, Stock and Two Smoking Barrels",
"El secreto de sus ojos",
"Prisoners",
"Inside Out",
"Three Billboards Outside Ebbing, Missouri",
"The Bridge on the River Kwai",
"Trainspotting",
"Fargo",
"Warrior",
"Gran Torino",
"Catch Me If You Can",
"Tonari no Totoro",
"Million Dollar Baby",
"Klaus",
"Harry Potter and the Deathly Hallows: Part 2",
"Bacheha-Ye aseman",
"Blade Runner",
"12 Years a Slave",
"Before Sunrise",
"The Gold Rush",
"The Grand Budapest Hotel",
"Ben-Hur",
"Gone Girl",
"Barry Lyndon",
"On the Waterfront",
"Hacksaw Ridge",
"In the Name of the Father",
"The General",
"Salinui chueok",
"The Deer Hunter",
"Smultronstället",
"Le salaire de la peur",
"The Third Man",
"Relatos salvajes",
"Sherlock Jr.",
"Mad Max: Fury Road",
"Dead Poets Society",
"Mr. Smith Goes to Washington",
"Monsters, Inc.",
"How to Train Your Dragon",
"Jaws",
"Mary and Max.",
"Det sjunde inseglet",
"Room",
"Ford v Ferrari",
"The Big Lebowski",
"Tôkyô monogatari",
"Ratatouille",
"Rocky",
"Hotel Rwanda",
"La passion de Jeanne d'Arc",
"Logan",
"Spotlight",
"Platoon",
"The Terminator",
"Jai Bhim",
"Before Sunset",
"Rush",
"Network",
"Stand by Me",
"The Best Years of Our Lives",
"La haine",
"The Wizard of Oz",
"The Exorcist",
"Into the Wild",
"Pirates of the Caribbean: The Curse of the Black Pearl",
"The Incredibles",
"To Be or Not to Be",
"Hachi: A Dog's Tale",
"Ah-ga-ssi",
"Groundhog Day",
"Babam ve Oglum",
"The Grapes of Wrath",
"La battaglia di Algeri",
"Amores perros",
"Rebecca",
"Cool Hand Luke",
"The Sound of Music",
"Pather Panchali",
"It Happened One Night",
"The Iron Giant",
"The Help",
"Les quatre cents coups",
"Persona",
"Life of Brian",
"Aladdin",
"Gangs of Wasseypur"]

//sort names in ascending order
let sortedNames = movieNames.sort();

//references
let input = document.getElementById("input");
let btn = document.getElementById("enter");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("enter").click();
    }
});

//execute fn on keyup
input.addEventListener("keyup", (e) =>  {

    //convert input to lower case and compare each string
    //Initially remove all elements (if user erases or adds)
    removeElements();
    //loop thru movieNames
    for(let i of movieNames) {
        //check length of ul so num of lis <= 5
        let ulLen = document.getElementById("ul").getElementsByTagName("li").length
        if (
            i.toLowerCase().startsWith(input.value.
            toLowerCase()) && input.value != "" && ulLen < 5){
                //create li item
                let listItem = document.createElement("li");
                //One common class name
                listItem.classList.add("list-items");
                listItem.style.cursor = "pointer";
                listItem.setAttribute("onclick", "displayNames('" +
                i + "')");
                //Display matched part in bold
                let word = "<b>" + i.substr(0, input.value.length) + "</b>";
                word+= i.substr(input.value.length);
                //display the value in array
                listItem.innerHTML = word;
                document.querySelector(".list").appendChild(listItem);
            }
    }
});

function displayNames (value) {
    input.value = value;
    removeElements();
}

function removeElements() {
    //clear all items
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
        item.remove();
    });
}