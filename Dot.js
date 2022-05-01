class Dot {
	constructor() {
		this.x;
		this.y;
		this.z;
		this.defaultX;
		this.defaultY;
		this.defaultZ;
		this.r;
		this.direcX = random(-1, 1) < 0 ? -1 : 1;
		this.direcY = random(-1, 1) < 0 ? -1 : 1;
		this.direcZ = random(-1, 1) < 0 ? -1 : 1;
		this.speed = 10;
		this.vx = this.direcX * this.speed;
		this.vy = this.direcY * this.speed;
		this.vz = this.direcZ * this.speed;
		this.vr;
		this.angleX = random(-1, 1);
		this.angleY = random(-1, 1);
		this.angleZ = random(-1, 1);
		this.startMove = 1000;
		this.transMatrix;

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
		this.defaultX = random(-0.7, 0.7) * this.stageWidth;
		this.defaultY = random(-0.7, 0.7) * this.stageWidth;
		this.defaultZ = random(-0.7, 0.7) * this.stageWidth;
		this.x = this.defaultX;
		this.y = this.defaultY;
		this.z = this.defaultZ;
		this.r = random(1) * 200;
		this.minR = 30;
		this.maxR = 50;
	}

	transformMatrix(a, b, c) {
		return [
			cos(c) * cos(b),
			cos(c) * sin(b) * sin(a) - sin(c) * cos(a),
			cos(c) * sin(b) * cos(a) + sin(c) * sin(a),
			sin(c) * cos(b),
			sin(c) * sin(b) * sin(a) + cos(c) * cos(a),
			sin(c) * sin(b) * cos(a) - cos(c) * sin(a),
			-sin(b),
			cos(b) * sin(a),
			cos(b) * cos(a),
		];
	}

	// rotX() {
	// 	this.y = -sin(this.angleX) * sqrt(pow(this.y, 2) + pow(this.z, 2));
	// 	this.z = cos(this.angleX) * sqrt(pow(this.y, 2) + pow(this.z, 2));
	// }

	// rotY() {
	// 	this.x = cos(this.angleY) * sqrt(pow(this.x, 2) + pow(this.z, 2));
	// 	this.z = sin(this.angleY) * sqrt(pow(this.x, 2) + pow(this.z, 2));
	// }

	// rotZ() {
	// 	this.x = cos(this.angleZ) * sqrt(pow(this.y, 2) + pow(this.x, 2));
	// 	this.y = sin(this.angleZ) * sqrt(pow(this.y, 2) + pow(this.x, 2));
	// }

	draw() {
		push();
		noStroke();
		translate(this.defaultX, this.defaultY, this.defaultZ);
		ambientLight(this.colorObj.r, this.colorObj.g, this.colorObj.b);
		sphere(this.r);
		pop();
		rotateX(this.angleX);
		rotateY(this.angleY);
		rotateZ(this.angleZ);
		// this.rotZ();
		// this.rotX();
		// this.rotY();
		this.transMatrix = this.transformMatrix(
			this.angleX,
			this.angleY,
			this.angleZ
		);
		translate(0, 0, -this.startMove);

		push();
		if (onWave) {
			rotateX(-this.angleX);
			rotateY(-this.angleY);
			rotateZ(-this.angleZ);
		}
		if (!onWave) {
			this.angleX += 0.00001;
			this.angleY += 0.00001;
			this.angleZ += 0.00001;
			this.startMove *= 0.95;
		}
	}
}
