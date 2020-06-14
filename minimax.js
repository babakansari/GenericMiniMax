// Tic Tac Toe AI with Minimax Algorithm
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/154-tic-tac-toe-minimax.html
// https://youtu.be/I64-UTORVfU
// https://editor.p5js.org/codingtrain/sketches/0zyUhZdJD

const players = {
  X: 10,
  O: -10,
  tie: 0
};

function bestMove() {
  let game = new Game();
  game.onTrace = (player, doBestMove) => {
      for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
              if (board[i][j] == '') {
                  board[i][j] = (player == players.X) ? ai : human;
                  doBestMove( {i, j} );
                  board[i][j] = '';
              }
          }
      }
  } 

  let move = game.play(players.X);
  board[move.i][move.j] = ai;
  
  currentPlayer = human;
}