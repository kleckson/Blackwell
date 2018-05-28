window.onload = function() {

	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

	var HEIGHT = 920;
	var WIDTH = 1280;

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

	var player = new Player(50, 80, 200, 200, 50)

}