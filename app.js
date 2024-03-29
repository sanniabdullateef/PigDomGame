/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScores, activePlayer, gamePlaying;

init();

document.querySelector(".dice").style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePlaying) {
    //1. A Random number from the dice

    var dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the Result

    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    //3. update the Round score only if the is NOT 1

    if (dice !== 1) {
      //Add Scores
      roundScores += dice;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScores;
    } else {
      //Next Player === Tenary Statement

      // Using DRY principle that is DONT REPEAT YOURSELF

      nextPlayer();

      /* activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScores = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.dice').style.display = 'none';*/

      //Same with the else declare up as the following
      /* if (activePlayer === 0) {
      activePlayer = 1;
    } else {
      activePlayer = 0;
    }*/
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gamePlaying) {
    // Add curent score to GLOBAL score
    scores[activePlayer] += roundScores; //or

    //scores[activePlayer] = scores[activePlayer] + roundScores;
    //Update the UI
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];
    //Check if player won the game

    if (scores[activePlayer] >= 100) {
      document.querySelector("#name-" + activePlayer).textContent =
        "Winner ooo!!!";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("Winnner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      nextPlayer();
    }
    nextPlayer();
  }
});
function nextPlayer() {
  //Next Player === Tenary Statement
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScores = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-0").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //document.querySelector('.player-0-panel').classList.remove('active');
  //document.querySelector('.player-1-panel').classList.add('active');
  document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  roundScores = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("Winnner");
  document.querySelector(".player-1-panel").classList.remove("Winnner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

//document.querySelector("#current-" + activePlayer).textContent = "dice";
//document.querySelector("#current-" + activePlayer).innerHTML ="<em>" + dice + "</em>";
//var x = document.querySelector("#score-0").textContent;
//console.log(x);
