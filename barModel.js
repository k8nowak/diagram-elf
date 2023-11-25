// Global variables
let a = 6;
let divis = 2/3;
let [b,c] = decimalToFraction(divis);
let totalLength;
let partitionLength;
let numPartitions;
let unitSize; // Size of each unit on the canvas
let padding = 50;

function setup() {
  createCanvas(540, 100); // Adjust size as needed
  totalLength = a;
  partitionLength = 1;
  numPartitions = a * c;
  unitSize = (width-2*padding) / totalLength; // Determine the size of each unit based on canvas width
  noLoop(); // No need for continuous looping
}

function draw() {
  background(255); // White background
  translate(padding,0);
  drawBar();
  drawAnnotations();
}

function drawBar() {
  for (let i = 0; i < numPartitions; i++) {
    let x = i * unitSize / c;
    let color = ((i + 1) % (2 * b) <= b) && ((i + 1) % (2 * b) > 0) ? myConfig.color1 : myConfig.color2;
    drawPartition(x, height / 4, unitSize / c, height / 2, color);
  }

  // Draw vertical lines
  for (let x = 1; x < a; x++) {
    stroke(0);
    strokeWeight(3);
    line(x * unitSize, height / 4, x * unitSize, 3 * height / 4);
  }
}

function drawPartition(x, y, w, h, color) {
  fill(color);
  stroke(0); // Black outline
  rect(x, y, w, h);
}

function drawAnnotations() {
  textSize(14);
  textAlign(CENTER, CENTER);
  for (let i = 0; i <= a; i++) {
    noStroke();
    fill(0); // Black text
    text(i, i * unitSize, height-10); // Adjust text position as needed
  }
}


function decimalToFraction(decimal, tolerance = 1.0E-6) {
  var sign = decimal < 0 ? -1 : 1;
  decimal = Math.abs(decimal);

  if (Math.floor(decimal) === decimal) { // if it's an integer
      return [sign * decimal, 1];
  }

  var lower_n = 0;
  var lower_d = 1;
  var upper_n = 1;
  var upper_d = 1;
  var middle_n;
  var middle_d;

  while (true) {
      var middle = (lower_n + upper_n) / (lower_d + upper_d);
      if (decimal - middle < tolerance) {
          if ((lower_d + upper_d) * (decimal - middle) < decimal * tolerance) {
              middle_n = lower_n + upper_n;
              middle_d = lower_d + upper_d;
              break;
          } else {
              upper_n = lower_n + upper_n;
              upper_d = lower_d + upper_d;
          }
      } else {
          lower_n = lower_n + upper_n;
          lower_d = lower_d + upper_d;
      }
  }
  return [sign * middle_n, middle_d];
}
