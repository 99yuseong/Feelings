class Anger {
	constructor(dotGroup) {
		this.dotGroup = dotGroup;
		this.dotNum = dotGroup.dotNum;
		this.dots = dotGroup.dots;

		// this.coordinates = [];
		this.x;
		this.y;
		this.z;

		this.init();
	}

	init() {
		// let index = 0;
		for (let i = 0; i < this.dotNum; i++) {
			if (i % sideDotNum == 0) {
				this.x = random(-1, 1) * stageWidth * 1.5;
				this.y = random(-1, 1) * stageHeight * 1.5;
				this.z = random(-1, 1) * stageWidth * 1.5;
				// this.coordinates[index] = { x: this.x, y: this.y, z: this.z };
				// index += 1;
			}
			this.dots[i].angerX = this.x + random(-150, 150);
			this.dots[i].angerY = this.y + random(-150, 150);
			this.dots[i].angerZ = this.z + random(-150, 150);
		}
	}
}
