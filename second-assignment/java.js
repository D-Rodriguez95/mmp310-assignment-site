var submit = document.getElementById("submit");

submit.onclick = function() {
var genre = document.getElementById("genre").value;
var type = document.getElementById("type").value;
var Game = document.getElementById("Game").value;
console.log(genre, type, Game);
var message = document.getElementById("message");
message.innerHTML = "So you like " + genre + " games hmm? And your favorite game is "
+ Game + "?";

}

var img;

		function preload() {
		img = loadImage("images/dank-sil.png");
		fontDank = loadFont("fonts/optimusprinceps/OptimusPrinceps.ttf");

	}

function setup() {
	
	createCanvas(640, 480);
    background("white");

}

	var speed = 0.05;
	var x = 50;
	var y = 270;
	var w = 100;
	var h = 30;
	var str1= "Filthy Casual";

function draw() {
	
	background("white");

push();
	
	fill("green");
	
	stroke("green");

	translate(width/2, height/2);
	rotate(frameCount * speed);

	image(img, -150, -162);
	textSize(100);
	textFont(fontDank);
	textAlign(CENTER);
	text(str1, 0, 0);
	
pop();	
	
}