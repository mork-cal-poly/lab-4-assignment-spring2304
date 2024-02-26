function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

let col = (240, 240, 130, 200)
let img;
let clicked = false;
let x1Bubbles = 30;
let y1Bubbles = 400;
let x2Bubbles = 280;
let y2Bubbles = 500;
let x3Bubbles = 150;
let y3Bubbles = 600;

function preload() {
  img = loadImage('.../img/Paul.png');
}

function draw() {
  background(3, 101, 140);

  
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

