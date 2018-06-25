//Two players - (X and O) play on a 3x3 grid
//Both human players
// A player can click on an empty box in the grid. If the player forms a row (either column or diagonal), that player wins and the game ends. If the grid is full with no rows/columns/diagonal of the same letter, the game is a draw. A player should try to win with the lowest number of moves.


//create function for user clicking a cell
//create function to check for match & game over

console.log('testing');

let switchPlayer = true;

const board = [0,0,0,0,0,0,0,0,0];
//Initiate the game



//Keep track of whose turn it is

//Create players


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

//create function to check whether a player has won
//create a function for when a cell is clicked
//create a function for restart the game
//create a function to load the game up

const checkForMatch = function() {

}

//create function to check whether
//
// $(document).ready(function() {
//
//
//
// }
