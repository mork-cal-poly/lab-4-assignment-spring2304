let eyeX;
let eyeY;
let col = (240, 240, 130, 200)
let img;
let clicked = false;
let x1Bubbles = 30;
let y1Bubbles = 400;
let x2Bubbles = 280;
let y2Bubbles = 500;
let x3Bubbles = 150;
let y3Bubbles = 600;
let x1Wave = 0;
let y1Wave = 200;
let x2Wave = 10;
let y2Wave = 300;
let x3Wave = -15;
let y3Wave = 400;
let x4Wave = 20;
let y4Wave = 500;

function preload() {
  img = loadImage('../assets/Paul.png');
}

function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(3, 101, 140);
  eye(350, 375, 0.5);
  
//submarine
  noStroke();
  fill(242, 192, 41);//golden
  rect(0,75, width, 290);
  fill(240, 240, 230);//cream
  stroke(3, 101, 140);
  strokeWeight(4);
  arc(75, 225, 150, 150, 0, PI)
  //ellipse(75, 225, 150);
  noStroke();
  rect(0, 75, width, 40);
  rect(0, 75, 150, 150);
  triangle(150, 115, 220, 115, 150, 190)
  fill(242, 192, 41);//golden
  ellipse(190, 157, 75);
  fill(242, 210, 46);
  rect(0, 80, width, 10);
  fill(3, 101, 140);//blue
  rect(0, 95, width, 5);
  

  
//window
  fill(242, 65, 65);//red
  ellipse(275, 240, 175);
  fill(240, 240, 230);//cream
  ellipse(275, 240, 168);
  fill(242, 210, 46);//yellow
  ellipse(275, 240, 160);
  fill(3, 101, 140);//blue
  ellipse(275, 240, 130);

  if (clicked) {
  drawPaul(176, 130);
  y1Bubbles = y1Bubbles - 2;
  y2Bubbles = y2Bubbles -2;
  y3Bubbles = y3Bubbles -2;
 
  if(y1Bubbles <= -10) {
    y1Wave = y1Wave - 2;
    x1Wave = x1Wave - 1;
    y2Wave = y2Wave - 2;
    x2Wave = x2Wave + 1;
    y3Wave = y3Wave - 2;
    x3Wave = x3Wave - 0.5;
    y4Wave = y4Wave - 2;
    x4Wave = x4Wave + 0.5;
    drawWave(x1Wave,y1Wave, 1);
    drawWave(x2Wave, y2Wave, 0.75);
    drawWave(x3Wave, y3Wave, 1);
    drawWave(x4Wave, y4Wave, 0.75)
  }
  
//Bubbles
  drawBubbles(x1Bubbles, y1Bubbles, 1);
  drawBubbles(x2Bubbles, y2Bubbles, 0.75);
  drawBubbles(x3Bubbles, y3Bubbles, 0.5);
  

}
}

function mouseClicked() {
  if (mouseX >= 210 &&
      mouseX <= 340 &&
      mouseY >= 175 &&
      mouseY <= 305){
  y1Bubbles = 400
  y2Bubbles = 500
  y3Bubbles = 600
  clicked = !clicked 
  }

}

function drawBubbles(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  fill(240, 240, 250);
  stroke(3, 101, 140);
  strokeWeight(3);
  ellipse(5, 20, 10);
  ellipse(60, 30, 15);
  ellipse(25, 70, 20);
  ellipse(30, 40, 30);
  ellipse(50, 100, 50);
  ellipse(70, 150, 10);
  ellipse(100, 70, 30);
  pop();
}

function drawPaul(x, y) {
  push();
    translate(x, y);
    image(img, 0, 0);
  pop();
}

function drawWave(x, y, s) {
  push();
  translate(x, y);
  scale(s)
  fill(240, 240, 250);
  stroke(3, 101, 140);
  strokeWeight(2);
  ellipse(20, 425, 20);
  ellipse(45, 425, 10);
  ellipse(50, 425, 40);
  ellipse(75, 425, 10);
  ellipse(100, 425, 30);
  ellipse(150, 425, 40);
  ellipse(200, 425, 10);
  ellipse(230, 425, 30);
  ellipse(300, 425, 55);
  ellipse(350, 425, 10);
  ellipse(375, 425, 40);
  ellipse(400, 425, 10);
  ellipse(25, 550, 20);
  ellipse(40, 550, 10);
  ellipse(55, 550, 40);
  ellipse(70, 550, 10);
  ellipse(110, 550, 30);
  ellipse(160, 550, 40);
  ellipse(175, 550, 10);
  ellipse(235, 550, 30);
  ellipse(290, 550, 55);
  ellipse(340, 550, 10);
  ellipse(385, 550, 40);
  ellipse(380, 550, 10);
  ellipse(30, 675, 20);
  ellipse(35, 675, 10);
  ellipse(30, 675, 40);
  ellipse(80, 675, 10);
  ellipse(110, 675, 30);
  ellipse(160, 675, 40);
  ellipse(210, 675, 10);
  ellipse(215, 675, 30);
  ellipse(300, 675, 55);
  ellipse(350, 675, 10);
  ellipse(375, 675, 40);
  ellipse(400, 675, 10);
  ellipse(20, 700, 20);
  ellipse(45, 700, 10);
  ellipse(50, 700, 40);
  ellipse(75, 700, 10);
  ellipse(100, 700, 30);
  ellipse(150, 700, 40);
  ellipse(200, 700, 10);
  ellipse(230, 700, 30);
  ellipse(300, 700, 55);
  ellipse(360, 700, 10);
  ellipse(400, 700, 40);
  ellipse(505, 700, 10);
  pop();
}

function eye(x, y, s) {
  
  push();
    translate(x, y);
    scale(s);
  
  if (mouseX >= 0, mouseX <= width, mouseY >= 0, mouseY <= height) {
    eyeX = map(mouseX, 0, width, -12, 12);
    eyeY = map(mouseY, 0, height, -6, 6);
  }

  //clipping mask
  beginClip();
  ellipse(0, 0, 72, 27);
  endClip();
  
  // eye
  fill('white');
  ellipse(0, 0, 72, 27);
  ellipse(0, 0, 72, 27);
  fill('red');
  ellipse(eyeX, eyeY, 27);
  fill('black');
  ellipse(eyeX, eyeY, 9);
  
  pop();
}
