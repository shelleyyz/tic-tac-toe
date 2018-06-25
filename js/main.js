//Two players - (X and O) play on a 3x3 grid
//Both human players
// A player can click on an empty box in the grid. If the player forms a row (either column or diagonal), that player wins and the game ends. If the grid is full with no rows/columns/diagonal of the same letter, the game is a draw. A player should try to win with the lowest number of moves.


//Draw board
//track player (whose turn it is)
//Figure out win
//Reset game

let switchPlayer = true;

const board = ['','','','','','','','',''];

const playerOne = function(index) {
  board[index] = "X";
}

const playerTwo = function(index) {
  board[index] = "O";
}

const playTurn = function(index) {
  if (switchPlayer === true) {
    playerOne(index);
    switchPlayer = false;
  } else {
    playerTwo(index);
    switchPlayer = true;
  };
}



$(document).ready(function() {


const checkForMatch = function() {

}


$("#1").click(function() {
  $(this).html("X");
});

$("#2").click(function() {
  $(this).html("X");
});

$("#3").click(function() {
  $(this).html("X");
});

$("#4").click(function() {
  $(this).html("X");
});

$("#5").click(function() {
  $(this).html("X");
});

$("#6").click(function() {
  $(this).html("X");
});

$("#7").click(function() {
  $(this).html("X");
});

$("#8").click(function() {
  $(this).html("X");
});

$("#9").click(function() {
  $(this).html("X");
});

});
