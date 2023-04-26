let board = new Board()
let rook = new Rook(3,4)

function setup() {
  createCanvas(400, 400);
}

function draw() {
  board.draw();
  rook.drawAttack()
}