//@ts-check

/** @type { HTMLCanvasElement } */
//@ts-ignore This is an HTML Canvas
const CANVAS = document.getElementById("game-canvas");

/** @type { CanvasRenderingContext2D } */
//@ts-ignore is not null
const CTX = CANVAS.getContext("2d");

const HEIGHT = 600;
const WIDTH = 800;

CANVAS.height = HEIGHT;
CANVAS.width = WIDTH;

CTX.fillStyle = "black";
CTX.fillRect(0, 0, WIDTH, HEIGHT);

CTX.fillStyle = "red";
CTX.fillRect(50, 0, WIDTH, HEIGHT);

CTX.fillStyle = "purple";
CTX.arc(WIDTH / 2, HEIGHT / 2, 100, 0, 2 * Math.PI);
CTX.fill();

let currentTimestamp = 0;
let x = 0;
let y = 0;

function drawLoop(timestamp) {
	CTX.clearRect(0, 0, WIDTH, HEIGHT);

	let elapsedTime = timestamp - currentTimestamp;
	currentTimestamp = timestamp;

	CTX.fillStyle = "yellow";
	CTX.fillRect(x, y, 10, 10);

	// x = x + 1;
	// x += 1;
	x++; // add 1 to the current value of x
	y++;

	// console.log(elapsedTime);
	requestAnimationFrame(drawLoop);
}

requestAnimationFrame(drawLoop);
