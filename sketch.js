
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
const Body = Matter.Body;
var Bob1,Bob2,Bob3,Bob4,Bob5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    Bob1=new BOB(200,600,50)
	Bob2=new BOB(300,600,50)
	Bob3=new BOB(400,600,50)
	Bob4=new BOB(500,600,50)
	Bob5=new BOB(600,600,50)
	roof=new ROOF(400,100,550,20)
  roof1=new ROOF(200,100,50,20)
  roof2=new ROOF(300,100,50,20)
  roof3=new ROOF(400,100,50,20)
  roof4=new ROOF(500,100,50,20)
  roof5=new ROOF(600,100,50,20)
  chain1=new Chain(Bob1.body,roof1.body)
  chain2=new Chain(Bob2.body,roof2.body)
  chain3=new Chain(Bob3.body,roof3.body)
  chain4=new Chain(Bob4.body,roof4.body)
  chain5=new Chain(Bob5.body,roof5.body)
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  roof.display();
  drawSprites();
 //rope1.display()
 roof1.display();
 roof2.display();
 roof3.display();
 roof4.display();
 roof5.display();
 chain1.display();
 chain2.display();
 chain3.display();
 chain4.display();
 chain5.display();

}



