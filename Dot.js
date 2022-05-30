class Dot {
	constructor() {
		this.x;
		this.y;
		this.z;
		this.r;
		this.h;
		this.dr;
		this.dh;
		this.angleX;
		this.angleY;
		this.angleZ;
		this.startMove = 1000;

		this.defaultFirst = true;
		this.cubeFirst = true;
		this.happyFirst = true;
		this.tornadoFirst = true;
		this.angerFirst = true;
		this.sadFirst = true;
		this.fearFirst = true;
		this.inspirationFirst = true;

		this.shape;
		this.colors = {
			normal: [
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
			],
			peace: [
				// green
				{
					r: 1,
					g: 115,
					b: 95,
				},
				{
					r: 53,
					g: 143,
					b: 126,
				},
				{
					r: 103,
					g: 170,
					b: 159,
				},
				{
					r: 153,
					g: 199,
					b: 191,
				},
				{
					r: 203,
					g: 226,
					b: 223,
				},
			],
			anger: [
				// red
				{
					r: 220,
					g: 8,
					b: 0,
				},
				{
					r: 227,
					g: 57,
					b: 51,
				},
				{
					r: 234,
					g: 106,
					b: 102,
				},
				{
					r: 241,
					g: 156,
					b: 152,
				},
				{
					r: 247,
					g: 206,
					b: 204,
				},
			],
			happy: [
				// yellow
				{
					r: 255,
					g: 255,
					b: 205,
				},
				{
					r: 255,
					g: 240,
					b: 153,
				},
				{
					r: 253,
					g: 226,
					b: 101,
				},
				{
					r: 255,
					g: 209,
					b: 50,
				},
				{
					r: 254,
					g: 193,
					b: 0,
				},
			],
			happy2: [
				{
					r: 254,
					g: 175,
					b: 221,
				},
				{
					r: 255,
					g: 132,
					b: 196,
				},
				{
					r: 255,
					g: 89,
					b: 174,
				},
				{
					r: 255,
					g: 44,
					b: 151,
				},
				{
					r: 239,
					g: 0,
					b: 127,
				},
			],
			fear: [
				// black
				{
					r: 212,
					g: 226,
					b: 239,
				},
				{
					r: 164,
					g: 180,
					b: 194,
				},
				{
					r: 118,
					g: 133,
					b: 149,
				},
				{
					r: 71,
					g: 88,
					b: 103,
				},
				{
					r: 25,
					g: 42,
					b: 57,
				},
			],
			sad: [
				// blue
				{
					r: 49,
					g: 204,
					b: 254,
				},
				{
					r: 36,
					g: 152,
					b: 232,
				},
				{
					r: 27,
					g: 102,
					b: 204,
				},
				{
					r: 13,
					g: 51,
					b: 178,
				},
				{
					r: 1,
					g: 0,
					b: 154,
				},
			],
		};
		this.colorObj = this.colors["peace"][Math.floor(Math.random() * 5)];

		// random cordinate
		this.ranX;
		this.ranY;
		this.ranZ;

		// cube coordinate
		this.cubeX;
		this.cubeY;
		this.cubeZ;

		// happy coordinate
		this.happyX;
		this.happyY;
		this.happyZ;
		this.t = 0;

		//anger coordinate
		this.angerX;
		this.angerY;
		this.angerZ;

		//sad coordinate
		this.sadX;
		this.sadY;
		this.sadZ;
		this.angleSadX;
		this.angleSadY;
		this.angleSadZ;

		// fear coordinate
		this.fearX;
		this.fearY;
		this.fearZ;
		this.fearReady = false;
		this.feardx;
		this.feardy;
		this.feardz;

		// tornado coordinate
		this.tornadoX;
		this.tornadoY;
		this.tornadoZ;
		this.tornadoAngle;

		// inspiration coordinate
		this.inspirationX;
		this.inspirationY;
		this.inspirationZ;
		this.inspirationPrevX;
		this.inspirationPrevY;
		this.inspirationPrevZ;
		this.inspirationReady = true;
		this.inspirationAngle;
		this.inspirationVector;
		this.inspirationXoff;
		this.inspirationYoff;
		this.inspirationZoff;

		// quadraticVertex
		this.vx1;
		this.vy1;
		this.vz1;
		this.vx2;
		this.vy2;
		this.vz2;
		this.vx3;
		this.vy3;
		this.vz3;

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
		this.r = Math.floor(random(1, 25) * 3);
		// this.dr = Math.floor(random(-10, 10));
		this.angleX = random(-1, 1);
		this.angleY = random(-1, 1);
		this.angleZ = random(-1, 1);

		this.shape = "sphere";
	}

	draw() {
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

		if (onHappy) {
			this.drawHappy();
		} else {
			this.reset("happy");
		}

		if (onTornado) {
			this.drawTornado();
		} else {
			this.reset("tornado");
		}

		if (onAnger) {
			this.drawAnger();
		} else {
			this.reset("anger");
		}

		if (onSad) {
			this.drawSad();
		} else {
			this.reset("sad");
		}

		if (onFear) {
			this.drawFear();
		} else {
			this.reset("fear");
		}

		if (onInspiration) {
			this.drawInspiration();
		} else {
			drawingMode = false;
			this.reset("inspiration");
		}

		push();
		noStroke();
		translate(this.x, this.y, this.z);
		ambientLight(this.colorObj.r, this.colorObj.g, this.colorObj.b);
		switch (this.shape) {
			case "box":
				box(this.r);
				break;
			case "sphere":
				sphere(this.r);
				break;
			case "cone":
				cone(this.r, ((this.r * 4) / 3) * Math.sqrt(3), 4);
				break;
			case "line":
				cylinder(this.r / 10, this.h);
				break;
			case "point":
				sphere(3);
				break;
			case "quadraticVertex":
				beginShape();
				// curveVertex(this.x, this.y, this.z);
				// curveVertex(this.vx1, this.vy1, this.vz1);
				// curveVertex(this.vx2, this.vy2, this.vz2);
				// curveVertex(this.vx3, this.vy3, this.vz3);
				vertex(this.x, this.y, this.z);
				bezierVertex(
					this.vx1,
					this.vy1,
					this.vz1,
					this.vx2,
					this.vy2,
					this.vz2,
					this.vx3,
					this.vy3,
					this.vz3
				);
				endShape();
				break;
			case "dot":
				break;
			default:
				break;
		}
		pop();
	}

	reset(section) {
		switch (section) {
			case "cube":
				if (!this.cubeFirst) {
					this.cubeFirst = true;
					pop();
				}
				break;

			case "tornado":
				if (!this.tornadoFirst) {
					this.tornadoFirst = true;
					pop();
				}
				break;

			case "happy":
				if (!this.happyFirst) {
					this.happyFirst = true;
					pop();
				}
				break;

			case "anger":
				if (!this.angerFirst) {
					this.angerFirst = true;
					pop();
				}
				break;

			case "sad":
				if (!this.sadFirst) {
					this.sadFirst = true;
					pop();
				}
				break;

			case "fear":
				if (!this.fearFirst) {
					this.fearFirst = true;
					this.fearReady = false;
					pop();
				}
				break;

			case "inspiration":
				if (!this.inspirationFirst) {
					this.inspirationFirst = true;
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
			this.angleX = 0;
			this.angleY = 0;
			this.angleZ = 0;
			this.colorObj = this.colors["peace"][Math.floor(Math.random() * 5)];
			this.shape = "sphere";
		}

		if (abs(this.targetX - this.x) > 10) {
			this.x += (this.targetX - this.x) * 0.08;
			this.y += (this.targetY - this.y) * 0.08;
			this.z += (this.targetZ - this.z) * 0.08;
		} else {
			rotateX(this.angleX);
			rotateY(this.angleY);
			rotateZ(this.angleZ);

			this.angleX += random(0.0000004);
			this.angleY += random(0.0000004);
			this.angleZ += random(0.0000004);
		}

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
		if (abs(this.x - this.targetX) > 0) {
			this.x += (this.targetX - this.x) * 0.08;
			this.y += (this.targetY - this.y) * 0.08;
			this.z += (this.targetZ - this.z) * 0.08;
		}
	}

	drawHappy() {
		if (this.happyFirst) {
			push();
			this.happyFirst = false;
			this.targetX = this.happyX;
			this.targetY = this.happyY;
			this.targetZ = this.happyZ;
			this.t = 0;
			this.colorObj = this.colors["happy"][Math.floor(Math.random() * 5)];
			this.shape = "sphere";
		}
		if (abs(this.z - this.targetZ) > 0.1) {
			this.x += (this.targetX - this.x) * 0.08;
			this.y += (this.targetY - this.y) * 0.08;
			this.z += (this.targetZ - this.z) * random(0.006, 0.5);
		} else {
			this.x += 100;
			this.y += 100 * sin(radians(this.t));
			this.t += 3;

			if (this.x > this.stageWidth * 1.4) {
				this.x = -this.stageWidth * 1.4;
			}
		}
	}

	drawTornado() {
		if (this.tornadoFirst) {
			push();
			this.tornadoFirst = false;
			this.targetX = this.tornadoX;
			this.targetY = this.tornadoY;
			this.targetZ = this.tornadoZ;
			this.tornadoAngle = 0;
		}
		if (abs(this.x - this.targetX) > 0.1) {
			this.x += (this.targetX - this.x) * 0.08;
			this.y += (this.targetY - this.y) * 0.08;
			this.z += (this.targetZ - this.z) * 0.08;
		} else {
			rotateY(this.tornadoAngle);
			this.tornadoAngle += 0.00015;
		}
	}

	drawAnger() {
		if (this.angerFirst) {
			push();
			this.angerFirst = false;
			this.targetX = this.angerX;
			this.targetY = this.angerY;
			this.targetZ = this.angerZ;
			this.colorObj = this.colors["anger"][Math.floor(Math.random() * 5)];
			this.shape = "box";
		}

		if (dotGroup.timer < 300000) {
			if (abs(this.x - this.targetX) > 50) {
				this.x += (this.targetX - this.x) * 0.08;
				this.y += (this.targetY - this.y) * 0.08;
				this.z += (this.targetZ - this.z) * 0.08;
			} else {
				if (this.shape !== "cone") {
					this.shape = "cone";
				}
			}
		} else if (dotGroup.timer < 800000) {
			if (abs(this.x) > 400 && abs(this.y) > 400 && abs(this.z) > 400) {
				this.x += -this.x * 0.03;
				this.y += -this.y * 0.03;
				this.z += -this.z * 0.03;
			}
		} else {
			changeToAnger();
		}
		this.x += Math.floor((random(-10, 10) * dotGroup.timer) / 100000);
		this.y += Math.floor((random(-10, 10) * dotGroup.timer) / 100000);
		this.z += Math.floor((random(-10, 10) * dotGroup.timer) / 100000);
	}

	drawSad() {
		if (this.sadFirst) {
			push();
			this.sadFirst = false;
			this.h = this.r;
			this.dh = random(-30, 30);
			this.targetX = this.sadX;
			this.targetY = this.sadY;
			this.targetZ = this.sadZ;
			this.colorObj = this.colors["sad"][Math.floor(Math.random() * 5)];
			this.shape = "cone";
			this.angleSadX = random(-1, 1);
			this.angleSadY = random(-1, 1);
			this.angleSadZ = random(-1, 1);
		}
		if (
			abs(this.x - this.targetX) > 0.05 ||
			abs(this.y - this.targetY) > 0.05 ||
			abs(this.z - this.targetZ) > 0.05
		) {
			this.x += (this.targetX - this.x) * 0.08;
			this.y += (this.targetY - this.y) * 0.08;
			this.z += (this.targetZ - this.z) * 0.08;
		} else {
			if (this.shape !== "line") {
				this.shape = "line";
			}
		}

		rotateX(this.angleSadX);
		rotateY(this.angleSadY);
		rotateZ(this.angleSadZ);

		this.angleSadX += 0.00003;
		this.angleSadY += 0.00003;
		this.angleSadZ += 0.00003;

		if (this.shape === "line") {
			this.h += this.dh;
			if (this.h < 10 || this.h > this.stageWidth * 2) {
				this.dh *= -1;
			}
		}
	}

	drawFear() {
		if (this.fearFirst) {
			push();
			this.fearFirst = false;
			this.targetX = this.fearX;
			this.targetY = this.fearY;
			this.targetZ = this.fearZ;
			this.colorObj = this.colors["fear"][Math.floor(Math.random() * 5)];
			this.shape = "point";
		}
		if (!this.fearReady) {
			this.x += (this.targetX - this.x) * 0.08;
			this.y += (this.targetY - this.y) * 0.08;
			this.z += (this.targetZ - this.z) * 0.08;
			if (abs(this.x - this.targetX) < 10) {
				this.fearReady = true;
			}
		} else {
			this.x += this.feardx;
			this.y += this.feardy;
			this.z += this.feardz;

			if (this.x < -this.stageWidth * 5 || this.x > this.stageWidth * 5) {
				this.feardx *= -1;
			}
			if (this.y < -this.stageWidth * 5 || this.y > this.stageWidth * 5) {
				this.feardy *= -1;
			}
			if (this.z < -this.stageWidth * 5 || this.z > this.stageWidth * 5) {
				this.feardz *= -1;
			}
		}
	}

	drawInspiration() {
		if (this.inspirationFirst) {
			push();
			this.inspirationFirst = false;
			this.inspirationReady = true;
			this.inspirationXoff = random(-1, 1);
			this.inspirationYoff = random(-1, 1);
			this.inspirationZoff = random(-1, 1);
			this.targetX = this.inspirationX;
			this.targetY = this.inspirationY;
			this.targetZ = this.inspirationZ;
			this.shape = "point";
		}
		if (abs(this.x - this.targetX) > 0.01 && this.inspirationReady) {
			this.x += (this.targetX - this.x) * 0.08;
			this.y += (this.targetY - this.y) * 0.08;
			this.z += (this.targetZ - this.z) * 0.08;
		} else if (this.inspirationReady) {
			this.shape = "dot";
			this.inspirationReady = false;
			this.inspirationPrevX = this.x;
			this.inspirationPrevY = this.y;
			this.inspirationPrevZ = this.z;
		} else {
			drawingMode = true;
			stroke(
				Math.floor(noise(this.inspirationXoff) * 255),
				Math.floor(noise(this.inspirationYoff) * 255),
				Math.floor(noise(this.inspirationZoff) * 255)
			);
			strokeWeight(noise(this.inspirationXoff) * 2);
			this.inspirationAngle =
				noise(
					this.inspirationXoff,
					this.inspirationYoff,
					this.inspirationZoff
				) *
				TWO_PI *
				4;
			this.inspirationVector = p5.Vector.fromAngles(
				this.inspirationAngle * 1.2,
				this.inspirationAngle * 1.1
			);

			this.x += this.inspirationVector.x * 30;
			this.y += this.inspirationVector.y * 30;
			this.z += this.inspirationVector.z * 30;
			line(
				this.inspirationPrevX,
				this.inspirationPrevY,
				this.inspirationPrevZ,
				this.x,
				this.y,
				this.z
			);
			this.inspirationPrevX = this.x;
			this.inspirationPrevY = this.y;
			this.inspirationPrevZ = this.z;
			this.inspirationXoff += 0.004;
			this.inspirationYoff += 0.004;
			this.inspirationZoff += 0.004;
			if (this.x > this.stageWidth) {
				this.x = -this.stageWidth;
				this.inspirationPrevX = this.x;
			}
			if (this.x < -this.stageWidth) {
				this.x = this.stageWidth;
				this.inspirationPrevX = this.x;
			}
			if (this.y > this.stageHeight) {
				this.y = -this.stageHeight;
				this.inspirationPrevY = this.y;
			}
			if (this.y < -this.stageHeight) {
				this.y = this.stageHeight;
				this.inspirationPrevY = this.y;
			}
			if (this.z > -this.stageWidth / 5) {
				this.z = -this.stageWidth / 2;
				this.inspirationPrevZ = this.z;
			}
			if (this.z < -this.stageWidth / 2) {
				this.z = -this.stageWidth / 5;
				this.inspirationPrevZ = this.z;
			}
		}
	}
}
