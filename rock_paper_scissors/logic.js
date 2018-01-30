// variables section

var computerChoices = ["r", "p", "s"];
var userKeyName = document.getElementById("userKeyName");
var compKeyName = document.getElementById("compKeyName");
var winTrack = document.getElementById("win");
var lossTrack = document.getElementById("loss");
var tieTrack = document.getElementById("tie");
var winScore = 0;
var lossScore = 0;
var tieScore = 0;
var randomCompChoice;
var userKey;
var compKey;
// code below prints what the user's choice and computer's choice was


document.onkeyup = function gameStart() {
Name
    if (event.key === "r" || event.key === "p" || event.key === "s") {
        userKey = event.key;

        if (userKey === "r") {
            userKeyName.textContent = "rock";
        }
        else if (userKey === "p") {
            userKeyName.textContent = "paper";
        }
        else {
            userKeyName.textContent = "scissors";
        }

        randomCompChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        compKey = randomCompChoice;
        console.log(compKeyName);

        if (compKey === "r") {
            compKeyName.textContent = "rock";
        }
        else if (compKey === "p") {
            compKeyName.textContent = "paper";
        }
        else {
            compKeyName.textContent = "scissors";
        }

        if (event.key === randomCompChoice) {
            tieTrack.textContent = tieScore += 1;
        }

        else {
            if (event.key === "r" && randomCompChoice === "p") {
                lossTrack.textContent = lossScore += 1;
            }
            else if (event.key === "r" && randomCompChoice === "s") {
                winTrack.textContent = winScore += 1;
            }
            else if (event.key === "p" && randomCompChoice === "s") {
                lossTrack.textContent = lossScore += 1;
            }
            else if (event.key === "p" && randomCompChoice === "r") {
                winTrack.textContent = winScore += 1;
            }
            else if (event.key === "s" && randomCompChoice === "r") {
                lossTrack.textContent = lossScore += 1;
            }
            else if (event.key === "s" && randomCompChoice === "p") {
                winTrack.textContent = winScore += 1;
            }
            else {
                alert("something happened");
            }
        }
    }

    else {
        alert("Please press either r, p, or s on the keyboard.");
    }

    // code below changes determines winner and changes the score on the scoreboard

   
    
}