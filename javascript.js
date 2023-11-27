

var playerNumber = 2;

var playerColors = ["red", "blue", "green", "pink"];


function startGame(numberOfPlayers) {

    // set playerNumber
    playerNumber = numberOfPlayers;

    // create all player points on map
    setAllPlayerPoints();

    // hide foreground-container
    var foregroundContainer = document.getElementById("foreground-container");
    foregroundContainer.style.display = "none";

    showDice();

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




/* Dice stuff */

var cube = document.getElementById('cube');

var min = 1;
var max = 24;

cube.onclick = function() {
  var xRand = getRandom(max, min);
  var yRand = getRandom(max, min);
    
  cube.style.webkitTransform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
  cube.style.transform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
}

function getRandom(max, min) {
  return (Math.floor(Math.random() * (max-min)) + min) * 90;
}






