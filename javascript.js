
var pathBig = ["F1", "F2", "F3", "F4", "F5", "E5", "E6", "D6", "C6", "B6", "B5", "A5", "A4", "A3", "A2", "A1", "B1", "C1", "D1", "E1"];
var pathMiddle = ["F1", "F2", "F3", "F4", "F5", "E5", "E6", "D6", "C6", "B6", "B5", "A5", "A4", "A3", "B3", "C3", "C2", "C1", "D1", "E1"];
var pathShort = ["F1", "F2", "F3", "F4", "F5", "E5", "D4", "C4", "C3", "C2", "C1", "D1", "E1"];

var playerNumber = 2;

var players = [
    { color: "red", position: "F1", positionInArray: 0, choosenPath: pathBig, sdgCards: 0 },
    { color: "blue", position: "F1", positionInArray: 0, choosenPath: pathBig, sdgCards: 0 },
    { color: "green", position: "F1", positionInArray: 0, choosenPath: pathBig, sdgCards: 0 },
    { color: "yellow", position: "F1", positionInArray: 0, choosenPath: pathBig, sdgCards: 0 }
];

var playerTurnIndex = 0;


function startGame(numberOfPlayers) {

    // set playerNumber
    playerNumber = numberOfPlayers;

    // create all player points on map
    setAllPlayerPoints();

    // hide foreground-container
    var buttonContainer = document.getElementById("button-container");
    buttonContainer.style.display = "none";
    var diceContainer = document.getElementById("dice-container");
    diceContainer.style.display = "initial";

    // showDice();

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
    newDiv.className = "playerPoint" + number;
    div.appendChild(newDiv);
}




function getRandomDiceNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

var randomValue = getRandomDiceNumber();
console.log(randomValue);


function rollDice() {

    var buttonRollDice = document.getElementById("btn-roll-dice");
    buttonRollDice.style.display = "none";

    var resultDice = getRandomDiceNumber();
    var diceNumber = document.getElementById('dice-number');
    diceNumber.innerHTML = resultDice;

    setTimeout(() => {
        playerTurn(resultDice);
    }, 1000);
    
}

function playerTurn(resultDice) {
    showPlayboard();
    movePlayerPoint(resultDice);




}

function showPlayboard() {
    var foregroundContainer = document.getElementById("foreground-container");
    foregroundContainer.style.display = "none";
}

function movePlayerPoint(resultDice) {

    var player = players[playerTurnIndex];


    for (var i = 1; i <= resultDice; i++) {

        var playerPosition = player.choosenPath[player.positionInArray];

        if (playerPosition == "F1") {
            player.choosenPath = pathBig;
            player.positionInArray = 0;
        }

        if (playerPosition == "E5" || playerPosition == "A3") {
            alert("achtung achtung, sie müssen links oder rechts gehen, hahahah huso");
            // array wechsel
        }

        // show point on new position
        setTimeout(dd, 2000);
        console.log("hello");

        player.positionInArray++;
        
    }

    console.log(players);

    playerTurnIndex++;

}

function checkPlayerPosition() {
    console.log(players[playerTurnIndex].position);
}

function dd() {

}