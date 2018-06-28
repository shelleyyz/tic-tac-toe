
let nextPlayerTurn = true; //rename
let counter = 0;
let boxId = 0;
const board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];


// Using html() method to set the contents of all elements with the corresponding ID with the values from board array

const renderBoardToScreen = function(last) { //loop
  // $('#0').html(board[0])
  // $('#0').html("<p>" + (board[0]) + "</p>");
  // $('#1').html("<p>" + (board[1]) + "</p>");
  // $('#2').html("<p>" + (board[2]) + "</p>");
  //
  //
  // // $('#2').html(board[2]);
  // $('#3').html(board[3]);
  // $('#4').html(board[4]);
  // $('#5').html(board[5]);
  // $('#6').html(board[6]);
  // $('#7').html(board[7]);
  // $('#8').html(board[8]);

  $(`#${last}`).html("<p>" + (board[last]) + "</p>");
  $(`#${last} p`).hide().fadeIn(1000);
  console.log('testing render');
};

//local storage

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
    renderBoardToScreen(index); //grabbing the last turn
  }
};

const checkForMatch = function() {
  if (board[0] === board[1] && board[1] === board[2] && board[0] !== " ") {
    $('#playerWon').html(`${board[0]} has won! Pls restart`)
    $('.box').off("click");
    return true
  } else if (board[3] === board[4] && board[4] === board[5] && board[3] !== " ") {
    $('#playerWon').html(`${board[3]} has won! Pls restart`)
    $('.box').off("click");
    return true;
  } else if (board[6] === board[7] && board[7] === board[8] && board[6] !== " ") {
    $('#playerWon').html(`${board[6]} has won! Pls restart`)
    $('.box').off("click");
    return true;
  } else if (board[0] === board[3] && board[3] === board[6] && board[0] !== " ") {
    $('#playerWon').html(`${board[0]} has won! Pls restart`)
    $('.box').off("click");
    return true;
  } else if (board[1] === board[4] && board[4] === board[7] && board[1] !== " ") {
    $('#playerWon').html(`${board[1]} has won! Pls restart`)
    $('.box').off("click");
    return true;
  } else if (board[2] === board[5] && board[5] === board[8] && board[2] !== " ") {
    $('#playerWon').html(`${board[2]} has won! Pls restart`)
    $('.box').off("click");
    return true;
  } else if (board[0] === board[4] && board[4] === board[8] && board[0] !== " ") {
    $('#playerWon').html(`${board[0]} has won! Pls restart`)
    $('.box').off("click");
    return true;
  } else if (board[2] === board[4] && board[4] === board[6] && board[2] !== " ") {
    $('#playerWon').html(`${board[2]} has won! Pls restart`)
    $('.box').off("click");
    return true;
  } else if (counter > 8) {
    $('#playerWon').html("The game is a draw. Pls restart");
    $('.box').off("click");
    return true;
  }
};

const reset = function() {
    for (let i = 0; i < board.length; i++) {
    board[i] = " ";
    counter = 0;
    $('#playerWon').html(" ");
    console.log('testing');
    renderBoardToScreen(i);
  }

  $('.box').click(function() {
    boxId = event.target.id;
    playTurn(boxId);
  });
};

$(document).ready(function() {

  $('.box').click(function() {
    boxId = event.target.id;
    playTurn(boxId);
  });

  $('#reset').click(function() {
    reset();
  });
}); //end doc ready

//document.cookie (running with http using github pages)
