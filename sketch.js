var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var finishedPlayers = 0
var passedFinish

var form, player, game;

var cars, car1, car2, car3, car4;

var bronze, silver, gold

var car1Img, car2Img, car3Img, car4Img
var groundImg, trackImg

function preload() {

    bronze = loadImage("images/bronze.png")
    silver = loadImage("images/silver.png");
    gold = loadImage("images/gold.png")
    car1Img = loadImage("images/car1.png")
    car2Img = loadImage("images/car2.png")
    car3Img = loadImage("images/car3.png")
    car4Img = loadImage("images/car4.png")
    groundImg = loadImage("images/ground.png")
    trackImg = loadImage("images/track.jpg")

}

function setup() {

  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw() {
    background(220, 220, 250);

  if(playerCount === 4 && finishedPlayers === 0){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

    if (finishedPlayers === 4) {
        game.update(2)
    }

    if (gameState === 2 && finishedPlayers === 4) {

        game.displayRanks();
    }

}
