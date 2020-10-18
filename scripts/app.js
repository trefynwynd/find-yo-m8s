console.log('Insanity Check!')

/* 
A checklist of things to do:
[X] Global Variables
[X] DRY method for cardFronts
[X] Timer
[X] The Begin Button
[X] The startGame function that the Begin Button executes
[X] DRY method for Arena creation
[X] Shuffle function (branch: I found another even shorter function!)
[] Add cards to board (branch: My fancy DRY method stayed mostly the same)
[] flipping cards (branch: Had to add more objects to my cards for it to work)
[] comparing flipped cards
[X] Win/Lose components

*/

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


// This is the board
let board = document.createElement('main')
board.setAttribute('class', 'board')
document.body.appendChild(board)

// function to start the game
function startGame() {
    shortTimer(800)
    shuffleDeck()
    displayBoard()
    console.log('Yay!')
}

// Using the awesome shuffle function below, this then shuffles the concated deck
function shuffleDeck() {
    while (fullDeck.length < allFront.length) {
        let randomInt = getRandomInt(allFront.length);
        if (fullDeck.includes(randomInt) !== true) {
            fullDeck.push(allFront[randomInt]);
        }
    }
}

// function to create the 2x4 arena; I think I should have this already done upon on launch since I was planning for it to be hidden until the "Begin" button is pressed
function displayBoard() {
    for (let i = 0; i < fullDeck.length; i++) {
        let pares = document.createElement('img');
        pares.setAttribute('src', '/images/cB.png');
        pares.setAttribute('value', fullDeck[i]);
        pares.setAttribute('name', fullDeck[i].name)
        pares.addEventListener('click', cardFlip);
        document.getElementById('boardContainer').appendChild(pares);
        // buttonBegin.removeEventListener('click', startGame)
    }
}

// board.addEventListener('click', cardFlip)

// function to flip the cardFront with the 'click' EventListener (attached to the container)
function cardFlip(e) {
    console.log(e.target.name)
    // let cardValue = this.getAttribute('value')
    // // This variable is what should to be used to find the match
    // let cardName = this.getAttribute('name')
    // console.log(cardName)
    // this.setAttribute('instance', 'splay')
    // console.log(fullDeck[cardValue])
    // this.setAttribute('src', fullDeck[cardValue])
    // // this.setAttribute('src', './images/cF'+ cardValue + '.jpg')
    // cardSplay.push(cardValue)
    // console.log(cardSplay)
    // if (cardSplay.length === 2) {
    //     compareCards()
    //         // document.board.style.pointerEvents = "none"
    // } 
}

                // function cardFlip(e) {
                //     // e.target.name
                //     let cardValue = this.getAttribute('value')
                //     let cardValue = this.getAttribute('name')
                
                
                //     console.log(cardValue)
                //     // 'images/cF4.jpg'
                // // this.setAttribute('src', fullDeck[cardValue].img)
                //         // e.target.setAttribute('src', `./images/cF${e.target.name}.png`)
                //     // let cardValue = this.getAttribute('data-value')
                //     // this.setAttribute('src', fullDeck[cardValue].img)
                // }

// function to compare 2 cardFront, this should include the part when the cardFront are flipped back if they are incorrect
function compareCards() {
    // console.log(cardSplay[0].cardName)
    // console.log(cardSplay[1].cardName)
    console.log(cardSplay[0].cardValue)
    console.log(cardSplay[1].cardValue)

    //     if (parseInt(cardSplay[0].cardValue) === parseInt(cardSplay[1].cardValue)) {
    //         console.log('Pair up!')
    // //     correctSet()
    //     } else if (parseInt(cardSplay[0].cardValue) != parseInt(cardSplay[1].cardValue)) {
    //         console.log('Pair down!')
    // //     incorrectSet()
        // }
}


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
const buttonBegin = document.querySelector('button')
buttonBegin.addEventListener('click', ()=> {
    startGame()
})

// This awesome function does a better job in shuffling
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

