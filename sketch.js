var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var car1, car2, car3, car4;
var cars;
var car1Image, car2Image, car3Image, car4Image;

var leaderboard;

function preload(){
  backgroundImage = loadImage("Background.jpeg");
  car1Image = loadImage("car1.png");
  car2Image = loadImage("car2.png");
  car3Image = loadImage("car3.png");
  car4Image = loadImage("car4.png");
  track = loadImage("track.jpeg");
  font = loadFont("Press_Start_2P/PressStart2P-Regular.ttf");
}


function setup(){
  canvas = createCanvas(displayWidth-70, displayHeight-70);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(backgroundImage);
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
