let scoreHome = 0
let scoreGuest = 0

let homeName = ""
let guestName = ""

let scoreHomeEl = document.getElementById("home-score")
let scoreGuestEl = document.getElementById("guest-score")

let nameBtn = document.getElementById("name-btn")
let homeNameEl = document.getElementById("home-name")
let guestNameEl = document.getElementById("guest-name")


function incrementHome1() {
    scoreHome += 1
    scoreHomeEl.textContent = scoreHome
    // if (scoreHome > scoreGuest) {
    //     document.getElementById("score-container-home").style.backgroundColor = "#ff0000"
    // }
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
    homeNameEl.innerHTML = "HOME"
    guestNameEl.innerHTML = "GUEST"
}

nameBtn.addEventListener("click", function() {
    if (document.getElementById("input-home-name").value != "") {
        homeName = document.getElementById("input-home-name").value
        homeNameEl.innerHTML = homeName
    } else {
        homeName = "HOME"
    }
    if (document.getElementById("input-guest-name").value != "") {
        guestName = document.getElementById("input-guest-name").value
        guestNameEl.innerHTML = guestName
    } else {
        guestName = "GUEST"
    }
    console.log(homeName)
    console.log(guestName)
    console.log(document.getElementById("input-home-name").value)
    console.log(document.getElementById("input-guest-name").value)

})