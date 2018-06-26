
let switchPlayer = true;
let counter = 0;

const board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

// const renderBoardToScreen = function() {
//   let currentGameState = board.values(); //grabbing values from array
//   for (let letter of currentGameState) {
//     console.log(letter); //looping through and printing value to screen
//
//     //print value to each box
//   }
// }

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
    counter = counter + 1;
  } else {
    playerTwo(index);
    switchPlayer = true;
    counter = counter + 1;
  };

  // renderBoardToScreen();
  checkForMatch();
}

const checkForMatch = function() {
  if (board[0] === board[1] && board[1] === board[2] && board[0] !== " ") {
    console.log("you've won the game");
  } else if (board[3] === board[4] && board[4] === board[5] && board[3] !== " ") {
    console.log("you've won the game");
  } else if (board[6] === board[7] && board[7] === board[8] && board[6] !== " ") {
    console.log("you've won the game");
  } else if (board[0] === board[3] && board[3] === board[6] && board[0] !== " ") {
    console.log("you've won the game");
  } else if (board[1] === board[4] && board[4] === board[7] && board[1] !== " ") {
    console.log("you've won the game");
  } else if (board[2] === board[5] && board[5] === board[8] && board[2] !== " ") {
    console.log("you've won the game");
  } else if (board[0] === board[4] && board[4] === board[8] && board[0] !== " ") {
    console.log("you've won the game");
  } else if (board[2] === board[4] && board[4] === board[6] && board[2] !== " ") {
    console.log("you've won the game");
  } else if (counter === 9) {
    console.log("It's a draw");
  }
};

$(document).ready(function() {


$("#0").click(function() {
  playTurn(0);
});

$("#1").click(function() {
  playTurn(1);
});

$("#2").click(function() {
  playTurn(2);
});

$("#3").click(function() {
  playTurn(3);
});

$("#4").click(function() {
  playTurn(4);
});

$("#5").click(function() {
  playTurn(5);
});

$("#6").click(function() {
  playTurn(6);
});

$("#7").click(function() {
  playTurn(7);
});

$("#8").click(function() {
  playTurn(8);
});

});
