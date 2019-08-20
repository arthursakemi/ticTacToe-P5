let canvasSize = 600;
let border = 50;
let boardSize = canvasSize - 2 * border;
let cellSize = (boardSize - 20) / 3;
let grid = 10;
let boardCells = [
  [],
  [],
  []
];
let playerX = true;

function setup() {
  createCanvas(canvasSize, canvasSize);
}

function draw() {
  background(200);
  board();
  boardCells[0][0].drawO();
  boardCells[0][1].drawX();


}

function board() {
  for (let i = 0; i < boardCells.length; i++) {
    for (let j = 0; j < 3; j++) {
      boardCells[i].push(new Cell(border, cellSize, grid));
    }
  }

  for (let i = 0; i < boardCells.length; i++) {
    for (let j = 0; j < 3; j++) {
      boardCells[i][j].show(i, j);

    }
  }
}