var inquirer = require('inquirer');

// imports containing constructors
var rdmWord = require('./wordbank.js');
var letter = require('./letter.js');

var word = rdmWord.wordChoice(rdmWord.wordBank)
console.log("word: " , word);


inquirer.prompt([
		{
			name: "choice",
			message: "Guess A Letter",
			type: "input"
		}
	]).
		then(function(guess) {
			console.log("guess: ", guess.choice);

			var ltrAry = new letter(guess.choice);
			console.log("letter array: ", ltrAry);

			var checkWord = new rdmWord(letter);
		});


