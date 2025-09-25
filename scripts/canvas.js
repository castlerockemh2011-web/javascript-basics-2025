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

let currentTimestamp = 0;

let box = {
	x: 0,
	y: 0,
	xDirection: 1,
	yDirection: 1,
	width: 10,
	draw: function () {
		CTX.fillStyle = "black";
		CTX.fillRect(this.x, this.y, this.width, this.width);
	},
	update: function () {
		let top = this.y;
		let bottom = this.y + this.width;
		let left = this.x;
		let right = this.x + this.width;

		if (top < 0) {
			// colliding with top
			this.yDirection = 1;
		} else if (bottom > HEIGHT) {
			// colliding with bottom
			this.yDirection = -1;
		}

		if (left < 0) {
			// colliding with left
			this.xDirection = 1;
		} else if (right > WIDTH) {
			// colliding with right
			this.xDirection = -1;
		}

		this.x += this.xDirection;
		this.y += this.yDirection;
	},
};

function drawLoop(timestamp) {
	CTX.clearRect(0, 0, WIDTH, HEIGHT);

	let elapsedTime = timestamp - currentTimestamp;
	currentTimestamp = timestamp;

	box.draw();
	box.update();

	// console.log(elapsedTime);
	requestAnimationFrame(drawLoop);
}

requestAnimationFrame(drawLoop);
