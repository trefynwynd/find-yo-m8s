// Global variables
// The cards
const cardFront = 
    [{
        value: 'kate',
        name: 'cF0',
        img: './images/cF0.jpg'
    },
    {
        value: 'nate',
        name: 'cF1',
        img: './images/cF1.jpg'
    }, 
    {
        value: 'bait',
        name: 'cF2', 
        img: './images/cF2.jpg'
    },
    {
        value: 'tate',
        name: 'cF3',
        img: './images/cF3.jpg'
    }, 
    {
        value: 'kate',
        name: 'cF4',
        img: './images/cF4.jpg'
    },
    {
        value: 'nate',
        name: 'cF5',
        img: './images/cF5.jpg'
    }, 
    {
        value: 'bait',
        name: 'cF6',
        img: './images/cF6.jpg'
    },
    {
        value: 'tate',
        name: 'cF7',
        img: './images/cF7.jpg'
    }]

let cardSplay = [] // Where the values are pushed for comparision
let cardPaired = 0 // A tally of matched pairs


// function to start the game
function startGame() {
    shortTimer(8)
    shuffleDeck()
    displayBoard()
}

// This is the board
let board = document.createElement('main')
board.setAttribute('class', 'board')
document.body.appendChild(board)

// Setup the button to do the things
const buttonBegin = document.querySelector('button')
buttonBegin.addEventListener('click', ()=> {
    startGame()
    buttonBegin.removeEventListener('click', startGame)
})
buttonBegin.addEventListener('click', startGame)


// function for the 8-second timer, which will include what happens if you don't find your m8s in time
function shortTimer(eight) {
    timer = eight
    timerSesh = setInterval(()=> {
        timer--
        if (timer === 0) {
            stopEight()
            alert('Sorry, but your time has elapsed. Refresh the page to try again.')
            window.location.reload()
        }
    }, 1000)
}

// This function allows the timer to clear
function stopEight() {
    clearInterval(timerSesh)
}


// Card array creation
function shuffleDeck(array) {
    cardFront.sort(function() {
        return Math.random() - .5
    })
}

// function to create the 2x4 arena
function displayBoard() {
    for (let i = 0; i < cardFront.length; i++) {
        let pares = document.createElement('img');
        pares.setAttribute('src', '/images/cB.png');
        pares.setAttribute('value', cardFront[i].value);
        pares.setAttribute('name', cardFront[i].name)
        pares.addEventListener('click', cardFlip);
        document.getElementById('boardContainer').appendChild(pares);
    }
}

// function to flip the cardFront with the 'click' EventListener (attached to the container)
    function cardFlip(e) {
        let cardName = this.getAttribute('name')
        this.setAttribute('src', `./images/${cardName}.jpg`)
        cardSplay.push(e.target)
    
        if (cardSplay.length === 2) {
            compareCards()
        }
    }

// function to compare 2 cardFront, this should include the part when the cardFront are flipped back if they are incorrect
function compareCards() {
    if (cardSplay[0].getAttribute('value') === cardSplay[1].getAttribute('value')) {
        cardPaired++
        cardSplay = []
    } else if (cardSplay[0].getAttribute('value') != cardSplay[1].getAttribute('value')) {
        cardSplay[0].setAttribute('src', './images/cB.png')
        cardSplay[1].setAttribute('src', './images/cB.png')
        cardSplay = []
    }
    if (cardPaired === 4) {
        doneGame()
    }
}


// function when the game is done
function doneGame() {
        stopEight()
        alert('Congratulations, you have found your m8s!')
        buttonBegin.removeEventListener('click', startGame)
}
