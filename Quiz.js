import words from "./words.js";
import nato from "./nato.js";

// const myquiz = new Quiz();
// console.log(myquiz.word());

// console.log(Quiz.word());

export default class Quiz {
    
    constructor() {
        this.currentLetterIndex = 0;
        this.randomWord = words[this._getRandomInt(words.length)];
        this.randomWordArray = this.randomWord.split('');
    }

    get word() {
        return this.randomWord;
    }

    get currentIndex() {
        return this.currentLetterIndex;
    }

    get nextLetter() {
        return this.randomWordArray[this.currentLetterIndex];
    }

    guess(natoLetter) {
        if (natoLetter.toLowerCase() === nato[this.nextLetter].toLowerCase()) {
            this.currentLetterIndex++;
            return true;
        }
        return false;
    }

    get answer(){
        return nato[this.nextLetter];
    }

    get isComplete(){
        if(this.currentLetterIndex < this.randomWordArray.length){
            return false;
        }
        else{
            return true;
        }
    }

    _getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
}