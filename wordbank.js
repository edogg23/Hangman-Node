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
var wordChoice = function(list) {
	var randomWord = list[Math.floor(Math.random() * list.length)];  
	console.log("wordbank.js: " + randomWord);
	return (randomWord);
};




// console.log(wordChoice());

module.exports = {
	wordChoice: wordChoice,
	wordBank: wordBank
};