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
let boardState = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

let playerX = false;

function setup() {
  createCanvas(canvasSize, canvasSize);
  background(200);
  board();
}

function draw() {
  drawState();
}

function mousePressed() {
  for (let i = 0; i < boardCells.length; i++) {
    for (let j = 0; j < 3; j++) {
      if (boardState[i][j] == "") {
        boardState[i][j] = boardCells[i][j].clicked(mouseX, mouseY, playerX);
      }
    }
  }

  playerX = !playerX;
}

function drawState() {
  for (let i = 0; i < boardState.length; i++) {
    for (let j = 0; j < 3; j++) {
      if (boardState[i][j] == "x") {
        boardCells[i][j].drawX();
      } else if (boardState[i][j] == "o") {
        boardCells[i][j].drawO();
      }
    }
  }
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