// Global variables
let a = 6;
let b = 2;
let c = 3;
let totalLength;
let partitionLength;
let numPartitions;
let unitSize; // Size of each unit on the canvas
let padding = 50;
let rHeight = 100;

function setup() {
  createCanvas(540, 200); // Adjust size as needed

  // Create and position dropdown_a
  dropdown_a = createSelect(); // Create dropdown_a
  dropdown_a.position(120, 120); // Set position of dropdown_a
  for (let i = 2; i <= 8; i++) { // populate dropdown_a with options
    dropdown_a.option(i);
  }
  dropdown_b = createSelect(); // Create dropdown_b
  dropdown_b.position(230, 120); // Set position of dropdown_b
  for (let i = 1; i <= 8; i++) { // populate dropdown_a with options
    dropdown_b.option(i);
  }

  dropdown_c = createSelect(); // Create dropdown_b
  dropdown_c.position(280, 120); // Set position of dropdown_b
  for (let i = 1; i <= 8; i++) { // populate dropdown_a with options
    dropdown_c.option(i);
  }

  totalLength = a;
  partitionLength = 1;
  numPartitions = a * c;
  unitSize = (width-2*padding) / totalLength; // Determine the size of each unit based on canvas width
  
  dropdown_a.selected(a); // Set default value
  // Add an event listener to the dropdown_a
  dropdown_a.changed(updateSketch);

  dropdown_b.selected(b); // Set default value
  // Add an event listener to the dropdown_a
  dropdown_b.changed(updateSketch);

  dropdown_c.selected(c); // Set default value
  // Add an event listener to the dropdown_a
  dropdown_c.changed(updateSketch);

  updateSketch(); // Initial update
  
  noLoop(); // No need for continuous looping
}

function updateSketch() {
    a = parseInt(dropdown_a.value()); // Update 'a' with selected value
    b = parseInt(dropdown_b.value());
    c = parseInt(dropdown_c.value());
    totalLength = a;
    numPartitions = a * c;
    unitSize = (width-2*padding) / totalLength; // Update unit size
    redraw(); // Redraw the sketch
}

function draw() {
  background(255); // White background
  // Label for dropdown_a
  translate(padding,0);
  drawBar();
  drawAnnotations();
}

function drawBar() {
  for (let i = 0; i < numPartitions; i++) {
    let x = i * unitSize / c;
    let color = ((i + 1) % (2 * b) <= b) && ((i + 1) % (2 * b) > 0) ? myConfig.color1 : myConfig.color2;
    strokeWeight(1);
    drawPartition(x, rHeight / 4, unitSize / c, rHeight / 2, color);
  }

  // Draw vertical lines
  for (let x = 1; x < a; x++) {
    stroke(0);
    strokeWeight(3);
    line(x * unitSize, rHeight / 4, x * unitSize, 3 * rHeight / 4);
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
    text(i, i * unitSize, rHeight-10); // Adjust text position as needed
  }
  textAlign('LEFT','CENTER')
  text('       ➗      (', 140, 130);
  text('∕', 220, 130);
  text(')', 270, 130);
}
