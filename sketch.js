
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var part1,part2,part3;
var papper
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
part1 = new part(0,600,99957,10);
part2 = new  part(600,570,10,50);
part3 = new part (780,570,10,50);

papper = new ball(700,200,40);
}


function draw() {
 
  background("BLACK");
  Engine.update(engine)
 part1.display();
  part2.display();
  part3.display();

  papper.display();

  if(keyDown(UP_ARROW)){
	  papper.ballStop()
  }
 
 drawSprites();
}



