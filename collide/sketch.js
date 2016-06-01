var sketch = function(p) {
	p.setup = function() {
		p.createCanvas(p.windowWidth, p.windowHeight);
		p.ellipse(100, 100, 50, 50);
	};
	p.draw = function() {
		console.log(p.collideLineLine(0, 0, 400, 400, 400, 0, 0, 400));
	}
}

var myP5 = new p5(sketch);