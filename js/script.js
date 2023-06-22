//The unordered list where the player’s guessed letters will appear
const guessedLettersElement = document.querySelector(".guessed-letters");
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
const guessedLetters = [];

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
    message.innerText = "";
    const guess = typeLetter.value;
    const correctGuess = validateInput(guess);
    if (correctGuess) {
        makeGuess(guess);
    }
    typeLetter.value = "";
});

//Function to check user input
const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        message.innerText = "Please enter only one letter."
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter only letters, one at a time.";
    } else {
        return input;
    }
};

//Function to capture input
const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed that letter.  Try again!";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
        showGuessedLetters();
        updateWordInProgress(guessedLetters);
    }
};

//Function to show guessed letters
const showGuessedLetters = function () {
    guessedLettersElement.innerHTML = "";
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersElement.append(li);
    }
};

//Function to update the word in progess
const updateWordInProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const showWord = [];
    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            showWord.push(letter.toUpperCase());
        } else {
            showWord.push("●");
        }
    }
    wordInProgress.innerText = showWord.join("");
    validateWin();
};

//Function to check if the user won
const validateWin = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed the word! Congrats!</p>`;
    }
};