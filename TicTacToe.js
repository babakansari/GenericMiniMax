// Tic Tac Toe AI with Minimax Algorithm

class TicTacToe {

  static ai = 'X';
  static human = 'O';
  static tie = 'tie';

  constructor(board){
    this._board = board;
    this._game= new Game(4);
    this._game.getWinner = () => this._checkWinner();
    this._game.onTrace = (player, evaluate) => this._checkBoard(player, evaluate);
  }

  _checkWinner = function() {
    
    function equals4(a, b, c, d) {
      return a == b && b == c && c == d && a != '';
    }

    let winner = null;
  
    // horizontal
    for (let i = 0; i < 4; i++) {
      if (equals4(this._board[i][0], this._board[i][1], this._board[i][2], this._board[i][3])) {
        winner = this._board[i][0];
      }
    }
  
    // Vertical
    for (let i = 0; i < 4; i++) {
      if (equals4(this._board[0][i], this._board[1][i], this._board[2][i], this._board[3][i])) {
        winner = this._board[0][i];
      }
    }
  
    // Diagonal
    if (equals4(this._board[0][0], this._board[1][1], this._board[2][2], this._board[3][3])) {
      winner = this._board[0][0];
    }
    if (equals4(this._board[3][0], this._board[2][1], this._board[1][2], this._board[0][3])) {
      winner = this._board[3][0];
    }
  
    let openSpots = 0;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
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
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
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
    if(!position){
      return TicTacToe.tie;
    }
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