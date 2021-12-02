// Create your variables here
var x = 50
var y = 50
var speedY = 1
var speedX = 1

function setup(){
	createCanvas(800, 600);
  
  // Load the image.
  dvdImage = loadImage("https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387");

}

function draw(){
  background(220);

  // reverse the direction of the logo if the image is past the right edge of the screen or past the left edge of the screen 
	x += speedX
	y += speedY
	if(x > width - 200 || x < 0){
		speedX *= -1
		tint(random(0,255), random(0,255), random(0,255))
	}
	if(y > height - 150 || y < 0){
		speedY *= -1
		tint(random(0,255), random(0,255), random(0,255))

	}

  // reverse the direction of the logo if the image is past the top edge of the screen or past the bottom edge of the screen 


  // Move the shape by changing the values of x and y every time the draw loop runs

  // Draw the logo at the new position.
  image(dvdImage, x, y, 200, 150);
}