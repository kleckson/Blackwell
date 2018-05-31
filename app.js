window.onload = function() {

	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");


	document.addEventListener('keydown', keyDownHandler, false);
	document.addEventListener('keyup', keyUpHandler, false);

	var upPressed = false;

	var pPosX = 100;
	var pPosY = 500;

	var playerImage = new Image(50, 80);
	playerImage.onload = drawImage;
	playerImage.src = "img/player.png";


	function drawImage(){		
		ctx.drawImage(this, pPosX, pPosY);
	}

	var timeLapsed = new Date();

	function keyDownHandler(event){
		var dt = Date.now();
		if ((dt - timeLapsed) > 300){
			if (event.keyCode == 87) {
				pPosY -= 64;
			}
			else if (event.keyCode == 83) {
				pPosY += 64;
			}
			if (event.keyCode == 68) {
				pPosX += 64;
			}
			else if (event.keyCode == 65) {
				pPosX -= 64;
			}
			timeLapsed = new Date();
		}
		
	}

	function keyUpHandler(event){
		if (event.keyCode == 87) {
			upPressed = false;
		}
	}

<<<<<<< HEAD
	function draw(){
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.drawImage(playerImage, pPosX, pPosY);
		requestAnimationFrame(draw);
	}


	function coolDownFunc(){
		
	}

	draw();
=======
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
		
>>>>>>> 36480d3ac537f3f0e38b19a0d0fd7eacc706dddb
}