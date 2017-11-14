var wordBank = [
	"count", 
	"bank",
	"teller",
	"vault",
	"money",
	"coins",
	"interest",
	"loan"
];

// module.exports = function Word() {
// 	this.randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
// 	return (randomWord);
// }

// chooses a randome word from wordBank
var wordChoice = function() {
	var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];  
	console.log("wordbank.js: " + randomWord);
	return (randomWord);
};

var checkLetter = function(randomWord, letter) {
	// function to check to see if the letter is in the word
	// iterate randomeword and see if letter is in it
}




// console.log(wordChoice());

module.exports = {
	wordChoice: wordChoice,
	wordBank: wordBank
};