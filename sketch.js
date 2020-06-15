// Tic Tac Toe AI with Minimax Algorithm
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/154-tic-tac-toe-minimax.html
// https://youtu.be/I64-UTORVfU
// https://editor.p5js.org/codingtrain/sketches/0zyUhZdJD

let board = [
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', '']
  ];
  
  let w; // = width / 4;
  let h; // = height / 4;
  let winner = null;
  
  let ticTacToe  = new TicTacToe(board);

  function _playTurn(turn){
    winner = ticTacToe.getTheBestMove(turn);
  }
  
  function setup() {
    createCanvas(400, 400);
    w = width / 4;
    h = height / 4;
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
    line(w * 3, 0, w * 3, height);
    line(0, h, width, h);
    line(0, h * 2, width, h * 2);
    line(0, h * 3, width, h * 3);
  
    for (let j = 0; j < 4; j++) {
      for (let i = 0; i < 4; i++) {
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
  
    if (winner != null) {
      noLoop();
      let resultP = createP('');
      resultP.style('font-size', '32pt');
      if (winner == 'tie') {
        resultP.html('Tie!');
      } else {
        resultP.html(`${winner} wins!`);
      }
    }
  }
  