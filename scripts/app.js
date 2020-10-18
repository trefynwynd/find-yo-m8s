console.log('Insanity Check!')


// Global variables
// The cards
const cardFront = [ 'images/twofunny.png', 'images/dogbook.jpg', 'images/skatedog.jpg', 'images/platiblonde.jpg']

// Second set of cards
// let cardFront2 = [...cardFront]

// Array combine
// const fullDeck = cardFront.concat(cardFront2)

// When the cards are flipped, the cards are splayed out to checked whether they match
const cardSplay = []

// When the cards are flipped and they match
const cardPaired = []

// This is the board for the cards
let board = document.createElement('main')
board.setAttribute('class', 'board')
document.body.appendChild(board)

// function to create the 2x4 arena; I think I should have this already done upon on launch since I was planning for it to be hidden until the "Begin" button is pressed
function displayBoard() {
    for (let i = 0; i < randomOrder.length; i++) {
        let pares = document.createElement('img');
        pares.setAttribute('src', 'images/cardBack.png');
        // pares.setAttribute('data-id', randomOrder[i]);
        pares.addEventListener('click', flipCard);
        document.getElementsByClassName('board').appendChild(pares);
    }
}
// function to flip the cards with the 'click' EventListener (attached to the container)

// This is the ever popular shuffle function
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// Using the popular shuffle function to shuffle my cards
const shuffledReady = shuffle(cardFront)

// function to compare 2 cards, this should include the part when the cards are flipped back if they are incorrect


// function for the 8-second timer, which will include what happens if you don't find your m8s in time and when you do find them in time

function shortTimer(eight) {
    timer = eight
    const timerSession = setInterval(()=> {
    if (timer === 0) {
    clearInterval(timerSession)
    // document.querySelector('.board').removeEventListener('click', cardFlip)
    alert('Sorry, but your time has elapsed.')
    } else {
    timer--
    }
    const timerText = document.getElementById('justEight')
    timerText.innerHTML = `Timer: ${timer} sec`
    }, 1000)
    }

// function when the game is done
function doneGame() {
    if (cardPaired.length === 8) {
        alert('Congratulations, you have found your m8s!')
    }
}

// function to start the game
function startGame() {
    shortTimer(8)
    console.log('Yay!')
}


// button query
const button = document.querySelector('button')
button.addEventListener('click', ()=> {
    startGame()
})

// Here is the footer
document.querySelector('footer').innerText = "Coming Soon: Concentr8ion."

/* your mates: Kate (middleton; as twofunny.png), Nate (Fillion) (aka Mal; as dogbook), Earthworm Jim (Bait; as skatedog), (Catherine) Tate (aka Donna Noble; as platiblonde) */