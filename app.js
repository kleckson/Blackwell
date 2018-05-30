window.onload = function() {

	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

	var HEIGHT = 920;
	var WIDTH = 1280;

	document.addEventListener('keydown', keyDownHandler, false);
	document.addEventListener('keyup', keyUpHandler, false);

	var rightPressed = false;
	var leftPressed = false;
	var upPressed = false;
	var downPressed = false;

	var playerImage = new Image(50, 80);
	playerImage.onload = drawImage;
	playerImage.src = "img/player.png";

	function drawImage(){		
		ctx.drawImage(this, player.posX, player.posY);
	}


	class Player {
		constructor(width, height, posX, posY, health){
			this.width = width;
			this.height = height;
			this.health = health;
			this.posX = posX;
			this.posY = posY;
		}		
	}

	function keyDownHandler(event){
			if (event.keyCode == 87) {
				upPressed = true;
			}
			else if (event.keyCode == 83) {
				downPressed = true;
			}
			if (event.keyCode == 68) {
				rightPressed = true;
			}
			else if (event.keyCode == 65) {
				leftPressed = true;
			}
			console.log(player.posX);
		}

	function keyUpHandler(event){
		if (event.keyCode == 87) {
			upPressed = false;
		}
		else if (event.keyCode == 83) {
			downPressed = false;
		}
		if (event.keyCode == 68) {
			rightPressed = false;
		}
		else if (event.keyCode == 65) {
			leftPressed = false;
		}
	}

	var mapImage = new Image(2000, 5000);
	mapImage.onload = drawImage;
	mapImage.src = "img/planes concept.png";

	
	
	

	var lastFrameTimeMs = 0, maxFPS = 60;

	var lastUpdate = Date.now();
	var myInterval = setInterval(tick, 0);


	function tick() {
	    var now = Date.now();
	    var dt = now - lastUpdate;
	    lastUpdate = now;

	    update(dt);
	    draw(dt);
	}

	function draw(dt){
			ctx.clearRect(0, 0, WIDTH, HEIGHT);
			ctx.drawImage(mapImage, 0, 0);
			ctx.drawImage(playerImage, player.posX, player.posY);
			requestAnimationFrame(draw);
		}

	function update(dt) {
		playerMovement();
		draw();
	}


	/*function mainLoop(timestamp){
		if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {
			requestAnimationFrame(mainLoop);
			return;
		}
		lastFrameTimeMs = timestamp;

		playerMovement();
		
		requestAnimationFrame(mainLoop);
	}*/

	function playerMovement() {
		if(rightPressed){
			player.posX += 64;
		}
		else if (leftPressed) {
			player.posX -= 64;
		}
		if (downPressed) {
			player.posY += 64;
		}
		else if (upPressed) {
			player.posY -= 64;
		}
	}


	var player = new Player(50, 80, c.width / 2, c.height / 2, 50);
	
	update();
		
}