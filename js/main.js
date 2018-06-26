
let switchPlayer = true; //rename
let counter = 0;
let boxId = 0;

const board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];


// Using html() method to set the contents of all elements with the corresponding ID with the values from board array

const renderBoardToScreen = function() { //loop
  $('#0').html(board[0]);
  $('#1').html(board[1]);
  $('#2').html(board[2]);
  $('#3').html(board[3]);
  $('#4').html(board[4]);
  $('#5').html(board[5]);
  $('#6').html(board[6]);
  $('#7').html(board[7]);
  $('#8').html(board[8]);
};

//div z-index (zooming)

const playerOne = function(index) {
  board[index] = "X";
}

const playerTwo = function(index) {
  board[index] = "O";
}

//event listener for button, create function to switch player using global variable

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
  renderBoardToScreen();
  checkForMatch();
}

const checkForMatch = function() {
  if (board[0] === board[1] && board[1] === board[2] && board[0] !== " ") {
    alert("you've won the game");
  } else if (board[3] === board[4] && board[4] === board[5] && board[3] !== " ") {
    alert("you've won the game");
  } else if (board[6] === board[7] && board[7] === board[8] && board[6] !== " ") {
    alert("you've won the game");
  } else if (board[0] === board[3] && board[3] === board[6] && board[0] !== " ") {
    alert("you've won the game");
  } else if (board[1] === board[4] && board[4] === board[7] && board[1] !== " ") {
    alert("you've won the game");
  } else if (board[2] === board[5] && board[5] === board[8] && board[2] !== " ") {
    alert("you've won the game");
  } else if (board[0] === board[4] && board[4] === board[8] && board[0] !== " ") {
    alert("you've won the game");
  } else if (board[2] === board[4] && board[4] === board[6] && board[2] !== " ") {
    alert("you've won the game");
  } else if (counter === 9) {
    alert("It's a draw");
  }
};

$(document).ready(function() {

  //loop or gridcontainer (target)

$('.box').click(function() {
  boxId = event.target.id; //returns a number
  playTurn(boxId);
})

// old code
// $("#0").click(function() {
//   playTurn(0);
// });
//
// $("#1").click(function() {
//   playTurn(1);
// });
//
// $("#2").click(function() {
//   playTurn(2);
// });
//
// $("#3").click(function() {
//   playTurn(3);
// });
//
// $("#4").click(function() {
//   playTurn(4);
// });
//
// $("#5").click(function() {
//   playTurn(5);
// });
//
// $("#6").click(function() {
//   playTurn(6);
// });
//
// $("#7").click(function() {
//   playTurn(7);
// });
//
// $("#8").click(function() {
//   playTurn(8);
// });

});
