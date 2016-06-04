//draw a spinning teapot
var meow;

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
	
  meow = loadModel('meow3.obj');

}

function draw(){
  background(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

  model(meow);
}