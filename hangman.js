var inquirer = require('inquirer');

// imports containing constructors
var rdmWord = require('./wordbank.js');
var letter = require('./letter.js');

// var word = rdmWord.wordChoice(rdmWord.wordBank
console.log("word: " + rdmWord);


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

			wordLength = wordChoice.length;
    		guessedWord = [];
    		guessedLetters = [];
    		guessesRemaining = 15;
		    correctGuessedLetters = 0;

		    for (var i = 0; i < wordLength; i++) {
       		guessedWord.push("_");

       		var matchFound = false;

       		for (var i = 0; i < wordChoice.length; i++){
                wordChoice.charAt(i);
                if (wordChoice.charAt(i) == keyPressed) {
                    guessedWord[i] = keyPressed;
                    correctGuessedLetters++;
                    matchFound = true;
                }
            }

            if (matchFound && wordChoice.length == correctGuessedLetters) {
                notification("You Won", elementNotificationWin);
                gameActive = false;
            }

            //If they lose
            if (guessesRemaining == 0){
                notification("You Lost dude", elementNotificationLose);
                gameActive = false;
            }
    }  
		});


