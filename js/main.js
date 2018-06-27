
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
    if (board[index] === " ") { //cell must be empty before inputting a value

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
    gameOver();
  }
};

const checkForMatch = function() {
  if (board[0] === board[1] && board[1] === board[2] && board[0] !== " ") {
    $('#playerWon').html(`Player ${board[0]} has won! Next turn will refresh.`);
    return true
  } else if (board[3] === board[4] && board[4] === board[5] && board[3] !== " ") {
    $('#playerWon').html(`Player ${board[3]} has won! Next turn will refresh.`);
    return true;
  } else if (board[6] === board[7] && board[7] === board[8] && board[6] !== " ") {
    $('#playerWon').html(`Player ${board[6]} has won! Next turn will refresh.`);
    return true;
  } else if (board[0] === board[3] && board[3] === board[6] && board[0] !== " ") {
    $('#playerWon').html(`Player ${board[0]} has won! Next turn will refresh.`);
    return true;
  } else if (board[1] === board[4] && board[4] === board[7] && board[1] !== " ") {
    $('#playerWon').html(`Player ${board[1]} has won! Next turn will refresh.`);
    return true;
  } else if (board[2] === board[5] && board[5] === board[8] && board[2] !== " ") {
    $('#playerWon').html(`Player ${board[2]} has won! Next turn will refresh.`);
    return true;
  } else if (board[0] === board[4] && board[4] === board[8] && board[0] !== " ") {
    $('#playerWon').html(`Player ${board[0]} has won! Next turn will refresh.`);
    return true;
  } else if (board[2] === board[4] && board[4] === board[6] && board[2] !== " ") {
    $('#playerWon').html(`Player ${board[2]} has won! Next turn will refresh.`);
    return true;
  } else if (counter > 8) {
    $('#playerWon').html("The game is a draw");
    return true;
  };
};

const gameOver = function() {
  if (checkForMatch() === true) {
    for (let i = 0; i < board.length; i++) {
      board[i] = " ";
    }
    counter = 0;
  }
};

$(document).ready(function() {

  $('.box').click(function() {
    boxId = event.target.id; //returns a number
    playTurn(boxId);
  });
});
