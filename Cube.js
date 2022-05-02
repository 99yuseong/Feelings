class Cube {
	constructor(dotGroup) {
		this.dotGroup = dotGroup;
		this.dotNum = dotGroup.dotNum;
		this.dots = dotGroup.dots;

		this.init();
	}

	init() {
		let index = 0;
		for (let k = 0; k < sideDotNum; k++) {
			for (let j = 0; j < sideDotNum; j++) {
				for (let i = 0; i < sideDotNum; i++) {
					this.dots[index].cubeX =
						(i / (sideDotNum - 1)) * sideLen -
						sideLen / 2 +
						random(-10, 10);
					this.dots[index].cubeY =
						(j / (sideDotNum - 1)) * sideLen -
						sideLen / 2 +
						random(-10, 10);
					this.dots[index].cubeZ =
						(k / (sideDotNum - 1)) * sideLen -
						sideLen / 2 +
						random(-10, 10);
					index += 1;
				}
			}
		}
	}
}
