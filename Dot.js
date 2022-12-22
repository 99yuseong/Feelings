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

		this.dotIdx = 0;
		this.dots = [];
		this.dotNum;

		this.idx;
		this.randomValue;

		this.defaultFirst = true;
		this.inspirationFirst = true;
		this.cubeFirst = true;
		this.ballFirst = true;
		this.thinkFirst = true;
		this.boardFirst = true;

		this.shape;
		this.cubeReady = false;
		this.inspirationReady = false;
		this.ballReady = false;
		this.thinkReady = false;
		this.boardReady = false;

		// random cordinate
		this.ranX;
		this.ranY;
		this.ranZ;

		// cube coordinate
		this.cubeX;
		this.cubeY;
		this.cubeZ;
		this.cubeAngle1;
		this.cubeAngle2;

		// inspiration coordinate
		this.direc;
		this.inspirationX;
		this.inspirationY;
		this.inspirationZ;
		this.inspirationPrevX;
		this.inspirationPrevY;
		this.inspirationPrevZ;
		this.inspirationAngle;
		this.inspirationVector;
		this.inspirationXoff;
		this.inspirationYoff;
		this.inspirationZoff;

		// ball coordinate
		this.ballX;
		this.ballY;
		this.ballZ;

		// think coordinate
		this.thinkX;
		this.thinkY;
		this.thinkZ;

		// board coordinate
		this.boardX;
		this.boardY;
		this.boardZ;
		this.boardI;
		this.boardJ;

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
		this.ranX = random(-0.7, 0.7) * this.stageWidth;
		this.ranY = random(-0.7, 0.7) * this.stageWidth;
		this.ranZ = random(-1.5, -0.2) * this.stageWidth;
		this.x = this.ranX;
		this.y = this.ranY;
		this.z = this.ranZ;
		this.r = Math.floor(random(1, 25) * 3);
		this.angleX = random(-1, 1);
		this.angleY = random(-1, 1);
		this.angleZ = random(-1, 1);
		this.shape = "point";
	}

	draw() {
		if (onBase) {
			this.drawBase();
		} else {
			this.reset();
		}

		if (onInspiration) {
			this.drawInspiration();
		} else {
			this.reset("inspiration");
		}

		if (onCube) {
			this.drawCube();
		} else {
			this.reset("cube");
		}

		if (onBall) {
			this.drawBall();
		} else {
			this.reset("ball");
		}

		if (onThink) {
			this.drawThink();
		} else {
			this.reset("think");
		}

		if (onBoard) {
			this.drawBoard();
		} else {
			this.reset("board");
		}

		push();
		noStroke();
		translate(this.x, this.y, this.z);
		// ambientLight(this.colorObj.r, this.colorObj.g, this.colorObj.b);
		switch (this.shape) {
			case "box":
				box(this.r);
				break;
			case "sphere":
				directionalLight(0, 143, 255, mouseX, mouseY);
				sphere(this.r);
				break;
			case "cone":
				cone(this.r, ((this.r * 4) / 3) * Math.sqrt(3), 4);
				break;
			case "line":
				cylinder(this.r / 10, this.h);
				break;
			case "point":
				// fill(0, 143, 255);
				ambientLight(0, 143, 255);
				sphere(3);
				break;
			case "quadraticVertex":
				beginShape();
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
			case "inspiration":
				if (!this.inspirationFirst) {
					drawingMode = false;
					this.inspirationFirst = true;
					pop();
				}
				break;
			case "cube":
				if (!this.cubeFirst) {
					drawingMode = false;
					this.cubeFirst = true;
					pop();
				}
				break;
			case "ball":
				if (!this.ballFirst) {
					drawingMode = false;
					this.ballFirst = true;
					pop();
				}
				break;
			case "think":
				if (!this.thinkFirst) {
					drawingMode = false;
					this.thinkFirst = true;
					pop();
				}
				break;
			case "board":
				if (!this.boardFirst) {
					drawingMode = false;
					this.boardFirst = true;
					pop();
				}
				break;
			default:
				if (!this.defaultFirst) {
					drawingMode = false;
					this.defaultFirst = true;
					pop();
				}
				break;
		}
	}

	drawBase() {
		if (this.defaultFirst) {
			push();
			this.defaultFirst = false;
			this.targetX = this.ranX;
			this.targetY = this.ranY;
			this.targetZ = this.ranZ;
			this.angleX = 0;
			this.angleY = 0;
			this.angleZ = 0;
			this.shape = "point";
			ambientLight(0, 143, 255);
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
			drawingMode = false;
			this.cubeFirst = false;
			this.cubeReady = true;
			this.targetX = this.cubeX;
			this.targetY = this.cubeY;
			this.targetZ = this.cubeZ;
			this.shape = "point";
		}
		if (abs(this.x - this.targetX) < 100) {
			this.shape = "dot";
		}
		if (abs(this.x - this.targetX) > 0.001 && this.cubeReady) {
			this.x += (this.targetX - this.x) * 0.08;
			this.y += (this.targetY - this.y) * 0.08;
			this.z += (this.targetZ - this.z) * 0.08;
		} else if (this.cubeReady) {
			this.cubeReady = false;
			this.cubePrevX = this.x;
			this.cubePrevY = this.y;
			this.cubePrevZ = this.z;
		} else {
			this.cubeAngle1 = map(
				noise(this.x * 0.005, this.y * 0.005, this.z * 0.005),
				0,
				1,
				0,
				TWO_PI * 4
			);
			this.cubeAngle2 = map(
				noise(this.x * 0.003, this.y * 0.003, this.z * 0.003),
				0,
				1,
				0,
				TWO_PI * 4
			);
			drawingMode = true;
			let addVector = createVector(
				sin(this.cubeAngle1) * cos(this.cubeAngle2),
				sin(this.cubeAngle1) * sin(this.cubeAngle2),
				cos(this.cubeAngle1)
			);
			this.x += addVector.x * 5;
			this.y += addVector.y * 5;
			this.z +=
				this.z > -this.stageWidth * 0.2
					? addVector.z * 5
					: -addVector.z * 5;
			strokeWeight(1.5);
			stroke(
				map(this.x, -this.stageWidth / 2, this.stageWidth / 2, 50, 255),
				map(
					this.y,
					-this.stageHeight / 2,
					this.stageheight / 2,
					50,
					255
				),
				map(this.x, -this.stageWidth / 2, this.stageWidth / 2, 255, 50)
			);
			line(
				this.cubePrevX,
				this.cubePrevY,
				this.cubePrevZ,
				this.x,
				this.y,
				this.z
			);
			this.cubePrevX = this.x;
			this.cubePrevY = this.y;
			this.cubePrevZ = this.z;
		}
	}

	drawInspiration() {
		if (this.inspirationFirst) {
			push();
			drawingMode = false;
			this.inspirationFirst = false;
			this.inspirationReady = true;
			this.inspirationXoff = this.randomValue;
			this.inspirationYoff = this.randomValue;
			this.inspirationZoff = this.randomValue;
			this.targetX = this.inspirationX;
			this.targetY = this.inspirationY;
			this.targetZ = this.inspirationZ;
			this.shape = "point";
			this.direc = 1;
			this.hue = 0;
			this.time = 1;
			this.offset = this.stageWidth * 2;
			this.offsetSpeed = 10;
		}
		if (abs(this.x - this.targetX) < 100) {
			this.shape = "dot";
		}
		if (abs(this.x - this.targetX) > 0.01 && this.inspirationReady) {
			this.x += (this.targetX - this.x) * 0.08;
			this.y += (this.targetY - this.y) * 0.08;
			this.z += (this.targetZ - this.z) * 0.08;
		} else if (this.inspirationReady) {
			this.inspirationReady = false;
			this.inspirationPrevX = this.x;
			this.inspirationPrevY = this.y;
			this.inspirationPrevZ = this.z;
		} else {
			drawingMode = true;
			this.inspirationAngle =
				noise(
					this.inspirationXoff + this.x * 0.0005,
					this.inspirationYoff + this.y * 0.0005,
					this.inspirationZoff + this.z * 0.0005
				) *
				TWO_PI *
				4;
			this.inspirationVector = p5.Vector.fromAngles(
				this.inspirationAngle * 1.2,
				this.inspirationAngle * 1.1
			);

			if (this.x > this.offset) {
				colorMode(HSB, 359, 100, 100, 10);
				stroke(this.hue, 90, 80, 10);
				strokeWeight(noise(this.inspirationXoff));
				this.hue += noise(this.inspirationXoff);
				if (this.hue > 359) {
					this.hue = 0;
				}
				this.x += this.inspirationVector.x * 5 * this.direc;
				this.y += this.inspirationVector.y * 5 * this.direc;
				this.z += this.inspirationVector.z * 5 * this.direc;
				this.inspirationXoff += 0.01;
				this.inspirationYoff += 0.01;
				this.inspirationZoff += 0.01;
			} else {
				colorMode(RGB, 255);
				stroke(100, 100, 100);
				strokeWeight(noise(this.inspirationXoff) * 2);
				this.x += this.inspirationVector.x * 5 * this.direc;
				this.y += this.inspirationVector.y * 5 * this.direc;
				this.z += this.inspirationVector.z * 5 * this.direc;
				this.inspirationXoff += 0.01;
				this.inspirationYoff += 0.01;
				this.inspirationZoff += 0.01;
			}
			if (
				this.x < -this.stageWidth * 2 ||
				this.x > this.stageWidth * 2 ||
				this.y > this.stageHeight * 2 ||
				this.y < -this.stageHeight * 2
			) {
				this.direc *= -1;
				this.x += this.inspirationVector.x * 30 * this.direc;
				this.y += this.inspirationVector.y * 30 * this.direc;
			}
			if (
				this.z < -this.stageWidth * 1.5 ||
				this.z > -this.stageWidth * 0.8
			) {
				this.direc *= -1;
				this.z += this.inspirationVector.z * 30 * this.direc;
			}

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
			this.offset -= this.offsetSpeed;
			if (
				this.offset < -this.stageWidth * 2 ||
				this.offset > this.stageWidth * 2
			) {
				this.offsetSpeed *= -1;
			}
		}
	}

	drawBall() {
		if (this.ballFirst) {
			push();
			drawingMode = false;
			this.ballFirst = false;
			this.ballReady = true;
			this.targetX = this.ballX;
			this.targetY = this.ballY;
			this.targetZ = this.ballZ;
			this.shape = "point";
			this.ballR = 1;
			this.thinkR = 255;
			this.thinkG = 255;
			this.thinkB = 255;
			this.vR = 1;
			this.vG = 1;
			this.vB = 1;
			this.r = 1;
		}
		if (abs(this.x - this.targetX) < 0.1) {
			this.shape = "dot";
			this.cubePrevX = this.x;
			this.cubePrevY = this.y;
			this.cubePrevZ = this.z;
		}

		if (abs(this.x - this.targetX) > 0.001 && this.ballReady) {
			this.x += (this.targetX - this.x) * 0.08;
			this.y += (this.targetY - this.y) * 0.08;
			this.z += (this.targetZ - this.z) * 0.08;
		} else if (this.ballReady) {
			this.ballReady = false;
		} else {
			this.d1 = this.dots[(this.dotIdx + 5) % this.dotNum];
			this.d2 = this.dots[(this.dotIdx + 15) % this.dotNum];
			this.d3 = this.dots[(this.dotIdx + 3) % this.dotNum];
			push();
			noFill();
			stroke(this.thinkR % 255, this.thinkG % 255, this.thinkB % 255);
			strokeWeight(this.r);
			curve(
				this.x,
				this.y,
				this.z,
				this.d1.x,
				this.d1.y,
				this.d1.z,
				this.d2.x,
				this.d2.y,
				this.d2.z,
				this.d3.x,
				this.d3.y,
				this.d3.z
			);

			this.cubeAngle1 = map(
				noise(this.x * 0.005, this.y * 0.005, this.z * 0.005),
				0,
				1,
				0,
				TWO_PI * 4
			);
			this.cubeAngle2 = map(
				noise(this.x * 0.003, this.y * 0.003, this.z * 0.003),
				0,
				1,
				0,
				TWO_PI * 4
			);
			let addVector = createVector(
				sin(this.cubeAngle1) * cos(this.cubeAngle2),
				sin(this.cubeAngle1) * sin(this.cubeAngle2),
				cos(this.cubeAngle1)
			);
			this.x += addVector.x * 2 - this.x * this.r * 0.008;
			this.y += addVector.y * 2 - this.y * this.r * 0.008;
			this.z += addVector.z * 2 - this.z * this.r * 0.008;

			if (
				dist(0, 0, 0, this.x, this.y, this.z) > this.stageHeight / 2 ||
				dist(0, 0, 0, this.x, this.y, this.z) < this.stageHeight / 4
			) {
				this.r *= -1;
			}

			this.thinkR += 5 * this.vR;
			this.thinkG += 8 * this.vG;
			this.thinkB += 12 * this.vB;
			pop();
		}
	}

	drawThink() {
		if (this.thinkFirst) {
			push();
			this.thinkFirst = false;
			this.thinkReady = true;
			this.targetX = this.thinkX;
			this.targetY = this.thinkY;
			this.targetZ = this.thinkZ;
			this.thinkR = 0;
			this.thinkG = 0;
			this.thinkB = 0;
			this.vR = 1;
			this.vG = 1;
			this.vB = 1;
			this.r1 = 0.001;
			this.shape = "point";
			this.thinkRan = floor(random(3));
			textFont(Roboto);
			textSize(this.stageWidth / (15 * ((this.dotIdx % 3) + 1)));
			textAlign(CENTER, CENTER);
		}
		if (abs(this.x - this.targetX) < 100) {
			this.shape = "dot";
		}
		if (abs(this.targetX - this.x) > 0.1 && this.thinkReady) {
			this.x += (this.targetX - this.x) * 0.08;
			this.y += (this.targetY - this.y) * 0.08;
			this.z += (this.targetZ - this.z) * 0.08;
		} else if (this.thinkReady) {
			this.thinkReady = false;
		} else {
			push();
			fill(this.thinkR, this.thinkG, this.thinkB);
			translate(this.x, this.y, this.z);
			if (this.dotIdx % 3 == 0) {
				rotateX(Math.PI / 2);
			} else if (this.dotIdx % 3 == 1) {
				rotateY(Math.PI / 2);
			} else {
				rotateZ(Math.PI / 2);
			}
			if (this.dotIdx % 8 == 0) {
				text(data[this.dotIdx % 500]["body"], 0, 0);
			} else if (this.dotIdx % 8 == 1) {
				text(data[this.dotIdx % 500]["name"], 0, 0);
			}
			pop();

			if (this.thinkR > 255 || this.thinkR < 0) {
				this.vR *= -1;
			}
			if (this.thinkG > 255 || this.thinkG < 0) {
				this.vG *= -1;
			}
			if (this.thinkB > 255 || this.thinkB < 0) {
				this.vB *= -1;
			}
			this.thinkR += 1 * this.vR;
			this.thinkG += 3 * this.vG;
			this.thinkB += 5 * this.vB;
			this.x += this.vR;
			this.y += this.vG;
			this.z += this.vB;
		}
	}

	drawBoard() {
		if (this.boardFirst) {
			push();
			this.boardFirst = false;
			this.boardReady = true;
			this.targetX = this.boardX;
			this.targetY = this.boardY;
			this.targetZ = this.boardZ;
			this.shape = "point";
			ambientLight(0, 143, 255);
			strokeWeight(floor(random(0, 20)));
		}

		if (
			abs(this.targetZ - this.z) > 0.001 &&
			abs(this.targetX - this.x) > 0.001 &&
			abs(this.targetY - this.y) > 0.001 &&
			this.boardReady
		) {
			this.x += (this.targetX - this.x) * 0.08;
			this.y += (this.targetY - this.y) * 0.08;
			this.z += (this.targetZ - this.z) * 0.08;
		} else if (this.boardReady) {
			this.boardReady = false;
			this.shape = "dot";
		} else {
			this.bPoint1 =
				this.dots[
					this.dotIdx + Math.sqrt(this.dotNum) >= 0 &&
					this.dotIdx + Math.sqrt(this.dotNum) <= this.dotNum - 1
						? this.dotIdx + Math.sqrt(this.dotNum)
						: this.dotIdx
				];
			// this.bPoint2 =
			// 	this.dots[
			// 		this.dotIdx - Math.sqrt(this.dotNum) >= 0 &&
			// 		this.dotIdx - Math.sqrt(this.dotNum) <= this.dotNum - 1
			// 			? this.dotIdx - Math.sqrt(this.dotNum)
			// 			: this.dotIdx
			// 	];
			this.bPoint3 =
				this.dots[
					this.dotIdx + 1 >= 0 &&
					this.dotIdx + 1 <= this.dotNum - 1 &&
					this.dotIdx % Math.sqrt(this.dotNum) != 44
						? this.dotIdx + 1
						: this.dotIdx
				];
			// this.bPoint4 =
			// 	this.dots[
			// 		this.dotIdx - 1 >= 0 &&
			// 		this.dotIdx - 1 <= this.dotNum - 1 &&
			// 		this.dotIdx % Math.sqrt(this.dotNum) != 0 &&
			// 		this.dotIdx % Math.sqrt(this.dotNum) != 44
			// 			? this.dotIdx - 1
			// 			: this.dotIdx
			// 	];
			stroke(100, 100, 100);
			line(
				this.x,
				this.y,
				this.z,
				this.bPoint1.x,
				this.bPoint1.y,
				this.bPoint1.z
			);
			// line(
			// 	this.x,
			// 	this.y,
			// 	this.z,
			// 	this.bPoint1.x,
			// 	this.bPoint1.y + 10,
			// 	this.bPoint1.z
			// );
			// line(
			// 	this.x,
			// 	this.y,
			// 	this.z,
			// 	this.bPoint1.x,
			// 	this.bPoint1.y + 50,
			// 	this.bPoint1.z
			// );
			// line(
			// 	this.x,
			// 	this.y,
			// 	this.z,
			// 	this.bPoint1.x,
			// 	this.bPoint1.y + 30,
			// 	this.bPoint1.z
			// );
			// line(
			// 	this.x,
			// 	this.y,
			// 	this.z,
			// 	this.bPoint1.x,
			// 	this.bPoint1.y + 100,
			// 	this.bPoint1.z
			// );
			// line(
			// 	this.x,
			// 	this.y,
			// 	this.z,
			// 	this.bPoint2.x,
			// 	this.bPoint2.y,
			// 	this.bPoint2.z
			// );
			line(
				this.x,
				this.y,
				this.z,
				this.bPoint3.x,
				this.bPoint3.y,
				this.bPoint3.z
			);
			// line(
			// 	this.x,
			// 	this.y,
			// 	this.z,
			// 	this.bPoint3.x,
			// 	this.bPoint3.y + 10,
			// 	this.bPoint3.z
			// );
			// line(
			// 	this.x,
			// 	this.y,
			// 	this.z,
			// 	this.bPoint3.x,
			// 	this.bPoint3.y + 50,
			// 	this.bPoint3.z
			// );
			// line(
			// 	this.x,
			// 	this.y,
			// 	this.z,
			// 	this.bPoint3.x,
			// 	this.bPoint3.y + 30,
			// 	this.bPoint3.z
			// );
			// line(
			// 	this.x,
			// 	this.y,
			// 	this.z,
			// 	this.bPoint3.x,
			// 	this.bPoint3.y + 100,
			// 	this.bPoint3.z
			// );
			// line(
			// 	this.x,
			// 	this.y,
			// 	this.z,
			// 	this.bPoint4.x,
			// 	this.bPoint4.y,
			// 	this.bPoint4.z
			// );
			// if (
			// 	abs(this.targetZ - this.z) > 0.01 &&
			// 	abs(this.targetX - this.x) > 0.01 &&
			// 	abs(this.targetY - this.y) > 0.01 &&
			// )
			// this.x += (this.targetX - this.x) * 0.08;
			// this.y += (this.targetY - this.y) * 0.08;
			// this.z += (this.targetZ - this.z) * 0.08;

			// this.x += (this.targetX - this.x) * 0.08;
			// this.y += (this.targetY - this.y) * 0.08;
			// this.z += (this.targetZ - this.z) * 0.08;
			this.y =
				floor(noise(this.x, this.z, frameCount * 0.05) * stageHeight) /
				10;
		}
	}
}
