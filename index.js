let firstCard = null;
let secondCard = null;
let thirdCard = null;
let fourthCard = null;
let fifthCard = null;
let cards = [];
let cardReferenceValue = [];
let firstCardReference = null;
let secondCardReference = null;
let thirdCardReference = null;
let fourthCardReference = null;
let fifthCardReference = null;
const cardImages = [
	"./Assets/Cards/card-back.png",
	"./Assets/Cards/2_of_spades.png",
	"./Assets/Cards/3_of_spades.png",
	"./Assets/Cards/4_of_spades.png",	
	"./Assets/Cards/5_of_spades.png",
	"./Assets/Cards/6_of_spades.png",
	"./Assets/Cards/7_of_spades.png",
	"./Assets/Cards/8_of_spades.png",
	"./Assets/Cards/9_of_spades.png",
	"./Assets/Cards/10_of_spades.png",
	"./Assets/Cards/ace_of_spades.png",
	"./Assets/Cards/jack_of_spades2.png",
	"./Assets/Cards/queen_of_spades2.png",
	"./Assets/Cards/king_of_spades2.png",
]
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
let restartButton = document.getElementById("restart-button");
let firstCardImage = document.getElementById("first-card");
let secondCardImage = document.getElementById("second-card");
let thirdCardImage = document.getElementById("third-card");
let fourthCardImage = document.getElementById("fourth-card");
let fifthCardImage = document.getElementById("fifth-card");

// TODO
// [x] - make actual cards render instead of just card values, images in Assets/Cards

// FIXME
// [x] - card number representation not changing to 1 if ace is changed to 1

// BUG
// [x] picture-cards re-rendering to 10 (new array cardReferenceValue, firstCardReference)


newCardButton.classList.add('disabled');
restartButton.classList.add('disabled');

function startGame() {
	if (!gameStarted) {
		firstCard = Math.floor(Math.random() * 13) + 2;
		secondCard = Math.floor(Math.random() * 13) + 2;
		cards.push(firstCard, secondCard);
		firstCardReference = firstCard;
		secondCardReference = secondCard;
		cardReferenceValue.push(firstCardReference,secondCardReference);
		gameStarted = true;
		startGameButton.classList.add('disabled');
	}
	renderGame();
}

function renderCards() {
firstCardImage.src = cardImages[firstCardReference -1];
secondCardImage.src = cardImages[secondCardReference -1];
thirdCardImage.src = cardImages[thirdCardReference -1];
fourthCardImage.src = cardImages[fourthCardReference -1];
fifthCardImage.src = cardImages[fifthCardReference -1];
}

function renderGame() {
	renderCards();
	firstCard = firstCard > 11 ? 10: firstCard;
	secondCard = secondCard > 11 ? 10: secondCard;
	thirdCard = thirdCard > 11 ? 10 : thirdCard;
	fourthCard = fourthCard > 11 ? 10 : fourthCard;
	fifthCard = fifthCard > 11 ? 10 : fifthCard;
	cards = [firstCard, secondCard, thirdCard, fourthCard, fifthCard];
	for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent = "Cards: " + cards.join(" ");
	}
	let tempSum = firstCard + secondCard + (thirdCard ? thirdCard : 0) + (fourthCard ? fourthCard : 0) + (fifthCard ? fifthCard : 0);
	for (let i = 0; i < cards.length; i++) {
		if (cards[i] === 11 && tempSum > 21) {
			cards[i] = 1;
			tempSum -= 10;
		if (i === 0)
			firstCard = 1;
		else if (i === 1)
			secondCard = 1;
		else if (i === 2)
			thirdCard = 1;
		else if (i === 3)
			fourthCard = 1;
		else if (i === 4)
			fifthCard = 1;
		}
	}
	sum = tempSum;
	sumEl.textContent = "Sum: " + sum;
	if (sum <= 20) {
		message = "Do you want to draw a new card?";
		newCardButton.classList.remove('disabled');
	} else if (sum === 21) {
		message = "You've got Blackjack!";
		hasBlackJack = true;
		restartButton.classList.remove('disabled');
		newCardButton.classList.add('disabled');
	} else {
		message = "You're out of the game!";
		isAlive = false;
		newCardButton.classList.add('disabled');
		restartButton.classList.remove('disabled');
	}
	if (fifthCard) {
		restartButton.classList.remove('disabled');
		newCardButton.classList.add('disabled');
	}
	messageEl.textContent = message;
}

function newCard() {
	if (!thirdCard) {
		thirdCard = Math.floor(Math.random() * 13) + 2;
		cards.push(thirdCard);
		thirdCardReference = thirdCard;
		cardReferenceValue.push(thirdCardReference);
	} else if (!fourthCard) {
		fourthCard = Math.floor(Math.random() * 13) + 2;
		cards.push(fourthCard);
		fourthCardReference = fourthCard;
		cardReferenceValue.push(fourthCardReference);
	} else if (!fifthCard) {
		fifthCard = Math.floor(Math.random() * 13) + 2;
		cards.push(fifthCard);
		fifthCardReference = fifthCard;
		cardReferenceValue.push(fifthCardReference);
	}
	renderGame();
}

function resetGame() {
	firstCard = null;
	secondCard = null;
	thirdCard = null;
	fourthCard = null;
	fifthCard = null;
	cards = [];
	firstCardReference = null;
	secondCardReference = null;
	thirdCardReference = null;
	fourthCardReference = null;
	fifthCardReference = null;
	cardsReferenceValue = [];
	gameStarted = false;
	sum = null;
	startGameButton.classList.remove('disabled');
	newCardButton.classList.add('disabled');
	restartButton.classList.add('disabled');
	cardsEl.textContent = "Cards: ";
	sumEl.textContent = "Sum: ";
	message = "Do you want to try again? Press START GAME to start!";
	messageEl.textContent = message;
	firstCardImage.src = "./Assets/Cards/card-back.png";
	secondCardImage.src = "./Assets/Cards/card-back.png";
	thirdCardImage.src = " ";
	fourthCardImage.src = " ";
	fifthCardImage.src = " ";
	}