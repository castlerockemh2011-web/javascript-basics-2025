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

class Box {
	constructor(x, y, color) {
		this.x = x;
		this.y = y;
		this.color = color;

		this.speed = 10;
		this.width = 50;
		this.height = this.width;

		this.xDirection = 1;
		this.yDirection = 1;
	}

	draw() {
		CTX.fillStyle = this.color;
		CTX.fillRect(this.x, this.y, this.width, this.height);
	}

	update() {
		let top = this.y;
		let bottom = this.y + this.width;
		let left = this.x;
		let right = this.x + this.height;

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

		this.x += this.xDirection * this.speed;
		this.y += this.yDirection * this.speed;
	}
}

let box1 = new Box(50, 50, "cyan");
let box2 = new Box(100, 200, "blue");

let currentTimestamp = 0;

function drawLoop(timestamp) {
	CTX.clearRect(0, 0, WIDTH, HEIGHT);

	let elapsedTime = timestamp - currentTimestamp;
	currentTimestamp = timestamp;

	box1.draw();
	box1.update();
	box2.draw();
	box2.update();

	// console.log(elapsedTime);
	requestAnimationFrame(drawLoop);
}

requestAnimationFrame(drawLoop);
