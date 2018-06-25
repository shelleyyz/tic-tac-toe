//Two players - (X and O) play on a 3x3 grid
//Both human players
// A player can click on an empty box in the grid. If the player forms a row (either column or diagonal), that player wins and the game ends. If the grid is full with no rows/columns/diagonal of the same letter, the game is a draw. A player should try to win with the lowest number of moves.


//create function for user clicking a cell
//create function to check for match & game over
//

console.log('testing');


const board = [0,0,0,0,0,0,0,0,0];

const playerSwitch = true;

const playTurn = function(number) {
  board[number] = "x"; //number
}
