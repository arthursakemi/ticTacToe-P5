var canvasH = 600;
var canvasW = 600;

function setup() {
  createCanvas(canvasH, canvasW);
}

function draw() {
  background(0, 0, 10);
  boardHash();

}

function boardHash() {

  strokeWeight(5);
  stroke(255);
  line(canvasW / 3, 25, canvasW / 3, canvasH - 25);

  strokeWeight(5);
  stroke(255);
  line(canvasW * 2 / 3, 25, canvasW * 2 / 3, canvasH - 25);

  strokeWeight(5);
  stroke(255);
  line(25, canvasW / 3, canvasH - 25, canvasW / 3);

  strokeWeight(5);
  stroke(255);
  line(25, canvasW * 2 / 3, canvasH - 25, canvasW * 2 / 3);

}