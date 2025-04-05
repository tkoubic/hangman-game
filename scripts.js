// DOM Elements
const displayWords = document.querySelector(".display-words");
const keyDiv = document.querySelector(".keys");
const livesElement = document.querySelector(".lifes span");
const hangmanImage = document.querySelector("img");
const categoryButtons = document.querySelectorAll(".category-btn");
const gameStatusText = document.querySelector(".game-status div");
const restartButton = document.querySelector(".restart-btn");
const languageButtons = document.querySelectorAll(".language-btn");
const backToLanguageButton = document.getElementById("back-to-language-btn");

// Game States
const languageSelectState = document.getElementById("language-select");
const gameStartState = document.getElementById("game-start");
const gamePlayState = document.getElementById("game-play");
const gameEndState = document.getElementById("game-end");

// Game variables
let currentWord = "";
let currentHint = "";
let selectedCategory = "";
let livesRemaining = 6;
let correctLetters = [];
let gameInProgress = false;
const maxLives = 6;

// Initialize the game with language selection
function initializeGame() {
    // Show language selection state, hide other states
    showGameState("language");

    // Reset keyboard and word display
    keyDiv.innerHTML = "";
    displayWords.innerHTML = "";
    document.querySelector(".hint-text").innerText = "";

    // Set initial hangman image (full lives)
    hangmanImage.src = "assets/hangman07.jpg";
    hangmanImage.alt = "hangman07";

    // Reset game variables
    livesRemaining = 6;
    correctLetters = [];
    gameInProgress = false;
    livesElement.innerText = `${livesRemaining} / ${maxLives}`;

    // Initialize UI text based on default language
    updateUIText();
}

// Helper function to show the correct game state
function showGameState(state) {
    // Hide all states first
    languageSelectState.classList.remove("active");
    languageSelectState.classList.add("hidden");
    gameStartState.classList.remove("active");
    gameStartState.classList.add("hidden");
    gamePlayState.classList.add("hidden");
    gameEndState.classList.add("hidden");

    // Show the requested state
    if (state === "language") {
        languageSelectState.classList.remove("hidden");
        languageSelectState.classList.add("active");
    } else if (state === "start") {
        gameStartState.classList.remove("hidden");
        gameStartState.classList.add("active");
    } else if (state === "play") {
        gamePlayState.classList.remove("hidden");
    } else if (state === "end") {
        gameEndState.classList.remove("hidden");
    }
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

// Set the game language
function setGameLanguage(lang) {
    // Call the setLanguage function from words.js
    setLanguage(lang);

    // Show category selection screen
    showGameState("start");
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
    console.log(`Word: ${currentWord}, Category: ${selectedCategory}, Language: ${currentLanguage}`);

    // Display hint
    document.querySelector(".hint-text").innerText = currentHint;

    // Create word display
    displayWords.innerHTML = currentWord.split("").map(() =>
        `<li class="w-10 h-12 border-b-3 border-[#143D60] text-center text-2xl font-bold flex items-end justify-center pb-1 mx-1 transition-all duration-300"></li>`
    ).join("");

    // Show game play state
    showGameState("play");

    // Create keyboard
    createKeyboard();

    // Reset game variables
    livesRemaining = 6;
    correctLetters = [];
    gameInProgress = true;
    livesElement.innerText = `${livesRemaining} / ${maxLives}`;

    // Reset hangman image
    hangmanImage.src = "assets/hangman07.jpg";
    hangmanImage.alt = "hangman07";
}

// Create keyboard buttons
function createKeyboard() {
    keyDiv.innerHTML = "";

    for (let i = 97; i <= 122; i++) {
        const btn = document.createElement("button");
        btn.innerText = String.fromCharCode(i);

        keyDiv.appendChild(btn);
        btn.classList.add(
            "uppercase", "rounded-lg", "text-xl", "font-semibold", "shadow-md",
            "bg-[#143D60]/90", "text-[#DDEB9D]", "p-2", "transition-all", "duration-200",
            "hover:bg-[#1a4f7e]", "hover:shadow-lg", "hover:scale-105", "focus:outline-none", "focus:ring-2", "focus:ring-[#DDEB9D]/50"
        );
        btn.addEventListener("click", e => handleLetterGuess(e.target, String.fromCharCode(i)));
    }
}

// Handle letter guess
function handleLetterGuess(button, clickedLetter) {
    if (!gameInProgress) return;

    // Disable the button
    button.disabled = true;
    button.classList.add("opacity-50", "cursor-not-allowed", "hover:scale-100", "hover:bg-[#143D60]/90");

    // Check if the letter is in the word
    if (currentWord.includes(clickedLetter)) {
        // Correct guess
        [...currentWord].forEach((letter, index) => {
            if (letter === clickedLetter) {
                correctLetters.push(letter);
                const letterElement = displayWords.querySelectorAll("li")[index];
                letterElement.innerText = letter;
                letterElement.classList.remove("border-b-3");
                letterElement.classList.add("uppercase", "bg-[#DDEB9D]/50", "rounded-md", "shadow-md", "transform", "scale-105", "text-[#143D60]");
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
        hangmanImage.src = `assets/hangman0${imageNumber}.jpg`;
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

    // Show game end state
    showGameState("end");

    const uiText = gameData.ui[currentLanguage];

    if (isWin) {
        gameStatusText.textContent = uiText.win;
        gameStatusText.classList.add("bg-[#DDEB9D]/70", "text-[#143D60]", "font-bold", "text-xl");
        gameStatusText.classList.remove("bg-red-200/70", "text-red-800");
    } else {
        gameStatusText.textContent = `${uiText.lose} "${currentWord}".`;
        gameStatusText.classList.add("bg-red-200/70", "text-red-800", "font-bold", "text-xl");
        gameStatusText.classList.remove("bg-[#DDEB9D]/70", "text-[#143D60]");

        // Reveal the word
        [...currentWord].forEach((letter, index) => {
            const letterElement = displayWords.querySelectorAll("li")[index];
            letterElement.innerText = letter;
            letterElement.classList.remove("border-b-3");
            letterElement.classList.add("uppercase");

            if (!correctLetters.includes(letter)) {
                letterElement.classList.add("bg-red-200/70", "text-red-800", "rounded-md", "shadow-md", "transform", "scale-105");
            } else {
                letterElement.classList.add("bg-[#DDEB9D]/50", "rounded-md", "shadow-md", "transform", "scale-105", "text-[#143D60]");
            }
        });
    }
}

// Event Listeners

// Language selection
languageButtons.forEach(button => {
    button.addEventListener("click", () => {
        const language = button.getAttribute("data-language");
        setGameLanguage(language);
    });
});

// Back to language selection button
backToLanguageButton.addEventListener("click", () => {
    showGameState("language");
});

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
