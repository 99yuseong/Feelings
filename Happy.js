class Happy {
	constructor(dotGroup) {
		this.dotGroup = dotGroup;
		this.dotNum = dotGroup.dotNum;
		this.dots = dotGroup.dots;

		this.a = 1800;
		this.t = PI / (this.dotNum / (sideDotNum * 2));
		this.init();
	}

	init() {
		let line = -1;
		for (let i = 0; i < this.dotNum; i++) {
			this.dots[i] = this.dotGroup.dots[i];
			if (i % (sideDotNum * 2) == 0) {
				line += 1;
			}

			this.dots[i].happyX =
				-(line * sideLen) / (sideDotNum - 1) + stageWidth;
			this.dots[i].happyY = this.a * sin(this.t * line) - 2800;
			this.dots[i].happyZ =
				((i % (sideDotNum * 2)) / (sideDotNum - 1)) * sideLen * 1.5 -
				random(sideLen);
		}
	}
}
