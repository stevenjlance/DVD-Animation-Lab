// Create your variables here


function setup(){
	createCanvas(800, 600);
  
  // Load the image.
  dvdImage = loadImage("https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387");

}

function draw(){
  background(220);

  // Reverse the direction of the logo if the image is past the right edge of the screen or past the left edge of the screen 
	
	

  // Reverse the direction of the logo if the image is past the top edge of the screen or past the bottom edge of the screen 


  // Move the shape by changing the values of x and y every time the draw loop runs



  // Draw the logo at the new position.
  image(dvdImage, 50, 50, 200, 150);
}