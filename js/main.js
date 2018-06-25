
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
  if (board[0] === board[1] && board[1] === board[2]) {
    console.log("you've won the game");
  }

  if (board[3] === board[4] && board[4] === board[5]) {
    console.log("you've won the game");
  }

  if (board[6] === board[7] && board[7] === board[8]) {
    console.log("you've won the game");
  }

  if (board[0] === board[3] && board[3] === board[6]) {
    console.log("you've won the game");
  }

  if (board[1] === board[4] && board[4] === board[7]) {
    console.log("you've won the game");
  }

  if (board[2] === board[5] && board[5] === board[8]) {
    console.log("you've won the game");
  }

  if (board[0] === board[4] && board[4] === board[8]) {
    console.log("you've won the game");
  }

  if (board[2] === board[4] && board[4] === board[6]) {
    console.log("you've won the game");
  }
};

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
