
class Cell {

  constructor(border, cellSize) {
    this.border = border;
    this.cellSize = cellSize;
  }

  show(line, column) {
    noStroke();
    fill(100);
    square(border + column * (cellSize + 10), border + line * (cellSize + 10), cellSize);
  }

}