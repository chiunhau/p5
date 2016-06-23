var flowfield;
var from, to;
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  background(255);
  flowfield = new FlowField(6);
  flowfield.display();

}
function FlowField(r) {
  this.resolution = r;
  this.cols = width / this.resolution;
  this.rows = height / this.resolution;
  this.make2Darray = function(n) {
    var array = [];
    for (var i = 0; i < n; i++) {
      array[i] = [];
    }
    return array;
  };
  this.field = this.make2Darray(this.cols);
  this.fieldNoise = this.make2Darray(this.cols);
  this.init = function() {
    noiseSeed(Math.floor(random(10000)));
    var xoff = 0;
    for (var i = 0; i < this.cols; i++) {
      var yoff = 0;
      for (var j = 0; j < this.rows; j++) {
        var theta = map(noise(xoff, yoff), 0, 1, 0, TWO_PI);
        this.fieldNoise[i][j] = noise(yoff, xoff);
        this.field[i][j] = createVector(cos(theta), sin(theta));
        yoff += 0.01;
      }
      xoff += 0.01;
    }
  }
  this.init();
  this.display = function() {
    from = color(121, 0, 250);
    to = color(255, 0, 221);
    var xoff = 0, yoff = 0;
    for (var i = 0; i < this.cols; i++) {
      for (var j = 0; j < this.rows; j++) {
        strokeWeight(this.fieldNoise[i][j] * 3);
        stroke(lerpColor(from, to, map(this.fieldNoise[i][j], 0, 1, -1, 2)));
        drawVector(this.field[i][j], i * this.resolution, j * this.resolution, this.resolution + 5);
        yoff += 0.02;
      }
      xoff += 0.02;
    }
  }
  var drawVector = function(v, x, y, scayl) {
    push();
    translate(x, y);
    rotate(v.heading());
    var len = v.mag() * scayl;
    line(-len, 0, len, 0);
    pop();
  };
}

