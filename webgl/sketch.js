var teapot;

function setup(){
  createCanvas(100, 100, WEBGL);

  teapot = loadModel('teapot.obj');
}

function draw(){
  background(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  model(teapot);
}