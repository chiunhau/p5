var theta = 20, startL;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255, 63, 0);
	stroke(255);
	strokeWeight(1);
	noLoop();
	angleMode(DEGREES);
	startL = windowHeight * 0.22;
	translate(0, windowHeight - 50);
	translate(windowWidth / 2, 0);

	background(255, 63, 0);
	line(0, 0, 0, -startL);
	translate(0, -startL);

	branch(startL);

	translate(0, startL);
	branch(startL * 1.2);
	
}
function mouseMoved() {
	background(255, 63, 0);
	line(0, 0, 0, -startL);
	line(0, 0, 0, -startL);
	translate(0, -startL);

	branch(startL);

	translate(0, startL);
	branch(startL * 1.2);	
}

function mouseClicked() {
	noLoop();
	save();
}
function branch(l) {
	l *= random(0.6, 0.75);
	if(l > 4) {
		push();
		rotate(random(-theta, theta));
		line(0, 0, 0, -l);
		translate(0, -l);
		branch(l);
		pop();

		push();
		rotate(random(-theta, theta));
		line(0, 0, 0, -l);
		translate(0, -l);
		branch(l);
		pop();
	}

}