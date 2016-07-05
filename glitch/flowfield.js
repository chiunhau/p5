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
        var theta = map(sin(xoff)+cos(yoff),-2,2,0,TWO_PI);
        // Polar to cartesian coordinate transformation to get x and y components of the vector
        this.field[i][j] = createVector(cos(theta), sin(theta));
        yoff += 0.1;
      }
      xoff += 0.1;
    }
  }
  this.init();

  
  this.lookup = function(lookup) {
    var column = Math.floor(constrain(lookup.x / this.resolution, 0, this.cols - 1));
    var row = Math.floor(constrain(lookup.y / this.resolution, 0, this.rows - 1));
    //println(lookup.x);
    return this.field[column][row].copy();
  }
  this.render = function() {
    for(var i = 0; i < this.cols; i ++) {
      for(var j = 0; j < this.rows; j ++) {
        noStroke();
        fill(255, 255, 0, 80);
        ellipse(i * this.resolution, j * this.resolution, this.fieldNoise[i][j] * 25, this.fieldNoise[i][j] * 25);
      }
    }
  }
  this.modify = function() {
    
  }
}