const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world;
var bodies; 
var pillar1;
var pillar2;
var main;
var ground;

function setup() {
  createCanvas(500,500);
  engine=Engine.create();
  world = engine.world ;  
  pillar1 = new stone(370,220,30,340);
  World.add(world,pillar1);
  pillar2 = new stone(30,220,30,340);
  World.add(world,pillar2);
  main = new stone(200,280,200,200);
  World.add(world,main);
  ground = new stone(200,380,400,20);
  World.add(world,ground);
}

function draw() {
  background("blue"); 
  //triangle(100,100,50,50,200,200);
 triangle(15,45, 30, 20, 45, 45);
 triangle(355,45,370, 20, 385, 45);
 triangle(100,175, 200, 20, 300, 175);
  pillar2.display();
  pillar1.display();
  main.display();
  ground.display();
  
  drawSprites();
  
}
