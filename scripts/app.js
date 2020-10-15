console.log('Insanity Check!')


// Global variables
// Array of Objects or Object in an array
const cardFront = [
    {
        name: 'kate',
        img: 'images/twofunny.png'
    },
    {
        name: 'nate',
        img: 'images/dogbook.jpg'
    },
    {
        name: 'bait',
        img: 'images/skatedog.jpg'
    },
    {
        name: 'tate',
        img: 'images/platiblonde.jpg'
    }
]

// This is the board for the cards
let board = document.createElement('main')
board.setAttribute('class', 'board')
document.body.appendChild(board)

// function to create the 2x4 arena; I think I should have this already done upon on launch since I was planning for it to be hidden until the "Begin" button is pressed
// function to flip the cards with the 'click' EventListener (attached to the container)
// function to randomize what cards are shuffled to where
// function to compare 2 cards, this should include the part when the cards are flipped back if they are incorrect


// function for the 8-second timer, which will include what happens if you don't find your m8s in time and when you do find them in time
function shortTimer(eight) {
    // setInterval(function, 1000(time))
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