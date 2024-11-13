let firstCard = null;
let secondCard = null;
let thirdCard = null;
let sum = null;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
	if (!thirdCard) {
		firstCard = Math.floor(Math.random() * 11) + 1;
		secondCard = Math.floor(Math.random() * 11) + 1;
	}
	if (thirdCard) {
		cardsEl.textContent =
			"Cards: " + firstCard + " " + secondCard + " " + thirdCard;
	} else {
		cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
	}
	sum = firstCard + secondCard + (thirdCard ? thirdCard : 0);
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
	thirdCard = Math.floor(Math.random() * 11) + 1;
	cardsEl.textContent =
		"Cards: " + firstCard + " " + secondCard + " " + thirdCard;
	startGame();
}

function resetGame() {
	firstCard = null;
	secondCard = null;
	thirdCard = null;
	sum = null;
	cardsEl.textContent = "Cards: ";
	sumEl.textContent = "Sum: ";
	thirdCard = null;
}
