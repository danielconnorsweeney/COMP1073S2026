/* 
Project: "Silly Character Customizer"
Objective:
You’ll create a small interactive webpage that generates a random, 
funny character with attributes like name, age, favorite food, and special powers. 
The user can also customize some aspects like updating the character's name or age.

Project Breakdown:
Declare, Initialize, and Update Variables:

You’ll create variables to store different character attributes 
(name, age, favorite food, etc.).
Users will have the option to update some of these variables, like 
changing the character’s name or age.

Use different data types for each attribute:
characterName (string)
Age (number)
Is the character a superhero? (boolean)
Special powers (array)
Favorite food (string)
Conduct Basic Math Operations:

You can randomly generate the character's age using math operations.
You could also include a small feature where the character's age increases 
or decreases when a button is clicked.
Create and Manipulate Strings:

Use string manipulation to generate a funny description of the character 
based on the data. You can concatenate strings or use template literals to 
display the character's attributes in a creative and humorous way.

*/

// Declare and initialize variables
let characterName = "Taco Timmy";
let age = 24;
let isSuperhero = true;
let specialPowers = ["x-ray vision", "teleportation", "super strength"];
let favoriteFood = "tacos";

const characterDescription = document.querySelector("#characterDescription");



// Function to generate a random character description
function generateRandomDescription() {
    let names = ["Captain Underpants", "Johnny Test", "Banana Man", "Cherry Lady"];
    let foods = ["pizza", "ice cream sundae", "wagyu steak", "rotten mushrooms"];
    let powers = ["turn into a squirrel", "reverse time", "super stretch", "breathe fire"];

    age = Math.floor(Math.random() * 100) + 1;
    characterName = names[Math.floor(Math.random() * names.length)];
    let randomHero = Math.floor(Math.random() * 100) + 1;
    if (randomHero >= 50){
        isSuperhero = true;
    } else {
        isSuperhero = false;
    }
    favoriteFood = foods[Math.floor(Math.random() * foods.length)];
    specialPowers = [powers[Math.floor(Math.random() * powers.length)]];

    updateCharacterDescription();
}


// Functions to update character's age
function increaseAge() {
    age++;
    updateCharacterDescription();
}

function decreaseAge() {
    age--;
    updateCharacterDescription();
}


// Function to change character name (it says so in the lab 1 instructions)
function changeName(){
    characterName = document.querySelector("#nameInput").value;
    updateCharacterDescription();
}

// Function to update the character's description after changing age
function updateCharacterDescription() {
    let hero; 

    if (!isSuperhero) {
        hero = "average joe";
    } else {
        hero = "superhero";
    }

    characterDescription.innerText = "Say hello to " + characterName + ", a goofy " + age + " year old " + hero + " who loves to munch on " + favoriteFood + " and super powers includes but not limited to " + specialPowers[0] + ".";
}

// calling updateCharacterDescription so user can see default one when the page loads.
updateCharacterDescription();

// Add event listeners for buttons using querySelector
document.querySelector("#increaseAgeButton").addEventListener("click", increaseAge);
document.querySelector("#decreaseAgeButton").addEventListener("click", decreaseAge);
document.querySelector("#changeNameButton").addEventListener("click", changeName);
document.querySelector("#generateButton").addEventListener("click", generateRandomDescription);

