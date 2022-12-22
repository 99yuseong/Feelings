const inspirationBtn = document.querySelector(".inspiration");
const cubeBtn = document.querySelector(".cube");
const ballBtn = document.querySelector(".ball");
const thinkBtn = document.querySelector(".think");
const boardBtn = document.querySelector(".board");
const drawBtn = document.querySelector(".draw");

let gl;
let dotGroup;
let cube;
let ball;
let inspiration;
let think;
let base;
let board;

let pixelRatio;
let stageWidth;
let stageHeight;

let sideDotNum;
let sideLen;

let isMouseClicked = false;

let drawingMode = false;

let curMode = "base";
let onBase = true;
let onInspiration = false;
let onCube = false;
let onBall = false;
let onThink = false;
let onBoard = false;

function preload() {
	Roboto = loadFont("Assets/Roboto/Roboto-Black.ttf");
	data = loadJSON("Assets/keyword.json");
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight, WEBGL);
	gl = drawingContext;

	pixelRatio = pixelDensity();

	dotGroup = new DotGroup(2025);

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
		gl.clearColor(0.1, 0.1, 0.1, 0);
		gl.clear(gl.COLOR_BUFFER_BIT);
	}
	// createGraphics(500, 500, WEBGL);
	dotGroup.draw();
}

const mouseClicked = () => {
	console.log(mouseX);
	console.log(mouseY);
};

const modeChange = (mode) => {
	switch (curMode) {
		case "cube":
			onCube = !onCube;
			break;
		case "ball":
			onBall = !onBall;
			break;
		case "inspiration":
			onInspiration = !onInspiration;
			break;
		case "base":
			onBase = !onBase;
			break;
		case "think":
			onThink = !onThink;
			break;
		case "board":
			onBoard = !onBoard;
			break;
	}
	curMode = mode;
};

const changeToInspiration = () => {
	if (onInspiration) {
		onInspiration = !onInspiration;
		onBase = !onBase;
		curMode = "base";
	} else {
		onInspiration = !onInspiration;
		modeChange("inspiration");
	}
	if (!inspiration) {
		inspiration = new Inspiration(dotGroup);
	}
};

const changeToCube = () => {
	if (onCube) {
		onCube = !onCube;
		onBase = !onBase;
		curMode = "base";
	} else {
		onCube = !onCube;
		modeChange("cube");
	}
	if (!cube) {
		cube = new Cube(dotGroup);
	}
};

const changeToBall = () => {
	if (onBall) {
		onBall = !onBall;
		onBase = !onBase;
		curMode = "base";
	} else {
		onBall = !onBall;
		modeChange("ball");
	}
	if (!ball) {
		ball = new Ball(dotGroup);
	}
};

const changeToThink = () => {
	if (onThink) {
		onThink = !onThink;
		onBase = !onBase;
		curMode = "base";
	} else {
		onThink = !onThink;
		modeChange("think");
	}
	if (!think) {
		think = new Think(dotGroup);
	}
};

const changeToBoard = () => {
	if (onBoard) {
		onBoard = !onBoard;
		onBase = !onBase;
		curMode = "base";
	} else {
		onBoard = !onBoard;
		modeChange("board");
	}
	if (!board) {
		board = new Board(dotGroup);
	}
};

const OnDrawingMode = () => {
	drawingMode = !drawingMode;
};

drawBtn.addEventListener("click", OnDrawingMode);
inspirationBtn.addEventListener("click", changeToInspiration);
cubeBtn.addEventListener("click", changeToCube);
ballBtn.addEventListener("click", changeToBall);
thinkBtn.addEventListener("click", changeToThink);
boardBtn.addEventListener("click", changeToBoard);
