// Tic Tac Toe AI with Minimax Algorithm
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/154-tic-tac-toe-minimax.html
// https://youtu.be/I64-UTORVfU
// https://editor.p5js.org/codingtrain/sketches/0zyUhZdJD


class TicTacToe {

  static ai = 'X';
  static human = 'O';
  static tie = 'tie';

  constructor(board){
    this._board = board;
    this._game= new Game();
    this._game.getWinner = () => this._checkWinner();
    this._game.onTrace = (player, evaluate) => this._checkBoard(player, evaluate);
  }

  _checkWinner = function() {
    
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
      return Game.players.tie;
    }
    
    if(winner == null) {
      return null;
    }
    
    return winner==TicTacToe.ai ? Game.players.A : Game.players.B;
  }

  _checkBoard = function(player, evaluate){
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
          if (this._board[i][j] == '') {
              this._board[i][j] = (player == Game.players.A) ? TicTacToe.ai : TicTacToe.human;
              evaluate( {i, j} );
              this._board[i][j] = '';
            }
        }
    }
  }

  getTheBestMove = function(turn) {
    let position = this._game.play( turn==TicTacToe.ai ? Game.players.A : Game.players.B);
    this._board[position.i][position.j] = turn;
    let winner = this._checkWinner();
    if(winner == null){
      return null;
    }
    if(winner ==  Game.players.tie){
      return TicTacToe.tie;
    }

    return winner == Game.players.A ? TicTacToe.ai : TicTacToe.human;    
  }

}