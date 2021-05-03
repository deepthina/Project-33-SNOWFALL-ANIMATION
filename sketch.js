const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bckImage;
var boy, boyAnimation;
var music;

var engine, world;


var snows = [];
var maxSnows = 1000;

var randomx, randomy;

function preload() {
  bckImage = loadImage("images/snow2.jpg");
  boyAnimation = loadAnimation("images/Run1.png", "images/Run2.png", "images/Run3.png", "images/Run4.png");

  music = loadSound("sound/bensound-sweet.mp3")
}

function setup() {
  createCanvas(800, 600);

  boy = createSprite(200, 550);
  boy.addAnimation("boy", boyAnimation);
  boy.scale = 0.2;

  music.play();

  engine = Engine.create();
  world = engine.world;


  for (var i = 0; i < maxSnows; i++) {
    snows.push(new snow(random(0, 600), random(0, 800), 20));
  }



}

function draw() {
  background(bckImage);

  Engine.update(engine);

  boy.x = mouseX;


  for (var i = 0; i < maxSnows; i++) {
    snows[i].display();

  }


  drawSprites();
}