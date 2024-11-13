let firstCard = 10;
let secondCard = 4;
let thirdCard = null;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
	if (thirdCard) {
		cardsEl.textContent =
			"Cards: " + firstCard + " " + secondCard + " " + thirdCard;
	} else {
		cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
	}
	sumEl.textContent = "Sum: " + sum;
	if (sum <= 20) {
		message = "Do you want to draw a new card?";
	} else if (sum === 21) {
		message = "You've got Blackjack!";
		hasBlackJack = true;
	} else {
		message = "You're out of the game!";
		isAlive = false;
	}
	messageEl.textContent = message;
}

function newCard() {
	console.log("Drawing a new card from the deck!");
	thirdCard = 6;
	sum += thirdCard;
	cardsEl.textContent =
		"Cards: " + firstCard + " " + secondCard + " " + thirdCard;
	startGame();
}

function resetGame() {
	sum = firstCard + secondCard;
	cardsEl.textContent = "Cards: ";
	sumEl.textContent = "Sum: ";
	thirdCard = null;
}
