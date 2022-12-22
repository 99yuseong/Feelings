class Ball {
	constructor(dotGroup) {
		this.dotGroup = dotGroup;
		this.dotNum = dotGroup.dotNum;
		this.dots = dotGroup.dots;

		this.init();
	}

	init() {
		// let index = 0;
		// for (let k = 0; k < sideDotNum; k++) {
		// 	for (let j = 0; j < sideDotNum; j++) {
		// 		for (let i = 0; i < sideDotNum; i++) {
		// 			this.dots[index].cubeX =
		// 				(i / (sideDotNum - 1)) * stageWidth -
		// 				stageWidth / 2 +
		// 				random(-500, 500);
		// 			this.dots[index].cubeY =
		// 				(j / (sideDotNum - 1)) * stageHeight -
		// 				stageHeight / 2 +
		// 				random(-500, 500);
		// 			this.dots[index].cubeZ =
		// 				(k / (sideDotNum - 1)) * stageWidth -
		// 				stageWidth * 1.5 +
		// 				random(-500, 500);
		// 			index += 1;
		// 		}
		// 	}
		// }
		let index = 0;
		let bump = 0.2;
		let theta = 6;
		let phy = 5;

		for (let i = 0; i < 180; i += 180 / Math.sqrt(this.dotNum)) {
			for (let j = 0; j < 360; j += 360 / Math.sqrt(this.dotNum)) {
				this.dots[index].ballX =
					(stageHeight / 3) *
					(1 +
						bump *
							sin((theta * i) / Math.PI) *
							sin((phy * j) / Math.PI)) *
					sin((1 * i) / Math.PI) *
					cos(j / Math.PI);

				this.dots[index].ballY =
					(stageHeight / 3) *
					(1 +
						bump *
							sin((theta * i) / Math.PI) *
							sin((phy * j) / Math.PI)) *
					sin((1 * i) / Math.PI) *
					sin(j / Math.PI);

				this.dots[index].ballZ =
					(stageHeight / 3) *
					(1 +
						bump *
							sin((theta * i) / Math.PI) *
							sin((phy * j) / Math.PI)) *
					cos((1 * i) / Math.PI);

				index += 1;
			}
		}
	}
}
