var img, rows = [];
var r = 60;
var rH;

function preload() {
  img = loadImage("1.jpg");
}

function setup() {
  createCanvas(600, 600);
  rh = height / r;
  image(img, 0, 0, width, height);
  rows[0] = 0;
  for (var i = 1; i < r; i++) {
    rows[i] = rows[i - 1] + rh;
  }
  for (var i = 0; i < r - 1; i++) {
    var c = get(0, rows[i], 600, rh);
    set(random(-30, 30), rows[i], c);
  }
}

function draw() {

}