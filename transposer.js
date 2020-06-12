class transposer{

    constructor(){

    }

    onGetBestScore = function(board, i, j, bestScore, onGetScore){
        if (board[i][j] == '') {
            board[i][j] = ai;
            let score = onGetScore();
            board[i][j] = '';
            bestScore = max(score, bestScore);
        }
        return bestScore;s
    }

    onIterate = function(board, onGetScore){
        let bestScore = -Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                bestScore = this.onGetBestScore(board, i, j, bestScore, onGetScore);
            }
        }
        return bestScore
    } 
  
    minimax = function(board, player) {
        let result = checkWinner();
        if (result !== null) {
            return players[result];
        }

        if (player === players.O) {
            return this.onIterate(board, ()=>{
                return this.minimax(board, players.X);
            });
        } else {
            let bestScore = Infinity;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    // Is the spot available?
                    if (board[i][j] == '') {
                        board[i][j] = human;
                        let score = this.minimax(board, players.O);
                        board[i][j] = '';
                        bestScore = min(score, bestScore);
                    }
                }
            }
            return bestScore;
        }
    } 
}