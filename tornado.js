class Tornado {
	constructor(dotGroup) {
		this.dotGroup = dotGroup;
		this.dotNum = dotGroup.dotNum;
		this.dots = dotGroup.dots;

		this.init();
	}

	init() {
		for (let i = 0; i < this.dotNum; i++) {
			this.dots[i].tornadoX = Math.floor(
				random(-0.2, 0.2) * stageWidth * 0.5 * Math.sqrt(i)
			);
			this.dots[i].tornadoY = Math.floor(
				random(-0.7, 0.7) * stageWidth * 2
			);
			this.dots[i].tornadoZ = Math.floor(
				random(-0.2, 0.2) * stageWidth * 0.5 * Math.sqrt(i)
			);
		}
	}
}
