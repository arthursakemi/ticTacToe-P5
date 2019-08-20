class Cell {

  constructor(border, cellSize, grid) {
    this.border = border;
    this.cellSize = cellSize;
    this.grid = grid;
  }

  show(line, column) {
    this.x = this.border + column * (this.cellSize + this.grid);
    this.y = this.border + line * (this.cellSize + this.grid);

    noStroke();
    fill(100);
    square(this.x, this.y, cellSize);
  }

  drawX() {
    strokeWeight(20);
    stroke(255);
    line(this.x + cellSize / 6,
      this.y + cellSize / 6,
      this.x + cellSize * 5 / 6,
      this.y + cellSize * 5 / 6
    );
    line(this.x + cellSize * 5 / 6,
      this.y + cellSize / 6,
      this.x + cellSize / 6,
      this.y + cellSize * 5 / 6
    );
  }

  drawO() {
    this.centerX = this.x + this.cellSize / 2;
    this.centerY = this.y + this.cellSize / 2;

    strokeWeight(20);
    stroke(255);
    noFill()
    circle(this.centerX, this.centerY, this.cellSize * 2 / 3);
  }

}