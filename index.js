let scoreHome = 0
let scoreGuest = 0

let homeName = ""
let guestName = ""

let scoreHomeEl = document.getElementById("home-score")
let scoreGuestEl = document.getElementById("guest-score")

let nameBtn = document.getElementById("name-btn")
let homeNameEl = document.getElementById("home-name")
let guestNameEl = document.getElementById("guest-name")


function incrementHome(num) {
    scoreHome += num
    scoreHomeEl.textContent = scoreHome
    render()
}

function incrementGuest(num) {
    scoreGuest += num;
    render()

}

function render() {
    scoreHomeEl.textContent = scoreHome
    scoreGuestEl.textContent = scoreGuest
    // if (scoreHome > scoreGuest) {
    //     document.getElementById("score-container-home").style.backgroundColor = "red"
    //     document.getElementById("score-container-guest").style.backgroundColor = "#080001"
    // } else if(scoreHome === scoreGuest) {
    //     document.getElementById("score-container-home").style.backgroundColor = "#080001"
    //     document.getElementById("score-container-guest").style.backgroundColor = "#080001"
    // } else {
    //     document.getElementById("score-container-home").style.backgroundColor = "#080001"
    //     document.getElementById("score-container-guest").style.backgroundColor = "red"
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
    homeNameEl.value = " "
    guestNameEl.value = " "

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

})