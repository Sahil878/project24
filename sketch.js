
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var leftSideBin,rightSideBin,bottomSideBin
var ground, ball

/*function preload()
{
	
}*/

function setup() {
	createCanvas(800, 700);
	background(255)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	leftSideBin=new Dustbin(100,100,100,100)
	rightSideBin=new Dustbin(200,200,20,100)
	bottomSideBin=new Dustbin(300,300,200,20)

	ground = new Ground(400,600,800,50)

	ball = new Paper(200,550,20,options)


	Engine.run(engine);
	World.add(world,this.body)
	World.add(world,leftSideBin)
	World.add(world,rightSideBin)
	World.add(world,bottomSideBin)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  leftSideBin.display()
  rightSideBin.display()
  bottomSideBin.display()
  ground.display()
  ball.display()


}



