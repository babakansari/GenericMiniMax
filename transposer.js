class Game{

    constructor(){

    }

    onTrace = function(player, doBestMove){} 

    onCheckWinner = function(){}

    play = function(player){
        let move;
        let bestScore = -Infinity;
        this.onTrace(player, (position) => {
                  let current = this._minimax(players.X);
                  if (current.bestScore > bestScore) {
                    bestScore = current.bestScore;
                    move = position;
                  }
                });
        return move;
    }

    _minimax = function(player) {
        let winner = this.onCheckWinner();
        if (winner !== null) {
            return { bestScore: players[winner], position: {}  };
        }

        if (player === players.O) {
            let current = { bestScore: -Infinity, position: {} };
            this.onTrace(players.X, (position)=>{
                let next = this._minimax(players.X);
                if(current.bestScore < next.bestScore){
                    current.bestScore = next.bestScore;
                    current.position = position;
                }
            }); 
            return current;
        } else {
            let current = { bestScore: Infinity, position: {} };
            this.onTrace(players.O, (position)=>{
                let next = this._minimax(players.O);
                if(current.bestScore > next.bestScore){
                    current.bestScore = next.bestScore;
                    current.position = position;
                }
            });
            return current;
        }
    } 
}