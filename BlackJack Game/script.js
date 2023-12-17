let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let player = {
     name :"Rahul",
     chips : 145
}

document.getElementById("player").innerHTML = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13 +1 )
   if (randomNumber > 10){
    return 10
   } else if(randomNumber === 1){
    return 11
   } else {
    return randomNumber
   }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame() 
}

function renderGame() {
    document.getElementById("cards").innerHTML= "Cards: "
    for (let i =0;i< cards.length;i++){
        document.getElementById("cards").innerHTML+= cards[i] + " "
    }
    document.querySelector("#sum").innerHTML = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a card?";
    } else if (sum === 21) {
        message = "Hurrah! You've got Blackjack";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    document.getElementById("message").innerHTML = message;
}

function newCard() {
    if(isAlive === true && hasBlackJack === false){
        console.log("Drawing a new card from the deck!");
    let card = getRandomCard();
    sum += card;
    cards.push(card)
    console.log(cards)
    renderGame();
    }
}