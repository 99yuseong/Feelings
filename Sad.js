class Sad {
	constructor(dotGroup) {
		this.dotGroup = dotGroup;
		this.dotNum = dotGroup.dotNum;
		this.dots = dotGroup.dots;

		this.init();
	}

	init() {
		for (let i = 0; i < this.dotNum; i++) {
			this.dots[i].sadX = Math.floor(random(-1, 1) * stageWidth * 1.5);
			this.dots[i].sadY = Math.floor(random(-1, 1) * stageWidth * 1.5);
			this.dots[i].sadZ = Math.floor(random(-1, 1) * stageWidth * 1.5);
		}
	}
}
