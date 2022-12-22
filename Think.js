class Think {
	constructor(dotGroup) {
		this.dotGroup = dotGroup;
		this.dotNum = dotGroup.dotNum;
		this.dots = dotGroup.dots;

		this.init();
	}

	init() {
		for (let i = 0; i < this.dotNum; i++) {
			this.dots[i].thinkX = random(-1, 1) * stageWidth;
			this.dots[i].thinkY = random(-1, 1) * stageWidth;
			this.dots[i].thinkZ = random(-1, 1) * stageWidth;
		}
	}
}
