

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
    newDiv.className = "playerPoint";
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



// dice

var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  
  
  
  //Prints dice roll to the page
  
  function printNumber(number) {
    var placeholder = document.getElementById('dice-number');
    placeholder.innerHTML = number;
  }
  
  var button = document.getElementById('btn-roll-dice');
  
  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
  };
  