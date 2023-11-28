
var pathBig = ["F1", "F2", "F3", "F4", "F5", "E5", "E6", "D6", "C6", "B6", "B5", "A5", "A4", "A3", "A2", "A1", "B1", "C1", "D1", "E1", "F1"];
var pathMiddle = ["F1", "F2", "F3", "F4", "F5", "E5", "E6", "D6", "C6", "B6", "B5", "A5", "A4", "A3", "B3", "C3", "C2", "C1", "D1", "E1", "F1"];
var pathShort = ["F1", "F2", "F3", "F4", "F5", "E5", "D4", "C4", "C3", "C2", "C1", "D1", "E1", "F1"];
var allPossibleFields = ["A1", "A2", "A3", "A4", "A5", "B1", "B3", "B5", "B6", "C1", "C2", "C3", "C4", "C6", "D1", "D4", "D6", "E1", "E5", "E6", "F1", "F2", "F3", "F4", "F5"];

var playerNumber = 2;
var fieldWithSDG = "";

var players = [
    { color: "red", number: 1, position: "F1", positionInArray: 0, choosenPath: pathBig, sdgCards: 0 },
    { color: "blue", number: 2, position: "F1", positionInArray: 0, choosenPath: pathBig, sdgCards: 0 },
    { color: "green", number: 3, position: "F1", positionInArray: 0, choosenPath: pathBig, sdgCards: 0 },
    { color: "yellow", number: 4, position: "F1", positionInArray: 0, choosenPath: pathBig, sdgCards: 0 }
];

var sdgArray = [
    { url: "hello1"},
    { url: "hello2" },
    { url: "hello3" },
    { url: "hello4" }
];

var playerTurnIndex = 0;
var sdgAvailableIndex = 0;

function startGame(numberOfPlayers) {

    while (players.length > numberOfPlayers) {
        players.pop();
    }

    // set playerNumber
    playerNumber = numberOfPlayers;

    // create all player points on map
    setAllPlayerPoints();

    // set first sdg goal on map
    setSdgGoalOnMap();

    // hide foreground-container
    var buttonContainer = document.getElementById("player-container");
    buttonContainer.style.display = "none";
    var diceContainer = document.getElementById("dice-container");
    diceContainer.style.display = "flex";

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

function setSdgGoalOnMap() {

    var setOnThisFields = allPossibleFields;

    for (var i = 0; i < playerNumber; i++) {
        var player = players[i];
        let valueToRemove = player.choosenPath[player.positionInArray];
        let indexToRemove = setOnThisFields.indexOf(valueToRemove);

        if (indexToRemove !== -1) {
            setOnThisFields.splice(indexToRemove, 1);
            console.log("Value removed:", valueToRemove);
        } else {
            console.log("Value not found in the array");
        }

        console.log(setOnThisFields);        
    }

    let randomIndex = Math.floor(Math.random() * setOnThisFields.length);
    let randomField = setOnThisFields[randomIndex];

    fieldWithSDG = randomField;

    var fieldToPlaceSDG = document.getElementById(randomField);
    fieldToPlaceSDG.style.backgroundColor = "black";

    console.log(randomField);
}

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

function getRandomDiceNumber() {
    return Math.floor(Math.random() * 6) + 1;
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
    var diceContainer = document.getElementById("dice-container");
    diceContainer.style.display = "none";

}

function showDiceContainer() {
    var foregroundContainer = document.getElementById("foreground-container");
    foregroundContainer.style.display = "flex";
    var buttonRollDice = document.getElementById("dice-number");
    buttonRollDice.innerHTML = "";
    var diceContainer = document.getElementById("dice-container");
    diceContainer.style.display = "flex";
    var buttonRollDice = document.getElementById("btn-roll-dice");
    buttonRollDice.style.display = "flex";
    var infoPlayerTurnText = document.getElementById("info-player-turn-text");
    infoPlayerTurnText.innerHTML = `Spieler:in ${playerTurnIndex + 1} ist dran!`;
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

            var foregroundContainer = document.getElementById("foreground-container");
            foregroundContainer.style.display = "flex";
            var selectDirectionContainer = document.getElementById("select-direction-container");
            selectDirectionContainer.style.display = "flex";

            await waitOnSelectDirection(playerPosition, player);

            foregroundContainer.style.display = "none";
            selectDirectionContainer.style.display = "none";

            console.log("clicked");
            console.log(player);
        }

        player.positionInArray++;

        if (player.choosenPath[player.positionInArray] == fieldWithSDG) {
            alert("lutsch eier");
        }
        
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

function waitOnSelectDirection(playerPosition, player) {
    return new Promise(resolve => {
      const leftIcon = document.getElementById("left-direction-icon");
      const rightIcon = document.getElementById("right-direction-icon");
  
      const selectedLeftSide = () => {
        leftIcon.removeEventListener('click', selectedLeftSide);
        rightIcon.removeEventListener('click', selectedRightSide);

        if (playerPosition == "E5") {
            player.choosenPath = pathShort;
        } else {
            player.choosenPath = pathMiddle;
        }

        resolve();
      };

      const selectedRightSide = () => {
        leftIcon.removeEventListener('click', selectedLeftSide);
        rightIcon.removeEventListener('click', selectedRightSide);

        resolve();
      }

      leftIcon.addEventListener('click', selectedLeftSide);
      rightIcon.addEventListener('click', selectedRightSide);
    });
  }


