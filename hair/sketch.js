var xoff = 0.0;

function setup() {
  createCanvas(1200, 1200);
  background(50, 20, 200);
  
  for(var i = 0; i < 100; i ++) {
    hair(width / 2, height / 2, random(5, 10));
  }
  // hair(width / 2, height / 2, 4);
}

function draw() {
  
}

function hair(startX, startY, l) {
  strokeWeight(2);
  stroke(255, 60, 0)
  // noiseDetail(random(1, 2), random(0, 1));
  noiseDetail(20, 0.55);
  noiseSeed(random(100000));
  push();
  translate(startX, startY);
  for(var i = 0; i < 100000; i ++) {
    var theta = map(noise(xoff), 0, 1, 0, Math.PI * 6);
    line(0, 0, cos(theta) * l, sin(theta) * l);
    translate(cos(theta) * l, sin(theta) * l);
    
    xoff += 0.03;
  }
  pop();
}

function mouseClicked() {
  save();
}