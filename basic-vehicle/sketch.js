var vehicles = [], target, moved;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noStroke();
  for(var i = 0; i < 200; i ++) {
  	vehicles.push(new Vehicle(width / 2, height / 2, 1, random(0.01, 1)));
  }
  target = createVector(0, 0);
  target.set(width / 2, height / 2);
  moved = false;
}

function draw() {
  vehicles.map(function(vehicle) {
  	vehicle.run(target);
  });
}

function Vehicle(x, y, m, s) {
	this.pos = createVector(x, y);
	this.vel = createVector(0, 0);
	this.acc = createVector(0, 0);
	this.mass = m;
	this.maxspeed = s;
	this.maxforce = 0.1;
}

Vehicle.prototype.applyForce = function(f) {
	this.acc.add(f);
};

Vehicle.prototype.follow = function(target) {
	var desired = p5.Vector.sub(target, this.pos);

	if(desired.mag() > 100) {
		desired.setMag(this.maxspeed);
	}
	else {
		desired.setMag(map(desired.mag(), 0, 100, 0, this.maxspeed));
	}
	var steer = p5.Vector.sub(desired, this.vel);
	steer.limit(this.maxforce);
	this.applyForce(steer);
	
};

Vehicle.prototype.udpate = function() {
	this.vel.add(this.acc);
	this.pos.add(this.vel);
	this.acc.mult(0);
};

Vehicle.prototype.render = function() {
	fill(255, 40, 40);
	ellipse(this.pos.x, this.pos.y, this.mass, this.mass);
};

Vehicle.prototype.run = function(target) {
	this.follow(target);
	this.udpate();
	this.render();
};

// function mouseDragged() {
// 	vehicles.push(new Vehicle(mouseX, mouseY, 2, random(2, 7)));
// }

function mouseClicked() {
	noLoop();
}

function mouseMoved() {
	target.set(mouseX, mouseY);
}