// Generic Minimax Algorithm


class Game{

    static players = {
        A: 10,
        B: -10,
        tie: 0
      };

    constructor(maxDepth){
        this._maxDepth = maxDepth;
    }

    onTrace = function(player, evaluate){
        throw 'onTrace method is not implemented!';
    } 

    getWinner = function(){
        throw 'onTrace method is not implemented!';
    }

    play = function(player){
        let move;
        let bestScore = -Infinity;
        this.onTrace(player, (position) => {
                  let current = this._minimax(player);
                  if (current.bestScore > bestScore) {
                    bestScore = current.bestScore;
                    move = position;
                  }
                });
        return move;
    }

    _minimax = function(player, level = 0) {
        let winner = this.getWinner();
        if (winner !== null || level ==this._maxDepth) {
            return { bestScore: winner, position: {}  };
        }

        if (player === Game.players.B) {
            let current = { bestScore: -Infinity, position: {} };
            this.onTrace(Game.players.A, (position)=>{
                let next = this._minimax(Game.players.A, level + 1);
                if(current.bestScore < next.bestScore){
                    current.bestScore = next.bestScore;
                    current.position = position;
                }
            }); 
            return current;
        } else {
            let current = { bestScore: Infinity, position: {} };
            this.onTrace(Game.players.B, (position)=>{
                let next = this._minimax(Game.players.B, level + 1);
                if(current.bestScore > next.bestScore){
                    current.bestScore = next.bestScore;
                    current.position = position;
                }
            });
            return current;
        }
    } 
}