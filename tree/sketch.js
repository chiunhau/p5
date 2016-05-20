var theta = 20;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255, 63, 0);
	stroke(255);
	strokeWeight(1);
	noLoop();
	frameRate(5);
	angleMode(DEGREES);
	translate(0, windowHeight - 50);
	translate(windowWidth / 2, 0);
	
}
function mouseMoved() {
	background(255, 63, 0);
	line(0, 0, 0, -200);
	translate(0, -200);

	branch(200);

	translate(0, 200);
	branch(250);	
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