let firstCard = null;
let secondCard = null;
let thirdCard = null;
let fourthCard = null;
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
	if (fourthCard) {
		cardsEl.textContent =
			"Cards: " +
			firstCard +
			" " +
			secondCard +
			" " +
			thirdCard +
			" " +
			fourthCard;
	} else if (thirdCard) {
		cardsEl.textContent =
			"Cards: " + firstCard + " " + secondCard + " " + thirdCard;
	} else {
		cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
	}
	sum =
		firstCard +
		secondCard +
		(thirdCard ? thirdCard : 0) +
		(fourthCard ? fourthCard : 0);
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
	if (!thirdCard) {
		thirdCard = Math.floor(Math.random() * 11) + 1;
	} else if (!fourthCard) {
		fourthCard = Math.floor(Math.random() * 11) + 1;
	}
	startGame();
}

function resetGame() {
	firstCard = null;
	secondCard = null;
	thirdCard = null;
	fourthCard = null;
	sum = null;
	cardsEl.textContent = "Cards: ";
	sumEl.textContent = "Sum: ";
	message = "Do you want to try again? Press START GAME to start!";
	messageEl.textContent = message;
}
