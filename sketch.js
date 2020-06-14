// Tic Tac Toe AI with Minimax Algorithm
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/154-tic-tac-toe-minimax.html
// https://youtu.be/I64-UTORVfU
// https://editor.p5js.org/codingtrain/sketches/0zyUhZdJD
// import {bestMove} from './minimax';
// var bestMove = require('minimax');

let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  
  let w; // = width / 3;
  let h; // = height / 3;
  
  let ticTacToe  = new TicTacToe(board);

  function _playTurn(turn){
    let move = ticTacToe.bestMove(turn);
    board[move.i][move.j] = turn;
  }
  
  function setup() {
    createCanvas(400, 400);
    w = width / 3;
    h = height / 3;
    _playTurn(TicTacToe.ai);
    currentPlayer = TicTacToe.human;
  }
  
  function mousePressed() {
    if (currentPlayer == TicTacToe.human) {
      // Human make turn
      let i = floor(mouseX / w);
      let j = floor(mouseY / h);
      // If valid turn
      if (board[i][j] == '') {
        board[i][j] = TicTacToe.human;
        _playTurn(TicTacToe.ai);
        currentPlayer = TicTacToe.human;
      }
    }
  }
  
  function draw() {
    background(215);
    strokeWeight(4);
  
    line(w, 0, w, height);
    line(w * 2, 0, w * 2, height);
    line(0, h, width, h);
    line(0, h * 2, width, h * 2);
  
    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < 3; i++) {
        let x = w * i + w / 2;
        let y = h * j + h / 2;
        let spot = board[i][j];
        textSize(32);
        let r = w / 4;
        if (spot == TicTacToe.human) {
          noFill();
          ellipse(x, y, r * 2);
          continue;
        }
        if (spot == TicTacToe.ai) {
          line(x - r, y - r, x + r, y + r);
          line(x + r, y - r, x - r, y + r);
        }
      }
    }
  
    let result = ticTacToe.checkWinner();
    if (result != null) {
      noLoop();
      let resultP = createP('');
      resultP.style('font-size', '32pt');
      if (result == 'tie') {
        resultP.html('Tie!');
      } else {
        resultP.html(`${result} wins!`);
      }
    }
  }
  