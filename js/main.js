
let nextPlayerTurn = true; //rename
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

//local storage
const dialog = function() {
  $('#playerOne').dialog();
}

const playerOne = function(index) {
  board[index] = "X";
}

const playerTwo = function(index) {
  board[index] = "O";
}

const playTurn = function(index) {
    if (board[index] === " ") { //cell must be empty before inputting a value

    if (nextPlayerTurn === true) {
      playerOne(index);
      nextPlayerTurn = false;

    } else {
      playerTwo(index);
      nextPlayerTurn = true;

    };
    counter = counter + 1;
    checkForMatch();
    renderBoardToScreen();
  }
};

const checkForMatch = function() {
  if (board[0] === board[1] && board[1] === board[2] && board[0] !== " ") {
    $('#playerWon').html(`${board[0]} has won!`)
    return true
  } else if (board[3] === board[4] && board[4] === board[5] && board[3] !== " ") {
    $('#playerWon').html(`${board[3]} has won!`)
    return true;
  } else if (board[6] === board[7] && board[7] === board[8] && board[6] !== " ") {
    $('#playerWon').html(`${board[6]} has won!`)
    return true;
  } else if (board[0] === board[3] && board[3] === board[6] && board[0] !== " ") {
    $('#playerWon').html(`${board[0]} has won!`)
    return true;
  } else if (board[1] === board[4] && board[4] === board[7] && board[1] !== " ") {
    $('#playerWon').html(`${board[1]} has won!`)
    return true;
  } else if (board[2] === board[5] && board[5] === board[8] && board[2] !== " ") {
    $('#playerWon').html(`${board[2]} has won!`)
    return true;
  } else if (board[0] === board[4] && board[4] === board[8] && board[0] !== " ") {
    $('#playerWon').html(`${board[0]} has won!`)
    return true;
  } else if (board[2] === board[4] && board[4] === board[6] && board[2] !== " ") {
    $('#playerWon').html(`${board[2]} has won!`)
    return true;
  } else if (counter > 8) {
    $('#playerWon').html("The game is a draw");
    return true;
  }
};

const reset = function() {
  // console.log(counter);
  // if (checkForMatch() === true) {
    for (let i = 0; i < board.length; i++) {
    board[i] = " ";
    counter = 0;
    $('#playerWon').html(" ");
  }
  renderBoardToScreen();
};

$(document).ready(function() {

  $('.box').click(function() {
    boxId = event.target.id; //returns a number
    playTurn(boxId);
  });

  $('#reset').on('click',function() {
    reset();
  });

}); //end doc ready
