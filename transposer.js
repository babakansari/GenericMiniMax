class transposer{

    constructor(){

    }

    onIterate = function(board, player, onGetScore){
        
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
                bestScore = max(bestScore, score);
                return null;
            }); 
            return bestScore;
        } else {
            let bestScore = Infinity;
            this.onIterate(board, players.O, ()=>{
                let score = this.minimax(board, players.O);
                bestScore = min(bestScore, score);
                return null;
            });
            return bestScore;
        }
    } 
}