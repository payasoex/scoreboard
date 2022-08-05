let homeCount = document.getElementById("home-count")
let guestCount = document.getElementById("guest-count")
let homeScore = 0
let guestScore = 0
// document.getElementById("home-count").textContent = homeInit
// document.getElementById("guest-count").textContent = guestInit

// HOME
function add1Home() {
    homeScore += 1
    homeCount.textContent = homeScore
}

function add2Home() {
    homeScore += 2
    homeCount.textContent = homeScore 
}

function add3Home() {
    homeScore += 3
    homeCount.textContent = homeScore
}


// GUEST
function add1Guest() {
    guestScore += 1
    guestCount.textContent = guestScore
}

function add2Guest() {
    guestScore += 2
    guestCount.textContent = guestScore
}

function add3Guest() {
    console.log("click")
    guestScore += 3
    guestCount.textContent = guestScore
}


// NEW GAME

function newGame() {
    homeScore = 0
    guestScore = 0
    homeCount.textContent = homeScore
    guestCount.textContent = guestScore
}
