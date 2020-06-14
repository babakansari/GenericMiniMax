// Tic Tac Toe AI with Minimax Algorithm
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/154-tic-tac-toe-minimax.html
// https://youtu.be/I64-UTORVfU
// https://editor.p5js.org/codingtrain/sketches/0zyUhZdJD


class TicTacToe {

  static ai = 'X';
  static human = 'O';
  status = null;

  constructor(board){
    this._board = board;
  }

  checkWinner = function() {
    
    function equals3(a, b, c) {
      return a == b && b == c && a != '';
    }

    let winner = null;
  
    // horizontal
    for (let i = 0; i < 3; i++) {
      if (equals3(this._board[i][0], this._board[i][1], this._board[i][2])) {
        winner = this._board[i][0];
      }
    }
  
    // Vertical
    for (let i = 0; i < 3; i++) {
      if (equals3(this._board[0][i], this._board[1][i], this._board[2][i])) {
        winner = this._board[0][i];
      }
    }
  
    // Diagonal
    if (equals3(this._board[0][0], this._board[1][1], this._board[2][2])) {
      winner = this._board[0][0];
    }
    if (equals3(this._board[2][0], this._board[1][1], this._board[0][2])) {
      winner = this._board[2][0];
    }
  
    let openSpots = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this._board[i][j] == '') {
          openSpots++;
        }
      }
    }
  
    if (winner == null && openSpots == 0) {
      return 'tie';
    } else {
      return winner;
    }
  }

  _checkBoard = function(player, evaluate){
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
          if (this._board[i][j] == '') {
              this._board[i][j] = (player == Game.players.X) ? TicTacToe.ai : TicTacToe.human;
              evaluate( {i, j} );
              this._board[i][j] = '';
            }
        }
    }
  }

  bestMove = function(turn) {
    let game = new Game();
    game.getWinner = () => this.checkWinner();
    game.onTrace = (player, evaluate) => this._checkBoard(player, evaluate);
  
    return game.play( turn==TicTacToe.ai ? Game.players.X : Game.players.O);
  }

}