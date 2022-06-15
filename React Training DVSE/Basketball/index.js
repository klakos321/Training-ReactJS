var homeScore = 0
var guestScore = 0

function addScore(score) {
    let homeDisplay = document.getElementById("homeScore")
    let guestDisplay = document.getElementById("guestScore")
    switch(score) {
        case "11":
            homeScore += 1
            homeDisplay.textContent = homeScore
        break;
        
        case "12":
            homeScore += 2
            homeDisplay.textContent = homeScore
        break;
        
        case "13":
            homeScore += 3
            homeDisplay.textContent = homeScore
        break;
        
        case "21":
            guestScore += 1
            guestDisplay.textContent = guestScore
        break;
        
        case "22":
            guestScore += 2
            guestDisplay.textContent = guestScore
        break;
        
        case "23":
            guestScore += 3
            guestDisplay.textContent = guestScore
        break;
    }
    console.log(homeScore + "-" + guestScore);

    if(homeScore > guestScore) {
        homeDisplay.style.color = "#FFD700"
        guestDisplay.style.color = "#F94F6D"
    } else {
        homeDisplay.style.color = "#F94F6D"
        guestDisplay.style.color = "#FFD700"
    }
    
    if(homeScore == guestScore) {
        guestDisplay.style.color = "#F94F6D"
        homeDisplay.style.color = "#F94F6D"
    }
}

function newGame() {
    let homeDisplay = document.getElementById("homeScore")
    let guestDisplay = document.getElementById("guestScore")
    homeScore = 0
    guestScore = 0
    homeDisplay.textContent = homeScore
    guestDisplay.textContent = guestScore
    guestDisplay.style.color = "#F94F6D"
    homeDisplay.style.color = "#F94F6D"
}