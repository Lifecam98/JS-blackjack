let firstCard = null;
let secondCard = null;
let thirdCard = null;
let fourthCard = null;
let fifthCard = null;
let cards = [];
let sum = null;
let hasBlackJack = false;
let isAlive = true;
let gameStarted = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let startGameButton = document.getElementById("start-game-button");
let newCardButton = document.getElementById("new-card-button");


function startGame() {
	if (!gameStarted) {
		firstCard = Math.floor(Math.random() * 11) + 1;
		secondCard = Math.floor(Math.random() * 11) + 1;
		cards.push(firstCard, secondCard);
		gameStarted = true;
		startGameButton.classList.add('disabled');
	}
	renderGame();
}

function renderGame() {
	for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent = "Cards: " + cards.join(" ");
	}
	sum =
		firstCard +
		secondCard +
		(thirdCard ? thirdCard : 0) +
		(fourthCard ? fourthCard : 0) +
		(fifthCard ? fifthCard : 0);
	sumEl.textContent = "Sum: " + sum;
	if (sum <= 20) {
		message = "Do you want to draw a new card?";
	} else if (sum === 21) {
		message = "You've got Blackjack!";
		hasBlackJack = true;
	} else {
		message = "You're out of the game!";
		isAlive = false;
		newCardButton.classList.add('disabled');
	}
	messageEl.textContent = message;
}

function newCard() {
	if (!thirdCard) {
		thirdCard = Math.floor(Math.random() * 11) + 1;
		cards.push(thirdCard);
	} else if (!fourthCard) {
		fourthCard = Math.floor(Math.random() * 11) + 1;
		cards.push(fourthCard);
	} else if (!fifthCard) {
		fifthCard = Math.floor(Math.random() * 11) + 1;
		cards.push(fifthCard);
	}
	renderGame();
}

function resetGame() {
	firstCard = null;
	secondCard = null;
	thirdCard = null;
	fourthCard = null;
	fifthCard = null;
	gameStarted = false;
	cards = [];
	sum = null;
	startGameButton.classList.remove('disabled');
	newCardButton.classList.remove('disabled');
	cardsEl.textContent = "Cards: ";
	sumEl.textContent = "Sum: ";
	message = "Do you want to try again? Press START GAME to start!";
	messageEl.textContent = message;
}
