var img, rows = [];
var r = 60;
var rH, d;
var xoff = 0.0;

function preload() {
  img = loadImage("1.jpg");
}

function setup() {
  pixelDensity(1);
  createCanvas(600, 600);
  noLoop();
  rh = (height) / r;
  image(img, 0, 0, width, height);
  rows[0] = 0;
  for (var i = 1; i < r; i++) {
    rows[i] = rows[i - 1] + rh;
  }
  for (var i = 0; i < r - 1; i++) {
    var c = get(0, rows[i], 600, rh);
    set(map(noise(xoff), 0, 1, -30, 30), rows[i], c);
    set()
    xoff += 2;
  }
  // colorMode(HSL);
  // var gra = createImage(width, rh);
  // gra.loadPixels();
  // for(var i = 100; i < width - 100; i ++) {
  //   for(var j = 0; j < rh; j ++) {
  //     gra.set(i, j, color(20, 100, 50, 0.5));
  //   }
  // }
  // gra.updatePixels();
  // image(gra, 0, 0);
  
}

function mouseClicked() {
  save();
}