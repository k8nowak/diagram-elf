// Global variables
let dividend = 4;
let divisor = 1/5;
let fracString = '1/'+(1/divisor).toString()
let quotient = dividend/divisor;
let padding = 10;
let totalWidth;
let rWidth;
let widthOne;
let color1 = 'skyblue';
let color2 = 'lightcoral';

function setup() {
  createCanvas(540, 200); // Adjust size as needed
  totalWidth = width-2*padding;
  rWidth = totalWidth/quotient;
  widthOne = totalWidth/dividend;
  textSize(24);
  textAlign(CENTER,CENTER);
}

function draw() {
  background(255); // White background
  translate(padding,padding);
  drawBar1();
  drawBar2();
}

function drawBar1() {
    fill(color1);
    stroke(0);
    strokeWeight(3);
    rect(0,0,totalWidth,50);

    strokeWeight(1);
    for (i=1; i<dividend; i++) {
        line(i*widthOne,0,i*widthOne,50);
    }
    
    noStroke();
    fill(0);
    textSize(24);
    text(dividend,totalWidth/2,25);
}

function drawBar2() {
    fill(color2);
    stroke(0);
    strokeWeight(3);

    for (i=0; i<dividend; i++) {
        rect(i*widthOne, 80, widthOne, 50);
    }

    strokeWeight(1);
    for (i=0; i<quotient; i++) {
        line(i*rWidth,80,i*rWidth,130)
    }


    noStroke();
    fill(0);
    for(i=1; i<=quotient; i++) {
        textSize(12);
        text(fracString,i*rWidth-rWidth/2,105)
//        textSize(14);
//        text(i, i*rWidth-rWidth/2,150)
    }
    for(i=0; i<10; i++) {
    text(i+1,2*i*rWidth+rWidth,180);
    }
/*     text('2',4.5*rWidth,180);
    text('3',7.5*rWidth,180); */
    for(i=0; i<10; i++) {
        drawBraces();
        translate(2*rWidth,0);
     }


}

function drawBraces() {
    stroke(0);
    line(0,150,0.9*rWidth,170);
    line(1.1*rWidth,170,2*rWidth,150);
}




