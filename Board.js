class Board {
	constructor(dotGroup) {
		this.dotGroup = dotGroup;
		this.dotNum = dotGroup.dotNum;
		this.dots = dotGroup.dots;

		this.init();
	}

	init() {
		let index = 0;
		for (let i = 0; i < Math.sqrt(this.dotNum); i++) {
			for (let j = 0; j < Math.sqrt(this.dotNum); j++) {
				this.dots[index].boardX =
					(i / (Math.sqrt(this.dotNum) - 1)) * stageWidth * 2 -
					(stageWidth * 2) / 2 +
					floor(random(-100, 100));
				this.dots[index].boardY =
					(noise(i, j, frameCount * 0.05) * stageHeight) / 10;
				this.dots[index].boardZ =
					(j / (Math.sqrt(this.dotNum) - 1)) * stageWidth * 2 -
					(stageWidth * 2) / 2 +
					floor(random(-100, 100));
				index += 1;
			}
		}
		// let index = 0;
		// let bump = 1;
		// let theta = 1;
		// let phy = 1;
		// for (let i = 90; i < -90; i = 180 / Math.sqrt(this.dotNum)) {
		// 	for (let j = -180; j < 180; j += 360 / Math.sqrt(this.dotNum)) {
		// 		this.dots[index].boardX = stageHeight * cos(i / Math.PI);
		// 		this.dots[index].boardY =
		// 			stageHeight * sin(i / Math.PI) * sin(j / Math.PI);
		// 		this.dots[index].boardZ =
		// 			stageHeight * sin(i / Math.PI) * cos(j / Math.PI);
		// 		index += 1;
		// 	}
		// }
		// for (let k = 0; k < sideDotNum; k++) {
		// 	for (let j = 0; j < sideDotNum; j++) {
		// 		for (let i = 0; i < sideDotNum; i++) {
		// 			this.dots[index].cubeX =
		// 				(i / (Math.sqrt(this.dotNum) - 1)) * stageWidth -
		// 				stageWidth / 2 +
		// 				random(-10, 10);
		// 			this.dots[index].cubeY =
		// 				(j / ((math.sqrt(this.dotNum) - 1)) * stageWidth -
		// 				stageWidth / 2 +
		// 				random(-10, 10);
		// 			this.dots[index].cubeZ =
		// 				(k / (sideDotNum - 1)) * sideLen -
		// 				sideLen / 2 +
		// 				random(-10, 10);
		// 			index += 1;
		// 		}
		// 	}
		// }
	}
}
