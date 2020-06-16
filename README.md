# Generic Minimax Algorithm
This project is to create a generic solution to apply minimax algorithm to wider range of different use-cases.

The idea is to have a class that could be used to iterate on a collection of states and evaluate all the possibilities of winning for two players.

The `Game` class uses `Minimax` algorithm at the core to loop on a collection of states (e.g 3x3 or 4x4 Tic Tac Toe) and evaluate the wining status.

It is used to create a "Tic Tac Toe" (`TicTacToe.js`) game as an example in this repository.

It is limited into two players at the moment but could be extended into multiple players.

## Note: 
The Minimax depth search is limited into fixed number of levels to improve performance.s

Use the following site for experimenting with 4x4 Tic Tac Toe game.

https://babakansari.github.io/GenericMiniMax/
