//The unordered list where the player’s guessed letters will appear
const guessedLetters = document.querySelector(".guessed-letters");
//The button with the text “Guess!” in it
const guessButton = document.querySelector(".guess");
//The text input where the player will guess a letter
const typeLetter = document.querySelector(".letter");
//The empty paragraph where the word in progress will appear
const wordInProgress = document.querySelector(".word-in-progress");
//The paragraph where the remaining guesses will display
const remaining = document.querySelector(".remaining");
//The span inside the paragraph where the remaining guesses will display
const remainingSpan = document.querySelector(".remaining span");
//The empty paragraph where messages will appear when the player guesses a letter
const message = document.querySelector(".message");
//The hidden button that will appear prompting the player to play again
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

//Function to add placeholders for each letter
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = typeLetter.value;
    typeLetter.value = "";
    //console.log(guess);
});