// Global variables
let d1 = 4;
let d2 = 2;
let units = 3;
let padding = 10;
let totalWidth;
let color1 = 'skyblue';
let color2 = 'lightcoral';

function setup() {
  createCanvas(540, 200); // Adjust size as needed
  totalWidth = width-9*padding;
  unitWidth = totalWidth/units;

  dropdown_d1 = createSelect(); // Create dropdown_a
  dropdown_d1.position(4*padding,30); // Set position of dropdown_a
  for (let i = 1; i <= 10; i++) { // populate dropdown_a with options
    dropdown_d1.option(i);
  }
  dropdown_d2 = createSelect(); // Create dropdown_b
  dropdown_d2.position(4*padding, 110); // Set position of dropdown_b
  for (let i = 1; i <= 10; i++) { // populate dropdown_a with options
    dropdown_d2.option(i);
  }

  dropdown_units = createSelect(); // Create dropdown_b
  dropdown_units.position(width-padding, 160); // Set position of dropdown_b
  for (let i = 1; i <= 4; i++) { // populate dropdown_a with options
    dropdown_units.option(i);
  }

  dropdown_d1.selected(d1); // Set default value
  // Add an event listener to the dropdown_a
  dropdown_d1.changed(updateSketch);

  dropdown_d2.selected(d2); // Set default value
  // Add an event listener to the dropdown_a
  dropdown_d2.changed(updateSketch);

  dropdown_units.selected(units); // Set default value
  // Add an event listener to the dropdown_a
  dropdown_units.changed(updateSketch);

  updateSketch();
}

function updateSketch() {
  d1 = parseInt(dropdown_d1.value()); // Update 'a' with selected value
  d2 = parseInt(dropdown_d2.value());
  units = parseInt(dropdown_units.value());
  unitWidth = totalWidth/units;
  redraw(); // Redraw the sketch
}

function draw() {
  background(255); // White background
  translate(8*padding,padding);
  drawBar(d1,0,color1);
  drawBar(d2,1,color2);
  drawAnnotations();
}

function drawBar(nths,row,color) {
    pieceWidth = unitWidth/nths;
    fill(color);
    stroke(0);
    strokeWeight(1);
    for(i=0; i<nths*units; i++) {
        rect(pieceWidth*i, row*80, pieceWidth, 50);
    }
  
   strokeWeight(3);
   noFill();
   for(n=0; n<units; n++) {
      rect(unitWidth*n,row*80,unitWidth,50);
   }
  textSize(14);
  textAlign(CENTER, CENTER);
  noStroke();
  fill(0); // Black text
  for (x = 0; x < nths*units; x++) {
    let myString = '1/'+nths;  
    text(myString, pieceWidth*x+pieceWidth/2, row*80+25); // Adjust text position as needed
  }
}


function drawAnnotations() {
  
}
