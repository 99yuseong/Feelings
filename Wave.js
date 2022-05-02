class Wave {
	constructor(dotGroup) {
		this.dotGroup = dotGroup;
		this.dotNum = dotGroup.dotNum;
		this.dots = dotGroup.dots;

		this.a = 200;
		this.t = PI / 60;
		this.init();
	}

	init() {
		let line = -1;
		for (let i = 0; i < this.dotNum; i++) {
			this.dots[i] = this.dotGroup.dots[i];
			if (i % (sideDotNum * 2) == 0) {
				line += 1;
			}

			this.dots[i].waveX =
				((i % (sideDotNum * 2)) / (sideDotNum - 1)) * sideLen -
				sideLen +
				random(-20, 20);
			this.dots[i].waveY = this.a * sin(this.t * line) + random(-20, 20);
			this.dots[i].waveZ =
				-(line * sideLen) / (sideDotNum - 1) + random(-20, 20);
		}
	}
}
