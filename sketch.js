//Namespacing
const Engine = Matter.Engine;
const World =  Matter.World;
const Bodies= Matter.Bodies;

var engine,world;
var box1,box2;
var ground
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
 
  box1 = new Box(220,10,70,70);
  box2 = new Box(200,70,70,70);
  ground = new Ground(400,390,800,20)
}

function draw() {
  background("black");  
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
}