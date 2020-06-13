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
  // AI to make its turn
  let move;
  let gamer = new transposer();
  gamer.onIterate = (player, onGetScore) => {
      for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
              if (board[i][j] == '') {
                  board[i][j] = (player == players.X) ? ai : human;
                  onGetScore(i, j)
                  board[i][j] = '';
              }
          }
      }
  } 
  let bestScore = -Infinity;
  gamer.onIterate(players.X, (i, j) => {
            let score = gamer.minimax(board, 0, players.X);
            if (score > bestScore) {
              bestScore = score;
              move = { i, j };
            }
          });

  board[move.i][move.j] = ai;
  currentPlayer = human;
}