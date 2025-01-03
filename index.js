const words = require("./words");
const nato = require("./nato");
const readline = require('readline');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const randomWord = words[getRandomInt(words.length)];

console.log(`The word is: ${randomWord}`);

const randomWordArray = randomWord.split('');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let currentLetterIndex = 0;

function askQuestion() {
    const letter = randomWordArray[currentLetterIndex];
    rl.question(`What is the NATO code for "${letter}"? `, (answer) => {
        if (answer.toLowerCase() === nato[letter].toLowerCase()) {
            console.log("Correct!");
            currentLetterIndex++;
            if (currentLetterIndex < randomWordArray.length) {
                askQuestion();
            } else {
                console.log("You have completed the word!");
                rl.close();
            }
        } else {
            console.log("Incorrect, try again.");
            askQuestion();
        }
    });
}

askQuestion();
