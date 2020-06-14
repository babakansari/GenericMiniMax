
class Game{

    static players = {
        X: 10,
        O: -10,
        tie: 0
      };

    constructor(){

    }

    onTrace = function(player, onMove){
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
            return { bestScore: Game.players[winner], position: {}  };
        }

        if (player === Game.players.O) {
            let current = { bestScore: -Infinity, position: {} };
            this.onTrace(Game.players.X, (position)=>{
                let next = this._minimax(Game.players.X);
                if(current.bestScore < next.bestScore){
                    current.bestScore = next.bestScore;
                    current.position = position;
                }
            }); 
            return current;
        } else {
            let current = { bestScore: Infinity, position: {} };
            this.onTrace(Game.players.O, (position)=>{
                let next = this._minimax(Game.players.O);
                if(current.bestScore > next.bestScore){
                    current.bestScore = next.bestScore;
                    current.position = position;
                }
            });
            return current;
        }
    } 
}