class Cube {
	constructor(dotGroup) {
		this.dotGroup = dotGroup;
		this.dotNum = dotGroup.dotNum;
		this.dots = dotGroup.dots;

		this.init();
	}

	init() {
		for (let i = 0; i < this.dotNum; i++) {
			this.dots[i].cubeX = random(-0.7, 0.7) * stageWidth;
			this.dots[i].cubeY = random(-0.4, 0.4) * stageWidth;
			this.dots[i].cubeZ = random(-1.5, -0.5) * stageWidth;
		}
	}
}
