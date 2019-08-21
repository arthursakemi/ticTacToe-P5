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

  clicked(clickX, clickY, playerX) {
    let x1 = this.x;
    let x2 = x1 + this.cellSize;
    let y1 = this.y;
    let y2 = y1 + this.cellSize;
    let hit = clickX > x1 && clickX < x2 && clickY > y1 && clickY < y2;

    if (hit) {
      if (playerX) {
        return "x";
      } else {
        return "o"
      }
    }

  }

}