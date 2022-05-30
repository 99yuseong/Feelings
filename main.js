const cubeBtn = document.querySelector(".cube");
const tornadoBtn = document.querySelector(".tornado");
const happyBtn = document.querySelector(".happy");
const angerBtn = document.querySelector(".anger");
const sadBtn = document.querySelector(".sad");
const fearBtn = document.querySelector(".fear");
const inspirationBtn = document.querySelector(".inspiration");
const drawBtn = document.querySelector(".draw");

let gl;
let dotGroup;
let cube;
let happy;
let tornado;
let anger;
let sad;
let fear;
let inspiration;

let pixelRatio;
let stageWidth;
let stageHeight;

let sideDotNum;
let sideLen;

let drawingMode = false;

let curMode = "random";
let onRandom = true;
let onCube = false;
let onTornado = false;
let onHappy = false;
let onAnger = false;
let onSad = false;
let onFear = false;
let onInspiration = false;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight, WEBGL);
	gl = drawingContext;

	pixelRatio = pixelDensity();

	dotGroup = new DotGroup(pow(5, 3));

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
		// gl.clearColor(0.16, 0.33, 0.64, 0);
		gl.clearColor(0.1, 0.1, 0.1, 0);
		// gl.clearColor(0.72, 0.91, 0.58, 1);
		// gl.clearColor(0.6, 0.91, 0.61, 1);
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
		case "tornado":
			onTornado = !onTornado;
			break;
		case "happy":
			onHappy = !onHappy;
			break;
		case "anger":
			onAnger = !onAnger;
			break;
		case "sad":
			onSad = !onSad;
			break;
		case "fear":
			onFear = !onFear;
			break;
		case "inspiration":
			onInspiration = !onInspiration;
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

const changeToHappy = () => {
	if (onHappy) {
		onHappy = !onHappy;
		onRandom = !onRandom;
		curMode = "random";
	} else {
		onHappy = !onHappy;
		modeChange("happy");
	}
	if (!happy) {
		happy = new Happy(dotGroup);
	}
};

const changeToSad = () => {
	if (onSad) {
		onSad = !onSad;
		onRandom = !onRandom;
		curMode = "random";
	} else {
		onSad = !onSad;
		modeChange("sad");
	}
	if (!sad) {
		sad = new Sad(dotGroup);
	}
};

const changeToTornado = () => {
	if (onTornado) {
		onTornado = !onTornado;
		onRandom = !onRandom;
		curMode = "random";
	} else {
		onTornado = !onTornado;
		modeChange("tornado");
	}
	if (!tornado) {
		tornado = new Tornado(dotGroup);
	}
};

const changeToAnger = () => {
	if (onAnger) {
		onAnger = !onAnger;
		onRandom = !onRandom;
		curMode = "random";
	} else {
		onAnger = !onAnger;
		modeChange("anger");
	}
	if (!anger) {
		anger = new Anger(dotGroup);
	}
};

const changeToFear = () => {
	if (onFear) {
		onFear = !onFear;
		onRandom = !onRandom;
		curMode = "random";
	} else {
		onFear = !onFear;
		modeChange("fear");
	}
	if (!fear) {
		fear = new Fear(dotGroup);
	}
};

const changeToInspiration = () => {
	if (onInspiration) {
		onInspiration = !onInspiration;
		onRandom = !onRandom;
		curMode = "random";
	} else {
		onInspiration = !onInspiration;
		modeChange("inspiration");
	}
	if (!inspiration) {
		inspiration = new Inspiration(dotGroup);
	}
};

const OnDrawingMode = () => {
	drawingMode = !drawingMode;
};

drawBtn.addEventListener("click", OnDrawingMode);

cubeBtn.addEventListener("click", changeToCube);
tornadoBtn.addEventListener("click", changeToTornado);
happyBtn.addEventListener("click", changeToHappy);
angerBtn.addEventListener("click", changeToAnger);
sadBtn.addEventListener("click", changeToSad);
fearBtn.addEventListener("click", changeToFear);
inspirationBtn.addEventListener("click", changeToInspiration);
