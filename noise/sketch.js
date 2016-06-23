var flowfield;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL);
  background(0, 0, 20);
  flowfield = new FlowField(11);
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
        //var theta = map(sin(xoff)+cos(yoff),-2,2,0,TWO_PI);
        // Polar to cartesian coordinate transformation to get x and y components of the vector
        this.field[i][j] = createVector(cos(theta), sin(theta));
        yoff += 0.5;
      }
      xoff += 0.1;
    }
  }
  this.init();

  this.display = function() {
    var xoff = 0, yoff = 0;
    for (var i = 0; i < this.cols; i++) {
      for (var j = 0; j < this.rows; j++) {
        strokeWeight(this.fieldNoise[i][j] * 9);
        stroke(color(this.fieldNoise[i][j] * 360, 100, 50));
        drawVector(this.field[i][j], i * this.resolution, j * this.resolution, this.resolution - 3);
        yoff += 0.1;
      }
      xoff += 0.1
    }
  }
  var drawVector = function(v, x, y, scayl) {
    push();
    var arrowsize = 4;
    translate(x, y);

    rotate(v.heading());
    var len = v.mag() * scayl;
    line(0, 0, len, 0);
    pop();
  };
}

