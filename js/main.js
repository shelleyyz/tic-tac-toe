
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

const checkForMatch = function() {

}


$(document).ready(function() {


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
