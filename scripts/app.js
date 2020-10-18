console.log('Insanity Check!')

/* 
A checklist of things to do:
[X] Global Variables
[X] DRY method for cardFronts
[X] Timer
[X] The Begin Button
[X] The startGame function that the Begin Button executes
[X] DRY method for Arena creation
[X] Shuffle function
[] Add cards to board
[] flipping cards
[] comparing flipped cards
[X] Win/Lose components

*/

// Global variables
// The cardFront
const cardFront = [ 'images/twofunny.png', 'images/dogbook.jpg', 'images/skatedog.jpg', 'images/platiblonde.jpg']
const cardFront2 = [...cardFront]
const allFront = cardFront.concat(cardFront2)
const fullDeck = []

// When the cardFront are flipped, the cardFront are splayed out to checked whether they match
const cardSplay = []

// When the cardFront are flipped and they match
const cardPaired = []

// This is the board
let board = document.createElement('main')
board.setAttribute('class', 'board')
document.body.appendChild(board)

// function to start the game
function startGame() {
    shortTimer(8)
    shuffleDeck()
    displayBoard()
    console.log('Yay!')
}

// Using the awesome shuffle function below, this then shuffles the concated deck
function shuffleDeck() {
    while (fullDeck.length < allFront.length) {
        let randomInt = getRandomInt(allFront.length);
        if (fullDeck.includes(randomInt) !== true) {
            fullDeck.push(randomInt);
        }
    }
}

// function to create the 2x4 arena; I think I should have this already done upon on launch since I was planning for it to be hidden until the "Begin" button is pressed
function displayBoard() {
    for (let i = 0; i < fullDeck.length; i++) {
        let pares = document.createElement('img');
        pares.setAttribute('src', '/images/eight-cardBack.png');
        // pares.setAttribute('data-id', fullDeck[i]);
        // pares.addEventListener('click', flipCard);
        document.getElementById('boardContainer').appendChild(pares);
    }
}

// function to compare 2 cardFront, this should include the part when the cardFront are flipped back if they are incorrect
function compareCards() {
    if (cardSplay.length === 2) {
        document.main.style.pointerEvents = "none"
    }
    if (cardSplay.length === 2 && (cardSplay[0].src === cardSplay[1].src)) {
        correctSet()
    } else if (cardSplay.length === 2 && (cardSplay[0].src != cardSplay[1].src)) {
        incorrectSet()
    }
}

// function to flip the cardFront with the 'click' EventListener (attached to the container)
// const flipCard

// function for the 8-second timer, which will include what happens if you don't find your m8s in time
// I'm wondering whether I need to see this timer.
function shortTimer(eight) {
    timer = eight
    timerSesh = setInterval(()=> {
        timer--
        if (timer === 0) {
            stopEight()
            // document.querySelector('.board').removeEventListener('click', cardFlip)
            alert('Sorry, but your time has elapsed. Refresh the page to try again.')
        } 
    
    console.log(timer)
    }, 1000)
}

// This function allows the timer to clear
function stopEight() {
    clearInterval(timerSesh)
}

// function when the game is done
function doneGame() {
    if (cardPaired.length === 8) {
        stopEight()
        alert('Congratulations, you have found your m8s!')
    }
}

// Setup the button to do the things
const button = document.querySelector('button')
button.addEventListener('click', ()=> {
    startGame()
})

// This awesome function does a better job in shuffling
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}