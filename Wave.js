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
		}

		let px = this.dots[0].x;
		let py = this.dots[0].y;
		let pz = this.dots[0].z;
		let cx = this.dots[1].x;
		let cy = this.dots[1].y;
		let cz = this.dots[1].z;

		for (let i = 2; i < this.dotNum; i++) {
			const m = this.dots[i].transMatrix;
			// console.log(gl);
			// gl.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8]);
			rotateX(-this.dots[i].angleX);
			rotateY(-this.dots[i].angleY);
			rotateZ(-this.dots[i].angleZ);
			translate(0, 0, -this.dots[i].startMove);

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
