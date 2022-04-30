class Dot {
	constructor() {
		this.x;
		this.y;
		this.z;
		this.r;
		this.direcX = random(-1, 1) < 0 ? -1 : 1;
		this.direcY = random(-1, 1) < 0 ? -1 : 1;
		this.direcZ = random(-1, 1) < 0 ? -1 : 1;
		this.speed = 10;
		this.vx = this.direcX * this.speed;
		this.vy = this.direcY * this.speed;
		this.vz = this.direcZ * this.speed;
		this.vr;
		// this.angleX = random(-1, 1);
		// this.angleY = random(-1, 1);
		// this.angleZ = random(-1, 1);
		// this.startMove = 1000;

		const colors = [
			{
				r: 255,
				g: 255,
				b: 255,
			},
			{
				r: 203,
				g: 208,
				b: 234,
			},
			{
				r: 171,
				g: 214,
				b: 219,
			},
			{
				r: 240,
				g: 225,
				b: 154,
			},
			{
				r: 251,
				g: 183,
				b: 183,
			},
		];
		this.colorObj = colors[Math.floor(Math.random() * 5)];
	}

	resize(stageWidth, stageHeight) {
		this.stageWidth = stageWidth;
		this.stageHeight = stageHeight;

		this.init();
	}

	init() {
		this.x = random(-0.7, 0.7) * this.stageWidth;
		this.y = random(-0.7, 0.7) * this.stageWidth;
		this.z = random(-0.7, 0.7) * this.stageWidth;
		this.r = random(1) * 200;
		this.minR = 30;
		this.maxR = 50;
	}

	draw() {
		this.vz *= 0.95;
		this.angleX += 0.00001;
		this.angleY += 0.00001;
		this.angleZ += 0.00001;
		this.startMove *= 0.95;

		push();
		noStroke();
		translate(this.x, this.y, this.z);
		ambientLight(this.colorObj.r, this.colorObj.g, this.colorObj.b);
		sphere(this.r);
		pop();
		// rotateX(this.angleX);
		// rotateY(this.angleY);
		// rotateZ(this.angleZ);
		// translate(0, 0, -this.startMove);
	}
}
