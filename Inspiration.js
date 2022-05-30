class Inspiration {
	constructor(dotGroup) {
		this.dotGroup = dotGroup;
		this.dotNum = dotGroup.dotNum;
		this.dots = dotGroup.dots;

		this.init();
	}

	init() {
		for (let i = 0; i < this.dotNum; i++) {
			this.dots[i].inspirationX = random(-1.2, 1.2) * stageWidth;
			this.dots[i].inspirationY = random(-1.2, 1.2) * stageHeight;
			this.dots[i].inspirationZ = random(-0.8, -0.2) * stageWidth;
		}
	}
}
