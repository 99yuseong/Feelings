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
		const sideDotNum = Math.cbrt(this.dotNum);
		const sideLen = this.stageWidth / 2;
		let index = 0;

		for (let i = 0; i < sideDotNum; i++) {
			for (let j = 0; j < sideDotNum; j++) {
				for (let k = 0; k < sideDotNum; k++) {
					const dot = new Dot();
					this.dots[index] = dot;

					index += 1;
					dot.defaultX =
						(i / (sideDotNum - 1)) * sideLen - sideLen / 2;
					dot.defaultY =
						(j / (sideDotNum - 1)) * sideLen - sideLen / 2;
					dot.defaultZ =
						(k / (sideDotNum - 1)) * sideLen - sideLen / 2;

					dot.resize(this.stageWidth, this.stageHeight);
				}
			}
		}
	}

	draw() {
		for (let i = 0; i < this.dotNum; i++) {
			const dot = this.dots[i];
			dot.draw();
		}
	}
}
