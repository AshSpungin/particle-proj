let dots = [];
let lineColor;


function setup() {
  createCanvas(400, 400);
  lineColor = color(100, 50, 150);
  
  for (let i = 0; i < 200; i++){
    let x = random (width/2);
    let y= random (height);
    
    dots[i] = new Dot (x,y);
  

}


}
function draw() {

  background(0);
 lineColor.setRed(128 + 128 * sin(millis() / 1000));
 lineColor.setGreen(128 + 128 * sin(millis() / 1000));


  for (let dot of dots) {
    dot.move();
    dot.display();
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].move();
    dots[i].display();
  }

  






 print (mouseX, mouseY);
}

class Dot {
  constructor(x, y,c) {
    this.x = x;
    this.y = y;
    this.c= c;
  
  }

  move() {
    this.x = this.x + random (-10, 10);
    this.y = this.y + random (-10, 10);
  }

  display() {
    stroke(lineColor);
    strokeWeight(5);
    point(this.x, this.y);
    line (this.x, this.y, width/2, height/2);
 

}