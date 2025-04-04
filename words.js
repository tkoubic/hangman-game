// Categories of words for the hangman game
const categories = {
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
};

// Default word list (will be replaced by category selection)
let wordList = [];

// Function to get all words (for backward compatibility)
function getAllWords() {
    return Object.values(categories).flat();
}


