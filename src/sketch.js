let eyeX;
let eyeY;

function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);

  eye(350, 375, 0.5);
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