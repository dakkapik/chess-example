let board = new Board()
let rook1 = new Rook(0,0)
let rook2 = new Rook(7,0)

function setup() {
  createCanvas(400, 400);
  frameRate(5);
}

function draw() {
  board.draw();
  rook1.draw()
  rook2.draw()
}