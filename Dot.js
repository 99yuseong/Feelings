class Dot {
	constructor() {
		this.x;
		this.y;
		this.z;
		this.r;
		this.angleX;
		this.angleY;
		this.angleZ;
		this.startMove = 1000;

		this.defaultFirst = true;
		this.cubeFirst = true;
		this.waveFirst = true;

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

		// random cordinate
		this.ranX;
		this.ranY;
		this.ranZ;

		// cube coordinate
		this.cubeX;
		this.cubeY;
		this.cubeZ;

		// wave coordinate
		this.waveX;
		this.waveY;
		this.waveZ;
		this.t = 0;

		// target coordinate
		this.targetX;
		this.targetY;
		this.targetZ;
	}

	resize(stageWidth, stageHeight) {
		this.stageWidth = stageWidth;
		this.stageHeight = stageHeight;

		this.init();
	}

	init() {
		this.ranX = random(-0.7, 0.7) * this.stageWidth * 2;
		this.ranY = random(-0.7, 0.7) * this.stageWidth * 2;
		this.ranZ = random(-0.7, 0.7) * this.stageWidth * 2;
		this.x = this.ranX;
		this.y = this.ranY;
		this.z = this.ranZ;
		this.r = random(1) * 75;
		this.angleX = random(-1, 1);
		this.angleY = random(-1, 1);
		this.angleZ = random(-1, 1);
	}

	draw() {
		push();
		noStroke();
		translate(this.x, this.y, this.z);
		ambientLight(this.colorObj.r, this.colorObj.g, this.colorObj.b);
		sphere(this.r);
		pop();

		if (onRandom) {
			this.drawRandom();
		} else {
			this.reset();
		}

		if (onCube) {
			this.drawCube();
		} else {
			this.reset("cube");
		}

		if (onWave) {
			this.drawWave();
		} else {
			this.reset("wave");
		}
	}

	reset(section) {
		switch (section) {
			case "cube":
				if (!this.cubeFirst) {
					this.cubeFirst = true;
					pop();
				}
				break;

			case "wave":
				if (!this.waveFirst) {
					this.waveFirst = true;
					pop();
				}
				break;

			default:
				if (!this.defaultFirst) {
					this.defaultFirst = true;
					pop();
				}
				break;
		}
	}

	drawRandom() {
		if (this.defaultFirst) {
			push();
			this.defaultFirst = false;
			this.targetX = this.ranX;
			this.targetY = this.ranY;
			this.targetZ = this.ranZ;
		}

		if (this.x !== this.targetX) {
			this.x += (this.targetX - this.x) * 0.08;
			this.y += (this.targetY - this.y) * 0.08;
			this.z += (this.targetZ - this.z) * 0.08;
		}

		rotateX(this.angleX);
		rotateY(this.angleY);
		rotateZ(this.angleZ);

		this.angleX += 0.00001;
		this.angleY += 0.00001;
		this.angleZ += 0.00001;

		this.startMove *= 0.95;
		translate(0, 0, -this.startMove);
	}

	drawCube() {
		if (this.cubeFirst) {
			push();
			this.cubeFirst = false;
			this.targetX = this.cubeX;
			this.targetY = this.cubeY;
			this.targetZ = this.cubeZ;
		}
		if (this.x !== this.targetX) {
			this.x += (this.targetX - this.x) * 0.08;
			this.y += (this.targetY - this.y) * 0.08;
			this.z += (this.targetZ - this.z) * 0.08;
		}
	}

	drawWave() {
		if (this.waveFirst) {
			push();
			this.waveFirst = false;
			this.targetX = this.waveX;
			this.targetY = this.waveY;
			this.targetZ = this.waveZ;
		}
		if (abs(this.x - this.targetX) > 1) {
			this.x += (this.targetX - this.x) * 0.08;
			this.y += (this.targetY - this.y) * 0.08;
			this.z += (this.targetZ - this.z) * 0.08;
		} else {
			this.y += 100 * sin(radians(this.t));
			this.z += 100;
			this.t += 5;

			if (this.z > this.stageWidth * 1.5) {
				this.z = -this.stageWidth;
			}
			// if (this.z < -this.stageWidth * 1.5) {
			// 	this.z = this.stageWidth;
			// }
		}
	}
}
