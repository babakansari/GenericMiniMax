class transposer{

    constructor(){

    }

    onIterate = function(player, onGetScore){
        
    } 
  
    minimax = function(player) {
        let result = checkWinner();
        if (result !== null) {
            return players[result];
        }

        if (player === players.O) {
            let bestScore = -Infinity;
            this.onIterate(players.X, ()=>{
                let score = this.minimax(players.X);
                bestScore = max(bestScore, score);
                return null;
            }); 
            return bestScore;
        } else {
            let bestScore = Infinity;
            this.onIterate(players.O, ()=>{
                let score = this.minimax(players.O);
                bestScore = min(bestScore, score);
                return null;
            });
            return bestScore;
        }
    } 
}