
var pathBig = ["F1", "F2", "F3", "F4", "F5", "E5", "E6", "D6", "C6", "B6", "B5", "A5", "A4", "A3", "A2", "A1", "B1", "C1", "D1", "E1", "F1"];
var pathMiddle = ["F1", "F2", "F3", "F4", "F5", "E5", "E6", "D6", "C6", "B6", "B5", "A5", "A4", "A3", "B3", "C3", "C2", "C1", "D1", "E1", "F1"];
var pathShort = ["F1", "F2", "F3", "F4", "F5", "E5", "D4", "C4", "C3", "C2", "C1", "D1", "E1", "F1"];

var playerNumber = 2;

var players = [
    { color: "red", number: 1, position: "F1", positionInArray: 0, choosenPath: pathBig, sdgCards: 0 },
    { color: "blue", number: 2, position: "F1", positionInArray: 0, choosenPath: pathBig, sdgCards: 0 },
    { color: "green", number: 3, position: "F1", positionInArray: 0, choosenPath: pathBig, sdgCards: 0 },
    { color: "yellow", number: 4, position: "F1", positionInArray: 0, choosenPath: pathBig, sdgCards: 0 }
];

var playerTurnIndex = 0;

function startGame(numberOfPlayers) {

    while (players.length > numberOfPlayers) {
        players.pop();
    }

    // set playerNumber
    playerNumber = numberOfPlayers;

    // create all player points on map
    setAllPlayerPoints();

    // hide foreground-container
    var buttonContainer = document.getElementById("button-container");
    buttonContainer.style.display = "none";
    var diceContainer = document.getElementById("dice-container");
    diceContainer.style.display = "initial";

}

function setAllPlayerPoints() {

    for (var i = 1; i <= playerNumber; i++) {
        generatePlayerPointsAsDiv(i, "F1");
    }

}

function generatePlayerPointsAsDiv(number, fieldId) {
    var newDiv = document.createElement("div");

    var div = document.getElementById(fieldId);
    newDiv.id = "player" + number;
    newDiv.className = "playerPoint";
    div.appendChild(newDiv);
}

function getRandomDiceNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

var randomValue = getRandomDiceNumber();
console.log(randomValue);


async function rollDice() {

    var buttonRollDice = document.getElementById("btn-roll-dice");
    buttonRollDice.style.display = "none";

    var resultDice = getRandomDiceNumber();
    var diceNumber = document.getElementById('dice-number');
    diceNumber.innerHTML = resultDice;

    setTimeout(() => {
        playerTurn(resultDice);
    }, 1000);
    
}

async function playerTurn(resultDice) {
    showPlayboard();
    console.log("player turn wait on click");
    await movePlayerPoint(resultDice);
    console.log("player turn clicked");
    setTimeout(showDiceContainer, 1000);
}

function showPlayboard() {
    var foregroundContainer = document.getElementById("foreground-container");
    foregroundContainer.style.display = "none";
}

function showDiceContainer() {
    var foregroundContainer = document.getElementById("foreground-container");
    foregroundContainer.style.display = "initial";
    var buttonRollDice = document.getElementById("btn-roll-dice");
    buttonRollDice.style.display = "initial";
}

async function movePlayerPoint(resultDice) {

    var player = players[playerTurnIndex];

    for (var i = 1; i <= resultDice; i++) {

        var playerPosition = player.choosenPath[player.positionInArray];

        if (playerPosition == "F1") {
            player.choosenPath = pathBig;
            player.positionInArray = 0;
        }

        if (playerPosition == "E5" || playerPosition == "A3") {
            // show foreground auswahl
            console.log("wait on click");

            await waitOnSelectDirection();

            console.log("clicked");
        }

        player.positionInArray++;
        
    }

    movePointByOneField(player);

    playerTurnIndex++;

    if (playerTurnIndex >= players.length) {
        playerTurnIndex = 0;
    }

}

function checkPlayerPosition() {
    console.log(players[playerTurnIndex].position);
}

function movePointByOneField(player) {

    var oldDiv = document.getElementById("player" + player.number);
    oldDiv.remove();


    var newDiv = document.createElement("div");

    var div = document.getElementById(player.choosenPath[player.positionInArray]);
    newDiv.id = "player" + player.number;
    newDiv.className = "playerPoint";
    div.appendChild(newDiv);
}


function waitOnSelectDirection(elementId) {
    return new Promise(resolve => {
      document.getElementById(elementId).addEventListener('click', () => {
        resolve();
      });
    });
}
  


