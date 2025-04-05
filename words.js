// Words and translations for the hangman game
const gameData = {
    // UI translations
    ui: {
        en: {
            title: "Enjoy playing HANGMAN!",
            selectLanguage: "Select Language:",
            english: "English",
            czech: "Czech",
            selectCategory: "Select Category:",
            selectDifficulty: "Select Difficulty:",
            forKids: "For Kids",
            intermediate: "Intermediate",
            expert: "Expert",
            noHint: "No hint available in Expert mode",
            extraLives: "You have 12 lives in Expert mode",
            animals: "Animals",
            food: "Food",
            objects: "Objects",
            nature: "Nature",
            other: "Other",
            hint: "Hint:",
            lives: "Lives:",
            playAgain: "Play Again",
            backToCategories: "Back to Categories",
            win: "🎉 Congratulations! You won! 🎉",
            lose: "😔 Game Over! The word was ",
            footer: "© 2025 Hangman Game | Created with ❤️"
        },
        cs: {
            title: "Užijte si hru ŠIBENICE!",
            selectLanguage: "Vyberte jazyk:",
            english: "Angličtina",
            czech: "Čeština",
            selectCategory: "Vyberte kategorii:",
            selectDifficulty: "Vyberte obtížnost:",
            forKids: "Pro děti",
            intermediate: "Pokročilí",
            expert: "Expert",
            noHint: "V režimu Expert není k dispozici nápověda",
            extraLives: "V režimu Expert máte 12 životů",
            animals: "Zvířata",
            food: "Jídlo",
            objects: "Předměty",
            nature: "Příroda",
            other: "Ostatní",
            hint: "Nápověda:",
            lives: "Životy:",
            playAgain: "Hrát znovu",
            backToCategories: "Zpět na kategorie",
            win: "🎉 Gratulujeme! Vyhráli jste! 🎉",
            lose: "😔 Konec hry! Hledané slovo bylo ",
            footer: "© 2025 Hra Šibenice | Vytvořeno s ❤️"
        }
    },

    // Word categories in English with difficulty levels
    en: {
        // For Kids difficulty (simple words, clear hints)
        forKids: {
            animals: [
                { word: "cat", hint: "A small pet that meows." },
                { word: "dog", hint: "A pet that barks." },
                { word: "fish", hint: "Lives in water." },
                { word: "bird", hint: "Has wings and can fly." },
                { word: "cow", hint: "Gives us milk." },
                { word: "pig", hint: "Pink farm animal." },
                { word: "duck", hint: "Swims and says quack." },
                { word: "lion", hint: "King of the jungle." }
            ],
            food: [
                { word: "apple", hint: "Red or green fruit." },
                { word: "cake", hint: "Sweet dessert for birthdays." },
                { word: "milk", hint: "White drink from cows." },
                { word: "bread", hint: "Made from flour, used for sandwiches." },
                { word: "egg", hint: "Comes from chickens." },
                { word: "candy", hint: "Sweet treat for children." },
                { word: "soup", hint: "Liquid food in a bowl." },
                { word: "ice", hint: "Frozen water, often in drinks." }
            ],
            objects: [
                { word: "ball", hint: "Round toy you can throw." },
                { word: "book", hint: "Has pages with stories." },
                { word: "chair", hint: "You sit on it." },
                { word: "door", hint: "You open it to enter a room." },
                { word: "pen", hint: "Used for writing." },
                { word: "bed", hint: "You sleep on it." },
                { word: "toy", hint: "Children play with it." },
                { word: "car", hint: "Vehicle with four wheels." }
            ],
            nature: [
                { word: "sun", hint: "Bright star in the sky." },
                { word: "moon", hint: "Shines at night." },
                { word: "star", hint: "Twinkles in the night sky." },
                { word: "tree", hint: "Has leaves and branches." },
                { word: "rain", hint: "Water falling from clouds." },
                { word: "snow", hint: "White and cold, falls in winter." },
                { word: "lake", hint: "Body of water smaller than a sea." },
                { word: "rock", hint: "Hard natural material." }
            ],
            other: [
                { word: "game", hint: "Activity for fun." },
                { word: "song", hint: "Music you can sing." },
                { word: "king", hint: "Male ruler of a country." },
                { word: "baby", hint: "Very young child." },
                { word: "hero", hint: "Person who saves others." },
                { word: "fairy", hint: "Magical creature with wings." },
                { word: "witch", hint: "Magical person with a broom." },
                { word: "giant", hint: "Very big person." }
            ]
        },

        // Intermediate difficulty (medium words, helpful hints)
        intermediate: {
            animals: [
                { word: "zebra", hint: "Animal with black and white stripes." },
                { word: "elephant", hint: "Large mammal with a long trunk." },
                { word: "butterfly", hint: "Insect with colorful wings." },
                { word: "octopus", hint: "Sea creature with eight tentacles." },
                { word: "dolphin", hint: "Intelligent marine mammal." },
                { word: "tiger", hint: "Large cat with orange and black stripes." },
                { word: "penguin", hint: "Flightless bird that lives in cold regions." },
                { word: "giraffe", hint: "Tallest living animal with a long neck." }
            ],
            food: [
                { word: "banana", hint: "Yellow fruit with a peel." },
                { word: "pizza", hint: "Popular Italian dish with cheese and toppings." },
                { word: "chocolate", hint: "Sweet food made from roasted and ground cacao seeds." },
                { word: "pancake", hint: "Flat cake made from batter and fried on both sides." },
                { word: "sushi", hint: "Japanese dish with rice and raw fish." },
                { word: "taco", hint: "Mexican dish with a folded tortilla." },
                { word: "pasta", hint: "Italian food made from wheat flour and water." },
                { word: "burger", hint: "Sandwich with a patty of ground meat." }
            ],
            objects: [
                { word: "computer", hint: "Electronic device used for processing data." },
                { word: "guitar", hint: "Musical instrument with strings." },
                { word: "umbrella", hint: "Device used for protection against rain or sun." },
                { word: "telephone", hint: "Device used for communication over long distances." },
                { word: "bicycle", hint: "Two-wheeled vehicle propelled by pedals." },
                { word: "fireplace", hint: "Structure designed to contain a fire for heating." },
                { word: "airplane", hint: "Powered flying vehicle with fixed wings and a fuselage." },
                { word: "telescope", hint: "Instrument used for viewing distant objects." }
            ],
            nature: [
                { word: "sunflower", hint: "Tall plant with large yellow flowers." },
                { word: "mountain", hint: "Tall landform with steep sides and a peak." },
                { word: "volcano", hint: "Mountain that erupts molten rock and ash." },
                { word: "forest", hint: "Large area covered with trees and plants." },
                { word: "river", hint: "Large natural stream of water flowing to the sea." },
                { word: "beach", hint: "Sandy or pebbly shore by the ocean." },
                { word: "desert", hint: "Arid land with little rainfall." },
                { word: "island", hint: "Land surrounded by water." }
            ],
            other: [
                { word: "dragon", hint: "Mythical creature often depicted as a large, fire-breathing reptile." },
                { word: "ballet", hint: "Artistic dance form performed to music." },
                { word: "soccer", hint: "Popular sport played with a round ball." },
                { word: "magic", hint: "Art of producing illusions as entertainment." },
                { word: "pirate", hint: "Person who attacks and robs ships at sea." },
                { word: "castle", hint: "Large building with thick walls and towers." },
                { word: "robot", hint: "Machine capable of carrying out tasks automatically." },
                { word: "puzzle", hint: "Game or problem that tests ingenuity or knowledge." }
            ]
        },

        // Expert difficulty (difficult words, no hints)
        expert: {
            animals: [
                { word: "platypus", hint: "" },
                { word: "narwhal", hint: "" },
                { word: "chameleon", hint: "" },
                { word: "scorpion", hint: "" },
                { word: "flamingo", hint: "" },
                { word: "jaguar", hint: "" },
                { word: "armadillo", hint: "" },
                { word: "porcupine", hint: "" }
            ],
            food: [
                { word: "quinoa", hint: "" },
                { word: "wasabi", hint: "" },
                { word: "gnocchi", hint: "" },
                { word: "falafel", hint: "" },
                { word: "tiramisu", hint: "" },
                { word: "croissant", hint: "" },
                { word: "gazpacho", hint: "" },
                { word: "kombucha", hint: "" }
            ],
            objects: [
                { word: "chandelier", hint: "" },
                { word: "xylophone", hint: "" },
                { word: "binoculars", hint: "" },
                { word: "thermostat", hint: "" },
                { word: "escalator", hint: "" },
                { word: "microscope", hint: "" },
                { word: "saxophone", hint: "" },
                { word: "projector", hint: "" }
            ],
            nature: [
                { word: "avalanche", hint: "" },
                { word: "quicksand", hint: "" },
                { word: "geyser", hint: "" },
                { word: "glacier", hint: "" },
                { word: "hurricane", hint: "" },
                { word: "peninsula", hint: "" },
                { word: "waterfall", hint: "" },
                { word: "rainforest", hint: "" }
            ],
            other: [
                { word: "symphony", hint: "" },
                { word: "labyrinth", hint: "" },
                { word: "algorithm", hint: "" },
                { word: "philosophy", hint: "" },
                { word: "mythology", hint: "" },
                { word: "psychology", hint: "" },
                { word: "astronomy", hint: "" },
                { word: "democracy", hint: "" }
            ]
        }
    },

    // Word categories in Czech with difficulty levels
    cs: {
        // For Kids difficulty (simple words, clear hints)
        forKids: {
            animals: [
                { word: "pes", hint: "Domácí mazlíček, který štěká." },
                { word: "kočka", hint: "Domácí mazlíček, který mňouká." },
                { word: "ryba", hint: "Žije ve vodě." },
                { word: "pták", hint: "Má křídla a umí létat." },
                { word: "kráva", hint: "Dává nám mléko." },
                { word: "prase", hint: "Růžové hospodářské zvíře." },
                { word: "kachna", hint: "Plavá a říká káč káč." },
                { word: "lev", hint: "Král zvířat." }
            ],
            food: [
                { word: "jablko", hint: "Červené nebo zelené ovoce." },
                { word: "dort", hint: "Sladký dezert na narozeniny." },
                { word: "mléko", hint: "Bílý nápoj od krávy." },
                { word: "chléb", hint: "Vyrobený z mouky, používá se na sendviče." },
                { word: "vejce", hint: "Pochází od slepic." },
                { word: "bonbon", hint: "Sladká pochoutka pro děti." },
                { word: "polévka", hint: "Tekuté jídlo v míse." },
                { word: "led", hint: "Zmrzlá voda, často v nápojích." }
            ],
            objects: [
                { word: "míč", hint: "Kulatá hračka, kterou můžeš hodit." },
                { word: "kniha", hint: "Má stránky s příběhy." },
                { word: "židle", hint: "Sedíš na ní." },
                { word: "dveře", hint: "Otevíráš je, když vstupuješ do místnosti." },
                { word: "pero", hint: "Používá se k psaní." },
                { word: "postel", hint: "Spíš na ní." },
                { word: "hračka", hint: "Děti si s ní hrají." },
                { word: "auto", hint: "Vozidlo se čtyřmi koly." }
            ],
            nature: [
                { word: "slunce", hint: "Jasná hvězda na obloze." },
                { word: "měsíc", hint: "Svítí v noci." },
                { word: "hvězda", hint: "Bliká na noční obloze." },
                { word: "strom", hint: "Má listy a větve." },
                { word: "déšť", hint: "Voda padající z mraků." },
                { word: "sníh", hint: "Bílý a studený, padá v zimě." },
                { word: "jezero", hint: "Vodní plocha menší než moře." },
                { word: "kámen", hint: "Tvrdý přírodní materiál." }
            ],
            other: [
                { word: "hra", hint: "Aktivita pro zábavu." },
                { word: "píseň", hint: "Hudba, kterou můžeš zpívat." },
                { word: "král", hint: "Mužský vládce země." },
                { word: "miminko", hint: "Velmi malé dítě." },
                { word: "hrdina", hint: "Osoba, která zachraňuje ostatní." },
                { word: "víla", hint: "Kouzelna bytost s křídly." },
                { word: "čarodějka", hint: "Kouzelna osoba s koštětem." },
                { word: "obr", hint: "Velmi velká osoba." }
            ]
        },

        // Intermediate difficulty (medium words, helpful hints)
        intermediate: {
            animals: [
                { word: "zebra", hint: "Zvíře s černými a bílými pruhy." },
                { word: "slon", hint: "Velký savec s dlouhým chobotem." },
                { word: "motýl", hint: "Hmyz s barevnými křídly." },
                { word: "chobotnice", hint: "Mořský tvor s osmi chapadly." },
                { word: "delfín", hint: "Inteligentní mořský savec." },
                { word: "tygr", hint: "Velká kočka s oranžovými a černými pruhy." },
                { word: "tučňák", hint: "Nelétavý pták žijící v chladných oblastech." },
                { word: "žirafa", hint: "Nejvyšší žijící zvíře s dlouhým krkem." }
            ],
            food: [
                { word: "banán", hint: "Žluté ovoce se slupkou." },
                { word: "pizza", hint: "Oblíbené italské jídlo se sýrem a dalšími přísadami." },
                { word: "čokoláda", hint: "Sladké jídlo vyrobené z pražených a mletých kakaových bobů." },
                { word: "palačinka", hint: "Plochý koláč z těsta smažený z obou stran." },
                { word: "knedlík", hint: "Tradiční české jídlo podávané jako příloha." },
                { word: "guláš", hint: "Pokrm z masa a cibule, ochucený paprikou." },
                { word: "rohlík", hint: "Pečivo ve tvaru půlměsíce." },
                { word: "řízek", hint: "Tenký plátek masa obalený ve strouhance a smažený." }
            ],
            objects: [
                { word: "počítač", hint: "Elektronické zařízení používané ke zpracování dat." },
                { word: "kytara", hint: "Hudební nástroj se strunami." },
                { word: "deštník", hint: "Zařízení používané k ochraně před deštěm nebo sluncem." },
                { word: "telefon", hint: "Zařízení používané ke komunikaci na velké vzdálenosti." },
                { word: "kolo", hint: "Dvoukolové vozidlo poháněné pedály." },
                { word: "krb", hint: "Konstrukce určená k rozdělání ohně pro vytápění." },
                { word: "letadlo", hint: "Poháněné létající vozidlo s pevnými křídly a trupem." },
                { word: "dalekohled", hint: "Přístroj používaný k pozorování vzdálených objektů." }
            ],
            nature: [
                { word: "slunečnice", hint: "Vysoká rostlina s velkými žlutými květy." },
                { word: "hora", hint: "Vysoký útvar země se strmými stranami a vrcholem." },
                { word: "sopka", hint: "Hora, která chrlí roztavenou horninu a popel." },
                { word: "les", hint: "Velká oblast pokrytá stromy a rostlinami." },
                { word: "řeka", hint: "Velký přírodní tok vody tekoucí do moře." },
                { word: "pláž", hint: "Písčitý nebo oblázkový břeh u oceánu." },
                { word: "poušť", hint: "Suchá země s malým množstvím srážek." },
                { word: "ostrov", hint: "Země obklopená vodou." }
            ],
            other: [
                { word: "drak", hint: "Mytické stvoření často zobrazované jako velký, oheň chrlící plaz." },
                { word: "balet", hint: "Umělecká taneční forma prováděná na hudbu." },
                { word: "fotbal", hint: "Populární sport hraný s kulatým míčem." },
                { word: "kouzlo", hint: "Umění vytváření iluzí jako zábava." },
                { word: "pirát", hint: "Osoba, která napadá a olupuje lodě na moři." },
                { word: "hrad", hint: "Velká budova s tlustými zdmi a věžemi." },
                { word: "robot", hint: "Stroj schopný automaticky provádět úkoly." },
                { word: "hádanka", hint: "Hra nebo problém, který testuje důvtip nebo znalosti." }
            ]
        },

        // Expert difficulty (difficult words, no hints)
        expert: {
            animals: [
                { word: "ptakopysk", hint: "" },
                { word: "narval", hint: "" },
                { word: "chameleon", hint: "" },
                { word: "štír", hint: "" },
                { word: "plameňák", hint: "" },
                { word: "jaguár", hint: "" },
                { word: "pásovec", hint: "" },
                { word: "dikobraz", hint: "" }
            ],
            food: [
                { word: "quinoa", hint: "" },
                { word: "wasabi", hint: "" },
                { word: "gnocchi", hint: "" },
                { word: "falafel", hint: "" },
                { word: "tiramisu", hint: "" },
                { word: "croissant", hint: "" },
                { word: "gazpacho", hint: "" },
                { word: "kombucha", hint: "" }
            ],
            objects: [
                { word: "lustr", hint: "" },
                { word: "xylofon", hint: "" },
                { word: "dalekohled", hint: "" },
                { word: "termostat", hint: "" },
                { word: "eskalátor", hint: "" },
                { word: "mikroskop", hint: "" },
                { word: "saxofon", hint: "" },
                { word: "projektor", hint: "" }
            ],
            nature: [
                { word: "lavina", hint: "" },
                { word: "tekutý písek", hint: "" },
                { word: "gejzír", hint: "" },
                { word: "ledovec", hint: "" },
                { word: "hurikán", hint: "" },
                { word: "poloostrov", hint: "" },
                { word: "vodopád", hint: "" },
                { word: "deštný prales", hint: "" }
            ],
            other: [
                { word: "symfonie", hint: "" },
                { word: "labyrint", hint: "" },
                { word: "algoritmus", hint: "" },
                { word: "filozofie", hint: "" },
                { word: "mytologie", hint: "" },
                { word: "psychologie", hint: "" },
                { word: "astronomie", hint: "" },
                { word: "demokracie", hint: "" }
            ]
        }
    }
};

// Default language and word list (will be replaced by user selection)
let currentLanguage = "en";
let categories = {};
let wordList = [];

// Function to set the current language
function setLanguage(lang) {
    currentLanguage = lang;
    categories = gameData[lang];
    updateUIText();
}

// Function to update UI text based on selected language
function updateUIText() {
    const uiText = gameData.ui[currentLanguage];

    // Update all text elements with translations
    document.getElementById("game-title").textContent = uiText.title;
    document.getElementById("select-language-text").textContent = uiText.selectLanguage;
    document.getElementById("english-btn").textContent = uiText.english;
    document.getElementById("czech-btn").textContent = uiText.czech;
    document.getElementById("select-category-text").textContent = uiText.selectCategory;
    document.getElementById("animals-btn").textContent = uiText.animals;
    document.getElementById("food-btn").textContent = uiText.food;
    document.getElementById("objects-btn").textContent = uiText.objects;
    document.getElementById("nature-btn").textContent = uiText.nature;
    document.getElementById("other-btn").textContent = uiText.other;
    document.getElementById("hint-text-label").textContent = uiText.hint;
    document.getElementById("lives-text").textContent = uiText.lives;
    document.getElementById("play-again-btn").textContent = uiText.playAgain;
    document.getElementById("footer-text").textContent = uiText.footer;
}

// Function to get all words (for backward compatibility)
function getAllWords() {
    return Object.values(categories).flat();
}

// Initialize with English by default
setLanguage("en");


