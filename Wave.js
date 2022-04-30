class Wave {
	constructor(dotGroup) {
		this.dotGroup = dotGroup;
		this.dotNum = dotGroup.dotNum;
		this.dots = [];
	}

	resize(stageWidth, stageHeight) {
		this.stageWidth = stageWidth;
		this.stageHeight = stageHeight;
	}

	update() {
		for (let i = 0; i < this.dotNum; i++) {
			this.dots[i] = this.dotGroup.dots[i];
		}
	}

	draw() {
		for (let i = 0; i < this.dotNum; i++) {
			this.update();
			console.log(this.dots[i]);
		}

		let px = this.dots[0].x;
		let py = this.dots[0].y;
		let pz = this.dots[0].z;
		let cx = this.dots[1].x;
		let cy = this.dots[1].y;
		let cz = this.dots[1].z;

		for (let i = 2; i < this.dotNum; i++) {
			line(px, py, pz, cx, cy, cz);

			px = this.dots[i - 1].x;
			py = this.dots[i - 1].y;
			pz = this.dots[i - 1].z;
			cx = this.dots[i].x;
			cy = this.dots[i].y;
			cz = this.dots[i].z;
		}
	}
}
