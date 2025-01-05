// TODO delete
import readline from "readline";

import Quiz from "./Quiz.js";
const quiz = new Quiz();
console.log(quiz.word);

const randomWord = quiz.word;
const randomWordArray = randomWord.split('');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log(`The word is: ${quiz.word}`);

function askQuestion() {
    const letter = quiz.nextLetter;
    rl.question(`What is the NATO code for "${letter}"? `, (answer) => {
        if (quiz.guess(answer)) {
            console.log("Correct!");
            if (quiz.isComplete) {
                console.log("You have completed the word!");
                rl.close();
            } else {
                askQuestion();
            }
        } else {
            console.log("Incorrect, try again.");
            askQuestion();
        }
    });
}

askQuestion();
