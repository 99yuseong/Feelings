class DotGroup {
	constructor(num) {
		this.dotNum = num;
		this.dots = [];
		this.timer = 0;
	}

	resize(stageWidth, stageHeight) {
		this.stageWidth = stageWidth;
		this.stageHeight = stageHeight;

		this.init();
	}

	init() {
		sideDotNum = Math.cbrt(this.dotNum);
		sideLen = this.stageWidth / 2;

		for (let i = 0; i < this.dotNum; i++) {
			const dot = new Dot();
			this.dots[i] = dot;
			dot.resize(this.stageWidth, this.stageHeight);
		}
	}

	draw() {
		if (onFear) {
			fear.draw();
		}

		for (let i = 0; i < this.dotNum; i++) {
			const dot = this.dots[i];
			dot.draw();

			if (onAnger) {
				this.timer += 1;
			} else {
				this.timer = 0;
			}
		}
	}
}
