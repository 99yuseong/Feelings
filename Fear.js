class Fear {
	constructor(dotGroup) {
		this.dotGroup = dotGroup;
		this.dotNum = dotGroup.dotNum;
		this.dots = dotGroup.dots;

		this.init();
	}

	init() {
		for (let i = 0; i < this.dotNum; i++) {
			this.dots[i].fearX = Math.floor(random(-1, 1) * 4 * stageWidth);
			this.dots[i].fearY = Math.floor(random(-1, 1) * 4 * stageWidth);
			this.dots[i].fearZ = Math.floor(random(-1, 1) * 4 * stageWidth);
			this.dots[i].feardx = random(-50, 50);
			this.dots[i].feardy = random(-50, 50);
			this.dots[i].feardz = random(-50, 50);
		}
	}

	draw() {
		for (let i = 0; i < this.dotNum; i++) {
			if (
				this.dots[i].fearReady &&
				i >= 3 &&
				i < this.dotNum &&
				i % 4 === 3
			) {
				push();
				noFill();
				stroke(255, 255, 255, 1);
				strokeWeight(1);
				beginShape();
				vertex(
					this.dots[i - 3].x,
					this.dots[i - 3].y,
					this.dots[i - 3].z
				);
				bezierVertex(
					this.dots[i - 2].x,
					this.dots[i - 2].y,
					this.dots[i - 2].z,
					this.dots[i - 1].x,
					this.dots[i - 1].y,
					this.dots[i - 1].z,
					this.dots[i].x,
					this.dots[i].y,
					this.dots[i].z
				);
				endShape();
				pop();
			}
		}
	}
}
