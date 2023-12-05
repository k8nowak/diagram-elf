// Global variables
let a = 8;
let b = 2;
let aLabel = 'ounces glue'
let bLabel = 'tbsp saline'
let totalLength=8;
let partitionLength=1;
let padding = 60;
let rHeight = 50;
let heightMult = 1.5
let tickHeight = rHeight*heightMult;

function setup() {
  createCanvas(540, 200); // Adjust size as needed
  skip_width = (width-3.5*padding)/totalLength
  
}

function draw() {
  background(255); // White background
  // Label for dropdown_a
  translate(1.8*padding,padding);
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
