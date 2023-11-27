

var playerNumber = 2;

var playerColors = ["red", "blue", "green", "pink"];


function startGame(numberOfPlayers) {

    // set playerNumber
    playerNumber = numberOfPlayers;

    setAllPlayerPoints();

    showInfoField();

}

function setAllPlayerPoints() {

    for (var i = 1; i <= playerNumber; i++) {
        generatePlayerPointsAsDiv(playerColors[i -1], i);
    }

}

function generatePlayerPointsAsDiv(playerColor, number) {
    console.log(playerColor);

    var newDiv = document.createElement("div");

    var div = document.getElementById("F1");
    newDiv.id = "player" + number;
    newDiv.className = "playerPoint" + number;
    div.appendChild(newDiv);
}

function showInfoField() {
    alert("los gehts");
}




function getRandomDiceNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

var randomValue = getRandomDiceNumber();
console.log(randomValue);





