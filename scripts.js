// DOM Elements
const displayWords = document.querySelector(".display-words");
const keyDiv = document.querySelector(".keys");
const livesElement = document.querySelector(".lifes b");
const hangmanImage = document.querySelector("img");
const categoryButtons = document.querySelectorAll(".category-btn");
const gameStatusDiv = document.querySelector(".game-status");
const gameStatusText = document.querySelector(".game-status div");
const restartButton = document.querySelector(".restart-btn");

// Game variables
let currentWord = "";
let currentHint = "";
let selectedCategory = "";
let livesRemaining = 6;
let correctLetters = [];
let gameInProgress = false;
const maxLives = 6;

// Initialize the game with category selection
function initializeGame() {
    // Hide game status and show category selection
    gameStatusDiv.classList.add("hidden");
    document.querySelector(".category-selection").classList.remove("hidden");

    // Reset keyboard
    keyDiv.innerHTML = "";
    displayWords.innerHTML = "";
    document.querySelector(".hint-text").innerText = "Select a category to start";

    // Set initial hangman image (full lives)
    hangmanImage.src = "/assets/hangman07.jpg";
    hangmanImage.alt = "hangman07";

    // Reset game variables
    livesRemaining = 6;
    correctLetters = [];
    gameInProgress = false;
    livesElement.innerText = `${livesRemaining} / ${maxLives}`;
}

// Get a random word from the selected category (max 10 letters)
function getRandomWord() {
    // Filter words to max 10 letters
    const filteredWords = wordList.filter(item => item.word.length <= 10);

    if (filteredWords.length === 0) {
        console.error("No words with 10 or fewer letters found in the selected category");
        return null;
    }

    // Get random word
    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    return filteredWords[randomIndex];
}

// Start the game with the selected category
function startGame(category) {
    // Set the selected category and update word list
    selectedCategory = category;
    wordList = categories[category] || [];

    if (wordList.length === 0) {
        console.error("No words found for the selected category");
        return;
    }

    // Get a random word
    const wordData = getRandomWord();
    if (!wordData) return;

    // Set current word and hint
    currentWord = wordData.word;
    currentHint = wordData.hint;
    console.log(`Word: ${currentWord}, Category: ${selectedCategory}`);

    // Display hint
    document.querySelector(".hint-text").innerText = currentHint;

    // Create word display
    displayWords.innerHTML = currentWord.split("").map(() =>
        `<li class="w-8 h-8 border-b-2 border-black text-center text-2xl"></li>`
    ).join("");

    // Hide category selection
    document.querySelector(".category-selection").classList.add("hidden");

    // Create keyboard
    createKeyboard();

    // Reset game variables
    livesRemaining = 6;
    correctLetters = [];
    gameInProgress = true;
    livesElement.innerText = `${livesRemaining} / ${maxLives}`;

    // Reset hangman image
    hangmanImage.src = "/assets/hangman07.jpg";
    hangmanImage.alt = "hangman07";

    // Hide game status
    gameStatusDiv.classList.add("hidden");
}

// Create keyboard buttons
function createKeyboard() {
    keyDiv.innerHTML = "";

    for (let i = 97; i <= 122; i++) {
        const btn = document.createElement("button");
        btn.innerText = String.fromCharCode(i);

        keyDiv.appendChild(btn);
        btn.classList.add(
            "uppercase", "rounded-md", "text-2xl", "shadow-md",
            "hover:bg-sky-400", "delay-100", "hover:animate-pulse", "p-1"
        );
        btn.addEventListener("click", e => handleLetterGuess(e.target, String.fromCharCode(i)));
    }
}

// Handle letter guess
function handleLetterGuess(button, clickedLetter) {
    if (!gameInProgress) return;

    // Disable the button
    button.disabled = true;
    button.classList.add("opacity-50");

    // Check if the letter is in the word
    if (currentWord.includes(clickedLetter)) {
        // Correct guess
        [...currentWord].forEach((letter, index) => {
            if (letter === clickedLetter) {
                correctLetters.push(letter);
                displayWords.querySelectorAll("li")[index].innerText = letter;
                displayWords.querySelectorAll("li")[index].classList.remove("border-b-2");
                displayWords.querySelectorAll("li")[index].classList.add("uppercase");
            }
        });

        // Check if player won
        if (correctLetters.length === new Set(currentWord.split("")).size) {
            endGame(true);
        }
    } else {
        // Incorrect guess
        livesRemaining--;

        // Update hangman image
        const imageNumber = livesRemaining + 1; // Images are numbered 1-7
        hangmanImage.src = `/assets/hangman0${imageNumber}.jpg`;
        hangmanImage.alt = `hangman0${imageNumber}`;

        // Check if player lost
        if (livesRemaining === 0) {
            endGame(false);
        }
    }

    // Update lives display
    livesElement.innerText = `${livesRemaining} / ${maxLives}`;
}

// End the game
function endGame(isWin) {
    gameInProgress = false;

    // Show game status
    gameStatusDiv.classList.remove("hidden");

    if (isWin) {
        gameStatusText.textContent = "Congratulations! You won! 🎉";
        gameStatusText.classList.add("bg-green-200", "text-green-800");
        gameStatusText.classList.remove("bg-red-200", "text-red-800");
    } else {
        gameStatusText.textContent = `Game Over! The word was "${currentWord}".`;
        gameStatusText.classList.add("bg-red-200", "text-red-800");
        gameStatusText.classList.remove("bg-green-200", "text-green-800");

        // Reveal the word
        [...currentWord].forEach((letter, index) => {
            displayWords.querySelectorAll("li")[index].innerText = letter;
            displayWords.querySelectorAll("li")[index].classList.add("uppercase");
            if (!correctLetters.includes(letter)) {
                displayWords.querySelectorAll("li")[index].classList.add("text-red-500");
            }
        });
    }
}

// Event Listeners

// Category selection
categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        startGame(category);
    });
});

// Restart button
restartButton.addEventListener("click", initializeGame);

// Initialize the game on page load
initializeGame();
