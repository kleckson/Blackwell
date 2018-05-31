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

	//var currentBackground = new Image(c.width, c.height);
	//currentBackground.onload = drawImage;


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

	function draw(){
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.drawImage(playerImage, pPosX, pPosY);
		requestAnimationFrame(draw);
	}


	function coolDownFunc(){
		
	}

	draw();
}