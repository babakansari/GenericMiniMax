
class Game{

    static players = {
        A: 10,
        B: -10,
        tie: 0
      };

    constructor(){

    }

    onTrace = function(player, evaluate){
        throw 'onTrace method not implemented!';
    } 

    getWinner = function(){
        throw 'onTrace method not implemented!';
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

    _minimax = function(player) {
        let winner = this.getWinner();
        if (winner !== null) {
            return { bestScore: winner, position: {}  };
        }

        if (player === Game.players.B) {
            let current = { bestScore: -Infinity, position: {} };
            this.onTrace(Game.players.A, (position)=>{
                let next = this._minimax(Game.players.A);
                if(current.bestScore < next.bestScore){
                    current.bestScore = next.bestScore;
                    current.position = position;
                }
            }); 
            return current;
        } else {
            let current = { bestScore: Infinity, position: {} };
            this.onTrace(Game.players.B, (position)=>{
                let next = this._minimax(Game.players.B);
                if(current.bestScore > next.bestScore){
                    current.bestScore = next.bestScore;
                    current.position = position;
                }
            });
            return current;
        }
    } 
}