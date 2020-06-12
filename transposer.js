class transposer{

    constructor(){

    }

    onIterate = function(board, player, onGetScore){
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] == '') {
                    board[i][j] = (player == players.X) ? ai : human;
                    onGetScore();
                    board[i][j] = '';
                }
            }
        }
    } 
  
    minimax = function(board, player) {
        let result = checkWinner();
        if (result !== null) {
            return players[result];
        }

        if (player === players.O) {
            let bestScore = -Infinity;
            this.onIterate(board, players.X, ()=>{
                let score = this.minimax(board, players.X);
                bestScore = max(score, bestScore);
            });
            return bestScore;
        } else {
            let bestScore = Infinity;
            this.onIterate(board, players.O, ()=>{
                let score = this.minimax(board, players.O);
                bestScore = min(score, bestScore);
            });
            return bestScore;
        }
    } 
}