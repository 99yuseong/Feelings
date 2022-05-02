const cubeBtn = document.querySelector(".cube");
const waveBtn = document.querySelector(".wave");
const drawBtn = document.querySelector(".draw");

let gl;
let dotGroup;
let cube;
let wave;
let pixelRatio;
let stageWidth;
let stageHeight;

let sideDotNum;
let sideLen;

let drawingMode = false;

let curMode = "random";
let onRandom = true;
let onCube = false;
let onWave = false;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight, WEBGL);
	gl = drawingContext;

	pixelRatio = pixelDensity();

	dotGroup = new DotGroup(pow(10, 3));

	windowResized();

	createEasyCam();
}

function windowResized() {
	stageWidth = windowWidth * pixelRatio;
	stageHeight = windowHeight * pixelRatio;
	resizeCanvas(stageWidth / 2, stageHeight / 2);
	scale(pixelRatio, pixelRatio);

	dotGroup.resize(stageWidth, stageHeight);
}

function draw() {
	if (!drawingMode) {
		gl.clearColor(0.16, 0.33, 0.64, 0);
		gl.clear(gl.COLOR_BUFFER_BIT);
	}
	// createGraphics(500, 500, WEBGL);
	dotGroup.draw();
}

const modeChange = (mode) => {
	switch (curMode) {
		case "random":
			onRandom = !onRandom;
			break;
		case "cube":
			onCube = !onCube;
			break;
		case "wave":
			onWave = !onWave;
			break;
	}
	curMode = mode;
};

const changeToCube = () => {
	if (onCube) {
		onCube = !onCube;
		onRandom = !onRandom;
		curMode = "random";
	} else {
		onCube = !onCube;
		modeChange("cube");
	}
	if (!cube) {
		cube = new Cube(dotGroup);
	}
};

const changeToWave = () => {
	if (onWave) {
		onWave = !onWave;
		onRandom = !onRandom;
		curMode = "random";
	} else {
		onWave = !onWave;
		modeChange("wave");
	}
	if (!wave) {
		wave = new Wave(dotGroup);
	}
};

const OnDrawingMode = () => {
	drawingMode = !drawingMode;
};

cubeBtn.addEventListener("click", changeToCube);
waveBtn.addEventListener("click", changeToWave);
drawBtn.addEventListener("click", OnDrawingMode);
