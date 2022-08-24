/*
Creating the deck of cards
*/

const deck = [];
var index = 0;
for (var i = 2; i<11; i++) {
    deck[index] = (i)+"♥";
    index++;
    deck[index] = (i)+"♣";
    index++;
    deck[index] = (i)+"♠";
    index++;
    deck[index] = (i)+"♦";
    index++;
}

var suit = "♥"

for (var i =0; i<4; i++) {
    if (i==0) {
        suit="♥"
    }
    else if (i==1) {
        suit="♠"
    }
    else if (i==2) {
        suit="♣"
    }
    else if (i==3) {
        suit="♦"
    }
    deck[index] = "J" + suit;
    index++;
    deck[index] = "Q" + suit;
    index++;
    deck[index] = "K" + suit;
    index++;
    deck[index] = "A" + suit;
    index++;
}

/*
Simple game logic
*/

var gameState = true;

var hand = [];
var dealerHand = [];
var dealerHandIndex = 0;
var handIndex = 0;

const hitButton = document.getElementById('hit');
const standButton = document.getElementById('stand');
const playerHandDisplay = document.getElementById('player-hand');
const sumDisplay = document.getElementById('sum');
const dealerHandDisplay = document.getElementById('dealer-hand');
const dealerSumDisplay = document.getElementById('dealerSum');
const gameEndDisplay = document.getElementById('end');

hitButton.addEventListener('click', hit);
standButton.addEventListener('click', stand);

var i = 0;
while (i<2) {
    var r = Math.floor(Math.random()*52);
    var r2 = Math.floor(Math.random()*52);
    hand[handIndex] = deck[r];
    handIndex++;
    dealerHand[dealerHandIndex] = deck[r2];
    dealerHandIndex++;
    i++;
}

displayPlayerHand();
sumDisplay.innerText = calcHandSum();
if (calcHandSum() == 21) {
    gameEnd();
}
dealerHandStart();
dealerSumDisplay.innerText = calcDealerHandStart();

/*
Functions
*/

function hit() {
    if (!(gameState)) {
        pass;
    }
    var r = Math.floor(Math.random()*52);
    hand[handIndex] = deck[r];
    handIndex++;
    displayPlayerHand();
    if (calcHandSum() >= 21) {
        gameEnd();
    }
    sumDisplay.innerText = calcHandSum();
}

function dealerHit() {
    var r = Math.floor(Math.random()*52);
    dealerHand[dealerHandIndex] = deck[r];
    dealerHandIndex++;
    displayDealerHand();
    dealerSumDisplay.innerText = calcDealerHandSum();
}

function calcHandSum() {
    var sum = 0;
    var aces = 0
    for (var i = 0; i < hand.length; i++) {
        if (hand[i].charAt(0) == 'A') {
            aces++;
        }
        else if (hand[i].charAt(0) == 'Q' ||
                 hand[i].charAt(0) == 'J' ||
                 hand[i].charAt(0) == 'K' ||
                 hand[i].charAt(0)=='1') {
            sum+=10;
        }
        else {
            sum+=parseInt(hand[i].charAt(0));
        }
    }
    for (var i = 0; i < aces; i++) {
        if (sum<=10) {
            sum+=11;
        }
        else {
            sum+=1;
        }
    }
    return sum;
}

function calcDealerHandStart() {
    var sum = 0;
    if (dealerHand[0].charAt(0) == 'A') {
        sum = 11;
    }
    else if (dealerHand[0].charAt(0) == 'Q' ||
             dealerHand[0].charAt(0) == 'J' ||
             dealerHand[0].charAt(0) == 'K' ||
             dealerHand[0].charAt(0)=='1') {
        sum = 10;
    }
    else {
        sum=parseInt(dealerHand[0].charAt(0));
    }
    return sum;
}

function calcDealerHandSum() {
    var sum = 0;
    var aces = 0
    for (var i = 0; i < dealerHand.length; i++) {
        if (dealerHand[i].charAt(0) == 'A') {
            aces++;
        }
        else if (dealerHand[i].charAt(0) == 'Q' ||
                 dealerHand[i].charAt(0) == 'J' ||
                 dealerHand[i].charAt(0) == 'K' ||
                 dealerHand[i].charAt(0)=='1') {
            sum+=10;
        }
        else {
            sum+=parseInt(dealerHand[i].charAt(0));
        }
    }
    for (var i = 0; i < aces; i++) {
        if (sum<=10) {
            sum+=11;
        }
        else {
            sum+=1;
        }
    }
    return sum;
}


function stand() {
    if (!(gameState)) {
        pass;
    }
    while (calcDealerHandSum()<=17) {
        dealerHit();
    }
    dealerSumDisplay.innerText = calcDealerHandSum();
    displayDealerHand();
    gameEnd();
}

function gameEnd() {
    gameState = false;

    var player = calcHandSum();
    var dealer = calcDealerHandSum();

    if (player == 21) {
        if (dealer == 21) {
            gameEndDisplay.innerHTML = 'Draw <a id="new-game" href="blackjack.html"> New game?</a>'
        }
        else {
            gameEndDisplay.innerHTML = 'You win! <a id="new-game" href="blackjack.html"> New game?</a>'
        }
    }
    else if (player > 21) {
        gameEndDisplay.innerHTML = 'You lose! <a id="new-game" href="blackjack.html"> New game?</a>'
    }
    else if (dealer > 21) {
        gameEndDisplay.innerHTML = 'You win! <a id="new-game" href="blackjack.html"> New game?</a>'
    }
    else if (player > dealer) {
        gameEndDisplay.innerHTML = 'You win! <a id="new-game" href="blackjack.html"> New game?</a>'
    }
    else if (dealer > player) {
        gameEndDisplay.innerHTML = 'You lose! <a id="new-game" href="blackjack.html"> New game?</a>'
    }
    else if (dealer == player) {
        gameEndDisplay.innerHTML = 'Draw <a id="new-game" href="blackjack.html"> New game?</a>'
    }
}

function dealerHandStart() {
    var newCard = document.createElement('div');
    var notVisible = document.createElement('div');
    notVisible.classList.add('card-back');
    newCard.classList.add('card-front-small');
    newCard.innerText = dealerHand[0];
    dealerHandDisplay.appendChild(newCard);
    dealerHandDisplay.appendChild(notVisible);
}

function displayPlayerHand() {
    playerHandDisplay.innerHTML = '';
    for (var i = 0; i<hand.length-1; i++) {
        var newCard = document.createElement('div');
        newCard.classList.add('card-front-small');
        newCard.innerText = hand[i];
        playerHandDisplay.appendChild(newCard);
    }
    var newCard = document.createElement('div');
    newCard.classList.add('card-front');
    newCard.innerText = hand[i];
    playerHandDisplay.appendChild(newCard);
}

function displayDealerHand() {
    dealerHandDisplay.innerHTML = '';
    for (var i = 0; i<dealerHand.length-1; i++) {
        var newCard = document.createElement('div');
        newCard.classList.add('card-front-small');
        newCard.innerText = dealerHand[i];
        dealerHandDisplay.appendChild(newCard);
    }
    var newCard = document.createElement('div');
    newCard.classList.add('card-front');
    newCard.innerText = dealerHand[i];
    dealerHandDisplay.appendChild(newCard);
}