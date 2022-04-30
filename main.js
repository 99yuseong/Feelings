const freezeBtn = document.querySelector(".freeze");
const waveBtn = document.querySelector(".wave");
const flowBtn = document.querySelector(".flow");

let gl;
let dotGroup;
let wave;
let pixelRatio;
let stageWidth;
let stageHeight;
let onWave = false;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight, WEBGL);
	gl = drawingContext;

	pixelRatio = pixelDensity();

	dotGroup = new DotGroup(300);

	windowResized();

	createEasyCam();
}

function windowResized() {
	stageWidth = windowWidth * pixelRatio;
	stageHeight = windowHeight * pixelRatio;
	resizeCanvas(stageWidth / 2, stageHeight / 2);
	scale(pixelRatio, pixelRatio);

	dotGroup.resize(stageWidth, stageHeight);
	if (onWave) {
		wave.resize();
	}
}

function draw() {
	background(41, 84, 163);
	dotGroup.draw();
	if (onWave) {
		wave.draw();
	}
}

const changeToFreeze = () => {
	console.log("Freeze");
};

const changeToWave = () => {
	wave = new Wave(dotGroup);
	onWave = !onWave;
};

const changeToFlow = () => {
	console.log("Flow");
};

freezeBtn.addEventListener("click", changeToFreeze);
waveBtn.addEventListener("click", changeToWave);
flowBtn.addEventListener("click", changeToFlow);
