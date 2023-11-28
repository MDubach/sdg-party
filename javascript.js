
var pathBig = ["F1", "F2", "F3", "F4", "F5", "E5", "E6", "D6", "C6", "B6", "B5", "A5", "A4", "A3", "A2", "A1", "B1", "C1", "D1", "E1", "F1"];
var pathMiddle = ["F1", "F2", "F3", "F4", "F5", "E5", "E6", "D6", "C6", "B6", "B5", "A5", "A4", "A3", "B3", "C3", "C2", "C1", "D1", "E1", "F1"];
var pathShort = ["F1", "F2", "F3", "F4", "F5", "E5", "D4", "C4", "C3", "C2", "C1", "D1", "E1", "F1"];
var allPossibleFields = ["A1", "A2", "A3", "A4", "A5", "B1", "B3", "B5", "B6", "C1", "C2", "C3", "C4", "C6", "D1", "D4", "D6", "E1", "E5", "E6", "F1", "F2", "F3", "F4", "F5"];

var playerNumber = 2;
var fieldWithSDG = "";
var isAnswerRight = false;

var players = [
    { color: "red", number: 1, position: "F1", positionInArray: 0, choosenPath: pathBig, sdgCards: 0 },
    { color: "blue", number: 2, position: "F1", positionInArray: 0, choosenPath: pathBig, sdgCards: 0 },
    { color: "green", number: 3, position: "F1", positionInArray: 0, choosenPath: pathBig, sdgCards: 0 },
    { color: "yellow", number: 4, position: "F1", positionInArray: 0, choosenPath: pathBig, sdgCards: 0 }
];

var sdgArray = [
    {   number: 1,
        color: "var(--red)",
        url: "url(../img/E-WEB-Goal-01.png)",
        questions: [
            {   question: "Question 01",
                answers: [
                    { answer: "answer1", result: false },
                    { answer: "answer2", result: false },
                    { answer: "answer3", result: true }
                ]
            },
            {   question: "Question 02",
                answers: [
                    { answer: "answer1", result: false },
                    { answer: "answer2", result: false },
                    { answer: "answer3", result: true }
                ]
            },
            {   question: "Question 03",
                answers: [
                    { answer: "answer1", result: false },
                    { answer: "answer2", result: false },
                    { answer: "answer3", result: true }
                ]
            }
        ]
    },
    {   number: 2,
        color: "var(--mustard)",
        url: "url(../img/E-WEB-Goal-02.png)",
        questions: [
            {   question: "Question 01",
                answers: [
                    { answer: "answer1", result: false },
                    { answer: "answer2", result: false },
                    { answer: "answer3", result: true }
                ]
            },
            {   question: "Question 02",
                answers: [
                    { answer: "answer1", result: false },
                    { answer: "answer2", result: false },
                    { answer: "answer3", result: true }
                ]
            },
            {   question: "Question 03",
                answers: [
                    { answer: "answer1", result: false },
                    { answer: "answer2", result: false },
                    { answer: "answer3", result: true }
                ]
            }
        ]
    },
    {   number: 3,
        color: "var(--kellygreen)",
        url: "url(../img/E-WEB-Goal-03.png)"},
    { number: 4, color: "var(--darkred)", url: "url(../img/E-WEB-Goal-04.png)"},
    { number: 5, color: "var(--redorange)", url: "url(../img/E-WEB-Goal-05.png)"},
    { number: 6, color: "var(--bluebright)", url: "url(../img/E-WEB-Goal-06.png)"},
    { number: 7, color: "var(--yellow)", url: "url(../img/E-WEB-Goal-07.png)"},
    { number: 8, color: "var(--redburgundy)", url: "url(../img/E-WEB-Goal-08.png)"},
    { number: 9, color: "var(--orange)", url: "url(../img/E-WEB-Goal-09.png)"},
    { number: 10, color: "var(--magenta)", url: "url(../img/E-WEB-Goal-10.png)"},
    { number: 11, color: "var(--gold)", url: "url(../img/E-WEB-Goal-11.png)"},
    { number: 12, color: "var(--darkmustard)", url: "url(../img/E-WEB-Goal-12.png)"},
    { number: 13, color: "var(--greendark)", url: "url(../img/E-WEB-Goal-13.png)"},
    { number: 14, color: "var(--blue)", url: "url(../img/E-WEB-Goal-14.png)"},
    { number: 15, color: "var(--greenlime)", url: "url(../img/E-WEB-Goal-15.png)"},
    { number: 16, color: "var(--blueroyal)", url: "url(../img/E-WEB-Goal-16.png)"},
    { number: 17, color: "var(--bluenavy)", url: "url(../img/E-WEB-Goal-17.png)"}
];


var playerTurnIndex = 0;
var sdgAvailableIndex = 0;
var sdgAvailableField = "";

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
    sdgAvailableField = setOnThisFields[randomIndex];

    fieldWithSDG = sdgAvailableField;

    var fieldToPlaceSDG = document.getElementById(sdgAvailableField);
    console.log(sdgArray[sdgAvailableIndex].color)
    fieldToPlaceSDG.style.backgroundColor = sdgArray[sdgAvailableIndex].color;
    fieldToPlaceSDG.style.backgroundImage = sdgArray[sdgAvailableIndex].url;

    console.log(sdgAvailableField);
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

        movePointByOneField(player);


        if (player.choosenPath[player.positionInArray] == fieldWithSDG) {
            await showQuestion();     
        }
        
    }    

    playerTurnIndex++;

    if (playerTurnIndex >= players.length) {
        playerTurnIndex = 0;
    }

}

async function showQuestion() {
    var foregroundContainer = document.getElementById("foreground-container");
    foregroundContainer.style.display = "flex";
    var qaContainer = document.getElementById("qa-container");
    qaContainer.style.display = "flex";
    var questionText = document.getElementById("question-text");
    questionText.innerHTML = sdgArray[sdgAvailableIndex].questions[0].question;
    await waitOnAnswer();
    if (isAnswerRight) {
        players[playerTurnIndex].sdgCards++;
        removeSDGOnMap();
        sdgAvailableIndex++;
        setSdgGoalOnMap();

    } else {
        alert("leider falsch du husssoooo!!! XD");
    }
    foregroundContainer.style.display = "none";
    qaContainer.style.display = "none";
}

function removeSDGOnMap() {
    var fieldToRemoveSDG = document.getElementById(sdgAvailableField);
    console.log(sdgArray[0].color)
    fieldToRemoveSDG.style.backgroundColor = "";
    fieldToRemoveSDG.style.backgroundImage = "";
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


function waitOnAnswer() {
    return new Promise(resolve => {
      const btnAnswer1 = document.getElementById("btn-answer-1");
      btnAnswer1.innerHTML = sdgArray[sdgAvailableIndex].questions[0].answers[0].answer;
      const btnAnswer2 = document.getElementById("btn-answer-2");
      btnAnswer2.innerHTML = sdgArray[sdgAvailableIndex].questions[0].answers[1].answer;
      const btnAnswer3 = document.getElementById("btn-answer-3");
      btnAnswer3.innerHTML = sdgArray[sdgAvailableIndex].questions[0].answers[2].answer;
  
      const btnAnswer1Func = () => {
        btnAnswer1.removeEventListener('click', btnAnswer1Func);
        btnAnswer2.removeEventListener('click', btnAnswer2Func);
        btnAnswer3.removeEventListener('click', btnAnswer3Func);
        isAnswerRight = sdgArray[sdgAvailableIndex].questions[0].answers[0].result;

        resolve();
      };

      const btnAnswer2Func = () => {
        btnAnswer1.removeEventListener('click', btnAnswer1Func);
        btnAnswer2.removeEventListener('click', btnAnswer2Func);
        btnAnswer3.removeEventListener('click', btnAnswer3Func);
        isAnswerRight = sdgArray[sdgAvailableIndex].questions[0].answers[1].result;

        resolve();
      };

      const btnAnswer3Func = () => {
        btnAnswer1.removeEventListener('click', btnAnswer1Func);
        btnAnswer2.removeEventListener('click', btnAnswer2Func);
        btnAnswer3.removeEventListener('click', btnAnswer3Func);
        isAnswerRight = sdgArray[sdgAvailableIndex].questions[0].answers[2].result;

        resolve();
      };

      btnAnswer1.addEventListener('click', btnAnswer1Func);
      btnAnswer2.addEventListener('click', btnAnswer2Func);
      btnAnswer3.addEventListener('click', btnAnswer3Func);
    });
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


