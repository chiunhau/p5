function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
}

function touchMoved() {
	console.log(touches);
	if(touches.length === "1") {
		background(255, 0, 0);
	}
	else if (touches.length === "2") {
		background(0, 255, 0);
	}
}

function touchStart() {
	console.log(touches);
}