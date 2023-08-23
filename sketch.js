
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Matter.Bodies.circle(100,50,20,ball_options,0);
	World.add(world,ball);

	ground = new Ground(200,700,10000,10);
	leftside = new Ground(850,700,10,130);
	rightside = new Ground(1120,700,10,130)

	var ball_options={
		isStatic:false,
		resttitution:0.3,
		friction:1,
		density:1.2
	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  ground.display();
  leftside.display();
  rightside.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.1,y:0});
	}
}

