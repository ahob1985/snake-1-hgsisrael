// Author:

// Global UI Variables
let canvasDiv;
let canvas;
let textDiv;
let textp;
let buttonDiv;
let resetButton;

// Global Game Variables
let snake;
let food;
let resolution;
let scaleWidth;
let scaleHeight;
let score;

function setup() {
  // Build the interface
canvasDiv - createDiv();
canvas = createCanvas(640, 480);
canvas.parent(canvasDiv);
textDiv = createDiv();
textP = createP();
textP.parent(textDiv);
buttonDiv = createDiv();
resetButton = createButton("Reset Game");
restButton.mousePressed(resetGame);
resetButton.parent(buttonDiv);
  // Set the resolution to 20. Play with this later if you want.
resolution = 20;
  // Scaled width and height are width / resolution, height / resolution
scaledWidth = floor(width / resolution);
scaledHeight = floor(height / resolution);
  // Set the game's framerate to 5 (or whatever you prefer)
  frameRate(5);
  // Call resetGame() to initialize everything else.
  resetGame();
}

function draw() {
  // Scale the canvas according to resolution, then refresh the background

  // Check if snake is eating the food

  // Draw the snake
snake.update();
snake.show();
  // Draw the food

  // Check for game over

}

function createFood() {

}

function keyPressed() {

}

function resetGame() {

}
