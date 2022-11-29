let scoreHome = 0
let scoreHomeEl = document.getElementById("home-score")

let scoreGuest = 0
let scoreGuestEl = document.getElementById("guest-score")

function incrementHome1() {
    scoreHome += 1
    scoreHomeEl.textContent = scoreHome
    if (scoreHome > scoreGuest) {
        document.getElementById("score-container-home").style.backgroundColor = "#ff0000"
    }
}

function incrementHome2() {
    scoreHome += 2
    scoreHomeEl.textContent = scoreHome 
}

function incrementHome3() {
    scoreHome += 3
    scoreHomeEl.textContent = scoreHome 
}

function incrementGuest1() {
    scoreGuest += 1;
    scoreGuestEl.textContent = scoreGuest
}

function incrementGuest2() {
    scoreGuest += 2;
    scoreGuestEl.textContent = scoreGuest
}

function incrementGuest3() {
    scoreGuest += 3;
    scoreGuestEl.textContent = scoreGuest
}

function resetScore() {
    scoreHome = 0
    scoreHomeEl.textContent = scoreHome
    document.getElementById("score-container-home").style.backgroundColor = "#080001"
    scoreGuest = 0
    scoreGuestEl.textContent = scoreGuest
    document.getElementById("score-container-guest").style.backgroundColor = "#080001"
}

// let homeName 
// let guestName

// let homeNameInputEl = document.getElementById("home-team-name")
// let guestNameInputEl = document.getElementById("guest-team-name")

// let homeNameOutputEl = document.getElementById("home-name")
// let guestNameOutputEl = document.getElementById("guest-name")

// function submitHomeName() {
//     document.getElementById("form-home-name").submit() = homeName
//     console.log(homeName)
// }