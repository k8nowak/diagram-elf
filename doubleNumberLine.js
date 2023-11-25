// Global variables
let a = 3;
let b = 5;
let aLabel = 'quantity A'
let bLabel = 'quantity B'
let totalLength=6;
let partitionLength=1;
let padding = 60;
let rHeight = 50;
let heightMult = 1.5
let tickHeight = rHeight*heightMult;

function setup() {
  createCanvas(540, 300); // Adjust size as needed
  skip_width = (width-3.5*padding)/totalLength
  
  // Create and position dropdown_a
  dropdown_a = createSelect(); // Create dropdown_a
  dropdown_a.position(30, 35); // Set position of dropdown_a
  for (let i = 1; i <= 8; i++) { // populate dropdown_a with options
    dropdown_a.option(i);
  }
  dropdown_b = createSelect(); // Create dropdown_b
  dropdown_b.position(30,135); // Set position of dropdown_b
  for (let i = 1; i <= 8; i++) { // populate dropdown_a with options
    dropdown_b.option(i);
  }
  
  dropdown_a.selected(a); // Set default value
  // Add an event listener to the dropdown_a
  dropdown_a.changed(updateSketch);

  dropdown_b.selected(b); // Set default value
  // Add an event listener to the dropdown_a
  dropdown_b.changed(updateSketch);

  updateSketch(); // Initial update
  
  noLoop(); // No need for continuous looping
}

function updateSketch() {
    a = parseInt(dropdown_a.value()); // Update 'a' with selected value
    b = parseInt(dropdown_b.value());

    redraw(); // Redraw the sketch
}

function draw() {
  background(255); // White background
  // Label for dropdown_a
  translate(3*padding,padding);
  drawFrame();
  drawAnnotations();
}

function drawFrame() {
fill(255);
stroke(0);
strokeWeight(1);
  rect(0,0,(width-3.5*padding),rHeight)

  // Draw vertical lines
  
  translate(0,-0.5*(tickHeight-rHeight))
  for (let x = 0; x <= totalLength; x++) {
    stroke(0);
    strokeWeight(3);
    line(x*skip_width,0,x*skip_width,tickHeight);
  }
}

function drawAnnotations() {
  textSize(14);
  textAlign(CENTER, CENTER);
  noStroke();
  fill(0); // Black text
  for (let i = 0; i <= totalLength*a; i=i+a) {    
    text(i, i/a * skip_width, -0.5*(tickHeight-rHeight)); // Adjust text position as needed
  }
  for (let i = 0; i <= totalLength*b; i=i+b) {    
    text(i, i/b * skip_width, tickHeight+0.5*(tickHeight-rHeight)); // Adjust text position as needed
  }
  textAlign(RIGHT,CENTER)
  translate(-0.5*padding,0)
  text(aLabel, 0, -0.5*(tickHeight-rHeight));
  text(bLabel, 0, tickHeight+0.5*(tickHeight-rHeight));
}
