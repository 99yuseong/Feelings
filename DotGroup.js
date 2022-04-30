class DotGroup {
	constructor(num) {
		this.dotNum = num;
		this.dots = [];
	}

	resize(stageWidth, stageHeight) {
		this.stageWidth = stageWidth;
		this.stageHeight = stageHeight;

		this.init();
	}

	init() {
		for (let i = 0; i < this.dotNum; i++) {
			const dot = new Dot();
			this.dots[i] = dot;
			dot.resize(this.stageWidth, this.stageHeight);
		}
	}

	draw() {
		for (let i = 0; i < this.dotNum; i++) {
			const dot = this.dots[i];
			dot.draw();
		}
	}
}
