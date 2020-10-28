
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    //Create the Bodies Here.

	paper = new Paper(200,400,50,50);
	dustbin = new Box(700,680,100,100);
	wall1 = new Ground(655,630,5,100);
	wall2 = new Ground(745,630,5,100);
	ground = new Ground(400,690,800,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ground.display();
  wall1.display();
  wall2.display();
  dustbin.display();
  paper.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
      Matter.Body.applyForce(paper.body,paper.body.position,{x:120,y:-120})
	}
}


