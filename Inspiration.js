class Inspiration {
	constructor(dotGroup) {
		this.dotGroup = dotGroup;
		this.dotNum = dotGroup.dotNum;
		this.dots = dotGroup.dots;

		this.init();
	}

	init() {
		let ranX = random(0, 1);
		let ranY = random(0, 0.5);
		let ranZ = random(-1.5, -1);
		let ranValue = 0.01;
		for (let i = 0; i < this.dotNum; i++) {
			if (i % 2 == 0) {
				ranX = random(0, 1.5);
				ranY = random(ranX - random(0, 0.1), -random(0, 0.1) + ranX);
				ranZ = random(-1.5, -1.2);
				ranValue = random(0, 0.001 * i);
			} else {
				ranX = random(-1.5, 0);
				ranY = random(ranX + random(0, 0.1), random(0, 0.1) + ranX);
				ranZ = random(-1.5, -1.2);
				ranValue = random(0, 0.001 * i);
			}
			this.dots[i].inspirationX = -ranX * stageWidth;
			this.dots[i].inspirationY = ranY * stageHeight;
			this.dots[i].inspirationZ = ranZ * stageWidth;
			this.dots[i].randomValue = ranValue;
		}
	}
}
