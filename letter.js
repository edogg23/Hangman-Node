// constructor
module.exports = function Letter(letter) {
	this.letter = letter;
	this.guessed_letters = [];
	this.guessed_letters.push(letter);
}

