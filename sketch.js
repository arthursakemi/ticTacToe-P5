var canvasSize = 600;
var boardSize = 500;
var border = 50;
var cellSize = (boardSize - 20) / 3;
var playerX = true;

function setup() {
  createCanvas(canvasSize, canvasSize);
}

function draw() {
  background(200);
  board();
}

function board() {
  let boardCells = [
    [],
    [],
    []
  ];

  for (let i = 0; i < boardCells.length; i++) {
    for (let j = 0; j < 3; j++) {
      boardCells[i].push(new Cell(border,cellSize));

    }
  }

  for (let i = 0; i < boardCells.length; i++) {
    for (let j = 0; j < boardCells[i].length; j++) {
      boardCells[i][j].show(i, j);

    }
  }
}
