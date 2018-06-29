
let nextPlayerTurn = true;
let turnCounter = 0;
let boxId = 0;
let xWin = 0;
let oWin = 0;

const board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

const renderBoardToScreen = function(boxId) {
  $(`#${boxId}`).html("<p>" + (board[boxId]) + "</p>");
  $(`#${boxId} p`).hide().fadeIn(1000);
  $('#x').html("X wins: " + xWin);
  $('#o').html("O wins: " + oWin);
};


const playerOne = function(index) {
  board[index] = "X";
}

const playerTwo = function(index) {
  board[index] = "O";
}

const playTurn = function(index) {
    if (board[index] === " ") {

    if (nextPlayerTurn === true) {
      playerOne(index);
      nextPlayerTurn = false;

    } else {
      playerTwo(index);
      nextPlayerTurn = true;

    };
    turnCounter = turnCounter + 1;
    checkForMatch();
    renderBoardToScreen(index);
    }
};

const checkForMatch = function() {
  if (board[0] === board[1] && board[1] === board[2] && board[0] !== " ") {
    $('.playerWon').html(`${board[0]} has won!`)
    if ( board[0] === "X" ) {
      xWin ++;
    } else {
      oWin ++
    }
    $('.box').off("click");
    $('.popup').show(1000);
    return true
  } else if (board[3] === board[4] && board[4] === board[5] && board[3] !== " ") {
    $('.playerWon').html(`${board[3]} has won!`)
    if ( board[3] === "X" ) {
      xWin ++;
    } else {
      oWin ++
    }
    $('.box').off("click");
    $('.popup').show(1000);
    return true;
  } else if (board[6] === board[7] && board[7] === board[8] && board[6] !== " ") {
    $('.playerWon').html(`${board[6]} has won!`)
    if ( board[6] === "X" ) {
      xWin ++;
    } else {
      oWin ++
    }
    $('.box').off("click");
    $('.popup').show(1000);
    return true;
  } else if (board[0] === board[3] && board[3] === board[6] && board[0] !== " ") {
    $('.playerWon').html(`${board[0]} has won!`)
    if ( board[0] === "X" ) {
      xWin ++;
    } else {
      oWin ++
    }
    $('.box').off("click");
    $('.popup').show(1000);
    return true;
  } else if (board[1] === board[4] && board[4] === board[7] && board[1] !== " ") {
    $('.playerWon').html(`${board[1]} has won!`)
    if ( board[1] === "X" ) {
      xWin ++;
    } else {
      oWin ++
    }
    $('.box').off("click");
    $('.popup').show(1000);
    return true;
  } else if (board[2] === board[5] && board[5] === board[8] && board[2] !== " ") {
    $('.playerWon').html(`${board[2]} has won!`)
    if ( board[2] === "X" ) {
      xWin ++;
    } else {
      oWin ++
    }
    $('.box').off("click");
    $('.popup').show(1000);
    return true;
  } else if (board[0] === board[4] && board[4] === board[8] && board[0] !== " ") {
    $('.playerWon').html(`${board[0]} has won!`)
    if ( board[0] === "X" ) {
      xWin ++;
    } else {
      oWin ++
    }
    $('.box').off("click");
    $('.popup').show(1000);
    return true;
  } else if (board[2] === board[4] && board[4] === board[6] && board[2] !== " ") {
    $('.playerWon').html(`${board[2]} has won!`)
    if ( board[2] === "X" ) {
      xWin ++;
    } else {
      oWin ++
    }
    $('.box').off("click");
    $('.popup').show(1000);
    return true;
  } else if (turnCounter > 8) {
    $('.playerWon').html("The game is a draw.");
    $('.box').off("click");
    $('.popup').show(1000);
    return true;
  }
};

const reset = function() {
    for (let i = 0; i < board.length; i++) {
    board[i] = " ";
    turnCounter = 0;
    $('#playerWon').html(" ");
    $('.popup').hide(1000);
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
