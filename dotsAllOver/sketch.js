var p={
  x:100,
  y:50
};
var col={
r:255,
g:0,
b:0
};

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  background(0);
}

function draw() {
  col.r=random(80,255);
  col.g=0;
  col.b=random(100,190);
  p.x=random(0,width);
  p.y=random(0,height);
  noStroke();
  fill(col.r,col.g,col.b,100);
  ellipse(p.x,p.y,24,24);
  
  
}